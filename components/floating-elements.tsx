"use client"

import { useEffect, useState } from "react"
import { Brain, Code, Database, Cpu, Zap, Sparkles } from "lucide-react"

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; icon: any; x: number; y: number; delay: number }>>([])

  const icons = [Brain, Code, Database, Cpu, Zap, Sparkles]

  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      icon: icons[i],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.5,
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
            className="absolute animate-float opacity-10 dark:opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <Icon className="w-8 h-8 text-blue-500" />
          </div>
        )
      })}
    </div>
  )
}
