export default function Overview() {

  const cards = [
    {
      title: "Exabyte Scale",
      desc: "Grow your infrastructure without limits. BRONTOSTOR can scale across thousands of nodes to manage exabytes of data reliably."
    },
    {
      title: "Built for AI Workloads",
      desc: "Optimized for modern AI pipelines with high-throughput performance that keeps GPUs and training systems fully utilized."
    },
    {
      title: "Unified Storage",
      desc: "Access your data through file, block, or object storage — all within a single unified platform."
    },
    {
      title: "Edge Ready",
      desc: "Designed for environments where latency matters, including telecom networks, defense systems, and industrial operations."
    }
  ]


  return (

    <section className="scroll-mt-24 py-32 bg-transparent">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900">
            Built for the Next Generation of AI Infrastructure
          </h2>

          <p className="text-gray-600 mt-6">
            BRONTOSTOR provides the storage foundation for modern AI platforms,
            enabling organizations to handle massive datasets, distributed compute,
            and real-time edge workloads with confidence.
          </p>

        </div>


        {/* Cards */}

        <div className="relative flex justify-center mt-20">

          {/* Top Arrow */}

          <div className="absolute -top-8 text-gray-400 text-2xl animate-bounce">
            ↑
          </div>


          {/* Scroll container */}

          <div
            className="
              h-56
              w-full
              max-w-md
              overflow-y-auto
              snap-y
              snap-mandatory
              scrollbar-hide
              py-16
              space-y-6
            "
          >

            {cards.map((card, i) => (

              <div
                key={i}
                className="
                  snap-center
                  h-40
                  p-8
                  bg-white
                  border border-gray-200
                  rounded-xl
                  shadow-md
                  flex flex-col justify-center
                "
              >

                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {card.desc}
                </p>

              </div>

            ))}

          </div>


          {/* Bottom Arrow */}

          <div className="absolute -bottom-8 text-gray-400 text-2xl animate-bounce">
            ↓
          </div>

        </div>

      </div>

    </section>

  )

}