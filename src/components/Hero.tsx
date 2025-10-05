"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Lock, Zap } from 'lucide-react';

const Hero = () => {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);

  const openPreOrderModal = () => {
    setIsPreOrderOpen(true);
    setIsPartnershipOpen(false);
  };

  const openPartnershipModal = () => {
    setIsPartnershipOpen(true);
    setIsPreOrderOpen(false);
  };

  const closeModal = () => {
    setIsPreOrderOpen(false);
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
      icon: <Heart className="h-6 w-6" />,
      title: "Duurzaamheid",
      description: "tot 50% minder e-waste door langere levensduur"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Veiligheid eerst",
      description: "intelligente laadlimieten en thermische bescherming"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Gebruiksgemak",
      description: "plug-and-play - direct inzetbaar zonder gedoe"
    }
  ];

  return (
    <section className="hero-section pt-20">
      <div className="max-w-[1400px] mx-auto w-full px-4 pt-12 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="mb-8 lg:mb-0 lg:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-nowrap font-extrabold leading-tight mb-4">
            De Universele Laadlimiet
          </h1>
          <p className="text-medium text-gray-600 mb-6 max-w-2xl">
            BetterE is een universele slimme laadadapter voor e‑bikes, e-steps en e-scooters.
            Verdubbel de acculevensduur, verlaag brandrisico en laad zonder gedoe.
          </p>

          <div className="space-y-5 mb-6">
            {bulletPoints.map((point, index) => (
              <div key={index} className="bullet-point flex items-start">
                <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:text-white">
                  {point.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openPreOrderModal}
              className="btn-primary text-lg"
            >
              Pre-order
            </button>
            <button
              onClick={openPartnershipModal}
              className="btn-secondary text-lg"
            >
              Retail & verzekeraars
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg aspect-square flex justify-center item-center">
            <Image
              src="/better_E_product_image.png"
              alt="BetterE Product"
              width={800}
              height={800}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Pre-order Modal */}
      {isPreOrderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Pre-order BetterE</h2>
            <p className="mb-4 text-gray-600">
              Laat uw gegevens achter en ontvang updates over de beschikbaarheid en levering.
            </p>
            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const name = (form.querySelector('#preorder-name') as HTMLInputElement).value;
              const email = (form.querySelector('#preorder-email') as HTMLInputElement).value;
              const phone = (form.querySelector('#preorder-phone') as HTMLInputElement).value;
              const message = (form.querySelector('#preorder-message') as HTMLTextAreaElement).value;
              const html = `<h3>Pre-order aanvraag</h3><p><b>Naam:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Telefoon:</b> ${phone}</p><p><b>Bericht:</b> ${message}</p>`;
              await sendEmail('Pre-order aanvraag', html, email);
            }}>
              <div>
                <label htmlFor="preorder-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam
                </label>
                <input
                  type="text"
                  id="preorder-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Uw naam"
                />
              </div>
              <div>
                <label htmlFor="preorder-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="preorder-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Uw e-mailadres"
                />
              </div>
              <div>
                <label htmlFor="preorder-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="preorder-phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Uw telefoonnummer"
                />
              </div>
              <div>
                <label htmlFor="preorder-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="preorder-message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Laat een bericht achter over uw verwachtingen..."
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Partnership Modal */}
      {isPartnershipOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Samenwerken met BetterE</h2>
            <p className="mb-4 text-gray-600">
              Laat uw bedrijfsgegevens achter en we nemen zo spoedig mogelijk contact met u op.
            </p>
            <form className="space-y-4" onSubmit={async (e) => {
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Naam van uw bedrijf"
                />
              </div>
              <div>
                <label htmlFor="partnership-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Contactpersoon
                </label>
                <input
                  type="text"
                  id="partnership-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Uw naam"
                />
              </div>
              <div>
                <label htmlFor="partnership-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="partnership-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Uw e-mailadres"
                />
              </div>
              <div>
                <label htmlFor="partnership-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="partnership-phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Uw telefoonnummer"
                />
              </div>
              <div>
                <label htmlFor="partnership-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="partnership-message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Laat een bericht achter over uw samenwerkingsidee..."
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full"
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
