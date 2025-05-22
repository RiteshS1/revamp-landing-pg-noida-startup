import React from "react";
import Image from "next/image";
import Why_img from "../../public/why_img.png";

const WhyUsSection: React.FC = () => {
  return (
   <div id="whyUs" className="flex flex-col py-16 gap-16 items-center bg-[#F2FBFF]">
    <h1 className="text-[#007BA7] text-4xl font-medium tracking-wider">Why we are better?</h1>
    <Image src={Why_img} alt=""></Image>
   </div>
   
  );
};

export default WhyUsSection;
