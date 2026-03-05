"use client"

import { useEffect, useState } from "react"

export default function Counter({ end, suffix = "", start, delay = 0 }) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    if (!start) return

    let startTime = null
    const duration = 2000

    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const animate = (timestamp) => {

      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = easeOut(progress)

      const value = Math.floor(eased * end)
      setCount(value)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }

    }

    const timer = setTimeout(() => {
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)

  }, [start, end, delay])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}