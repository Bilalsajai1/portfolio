import { NextResponse } from "next/server"

// Simple in-memory rate limit (per Vercel/instance). Consider moving to KV/Upstash for production.
const WINDOW_MS = 60_000
const MAX_REQ = 5
const ipHits = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipHits.get(ip)
  if (!entry) {
    ipHits.set(ip, { count: 1, windowStart: now })
    return false
  }
  if (now - entry.windowStart > WINDOW_MS) {
    ipHits.set(ip, { count: 1, windowStart: now })
    return false
  }
  entry.count += 1
  return entry.count > MAX_REQ
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
    }

    const body = await req.json()
    const { name, email, subject, message, website } = body || {}

    // Honeypot: should be empty
    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // Send via EmailJS REST API using server-side secret
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const apiKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
      sent_date: new Date().toLocaleString("fr-FR"),
      to_email: "contact.sajbilal@gmail.com",
    }

    const resp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: "server", // not required when using private key
        template_params: templateParams,
      }),
    })

    if (!resp.ok) {
      const text = await resp.text()
      return NextResponse.json({ error: "Email send failed", details: text }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Unknown error" }, { status: 500 })
  }
}


