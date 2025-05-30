"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const { resolvedTheme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const waves: Wave[] = []
    const geometricShapes: GeometricShape[] = []

    const isDark = resolvedTheme === "dark"

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
        this.color = Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6"
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

      constructor() {
        this.x = 0
        this.y = Math.random() * canvas.height
        this.amplitude = Math.random() * 50 + 20
        this.frequency = Math.random() * 0.02 + 0.005
        this.phase = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.02 + 0.01
        this.color = Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6"
        this.opacity = Math.random() * 0.1 + 0.05
      }

      update() {
        this.phase += this.speed
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.strokeStyle = this.color
        ctx.lineWidth = 2
        ctx.beginPath()

        for (let x = 0; x < canvas.width + 50; x += 5) {
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

    class GeometricShape {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      type: "triangle" | "square" | "hexagon"
      color: string
      opacity: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 30 + 10
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.type = ["triangle", "square", "hexagon"][Math.floor(Math.random() * 3)] as
          | "triangle"
          | "square"
          | "hexagon"
        this.color = Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6"
        this.opacity = Math.random() * 0.1 + 0.02
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        ctx.beginPath()
        if (this.type === "triangle") {
          ctx.moveTo(0, -this.size / 2)
          ctx.lineTo(-this.size / 2, this.size / 2)
          ctx.lineTo(this.size / 2, this.size / 2)
          ctx.closePath()
        } else if (this.type === "square") {
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size)
        } else if (this.type === "hexagon") {
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            const x = (Math.cos(angle) * this.size) / 2
            const y = (Math.sin(angle) * this.size) / 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
        }
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
      geometricShapes.length = 0

      if (isDark) {
        // Mode sombre - particules
        for (let i = 0; i < 50; i++) {
          particles.push(new Particle())
        }
      } else {
        // Mode clair - vagues et formes géométriques
        for (let i = 0; i < 8; i++) {
          waves.push(new Wave())
        }
        for (let i = 0; i < 15; i++) {
          geometricShapes.push(new GeometricShape())
        }
      }
    }

    const animate = () => {
      if (isDark) {
        // Mode sombre
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
          particle.update()
          particle.draw()
        })

        // Draw connections
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.save()
              ctx.globalAlpha = ((100 - distance) / 100) * 0.1
              ctx.strokeStyle = "#3b82f6"
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
            }
          })
        })
      } else {
        // Mode clair
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, "#f8fafc")
        gradient.addColorStop(0.5, "#f1f5f9")
        gradient.addColorStop(1, "#e2e8f0")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw waves
        waves.forEach((wave) => {
          wave.update()
          wave.draw()
        })

        // Draw geometric shapes
        geometricShapes.forEach((shape) => {
          shape.update()
          shape.draw()
        })

        // Add subtle grid pattern
        ctx.save()
        ctx.globalAlpha = 0.02
        ctx.strokeStyle = "#64748b"
        ctx.lineWidth = 1

        for (let x = 0; x < canvas.width; x += 100) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }

        for (let y = 0; y < canvas.height; y += 100) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }
        ctx.restore()
      }

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
  }, [resolvedTheme])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
