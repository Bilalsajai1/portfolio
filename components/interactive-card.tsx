"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  glowEffect?: boolean
}

export function InteractiveCard({ children, className = "", glowEffect = false }: InteractiveCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl card-hover ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse follow effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none opacity-20 transition-opacity duration-300 rounded-full"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Glow effect */}
      {glowEffect && isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg animate-pulse" />
      )}

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
      </div>

      <CardContent className="relative z-10">{children}</CardContent>
    </Card>
  )
}
