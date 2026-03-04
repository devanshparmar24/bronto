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
    <section className="bg-white scroll-mt-24 py-32">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Technical Specifications
          </h2>

          <p className="text-gray-600 mt-6">
            Explore hardware configurations optimized for
            performance and scalability.
          </p>

        </div>


        {/* Tabs */}

        <div className="flex justify-center gap-4 mt-12">

          <button
            onClick={() => setActiveTab("flash")}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === "flash"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Flash
          </button>

          <button
            onClick={() => setActiveTab("spinning")}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === "spinning"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Spinning Media
          </button>

        </div>


        {/* Specs List */}

        <div className="mt-16 divide-y divide-gray-200">

          {specs[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-6"
            >
              <span className="font-semibold text-gray-800">
                {item[0]}
              </span>

              <span className="text-gray-600 text-right max-w-md">
                {item[1]}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}