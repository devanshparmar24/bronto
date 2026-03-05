export default function Overview() {

  const cards = [
    {
      title: "Exabyte Scale",
      desc: "Scale seamlessly up to 8 exabytes with support for thousands of distributed storage nodes."
    },
    {
      title: "AI Optimized",
      desc: "Built for AI pipelines and GPU accelerated workloads with high throughput performance."
    },
    {
      title: "Multi Protocol",
      desc: "Unified support for file, block and object storage under a single namespace."
    },
    {
      title: "Edge Ready",
      desc: "Designed for low latency environments such as telecom, defense and manufacturing."
    }
  ]

  return (
<section className="scroll-mt-24 py-32 bg-gradient-to-b from-white via-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900">
            Built for AI Infrastructure at Scale
          </h2>

          <p className="text-gray-600 mt-6">
            BRONTOSTOR is a distributed storage platform
            designed for AI workloads, edge computing
            and enterprise-scale infrastructure.
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
            h-52
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