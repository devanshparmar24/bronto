export default function CTA() {
  return (
    <section className="relative py-32 bg-[#0b0b0b] text-white overflow-hidden">

      {/* Background gradient glow */}

      <div className="absolute inset-0 scroll-mt-24 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-500/20 blur-3xl"></div>


      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Deploy AI Infrastructure
          <br />
          at Exabyte Scale
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          BRONTOSTOR enables organizations to power AI workloads,
          edge computing and massive data platforms with
          enterprise-grade storage performance.
        </p>


        {/* Buttons */}

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">

          <button className="
            px-8 py-4
            bg-gradient-to-r from-purple-600 to-blue-500
            rounded-lg
            font-semibold
            hover:scale-105
            transition
          ">
            Download Datasheet
          </button>


          <button className="
            px-8 py-4
            border border-white/20
            rounded-lg
            font-semibold
            hover:bg-white hover:text-black
            transition
          ">
            Contact Sales
          </button>

        </div>

      </div>

    </section>
  )
}