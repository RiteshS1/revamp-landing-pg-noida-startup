import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import insta_icon from "../../public/insta_icon.png";
import twitter_icon from "../../public/twitter_icon.png";
import LinkedIn_icon from "../../public/LinkedIn_icon.png";

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="w-full">
      {children}
      <div id="who" className="flex justify-end"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 py-12">
          {/* Left Section */}
          <div className="flex flex-col gap-8 lg:gap-20 max-w-2xl">
            <Link href="/" className="cursor-pointer">
              <Image 
                src={logo} 
                alt="Zenstreet Logo" 
                height={100} 
                width={200}
                className="w-auto h-auto"
                priority
              />
            </Link>

            <p className="text-base lg:text-lg text-gray-600 tracking-wide leading-relaxed">
              Zenstreet is ₹0 subscription all-in-one{" "}
              <span className="font-medium">health-tech SaaS platform</span>{" "}
              dedicated to transforming care delivery. At Zenstreet, we believe in
              revolutionizing the way mental health care is delivered, making it
              more accessible, effective, and rewarding for both{" "}
              <span className="font-medium">therapists</span> and{" "}
              <span className="font-medium">patients</span>.
            </p>
            
            <footer className="text-sm font-semibold mt-4 lg:mt-10">
              <span className="text-2xl mr-2">&#169;</span>
              2025 Zenstreet, a product by ISAZEN TECHNOLOGIES PVT LTD. All Rights
              Reserved.
            </footer>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8 lg:gap-13 mt-8 lg:mt-0">
            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl lg:text-2xl">Follow us on</h2>
              <div className="flex gap-6">
                <Link href="https://www.linkedin.com/company/zenstreetai" aria-label="LinkedIn">
                  <Image
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    width={30}
                    height={30}
                    src={LinkedIn_icon}
                    alt="LinkedIn"
                  />
                </Link>
                <Link href="" aria-label="Twitter">
                  <Image
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    width={30}
                    height={30}
                    src={twitter_icon}
                    alt="Twitter"
                  />
                </Link>
                <Link href="https://www.instagram.com/zenstreet.ai/" aria-label="Instagram">
                  <Image
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    width={30}
                    height={30}
                    src={insta_icon}
                    alt="Instagram"
                  />
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-xl lg:text-2xl">Contact Us</h2>
              <p className="text-lg lg:text-xl">
                <Link 
                  href="mailto:sales@zenstreet.ai"
                  className="hover:text-gray-700 transition-colors"
                >
                  <u>sales@zenstreet.ai</u>
                </Link>
              </p>
            </div>

            {/* Careers Section */}
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-xl lg:text-2xl">Careers</h2>
              <p className="text-lg lg:text-xl">
                <Link 
                  href="mailto:people@zenstreet.ai"
                  className="hover:text-gray-700 transition-colors"
                >
                  <u>people@zenstreet.ai</u>
                </Link>
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-6 lg:gap-10 mt-4">
              <Link 
                href="/terms-conditions/tnc"
                className="hover:text-gray-700 transition-colors"
              >
                <p className="underline">TnC&Pricing</p>
              </Link>
              <Link 
                href="/terms-conditions/privacy"
                className="hover:text-gray-700 transition-colors"
              >
                <p className="underline">Privacy</p>
              </Link>
              <Link 
                href="/terms-conditions/ourStory"
                className="hover:text-gray-700 transition-colors"
              >
                <p className="underline">OurStory</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
