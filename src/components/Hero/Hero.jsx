"use client"

import { useEffect, useState } from "react"

export default function Hero() {

  const [offset, setOffset] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      setOffset(window.scrollY * 1)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          {/* Tag */}

          <span className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Data Center Platform
          </span>

          {/* Heading */}

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">

            Scale Exabyte Storage <br />

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              for Edge AI
            </span>

          </h1>


          {/* Description */}

          <p className="text-gray-300 mt-6 max-w-lg text-lg">

            BRONTOSTOR is a unified distributed storage platform designed
            for AI, edge computing and exabyte-scale infrastructure.

          </p>


          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition">

              Watch Demo

            </button>


            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">

              Download Datasheet

            </button>

          </div>

        </div>


        {/* Dashboard Image */}

        <div className="hidden lg:flex justify-center">

          <img
            src="/images/dashboard.webp"
            className="w-[520px] rounded-xl shadow-2xl border border-white/10 float-animation"
          />

        </div>

      </div>

    </section>
  )
}