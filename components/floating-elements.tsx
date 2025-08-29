"use client"

import { useEffect, useState } from "react"
import { Brain, Code, Database, Cpu, Zap, Sparkles } from "lucide-react"

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      icon: any
      x: number
      y: number
      delay: number
      duration: number
      size: number
    }>
  >([])

  const icons = [Brain, Code, Database, Cpu, Zap, Sparkles]

  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      icon: icons[i],
      x: Math.random() * 90 + 5, // Keep elements away from edges
      y: Math.random() * 90 + 5,
      delay: i * 0.5,
      duration: 6 + Math.random() * 4, // Random duration between 6-10s
      size: 6 + Math.random() * 4, // Random size between 6-10
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <div
            key={element.id}
            className="absolute opacity-10 dark:opacity-20 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <Icon
              className="text-blue-500 hover:text-purple-500 transition-colors duration-500"
              style={{ width: `${element.size * 4}px`, height: `${element.size * 4}px` }}
            />
          </div>
        )
      })}
    </div>
  )
}
