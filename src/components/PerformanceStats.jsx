"use client"

import { useEffect, useRef, useState } from "react"
import Counter from "./Counter"

export default function PerformanceStats() {

  const sectionRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  const metrics = [
    { value: 8, label: "Exabyte Storage", suffix: " EB" },
    { value: 8000, label: "Storage Nodes", suffix: "+" },
    { value: 30, label: "GB/s Throughput", suffix: " GB/s" },
    { value: 10000, label: "Containers Supported", suffix: "+" }
  ]

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28 lg:py-32">

      <div className="max-w-7xl scroll-mt-24 mx-auto px-6 sm:px-8 md:px-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Performance at Massive Scale
          </h2>

          <p className="text-gray-600 mt-6 text-base sm:text-lg">
            BRONTOSTOR delivers enterprise-grade storage performance
            designed for large scale AI and data infrastructure.
          </p>

        </div>


        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mt-16 md:mt-20 text-center">

          {metrics.map((metric, index) => (
            <div key={index} className="group">

              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-purple-600 transition">

                <Counter
                  end={metric.value}
                  suffix={metric.suffix}
                  start={startCount}
                  delay={index * 250}
                />

              </div>

              <p className="text-gray-600 mt-3 md:mt-4 text-sm sm:text-base">
                {metric.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}