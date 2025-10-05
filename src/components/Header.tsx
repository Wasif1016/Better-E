"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
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

  return (
    <>
      <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-14 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/BetterE_LOGO7 (2).png" 
              alt="BetterE Logo" 
              width={120} 
              height={40} 
              className="object-contain h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['Probleem', 'Oplossing', 'Impact', 'Partners', 'Team', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="nav-link text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={openPreOrderModal}
              className="btn-primary text-sm"
            >
              Pre-order
            </button>
            <button 
              onClick={openPartnershipModal}
              className="btn-secondary text-sm"
            >
              Retail & verzekeraars
            </button>
          </div>
        </div>
      </header>

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
                  className="w-full px-3  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
    </>
  );
};

export default Header;