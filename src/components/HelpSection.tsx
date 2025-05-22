import React from "react";
import help_img_1 from "../../public/help_img_1.png";
import help_img_2 from "../../public/help_img_2.png";
import help_img_3 from "../../public/help_img_3.png";
import help_img_4 from "../../public/help_img_4.png";
import Image from "next/image";

const HelpSection: React.FC = () => {
  return (
    <div id="help" className="flex flex-col gap-8 md:gap-16 lg:gap-20 justify-center items-center py-10 md:py-20 px-4 md:px-8 lg:px-16 bg-[#dbe8f1]">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] max-w-[500px] mx-auto">
            <Image 
              src={help_img_1} 
              alt="Own your brand illustration" 
              fill
              className="object-contain w-full h-full"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-7 items-center lg:items-start justify-center w-full lg:w-1/2 order-1 lg:order-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-center lg:text-left">Own your brand!</h1>
          <p className="text-base md:text-lg tracking-wider text-center lg:text-left">
            You&apos;ve spent years mastering psychology and forging meaningful
            connections, yet tele - platforms dictate your terms and earnings.
            It&apos;s time to break free. Let your expertise take center stage while
            Zenstreet handles the rest.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-7xl">
        <div className="flex flex-col gap-4 lg:gap-7 items-center lg:items-start justify-center w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-center lg:text-left">Fill more slots!</h1>
          <p className="text-base md:text-lg tracking-wider text-center lg:text-left">
            Why choose Zenstreet? We go beyond just branding—we double your
            billable hours by streamlining scheduling, payments, progress
            tracking and more so that you book more clients, and grow your
            practice with ease!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] max-w-[500px] mx-auto">
            <Image 
              src={help_img_2} 
              alt="Fill more slots illustration" 
              fill
              className="object-contain w-full h-full"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] max-w-[500px] mx-auto">
            <Image 
              src={help_img_3} 
              alt="Focus on care illustration" 
              fill
              className="object-contain w-full h-full"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-7 items-center lg:items-start justify-center w-full lg:w-1/2 order-1 lg:order-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-center lg:text-left">Focus on care!</h1>
          <p className="text-base md:text-lg tracking-wider text-center lg:text-left">
            And with Zenstreet managing your front and back office, you can
            focus on what truly matters—your clients. Simply log in, check your
            schedule, engage with your clients, and log out—Zenstreet takes care
            of the rest.
          </p>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-7xl">
        <div className="flex flex-col gap-4 lg:gap-7 items-center lg:items-start justify-center w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-center lg:text-left">Not on Costs!</h1>
          <p className="text-base md:text-lg tracking-wider text-center lg:text-left">
            At Zenstreet, we prioritize relationships and your success over
            profits. With zero upfront cost and no subscription fees, our
            incentives align with yours—We succeed when you succeed!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] max-w-[500px] mx-auto">
            <Image 
              src={help_img_4} 
              alt="Not on costs illustration" 
              fill
              className="object-contain w-full h-full"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
