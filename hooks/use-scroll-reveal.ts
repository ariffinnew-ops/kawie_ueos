'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    document.querySelectorAll('[data-stagger]').forEach((grid) => {
      const children = grid.querySelectorAll(':scope > .reveal')
      children.forEach((child, index) => {
        ;(child as HTMLElement).style.transitionDelay = `${index * 0.1}s`
      })
    })

    return () => observer.disconnect()
  }, [])
}
