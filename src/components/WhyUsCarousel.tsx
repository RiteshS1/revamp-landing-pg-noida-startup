"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import carousel_img1 from "../../public/carousel_img1.png";
import carousel_img2 from "../../public/carousel_img2.png";
import carousel_img3 from "../../public/carousel_img3.png";
import carousel_img4 from "../../public/carousel_img4.png";
import carousel_img5 from "../../public/carousel_img5.png";
import carousel_img6 from "../../public/carousel_img6.png";
import carousel_trigger_left from "../../public/carousel_trigger_left.png";
import carousel_trigger_right from "../../public/carousel_trigger_right.png";

interface WhyUsCarouselProps {
  showButtons?: boolean;
  bg?: string;
}

const slides = [
  {
    id: 1,
    title: "Centralized Notes Management",
    image: carousel_img1,
  },
  {
    id: 2,
    title: "Smart Progress Tracking",
    image: carousel_img2,
  },
  {
    id: 3,
    title: "Free Payment Gateway",
    image: carousel_img3,
  },
  {
    id: 4,
    title: "Free Dediacted Mini Website",
    image: carousel_img4,
  },
  {
    id: 5,
    title: "Smart Booking System",
    image: carousel_img5,
  },
  {
    id: 6,
    title: "24/7 On Demand Support",
    image: carousel_img6,
  },
];

const WhyUsCarousel: React.FC<WhyUsCarouselProps> = ({
  showButtons = true,
  bg,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${
        bg === "none" ? "" : "bg-gradient-to-b to-[#80a6c2e5] from-white"
      } pt-10 mt-14 pb-30`}
    >
      <div className="w-full md:w-150 h-auto md:h-120 flex items-center justify-between relative px-4 md:px-0">
        {showButtons && (
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0  text-4xl md:text-6xl  hover:scale-110 transition-transform z-10"
          >
            <Image src={carousel_trigger_left} alt="" className="w-8 h-8 md:w-auto md:h-auto"></Image>
          </button>
        )}
        <div className="transition-all duration-500 ease-in-out w-full flex justify-center md:mx-2 ">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            width={1000}
            height={1200}
            className="object-contain w-full max-w-[90vw] md:max-w-none md:w-auto"
          />
        </div>
        {showButtons && (
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-0 text-4xl md:text-6xl hover:scale-110 transition-transform z-10"
          >
            <Image src={carousel_trigger_right} alt="" className="w-8 h-8 md:w-auto md:h-auto"></Image>
          </button>
        )}
      </div>

      <p className="mt-4 text-xl md:text-2xl font-medium text-black tracking-wider text-center px-4">
        {slides[current].title}
      </p>

      <div className="mt-8 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className="relative w-5 h-5">
            <div
              className={`absolute inset-0 m-auto rounded-full transition-all duration-300 ${
                index === current
                  ? "w-4 h-4 bg-[#007BA7]"
                  : "w-2.5 h-2.5 bg-[#007BA7]"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsCarousel;
