"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor, Palette } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: "light", icon: Sun, label: "Clair", color: "bg-yellow-400" },
    { name: "dark", icon: Moon, label: "Sombre", color: "bg-blue-900" },
    { name: "system", icon: Monitor, label: "Système", color: "bg-gray-500" },
  ]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
        <Palette className="h-4 w-4 relative z-10" />
      </Button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 min-w-[120px] z-50 animate-fade-in-up">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon
            return (
              <button
                key={themeOption.name}
                onClick={() => {
                  setTheme(themeOption.name)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  theme === themeOption.name ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${themeOption.color}`} />
                <Icon className="w-4 h-4" />
                <span>{themeOption.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
