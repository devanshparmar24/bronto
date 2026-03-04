export default function Capabilities() {

  const capabilities = [
    {
      title: "GPU Direct Storage",
      desc: "Accelerate AI workloads by enabling direct data transfer between GPUs and storage."
    },
    {
      title: "RDMA Networking",
      desc: "Ultra-low latency networking for high-performance computing and distributed AI."
    },
    {
      title: "Multi-Protocol Access",
      desc: "Unified support for file, block and object storage under one global namespace."
    },
    {
      title: "Kubernetes Integration",
      desc: "Deploy seamlessly with containerized workloads and modern cloud environments."
    },
    {
      title: "NVMe Optimized",
      desc: "Designed for high-speed NVMe storage delivering massive throughput."
    },
    {
      title: "Enterprise Data Protection",
      desc: "Advanced encryption, replication and erasure coding for secure storage."
    }
  ]


  return (
    <section className="bg-[#0b0b0b] text-white py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Key Capabilities
          </h2>

          <p className="text-gray-400 mt-6">
            Powerful infrastructure features designed to support
            modern AI and enterprise-scale data platforms.
          </p>

        </div>


        {/* Capability Tiles */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {capabilities.map((cap, index) => (

            <div
              key={index}
              className="
              group p-8 rounded-xl
              border border-white/10
              bg-white/5 backdrop-blur
              hover:border-purple-500
              hover:-translate-y-2
              transition-all duration-500
              cursor-pointer
              "
            >

              <h3 className="text-xl font-semibold">
                {cap.title}
              </h3>

              <p className="
                text-gray-400 mt-4
                opacity-0
                group-hover:opacity-100
                transition duration-500
              ">
                {cap.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}