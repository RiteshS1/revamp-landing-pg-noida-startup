"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Testimonial } from "@/types/testimonial";
import TestimonialCarousel from "./ui/TestimonialCarousel";
import TestimonialSkeleton from "./ui/TestimonialSkeleton";

const testimonials: Testimonial[] = [  {
    quote:
      "ZenStreet.Ai&apos;s concept is impressive. I can see how letting them handle admin and client engagement would let me focus on delivering quality care",
    name: "Dr Sachitra Chakravorty",
    title: "Clinical Psychologist",
    bg: "bg-[#E0FFCF]",
  },  {
    quote:
      "Zenstreet&apos;s focus on invoicing is impressive. Just looking at the concept, I can see how it could help me in saving time needed for maintaining book.",
    name: "Dr. Vipul Kumar",
    title: "Clinical Psychologist",
    bg: "bg-[#F6C9B7]",
  },  {
    quote:
      "As a psychologist, I know that a well-run practice is key to effective care. ZenStreet.Ai&apos;s approach to delivering insights is just the tool I need for enhancing my practice.",
    name: "Dr. Ayesha Jain",
    title: "Therapist",
    bg: "bg-[#86E0FF]",
  },
];

const HeroSectionOne: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
 

  const handleHoverChange = useCallback((hovered: boolean) => {
    setIsHovered(hovered);
  }, []);

  React.useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="bg-gradient-to-b to-[#80a6c2e5] from-white px-4 md:px-8 lg:px-16 flex flex-col items-center justify-between min-h-[90vh] pb-12"
      role="region"
      aria-label="Hero section"
    >
      {/* Main content container */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 ">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mt-6 md:mt-0">
            Zenstreet <br />
            Your <span className="text-[#007BA7]">Growth</span> Partner.
          </h1>
          <p className="text-black text-lg md:text-xl lg:text-2xl font-medium">
            Build your own clinic with Zenstreet and double your billable hours,
            boost your income by ₹6,00,000 today!
          </p>
          <Link 
            href="/landing-form" 
            className="inline-block"
            aria-label="Get started with Zenstreet"
          >
            <button 
              className="bg-[#007BA7] hover:bg-[#006688] active:bg-[#005577] transition-colors duration-300 text-white font-semibold px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#007BA7] focus:ring-offset-2 cursor-pointer"
            >
              Get Started!
            </button>
          </Link>
        </div>

        {/* Desktop Testimonials Carousel */}
        <div className="hidden md:flex w-1/2 justify-end items-center">
          {isLoading ? (
            <TestimonialSkeleton isMobile={false} />
          ) : (
            <TestimonialCarousel
              testimonials={testimonials}
              isMobile={false}
              isHovered={isHovered}
              onHoverChange={handleHoverChange}
            />
          )}
        </div>
      </div>

      {/* Mobile Testimonials Carousel */}
      <div className="md:hidden w-full mt-8">
        {isLoading ? (
          <TestimonialSkeleton isMobile={true} />
        ) : (
          <TestimonialCarousel
            testimonials={testimonials}
            isMobile={true}
            isHovered={isHovered}
            onHoverChange={handleHoverChange}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSectionOne;
