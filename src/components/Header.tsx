"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PartnershipModal } from "./PartnershipModal";
import { Toast } from "./Toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [partnershipOpen, setPartnershipOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-[2rem] py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/BetterE_LOGO7 (2).png"
              alt="BetterE Logo"
              width={120}
              height={40}
              className="object-contain h-10 w-auto"
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
            <button className="cursor-pointer py-2 px-5 bg-primary text-background rounded-lg hover:bg-primary/80 border-2 border-primary">
              Pre-order
            </button>
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
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="px-4 py-4 space-y-3 border-t border-gray-100">
              <PartnershipModal
                open={partnershipOpen}
                onOpenChange={setPartnershipOpen}
                onSubmit={handlePartnershipSubmit}
                trigger={
                  <button
                    className="w-full btn-secondary text-sm py-2"
                    onClick={closeMenu}
                  >
                    Samenwerken
                  </button>
                }
              />
            </div>
          </div>
        )}
      </header>

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
