"use client"

import { useEffect, useRef } from "react"

export function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Smooth delayed following animation
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${positionRef.current.x - 10}px, ${positionRef.current.y - 10}px)`
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${positionRef.current.x - 20}px, ${positionRef.current.y - 20}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div
        ref={cursorRef}
        className="cursor-trail bg-primary"
        style={{
          boxShadow: "0 0 20px oklch(0.75 0.18 195), 0 0 40px oklch(0.75 0.18 195 / 0.5)",
        }}
      />
    </>
  )
}
