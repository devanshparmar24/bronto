"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Menu } from "lucide-react"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-24 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-500
      ${scrolled ? "bg-[#0b0b0b] border-b border-gray-800" : "bg-transparent border-transparent"}`}
    >

      {/* Logo */}
      <a href="/" className="relative z-10">
        <img
          src="https://tsecond.netlify.app/company-logo/Tsecond-Logo-White.svg"
          alt="Tsecond Logo"
          width={100}
        />
      </a>


      {/* Center Menu */}
      <div className="hidden lg:flex flex-1 items-center justify-center">

        <div className="flex items-center">

          <button className="relative px-7 py-3 text-[14px] font-semibold tracking-[0.1em] uppercase flex items-center gap-2 text-white hover:opacity-55 transition">

            Infrastructure
            <ChevronDown size={12}/>

            <span className="absolute bottom-0 left-7 right-7 h-px bg-white opacity-35 scale-x-0 origin-left transition-transform duration-300"></span>

          </button>


          <button className="relative px-7 py-3 text-[14px] font-semibold tracking-[0.1em] uppercase flex items-center gap-2 text-white hover:opacity-55 transition">

            Software
            <ChevronDown size={12}/>

            <span className="absolute bottom-0 left-7 right-7 h-px bg-white opacity-35 scale-x-0 origin-left transition-transform duration-300"></span>

          </button>


          <a
            href="/solutions"
            className="px-7 py-3 text-[14px] font-semibold tracking-[0.1em] uppercase text-white hover:opacity-55 transition"
          >
            Solutions
          </a>


          <button className="relative px-7 py-3 text-[14px] font-semibold tracking-[0.1em] uppercase flex items-center gap-2 text-white hover:opacity-55 transition">

            Company
            <ChevronDown size={12}/>

            <span className="absolute bottom-0 left-7 right-7 h-px bg-white opacity-35 scale-x-0 origin-left transition-transform duration-300"></span>

          </button>

        </div>

      </div>


      {/* Deploy Button */}
      <div className="hidden lg:block">

        <a
          href="/contact"
          className="px-7 py-3 text-[12px] font-bold tracking-[0.15em] uppercase bg-white text-black hover:opacity-80 transition"
        >
          Deploy Now
        </a>

      </div>


      {/* Mobile Menu */}
      <button className="lg:hidden text-white relative z-10">

        <Menu size={24} />

      </button>

    </nav>
  )
}