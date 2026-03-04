export default function Overview() {
  return (
    <section className="bg-gray-50 py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900">
            Built for AI Infrastructure at Scale
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            BRONTOSTOR is a high-performance distributed storage platform
            designed for AI workloads, edge computing and large-scale
            enterprise environments.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:scale-105 transition">

            <h3 className="text-xl font-semibold">
              Exabyte Scale
            </h3>

            <p className="text-gray-600 mt-4">
              Scale seamlessly up to 8 exabytes with support
              for 8000 storage nodes.
            </p>

          </div>


          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:scale-105 transition">

            <h3 className="text-xl font-semibold">
              AI Optimized
            </h3>

            <p className="text-gray-600 mt-4">
              Built for AI and ML pipelines with GPU direct storage
              and high throughput.
            </p>

          </div>


          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:scale-105 transition">

            <h3 className="text-xl font-semibold">
              Multi-Protocol
            </h3>

            <p className="text-gray-600 mt-4">
              Supports file, block and object storage under
              a single global namespace.
            </p>

          </div>


          <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:scale-105 transition">

            <h3 className="text-xl font-semibold">
              Edge Ready
            </h3>

            <p className="text-gray-600 mt-4">
              Designed for low latency environments including
              defense, telecom and manufacturing.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}