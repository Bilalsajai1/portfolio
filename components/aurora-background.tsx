"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      el.style.animation = "none"
      return
    }

    el.style.animation = "auroraShift 16s ease-in-out infinite"
  }, [prefersReducedMotion])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft noise overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{
        backgroundImage:
          "radial-gradient(1px 1px at 10px 20px, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(1px 1px at 30px 40px, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "64px 64px, 64px 64px",
      }} />

      {/* Aurora blobs */}
      <div ref={ref} className="absolute -inset-32 blur-[60px] will-change-transform">
        <div className="aurora-blob bg-aurora-cyan" />
        <div className="aurora-blob bg-aurora-magenta" />
        <div className="aurora-blob bg-aurora-purple" />
        <div className="aurora-blob bg-aurora-amber" />
      </div>
    </div>
  )
}


