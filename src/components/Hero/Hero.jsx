"use client"

import { useEffect, useState } from "react"

export default function Hero() {

  const [offset, setOffset] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      setOffset(window.scrollY * 0.5)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">

  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/dashboard.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 grid lg:grid-cols-2 items-center">

    {/* Left Side */}
    <div>

      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Exabyte Storage
        <br/>
        for Edge AI
      </h1>

      <p className="text-gray-300 mt-6 max-w-lg">
        BRONTOSTOR is a unified distributed storage platform
        designed for AI workloads and edge infrastructure.
      </p>

      <div className="flex gap-6 mt-8">

        <button className="px-8 py-4 bg-purple-600 text-white rounded-lg">
          Watch Demo
        </button>

        <button className="px-8 py-4 border border-white text-white rounded-lg">
          Download Datasheet
        </button>

      </div>

    </div>


    {/* Right Side Dashboard */}

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