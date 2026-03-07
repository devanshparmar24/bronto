export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 pt-20 pb-10 px-6 sm:px-8 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Logo */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <img
            src="https://tsecond.netlify.app/company-logo/Tsecond-Logo-White.svg"
            alt="Company Logo"
            className="w-28"
          />

          <p className="text-sm max-w-sm text-gray-400">
            High-performance infrastructure built for modern data and AI workloads.
          </p>

        </div>


        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">

          {/* Platform */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">
              Platform
            </h4>

            <ul className="space-y-2 text-sm">
              <li>Compute</li>
              <li>Storage</li>
              <li>Data Systems</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">
              Resources
            </h4>

            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>Support</li>
              <li>Policies</li>
            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-gray-800 pt-6 text-xs">

          <p className="text-gray-500">
            © 2026 All rights reserved
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">X</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>

        </div>

      </div>

    </footer>
  )
}