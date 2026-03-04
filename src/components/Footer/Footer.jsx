export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b]  text-gray-400 pt-24 pb-10 px-6 md:px-12">

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl md:text-2xl md:max-w-md font-medium leading-snug mb-8">
            Keep up with the latest news and content from Tsecond
          </h3>

          <div className="relative max-w-sm">

            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3 pr-14 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
            />

            <button className="absolute right-1 top-1 bottom-1 w-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-lg">→</span>
            </button>

          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">
              Products
            </h4>

            <ul className="space-y-4 text-sm">
              <li>Edge HPC</li>
              <li>Edge AI</li>
              <li>Edge Storage</li>
              <li>Data Center</li>
              <li>Data Movement</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm">
              <li>About Us</li>
              <li>Solutions</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Procurement</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">
              Support
            </h4>

            <ul className="space-y-4 text-sm">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between border-t border-gray-800 pt-8">

        {/* Social Icons */}
        <div className="flex gap-4">

          <a
            href="https://www.facebook.com/tsecond.inc/"
            className="hover:text-white transition"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/tsecond.inc/"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://x.com/tsecondinc"
            className="hover:text-white transition"
          >
            X
          </a>

          <a
            href="https://www.linkedin.com/company/tsecondinc/"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 Tsecond Inc. All Rights Reserved
        </p>

      </div>

    </footer>
  )
}