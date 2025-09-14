"use client";
import About from "@/components/About/About";
import ClientReview from "@/components/ClientReview/ClientReview";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";
import Teams from "@/components/Teams/Teams";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div>
      <ResponsiveNav />
      <Home />
      <About />
      <Features />
      <Services />
      <ClientReview />
      <Teams />
      <Pricing />
      <Footer />
    </div>
  );
}
