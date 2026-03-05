"use client"

import { useState } from "react"

export default function Architecture() {

  const [active, setActive] = useState(null)

  const layers = [
    {
      title: "AI / Data Workloads",
      desc: "Machine learning pipelines and analytics systems.",
      details:
        "Training pipelines, inference systems, data lakes, and enterprise analytics generating petabyte-scale workloads."
    },
    {
      title: "Compute Layer",
      desc: "GPU clusters and distributed compute nodes.",
      details:
        "Kubernetes clusters orchestrating GPU workloads for AI training, inference, and large-scale parallel processing."
    },
    {
      title: "BRONTOSTOR Core Engine",
      desc: "Distributed orchestration engine.",
      details:
        "Handles replication, metadata management, intelligent data placement and fault tolerance across clusters."
    },
    {
      title: "Distributed Storage Nodes",
      desc: "Scalable NVMe / HDD storage clusters.",
      details:
        "Thousands of nodes working together with redundancy, load balancing and high throughput networking."
    },
    {
      title: "Unified Access Layer",
      desc: "File, Object and Block access.",
      details:
        "Global namespace exposing S3, POSIX and block storage interfaces for applications."
    }
  ]

  return (
    <section className="bg-[#0b0b0b] text-white py-32 scroll-mt-24">

      <div className="max-w-6xl mx-auto px-6">

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

        {/* Stack */}

        <div className="mt-24 flex flex-col gap-6 items-center">

          {layers.map((layer, index) => {

            const isActive = active === index

            return (
              <div
                key={index}
                onClick={() => setActive(isActive ? null : index)}
                className={`cursor-pointer w-full max-w-xl rounded-xl border
                transition-all duration-500 p-8

                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500 scale-105"
                    : active !== null
                    ? "opacity-40 border-white/10 bg-white/5"
                    : "border-white/10 bg-white/5 hover:border-purple-500"
                }
                `}
              >

                <h3 className="text-xl font-semibold">
                  {layer.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {layer.desc}
                </p>

                {/* Expanded Content */}

                <div
                  className={`grid transition-all duration-500
                  ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 mt-6"
                      : "grid-rows-[0fr] opacity-0"
                  }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-sm">
                      {layer.details}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}