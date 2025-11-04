"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf, Flame, Zap } from 'lucide-react';
import { PreOrderModal } from './PreOrderModal';

const Hero = () => {
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);

  const openPartnershipModal = () => {
    setIsPartnershipOpen(true);
  };

  const closeModal = () => {
    setIsPartnershipOpen(false);
  };

  const sendEmail = async (subject: string, html: string, replyTo?: string) => {
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, html, replyTo }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      alert('Bericht verzonden!');
      closeModal();
    } catch (err) {
      console.error('Send email error', err);
      alert('Verzenden mislukt. ' + ((err as Error).message || 'Probeer later opnieuw.'));
    }
  };

  // Bullet point data with icons
  const bulletPoints = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Duurzaamheid",
      description: "tot 50% minder e-waste door langere levensduur"
    },
    {
      icon: <Flame className="h-6 w-6" />,
      title: "Veiligheid eerst",
      description: "voorkom brandgevaar door slimme laadlimieten"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Gebruiksgemak",
      description: "plug-and-play - direct inzetbaar zonder gedoe"
    }
  ];

  return (
    <section id="hero" className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
      <div className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl mt-12 sm:mt-14 font-extrabold leading-tight mb-4 sm:mb-6 lg:mb-8 block">
            De Universele Laadlimiet
          </h1>
          <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/90 mb-4 sm:mb-6 lg:mb-8 max-w-2xl">
            BetterE is een universele slimme laadadapter voor e‑bikes, e-steps en e-scooters.
            Verdubbel de acculevensduur, verlaag brandrisico en laad zonder gedoe.
          </p>

          {/* Product Image - Now before icons on mobile */}
          <div className="w-full flex justify-center items-center mb-4 sm:mb-6 lg:hidden">
            <div className="w-full max-w-xs sm:max-w-sm aspect-square flex justify-center items-center">
              <Image
                src="/better_E_product_image.png"
                alt="BetterE Product"
                width={800}
                height={800}
                className="rounded-lg object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-4 sm:mb-6 lg:mb-8">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-primary text-background w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:text-white flex-shrink-0">
                  {point.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">{point.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <PreOrderModal
              open={isPreOrderOpen}
              onOpenChange={setIsPreOrderOpen}
              trigger={
                <button
                  className="bg-primary text-background text-sm sm:text-base lg:text-lg font-semibold py-2.5 sm:py-3 lg:py-4 px-5 sm:px-6 lg:px-8 xl:px-10 rounded-2xl hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto"
                >
                  Pre-order
                </button>
              }
            />
          </div>
        </div>


        {/* Product Image - Desktop only */}  
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square flex justify-center items-center">
            <Image
              src="/better_E_product_image.png"
              alt="BetterE Product"
              width={800}
              height={800}
              className="rounded-lg object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>


      {/* Partnership Modal */}
      {isPartnershipOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
            >
              ✕
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pr-8">Samenwerken met BetterE</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-foreground/90">
              Laat uw bedrijfsgegevens achter en we nemen zo spoedig mogelijk contact met u op.
            </p>
            <form className="space-y-3 sm:space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const company = (form.querySelector('#partnership-company') as HTMLInputElement).value;
              const name = (form.querySelector('#partnership-name') as HTMLInputElement).value;
              const email = (form.querySelector('#partnership-email') as HTMLInputElement).value;
              const phone = (form.querySelector('#partnership-phone') as HTMLInputElement).value;
              const message = (form.querySelector('#partnership-message') as HTMLTextAreaElement).value;
              const html = `<h3>Samenwerkingsverzoek</h3><p><b>Bedrijf:</b> ${company}</p><p><b>Naam:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Telefoon:</b> ${phone}</p><p><b>Bericht:</b> ${message}</p>`;
              await sendEmail('Samenwerkingsverzoek', html, email);
            }}>
              <div>
                <label htmlFor="partnership-company" className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="partnership-company"
                  className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="partnership-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Contactpersoon
                </label>
                <input
                  type="text"
                  id="partnership-name"
                  className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="partnership-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="partnership-email"
                  className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="partnership-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="partnership-phone"
                  className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="partnership-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="partnership-message"
                  rows={3}
                  className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base resize-none"
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-background text-sm sm:text-base font-semibold py-3 sm:py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  Verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
