import Counter from "./Counter"

export default function PerformanceStats() {

  const metrics = [
    { value: 8, label: "Exabyte Storage", suffix: " EB" },
    { value: 8000, label: "Storage Nodes", suffix: "+" },
    { value: 30, label: "GB/s Throughput", suffix: " GB/s" },
    { value: 10000, label: "Containers Supported", suffix: "+" }
  ]

  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl scroll-mt-24 mx-auto px-6  md:px-12">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Performance at Massive Scale
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            BRONTOSTOR delivers enterprise-grade storage performance
            designed for large scale AI and data infrastructure.
          </p>

        </div>


        {/* Metrics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 text-center">

          {metrics.map((metric, index) => (
            <div key={index} className="group">

              <div className="text-5xl font-bold text-gray-900 group-hover:text-purple-600 transition">

                <Counter end={metric.value} suffix={metric.suffix} />

              </div>

              <p className="text-gray-600 mt-4">
                {metric.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}