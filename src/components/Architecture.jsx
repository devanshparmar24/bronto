export default function Architecture() {
  return (
    <section className="bg-[#0b0b0b] py-32 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            How BRONTOSTOR Works
          </h2>

          <p className="text-gray-400 mt-6">
            A distributed storage architecture built to handle
            AI workloads, massive data pipelines and edge deployments.
          </p>

        </div>


        {/* Architecture Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

          {/* AI Workloads */}

          <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur hover:border-purple-500 transition">

            <h3 className="text-xl font-semibold">
              AI Workloads
            </h3>

            <p className="text-gray-400 mt-4">
              Machine learning pipelines, inference engines
              and analytics workloads generate massive data.
            </p>

          </div>


          {/* Compute Nodes */}

          <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur hover:border-purple-500 transition">

            <h3 className="text-xl font-semibold">
              Compute Nodes
            </h3>

            <p className="text-gray-400 mt-4">
              GPU accelerated compute clusters process
              high throughput AI workloads.
            </p>

          </div>


          {/* Storage Cluster */}

          <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur hover:border-purple-500 transition">

            <h3 className="text-xl font-semibold">
              Storage Cluster
            </h3>

            <p className="text-gray-400 mt-4">
              BRONTOSTOR distributes data across thousands
              of nodes for reliability and scale.
            </p>

          </div>


          {/* Global Namespace */}

          <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur hover:border-purple-500 transition">

            <h3 className="text-xl font-semibold">
              Unified Namespace
            </h3>

            <p className="text-gray-400 mt-4">
              File, block and object storage accessible
              through one unified global namespace.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}