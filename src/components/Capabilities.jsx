"use client"
import { useState } from "react"

export default function Capabilities() {

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const capabilities = [
    {
      title: "GPU Direct Storage",
      desc: "Accelerate AI workloads by enabling direct GPU ↔ storage transfer."
    },
    {
      title: "RDMA Networking",
      desc: "Ultra-low latency networking for distributed AI."
    },
    {
      title: "Multi-Protocol Access",
      desc: "Unified support for file, object and block storage."
    },
    {
      title: "Kubernetes Integration",
      desc: "Seamless orchestration for containerized workloads."
    },
    {
      title: "NVMe Optimized",
      desc: "High-throughput NVMe optimized storage."
    },
    {
      title: "Enterprise Data Protection",
      desc: "Encryption, replication and erasure coding."
    }
  ]

  const radius = 220

  return (
    <section className="bg-[#0b0b0b] text-white py-24 scroll-mt-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Key Capabilities
          </h2>

          <p className="text-gray-400 mt-4">
            Powerful infrastructure features designed for modern AI platforms.
          </p>

        </div>


        {/* Wheel */}

        <div className="flex justify-center mt-20">

          <div
            className={`relative transition-all duration-500 ${open ? "w-[500px] h-[500px]" : "w-[220px] h-[220px]"}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
              setOpen(false)
              setActive(null)
            }}
          >

            {/* Center Circle */}

            <div className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-44 h-44
              rounded-full
              border border-purple-500
              bg-gradient-to-br from-white/5 to-transparent
              flex items-center justify-center
              text-center
              backdrop-blur
              z-10
            ">
              <h3 className="font-semibold text-lg px-6">
                Key Capabilities
              </h3>
            </div>


            {/* Capability Nodes */}

            {capabilities.map((cap, i) => {

              const angle = (360 / capabilities.length) * i
              const rad = angle * (Math.PI / 180)

              const x = Math.cos(rad) * radius
              const y = Math.sin(rad) * radius

              const isActive = active === i

              return (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    transform: open
                      ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      : "translate(-50%, -50%) scale(0.3)",
                    opacity: open ? 1 : 0
                  }}
                  className="
                    absolute left-1/2 top-1/2
                    transition-all duration-500
                    w-52
                  "
                >

                  <div
                    className={`
                        p-4 rounded-xl border backdrop-blur
                        transition-all duration-300
                        origin-center
                        ${isActive
                        ? "border-purple-500 bg-purple-500/10 scale-105"
                        : "border-white/10 bg-white/5"}
  `}
                  >

                    <h4 className="text-sm font-semibold">
                      {cap.title}
                    </h4>

                    <p className={`
                      text-xs text-gray-400 mt-2
                      transition-all duration-300
                      ${isActive
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0 overflow-hidden"}
                    `}>
                      {cap.desc}
                    </p>

                  </div>

                </div>
              )

            })}

          </div>

        </div>

      </div>

    </section>
  )
}