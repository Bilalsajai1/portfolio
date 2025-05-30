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
    const stars: Star[] = []
    const currentTheme = theme === "system" ? resolvedTheme : theme

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulse: number
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 1
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.opacity = Math.random() * 0.6 + 0.2
        this.color = currentTheme === "dark" ? (Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6") : "#3b82f6"
        this.pulse = 0
        this.pulseSpeed = Math.random() * 0.02 + 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        const pulseSize = this.size + Math.sin(this.pulse) * 1
        ctx.save()
        ctx.globalAlpha = this.opacity + Math.sin(this.pulse) * 0.2

        // Glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10

        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
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
        this.amplitude = Math.random() * 60 + 30
        this.frequency = Math.random() * 0.02 + 0.01
        this.phase = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.03 + 0.01
        this.color = "#3b82f6"
        this.opacity = Math.random() * 0.15 + 0.05
        this.width = Math.random() * 3 + 1
      }

      update() {
        this.phase += this.speed
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.width
        ctx.shadowColor = this.color
        ctx.shadowBlur = 5
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 3) {
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
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = Math.random() * 20 + 8
        this.speedY = Math.random() * 1.5 + 0.5
        this.color = "#3b82f6"
        this.opacity = Math.random() * 0.4 + 0.1
        this.wobble = 0
        this.wobbleSpeed = Math.random() * 0.05 + 0.02
        this.wobbleSize = Math.random() * 4 + 2
        this.rotation = 0
        this.rotationSpeed = Math.random() * 0.02 + 0.01
      }

      update() {
        this.y -= this.speedY
        this.wobble += this.wobbleSpeed
        this.rotation += this.rotationSpeed

        if (this.y < -this.size * 2) {
          this.y = canvas.height + this.size
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        const wobbleX = Math.sin(this.wobble) * this.wobbleSize
        const wobbleY = Math.cos(this.wobble * 0.5) * this.wobbleSize * 0.5

        ctx.save()
        ctx.translate(this.x + wobbleX, this.y + wobbleY)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = this.opacity

        // Main bubble with gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size)
        gradient.addColorStop(0, this.color + "40")
        gradient.addColorStop(0.7, this.color + "20")
        gradient.addColorStop(1, this.color + "00")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
        ctx.beginPath()
        ctx.arc(-this.size * 0.3, -this.size * 0.3, this.size * 0.3, 0, Math.PI * 2)
        ctx.fill()

        // Inner glow
        ctx.strokeStyle = this.color + "60"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.8, 0, Math.PI * 2)
        ctx.stroke()

        ctx.restore()
      }
    }

    class Star {
      x: number
      y: number
      size: number
      opacity: number
      twinkle: number
      twinkleSpeed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.8 + 0.2
        this.twinkle = 0
        this.twinkleSpeed = Math.random() * 0.03 + 0.01
        this.color = Math.random() > 0.5 ? "#ffffff" : "#8b5cf6"
      }

      update() {
        this.twinkle += this.twinkleSpeed
      }

      draw() {
        const twinkleOpacity = this.opacity + Math.sin(this.twinkle) * 0.3

        ctx.save()
        ctx.globalAlpha = twinkleOpacity
        ctx.fillStyle = this.color
        ctx.shadowColor = this.color
        ctx.shadowBlur = 8

        // Draw star shape
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5 - Math.PI / 2
          const x = this.x + Math.cos(angle) * this.size
          const y = this.y + Math.sin(angle) * this.size
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)

          const innerAngle = ((i + 0.5) * Math.PI * 2) / 5 - Math.PI / 2
          const innerX = this.x + Math.cos(innerAngle) * this.size * 0.5
          const innerY = this.y + Math.sin(innerAngle) * this.size * 0.5
          ctx.lineTo(innerX, innerY)
        }
        ctx.closePath()
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
      stars.length = 0

      // Add enhanced particles for both themes
      for (let i = 0; i < 60; i++) {
        particles.push(new Particle())
      }

      if (currentTheme === "light") {
        // Add more waves for light theme
        for (let i = 0; i < 6; i++) {
          waves.push(new Wave())
        }

        // Add more bubbles for light theme
        for (let i = 0; i < 25; i++) {
          bubbles.push(new Bubble())
        }
      } else {
        // Add stars for dark theme
        for (let i = 0; i < 30; i++) {
          stars.push(new Star())
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (currentTheme === "light") {
        // Draw waves
        waves.forEach((wave) => {
          wave.update()
          wave.draw()
        })

        // Draw bubbles
        bubbles.forEach((bubble) => {
          bubble.update()
          bubble.draw()
        })
      } else {
        // Draw stars for dark theme
        stars.forEach((star) => {
          star.update()
          star.draw()
        })
      }

      // Draw enhanced particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw enhanced connections between particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            const opacity = ((120 - distance) / 120) * (currentTheme === "light" ? 0.2 : 0.15)
            ctx.globalAlpha = opacity
            ctx.strokeStyle = currentTheme === "light" ? "#3b82f6" : "#8b5cf6"
            ctx.lineWidth = 1.5
            ctx.shadowColor = ctx.strokeStyle
            ctx.shadowBlur = 3
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
