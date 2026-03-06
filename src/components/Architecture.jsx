"use client"

import { useState } from "react"

export default function Architecture() {

  const [active, setActive] = useState(2)

  const layers = [
    {
      title: "AI & Data Workloads",
      desc: "Machine learning training pipelines, real-time inference systems, and analytics platforms that generate and process massive volumes of data."
    },
    {
      title: "Compute Layer",
      desc: "GPU clusters orchestrated with Kubernetes that power large-scale distributed AI training and high-performance data processing."
    },
    {
      title: "BRONTOSTOR Core Engine",
      desc: "The intelligence behind the platform — coordinating metadata, managing replication, and placing data efficiently across the system."
    },
    {
      title: "Distributed Storage Nodes",
      desc: "A resilient network of NVMe and HDD storage nodes working together to deliver high throughput and reliability at scale."
    },
    {
      title: "Unified Access Layer",
      desc: "Applications access data seamlessly through file, object, or block interfaces, all within a single global namespace."
    }
  ]

  return (
    <section className="bg-[#0b0b0b] text-white py-32 scroll-mt-24 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            How the Platform Works
          </h2>

          <p className="text-gray-400 mt-6">
            BRONTOSTOR connects compute and storage into a unified distributed
            system designed to support modern AI infrastructure at massive scale.
          </p>

        </div>


        <div className="mt-24 grid md:grid-cols-2 gap-20 items-center">

          {/* Architecture Pipeline */}

          <div className="flex flex-col items-center relative">

            {layers.map((layer, i) => {

              const isActive = active === i

              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative flex flex-col items-center cursor-pointer"
                >

                  {/* Node */}

                  <div
                    className={`
                    w-72 text-center p-6 rounded-xl border transition-all duration-300
                    ${
                      isActive
                        ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20 scale-105"
                        : "border-white/10 bg-white/5 hover:border-purple-400"
                    }
                    `}
                  >
                    <h3 className="font-semibold">
                      {layer.title}
                    </h3>
                  </div>


                  {/* Connector */}

                  {i !== layers.length - 1 && (
                    <div className="relative h-14 flex items-center">

                      <div className="w-px h-full bg-white/10"></div>

                      {/* animated data flow */}

                      <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>

                    </div>
                  )}

                </div>
              )
            })}

          </div>


          {/* Details Panel */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-sm">

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