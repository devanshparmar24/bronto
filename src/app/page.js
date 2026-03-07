import {Architecture, Capabilities, CTA, Footer, Navbar, Hero, Overview, PerformanceStats, Specs, Testimonials} from "@/components/index"
export default function Bronto() {
  return (
    <>
      <Navbar />
      <main >
        <Hero />
        <Overview />
        <Architecture/>
        <PerformanceStats />
        <Capabilities />
        <Specs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
