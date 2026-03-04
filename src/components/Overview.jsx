export default function Overview() {
  return (
    <section className="bg-gray-50  py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* Card */}

          <div className="group p-8 bg-white border border-gray-200 rounded-xl h-28 hover:h-48 transition-all duration-500 shadow-sm hover:shadow-xl">

            <h3 className="text-xl font-semibold text-gray-900">
              Exabyte Scale
            </h3>

            <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Scale seamlessly up to 8 exabytes with support
              for thousands of distributed storage nodes.
            </p>

          </div>


          <div className="group p-8 bg-white border border-gray-200 rounded-xl h-28 hover:h-48 transition-all duration-500 shadow-sm hover:shadow-xl">

            <h3 className="text-xl font-semibold text-gray-900">
              AI Optimized
            </h3>

            <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Built for AI pipelines and GPU accelerated
              workloads with high throughput performance.
            </p>

          </div>


          <div className="group p-8 bg-white border border-gray-200 rounded-xl h-28 hover:h-48 transition-all duration-500 shadow-sm hover:shadow-xl">

            <h3 className="text-xl font-semibold text-gray-900">
              Multi Protocol
            </h3>

            <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Unified support for file, block and object
              storage under a single namespace.
            </p>

          </div>


          <div className="group p-8 bg-white border border-gray-200 rounded-xl h-28 hover:h-48 transition-all duration-500 shadow-sm hover:shadow-xl">

            <h3 className="text-xl font-semibold text-gray-900">
              Edge Ready
            </h3>

            <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Designed for low latency environments such
              as telecom, defense and manufacturing.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}