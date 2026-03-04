export default function Architecture() {

  const layers = [
    {
      title: "AI / Data Workloads",
      desc: "Machine learning pipelines, analytics systems and enterprise applications generating massive datasets."
    },
    {
      title: "Compute Layer",
      desc: "GPU clusters and containerized workloads processing large scale data."
    },
    {
      title: "BRONTOSTOR Core Engine",
      desc: "Distributed storage orchestration layer managing replication and performance."
    },
    {
      title: "Distributed Storage Nodes",
      desc: "Thousands of NVMe or HDD nodes forming scalable storage clusters."
    },
    {
      title: "Unified Access Layer",
      desc: "Global namespace enabling File, Block and Object access."
    }
  ]

  return (
    <section className="bg-[#0b0b0b] text-white py-32">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Architecture Overview
          </h2>

          <p className="text-gray-400 mt-6">
            BRONTOSTOR distributes data intelligently across compute
            and storage nodes to support massive AI workloads.
          </p>

        </div>


        {/* Architecture Flow */}

        <div className="mt-20 flex flex-col items-center">

          {layers.map((layer, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Layer Box */}

              <div className="relative group max-w-xl w-full p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-purple-500 transition">

                <h3 className="text-xl font-semibold">
                  {layer.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {layer.desc}
                </p>

              </div>


              {/* Flow Line */}

              {index !== layers.length - 1 && (
                <div className="relative h-16 w-px bg-gradient-to-b from-purple-500 to-blue-500">

                  <div className="data-flow"></div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}