"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const waves: Wave[] = []
    const bubbles: Bubble[] = []
    const currentTheme = theme === "system" ? resolvedTheme : theme

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = currentTheme === "dark" ? (Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6") : "#3b82f6"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    class Wave {
      x: number
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
      color: string
      opacity: number
      width: number

      constructor() {
        this.x = 0
        this.y = Math.random() * canvas.height
        this.amplitude = Math.random() * 50 + 20
        this.frequency = Math.random() * 0.02 + 0.01
        this.phase = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.02 + 0.01
        this.color = "#3b82f6"
        this.opacity = 0.1
        this.width = Math.random() * 2 + 1
      }

      update() {
        this.phase += this.speed
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.width
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 5) {
          const y = this.y + Math.sin(x * this.frequency + this.phase) * this.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
        ctx.restore()
      }
    }

    class Bubble {
      x: number
      y: number
      size: number
      speedY: number
      color: string
      opacity: number
      wobble: number
      wobbleSpeed: number
      wobbleSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = Math.random() * 15 + 5
        this.speedY = Math.random() * 1 + 0.5
        this.color = "#3b82f6"
        this.opacity = Math.random() * 0.3 + 0.1
        this.wobble = 0
        this.wobbleSpeed = Math.random() * 0.05 + 0.01
        this.wobbleSize = Math.random() * 3 + 1
      }

      update() {
        this.y -= this.speedY
        this.wobble += this.wobbleSpeed

        // Reset bubble when it goes off screen
        if (this.y < -this.size * 2) {
          this.y = canvas.height + this.size
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        const wobbleX = Math.sin(this.wobble) * this.wobbleSize

        ctx.save()
        ctx.globalAlpha = this.opacity

        // Bubble
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x + wobbleX, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.beginPath()
        ctx.arc(this.x + wobbleX - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      particles.length = 0
      waves.length = 0
      bubbles.length = 0

      // Add particles for both themes
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle())
      }

      // Add waves only for light theme
      if (currentTheme === "light") {
        for (let i = 0; i < 5; i++) {
          waves.push(new Wave())
        }

        // Add bubbles only for light theme
        for (let i = 0; i < 20; i++) {
          bubbles.push(new Bubble())
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves (light theme only)
      if (currentTheme === "light") {
        waves.forEach((wave) => {
          wave.update()
          wave.draw()
        })

        // Draw bubbles (light theme only)
        bubbles.forEach((bubble) => {
          bubble.update()
          bubble.draw()
        })
      }

      // Draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections between particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * (currentTheme === "light" ? 0.15 : 0.1)
            ctx.strokeStyle = currentTheme === "light" ? "#3b82f6" : "#8b5cf6"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    init()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      init()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    />
  )
}
