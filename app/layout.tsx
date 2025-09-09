import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bilalsajai.me"),
  title: {
    default: "Bilal SAJAI - Ingénieur IA & Systèmes Distribués",
    template: "%s | Bilal SAJAI",
  },
  description:
    "Portfolio de Bilal SAJAI, Ingénieur en Intelligence Artificielle, Machine Learning, Deep Learning et Systèmes Distribués.",
  keywords: [
    "Bilal Sajai",
    "Ingénieur IA",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Systèmes distribués",
    "Full-stack",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Bilal SAJAI",
    title: "Bilal SAJAI - Ingénieur IA & Systèmes Distribués",
    description:
      "Portfolio de Bilal SAJAI, Ingénieur en Intelligence Artificielle, Machine Learning, Deep Learning et Systèmes Distribués.",
    images: [
      {
        url: "/images/bilal-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Bilal SAJAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal SAJAI - Ingénieur IA & Systèmes Distribués",
    description:
      "Portfolio de Bilal SAJAI, Ingénieur en Intelligence Artificielle, Machine Learning, Deep Learning et Systèmes Distribués.",
    images: ["/images/bilal-photo.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Script
          id="jsonld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bilal SAJAI",
              url: "https://bilal-sajai-portfolio.example/",
              image: "/images/bilal-photo.jpeg",
              jobTitle: "Ingénieur IA & Systèmes Distribués",
              sameAs: [
                "mailto:contact.sajbilal@gmail.com",
                "https://www.linkedin.com/in/bilal-sajai-639324293/",
                "https://github.com/Bilalsajai1",
              ],
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
