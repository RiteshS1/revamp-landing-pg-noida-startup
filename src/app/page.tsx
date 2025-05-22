// pages/index.tsx
"use client"; 
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSectionOne from "@/components/HeroSectionOne";
import OffersSection from "@/components/OffersSection";
import HelpSection from "@/components/HelpSection";
import HeroSectionTwo from "@/components/HeroSectionTwo";
import WhyUsSection from "@/components/WhyUsSection";
import WhyUsCarousel from "@/components/WhyUsCarousel";
import Footer from "@/components/Footer";
import PageTransition from "@/components/ui/PageTransition";
import footer_top_button from "../../public/footer_top_button.png";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";

const Home: React.FC = () => {
  const isLaptop = useMediaQuery("(min-width: 768px)");

  // Extracted the common content to avoid duplication
  const MainContent = () => (
    <>
      <Navbar />
      <HeroSectionOne />
      <OffersSection />
      <HelpSection />
      <HeroSectionTwo />
      <WhyUsSection />
      <WhyUsCarousel />
      <Footer>
        <div id="who" className="flex justify-end">
          <Link href="#navbar">
            <div className="relative -translate-y-8 cursor-pointer bg-white border border-gray-400 p-6 rounded-full shadow-xl mr-25">
              <Image 
                src={footer_top_button} 
                alt="Back to top"
                className="w-auto h-auto"
              />
            </div>
          </Link>
        </div>
      </Footer>
    </>
  );

  return (
    <PageTransition>
      <main className={isLaptop ? "" : "overflow-x-hidden"}>
        <MainContent />
      </main>
    </PageTransition>
  );
};

export default Home;
