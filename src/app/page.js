import {Architecture, Capabilities, CTA, Footer, Navbar, Hero, Overview, PerformanceStats, Specs} from "@/components/index"
export default function Bronto() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Architecture/>
        <PerformanceStats />
        <Capabilities />
        <Specs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
