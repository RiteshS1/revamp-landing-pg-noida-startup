"use client"; 

import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      // Hide navbar when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false); // Close menu on click
    const hash = `#${sectionId}`;

    if (pathname !== "/") {
      router.push(`/${hash}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { id: "offer", label: "What we offer!" },
    { id: "help", label: "How can we help!" },
    { id: "whyUs", label: "Why Us!" },
    { id: "who", label: "Our Story" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/zenstreet" },
    { icon: Facebook, href: "https://facebook.com/zenstreet" },
    { icon: Instagram, href: "https://instagram.com/zenstreet" },
    { icon: Twitter, href: "https://twitter.com/zenstreet" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <Image 
                src={logo} 
                alt="Zenstreet.AI" 
                className="h-12 w-auto md:h-16"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-700 hover:text-[#007BA7] text-base lg:text-lg font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-[#007BA7] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Add a spacer div to prevent content jump when navbar becomes fixed */}
      <div className="h-16 md:h-20" />

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen z-50 w-[280px] bg-[#007BA7] text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className=" overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-4 border-t border-white/10">
            <p className="text-sm text-white/80 mb-3">Follow us on</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label={`Visit our ${social.icon.name} page`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;