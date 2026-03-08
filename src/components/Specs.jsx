"use client"

import { useState } from "react"

export default function Specs() {

  const [activeTab, setActiveTab] = useState("flash")

  const specs = {
    flash: [
      ["Storage Node", "2U 4 Node server with up to 1.5PB NVMe storage"],
      ["Capacity", "Minimum 64TB – Maximum 8 Exabyte"],
      ["Maximum Nodes", "Up to 8000 storage nodes"],
      ["Performance", "30 GB/sec throughput"],
      ["Security", "AES-256 encryption with replication"],
    ],

    spinning: [
      ["Storage Node", "2U 4 Node server with up to 250TB HDD storage"],
      ["Capacity", "Minimum 64TB – Maximum 8 Exabyte"],
      ["Maximum Nodes", "Up to 8000 storage nodes"],
      ["Performance", "3 GB/sec throughput"],
      ["Security", "AES-256 encryption with erasure coding"],
    ]
  }

  return (
    <section className="relative bg-white scroll-mt-24 py-20 md:py-28 lg:py-32 overflow-hidden">

      {/* Content */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Technical Specifications
          </h2>

          <p className="text-gray-600 mt-6 text-base sm:text-lg">
            Explore hardware configurations optimized for
            performance and scalability.
          </p>

        </div>


        {/* Tabs */}

        <div className="flex justify-center mt-12">

          <div className="flex bg-gray-100 rounded-xl p-1">

            <button
              onClick={() => setActiveTab("flash")}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === "flash"
                  ? "bg-purple-600 text-white shadow"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Flash
            </button>

            <button
              onClick={() => setActiveTab("spinning")}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === "spinning"
                  ? "bg-purple-600 text-white shadow"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Spinning Media
            </button>

          </div>

        </div>


        {/* Specs Table */}

        <div className="mt-14 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">

          {specs[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 px-6 py-5 border-b last:border-b-0 border-gray-200"
            >

              <span className="font-semibold text-gray-800">
                {item[0]}
              </span>

              <span className="text-gray-600 sm:text-right max-w-md text-sm sm:text-base">
                {item[1]}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}