"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
}

export function TypingAnimation({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return

    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? deleteSpeed : isPaused ? pauseTime : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink text-blue-500">|</span>
    </span>
  )
}
