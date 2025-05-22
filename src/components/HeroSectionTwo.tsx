import React from "react";
import Image from "next/image";
import hero_img from "../../public/hero_img.png";
import Link from "next/link";

const HeroSectionTwo: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28 gap-8 lg:gap-20 bg-[#ACE8FF] py-8 lg:pb-16 ">
      <div className="flex flex-col gap-6 lg:gap-10 mt-0 lg:mt-10 text-center lg:text-left">
        <div className="">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">
            Get Started In No Time
          </h1>
          <p className="text-black mb-6 max-w-2xl font-medium text-lg sm:text-xl mx-auto lg:mx-0">
            Ditch therapy marketplaces, build your own clinic and double your
            billable hours - boost your income by ₹6,00,000 today!
          </p>
        </div>
        <Link href="/landing-form" className="flex justify-center lg:justify-start">
          <button className="bg-[#007BA7] cursor-pointer text-white font-semibold px-8 sm:px-12 lg:px-16 py-3 lg:py-4 rounded-full text-sm sm:text-base  sm:w-auto">
            Get Started!
          </button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none">
          <Image 
            src={hero_img} 
            alt="Hero illustration" 
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
