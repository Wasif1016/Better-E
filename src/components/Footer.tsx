"use client";
import React from "react";

const Footer = () => {
  // Scroll to the very top of the page when logo is clicked
  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>
  ) => {
    e.preventDefault();
    // Try to scroll to the hero section, fallback to top if not found
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      // Scroll to the very top of the hero section
      window.scrollTo({ top: heroSection.offsetTop, behavior: "smooth" });
    } else {
      // Fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary/20 py-8 md:py-12">
      <div className="max-w-[1500px] mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="w-full">
          <div className="bg-transparent rounded-lg flex flex-col items-center py-4 px-6">
            <a
              href="#hero"
              onClick={handleLogoClick}
              aria-label="Scroll to Hero"
            >
              <img
                src="/BetterE_LOGO7 (2).png"
                alt="BetterE Logo"
                className="h-12 md:h-16 w-auto mb-2 cursor-pointer"
              />
            </a>
          </div>
        </div>


        {/* Copyright */}
        <div className="text-center  text-sm mb-2 mt-4">
          <p>
            &copy; {new Date().getFullYear()} BetterE. Alle rechten
            voorbehouden.
          </p>
        </div>
        {/* Developed by */}
        <div className="text-center    text-xs md:text-sm">
          <p>Developed by Wasif Ali Khan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
