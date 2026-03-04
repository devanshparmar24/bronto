import Architecture from "@/components/Architecture";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import Overview from "@/components/Overview";
export default function Bronto() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Architecture/>
      </main>
      <Footer />
    </>
  );
}
