"use client"

import { useEffect } from "react"

const KAWIE_HOME = "https://kawie-digital.com/home"

export default function BackGuard() {
  useEffect(() => {
    const onPopState = () => {
      window.location.href = KAWIE_HOME
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  return null
}
