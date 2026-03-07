export default function Testimonials() {

  const testimonials = [
    {
      quote:
        "BRONTOSTOR enabled us to scale our AI pipelines without storage bottlenecks.",
      name: "Michael Carter",
      role: "AI Infrastructure Lead",
      company: "TechNova Systems",
    },
    {
      quote:
        "Handling petabyte-scale datasets across distributed nodes became seamless.",
      name: "Sarah Lin",
      role: "Cloud Architect",
      company: "Aether Networks",
    },
    {
      quote:
        "A reliable backbone for edge computing deployments across multiple regions.",
      name: "Daniel Rivera",
      role: "Engineering Director",
      company: "Vertex Dynamics",
    },
    {
      quote:
        "Our ML training clusters saw significant performance improvements.",
      name: "Priya Nair",
      role: "Machine Learning Lead",
      company: "Orion Labs",
    },
    {
      quote:
        "BRONTOSTOR simplified our storage architecture dramatically.",
      name: "Liam Bennett",
      role: "Platform Engineer",
      company: "SkyBridge AI",
    },
    {
      quote:
        "Low latency and high throughput made it perfect for edge deployments.",
      name: "Carlos Mendes",
      role: "Systems Architect",
      company: "Helios Systems",
    },
  ];

  return (
    <section className="bg-[#0000] py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by AI & Infrastructure Teams
          </h2>

          <p className="text-gray-600 mt-6">
            Teams building large-scale AI systems rely on BRONTOSTOR
            to power their data infrastructure.
          </p>

        </div>

      </div>


      {/* Marquee */}

      <div className="mt-20 relative">

        <div className="flex gap-8 animate-marquee w-max">

          {[...testimonials, ...testimonials].map((t, i) => (

            <div
              key={i}
              className="
              w-[320px]
              p-8
              bg-[#9999]
              border border-gray-200
              rounded-xl
              hover:bg-white
              hover:shadow-xl
              transition duration-500
              "
            >

              <p className="text-gray-700 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-8">

                <p className="font-semibold text-gray-900">
                  {t.name}
                </p>

                <p className="text-sm text-gray-500">
                  {t.role} • {t.company}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}