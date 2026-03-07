"use client"

import { useEffect, useState } from "react"

export default function Hero() {

  const [offset, setOffset] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      setOffset(window.scrollY * 0.3)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center py-28 lg:py-0">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <source src="/videos/dashboard.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div>

          {/* Tag */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400">
            AI Infrastructure Platform
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Storage Built to Power <br />
            <span className="text-white">AI at Massive Scale</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 max-w-lg text-base sm:text-lg">
            A distributed storage platform engineered for modern AI workloads —
            delivering speed, resilience, and massive scalability.
          </p>


         


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

            <button className="px-6 sm:px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
              See It in Action
            </button>

            <button className="px-6 sm:px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
              View Datasheet
            </button>

          </div>

        </div>


        {/* Dashboard Image */}
        <div className="hidden lg:flex justify-center">

          <img
            src="/images/dashboard.webp"
            alt="BRONTOSTOR dashboard interface"
            className="w-[420px] xl:w-[520px] rounded-xl shadow-2xl border border-white/10 float-animation"
          />

        </div>

      </div>

    </section>
  )
}