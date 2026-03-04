import Architecture from "@/components/Architecture";
import Capabilities from "@/components/Capabilities";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import Overview from "@/components/Overview";
import PerformanceStats from "@/components/PerformanceStats";
import Specs from "@/components/Specs";
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
