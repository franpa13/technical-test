"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"
export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Evitar hidratación 
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="absolute top-4 cursor-pointer right-4 p-2 rounded-full bg-login-toggle-bg text-login-toggle-text transition-colors z-20"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" /> {/* Espacio reservado */}
      </button>
    )
  }

  return (
    <button
      className="absolute top-4 cursor-pointer right-4 p-2 rounded-full bg-login-toggle-bg text-login-toggle-text transition-colors z-20 hover:scale-110 transition-transform"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}