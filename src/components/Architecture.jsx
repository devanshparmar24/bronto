"use client"

import { useState } from "react"

export default function Architecture() {

  const [active, setActive] = useState(2)

  const layers = [
    {
      title: "AI / Data Workloads",
      desc: "Training pipelines, inference systems and analytics generating massive datasets."
    },
    {
      title: "Compute Layer",
      desc: "GPU clusters orchestrated through Kubernetes powering distributed AI computation."
    },
    {
      title: "BRONTOSTOR Core Engine",
      desc: "The distributed orchestration layer managing metadata, replication and intelligent data placement."
    },
    {
      title: "Distributed Storage Nodes",
      desc: "Thousands of NVMe and HDD nodes forming a resilient high throughput storage network."
    },
    {
      title: "Unified Access Layer",
      desc: "Applications access data through file, object and block interfaces with a global namespace."
    }
  ]

  return (
    <section className="bg-[#0b0b0b] text-white py-32 scroll-mt-24">

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Architecture Overview
          </h2>

          <p className="text-gray-400 mt-6">
            BRONTOSTOR distributes data intelligently across compute
            and storage nodes to support massive AI workloads.
          </p>

        </div>


        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">

          {/* Architecture Layers */}

          <div className="flex flex-col items-center relative">

            {layers.map((layer, i) => {

              const isActive = active === i

              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative w-full max-w-sm cursor-pointer
                  transition-all duration-300
                  ${isActive ? "scale-105" : "opacity-70 hover:opacity-100"}
                  `}
                >

                  <div
                    className={`rounded-xl border p-6 text-center
                    ${isActive
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/5"}
                    `}
                  >

                    <h3 className="font-semibold">
                      {layer.title}
                    </h3>

                  </div>

                  {/* Connector Line */}

                  {i !== layers.length - 1 && (
                    <div className="h-10 w-px bg-white/10 mx-auto"></div>
                  )}

                </div>
              )
            })}

          </div>


          {/* Details Panel */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-10">

            <h3 className="text-2xl font-semibold">
              {layers[active].title}
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              {layers[active].desc}
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}