"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PartnershipModal } from "./PartnershipModal";
import { PreOrderModal } from "./PreOrderModal";
import { Toast } from "./Toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [partnershipOpen, setPartnershipOpen] = useState(false);
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const sendEmail = async (subject: string, html: string, replyTo?: string) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, html, replyTo }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setToast({ message: "Bericht verzonden!", type: 'success' });
    } catch (err) {
      console.error("Send email error", err);
      setToast({ 
        message: "Verzenden mislukt. " + ((err as Error).message || "Probeer later opnieuw."),
        type: 'error'
      });
    }
  };

  const handlePartnershipSubmit = async (data: {
    company: string;
    website: string;
    name: string;
    email: string;
    message: string;
    consent: boolean;
  }) => {
    const html = `<h3>Samenwerkingsverzoek</h3><p><b>Bedrijf:</b> ${
      data.company
    }</p>${
      data.website ? `<p><b>Website:</b> ${data.website}</p>` : ""
    }<p><b>Contactpersoon:</b> ${data.name}</p><p><b>Email:</b> ${
      data.email
    }</p><p><b>Bericht:</b> ${data.message}</p><p><b>Toestemming gegeven:</b> ${
      data.consent ? "Ja" : "Nee"
    }</p>`;
    await sendEmail("Samenwerkingsverzoek", html, data.email);
    setPartnershipOpen(false);
  };

  const navItems = [
    "Probleem",
    "Gebruik",
    "Oplossing",
    "Impact",
    "Partners",
    "Team",
    "FAQ",
  ];

  return (
    <>
      <header 
        className={`fixed w-full bg-background text-foreground z-50 border-b transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'md:translate-y-0 -translate-y-full' : (isVisible ? 'translate-y-0' : '-translate-y-full')
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/BetterE_LOGO7 (2).png"
              alt="BetterE Logo"
              width={120}
              height={40}
              className="object-contain h-7 sm:h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3">
            <PreOrderModal
              open={preOrderOpen}
              onOpenChange={setPreOrderOpen}
              trigger={
                <button className="cursor-pointer py-2 px-5 bg-primary text-background rounded-lg hover:bg-primary/80 border-2 border-primary">
                  Pre-order
                </button>
              }
            />
            <PartnershipModal
              open={partnershipOpen}
              onOpenChange={setPartnershipOpen}
              onSubmit={handlePartnershipSubmit}
              trigger={
                <button className="cursor-pointer py-2 px-5 bg-background text-foreground border-2 border-foreground rounded-lg hover:bg-gray-100">
                  Samenwerken
                </button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none z-[100] relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu - Full screen overlay - Outside header */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black z-[9999] flex flex-col"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
        >
          {/* Close button - Top right */}
          <div className="absolute top-6 right-6 z-[10000]">
            <button
              onClick={closeMenu}
              className="text-white hover:text-gray-300 focus:outline-none transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={2.5} />
            </button>
          </div>
          
          {/* Navigation items - centered vertically */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 sm:space-y-8 px-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white text-2xl sm:text-3xl font-medium hover:text-gray-300 transition-colors text-center"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Bottom button - Only Samenwerken */}
          <div className="px-4 py-6 sm:py-8 border-t border-gray-800">
            <PartnershipModal
              open={partnershipOpen}
              onOpenChange={setPartnershipOpen}
              onSubmit={handlePartnershipSubmit}
              trigger={
                <button
                  className="w-full bg-white text-black text-base sm:text-lg font-semibold py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={closeMenu}
                >
                  Samenwerken
                </button>
              }
            />
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default Header;
