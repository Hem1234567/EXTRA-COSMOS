import { useEffect, useState } from "react";
import LocationSection from "../components/LocationSection";
import LaptopZoomSection from "../components/LaptopZoomSection";
import ContactSection from "../components/ContactSection";
import HudFrame from "../components/HudFrame";
import StarsBackgroundWithMoon from "../components/StarsBackgroundWithMoon";
import StackingCards from "../components/StackingCards";
import FloatingNavDemo from "../components/FloatingNav";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";


function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="cosmic-bg min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <FloatingNavDemo />
      </div>
      <StarsBackgroundWithMoon />
      <HudFrame />
      <LocationSection />
      <LaptopZoomSection />
      <StackingCards />
      <PartnersSection/>
      <ContactSection />
      <Footer/>
    </main>
  );
}

export default Index;
