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
    <footer className="bg-primary/20 py-6 sm:py-8 lg:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="w-full">
          <div className="bg-transparent rounded-lg flex flex-col items-center py-3 sm:py-4 px-4 sm:px-6">
            <a
              href="#hero"
              onClick={handleLogoClick}
              aria-label="Scroll to Hero"
            >
              <img
                src="/BetterE_LOGO7 (2).png"
                alt="BetterE Logo"
                className="h-10 sm:h-12 lg:h-16 w-auto mb-2 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm mb-2 mt-2 sm:mt-4">
          <p>
            &copy; {new Date().getFullYear()} BetterE. Alle rechten
            voorbehouden.
          </p>
        </div>
        {/* Developed by */}
        <div className="text-center text-xs sm:text-sm">
          <p>
            Developed by{" "}
            <a
              href="https://wa.me/923144174625?text=Hello!%20Need%20A%20Website%20Assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              Wasif Ali Khan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
