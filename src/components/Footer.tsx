"use client";
import React from 'react';

const Footer = () => {
  // Scroll to the very top of the page when logo is clicked
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>) => {
    e.preventDefault();
    // Try to scroll to the hero section, fallback to top if not found
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      // Scroll to the very top of the hero section
      window.scrollTo({ top: heroSection.offsetTop, behavior: 'smooth' });
    } else {
      // Fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <div className="w-full border-t border-black mb-4"></div>
          <div className="bg-transparent rounded-lg flex flex-col items-center py-4 px-6">
            <a href="#hero" onClick={handleLogoClick} aria-label="Scroll to Hero">
              <img
                src="/BetterE_LOGO7 (2).png"
                alt="BetterE Logo"
                className="h-16 w-auto mb-2 cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-400 mb-2">
          <p>&copy; {new Date().getFullYear()} BetterE. Alle rechten voorbehouden.</p>
        </div>
        {/* Developed by */}
        <div className="text-center text-gray-500 text-sm">
          <p>Developed by Wasif Ali Khan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;