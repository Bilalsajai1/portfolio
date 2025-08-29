"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setIsVisible(window.scrollY > 100)
    }

    // Initial call
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-1 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-full bg-gray-200/20 dark:bg-gray-700/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-lg"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  )
}
