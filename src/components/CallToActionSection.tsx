"use client";

import React, { useState } from 'react';
import { PreOrderModal } from './PreOrderModal';
import { PartnershipModal } from './PartnershipModal';
import { Toast } from './Toast';

const CallToActionSection = () => {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

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
    setIsPartnershipOpen(false);
  };

  return (
    <section id="cta" className="pt-6 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-background mb-6 sm:mb-8 lg:mb-12">
            BetterE voor jou
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 1st */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Consumenten</h3>
              <p className="text-foreground/90 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base">
                Wil jij als eerste de BetterE-adapter gebruiken?
              </p>
              <PreOrderModal
                open={isPreOrderOpen}
                onOpenChange={setIsPreOrderOpen}
                trigger={
                  <button className="text-background bg-foreground rounded-md border py-2 sm:py-3 hover:bg-primary cursor-pointer transition duration-200 w-full text-sm sm:text-base font-medium">
                    Pre-order
                  </button>
                }
              />
            </div>

            {/* Retailers */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Retailers/Verkopers</h3>
              <p className="text-foreground/90 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base">
                Voeg BetterE toe aan je assortiment.
              </p>
              <PartnershipModal
                open={isPartnershipOpen}
                onOpenChange={setIsPartnershipOpen}
                onSubmit={handlePartnershipSubmit}
                trigger={
                  <button className="text-background bg-foreground rounded-md border py-2 sm:py-3 hover:bg-primary cursor-pointer transition duration-200 w-full text-sm sm:text-base font-medium">
                    Wordt verkoper
                  </button>
                }
              />
            </div>

            {/* Partnerships */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Samenwerkingen</h3>
              <p className="text-foreground/90 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base">
                Voor verzekeraars, fleet operators en organisaties.
              </p>
              <PartnershipModal
                open={isPartnershipOpen}
                onOpenChange={setIsPartnershipOpen}
                onSubmit={handlePartnershipSubmit}
                trigger={
                  <button className="text-background bg-foreground rounded-md border py-2 sm:py-3 hover:bg-primary cursor-pointer transition duration-200 w-full text-sm sm:text-base font-medium">
                    Samenwerken
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default CallToActionSection;