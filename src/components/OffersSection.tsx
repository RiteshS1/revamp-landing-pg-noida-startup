import React from "react";
import offer_img_1 from "../../public/offer_img_1.png";
import offer_img_2 from "../../public/offer_img_2.png";
import offer_img_3 from "../../public/offer_img_3.png";
import arrow from "../../public/arrow.png";
import Image from "next/image";

const OffersSection: React.FC = () => {
  return (
    <div 
      id="offer" 
      className="flex flex-col justify-center items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white  mx-auto"
   
    >
      <div className="flex flex-col mb-10 items-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto text-center">
        <h1 className="text-[#007BA7] text-2xl sm:text-3xl md:text-4xl font-medium tracking-wider">
          Your Problem, Our Solutio
        </h1>
        <p className="text-black text-base sm:text-lg tracking-wide font-normal max-w-2xl">
          You are juggling endless admin tasks with client care, while clinics
          steal control and levy high commissions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-full max-w-[250px] sm:max-w-[300px]">
          <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px]">
            <Image 
              src={offer_img_1} 
              alt="High commission payment illustration"
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px"
              className="object-contain"
              loading="lazy"
              quality={85}
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-center font-medium tracking-wide px-4">
            Pay High Commissions and get new clients from various platforms.
          </p>
        </div>

        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rotate-90 lg:rotate-0">
          <Image 
            src={arrow} 
            alt="Arrow pointing to next step"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-full max-w-[250px] sm:max-w-[300px]">
          <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px]">
            <Image 
              src={offer_img_2} 
              alt="Branded website illustration"
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px"
              className="object-contain"
              loading="lazy"
              quality={85}
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-center font-medium tracking-wide px-4">
            Post first session, send them link of your own Branded website supported by Zenstreet.
          </p>
        </div>

        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rotate-90 lg:rotate-0">
          <Image 
            src={arrow} 
            alt="Arrow pointing to next step"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-full max-w-[250px] sm:max-w-[300px]">
          <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px]">
            <Image 
              src={offer_img_3} 
              alt="Income growth illustration"
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px"
              className="object-contain"
              loading="lazy"
              quality={85}
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-center font-medium tracking-wide px-4">
            Cut the middleman and double your income, by up to 6 lakhs today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
