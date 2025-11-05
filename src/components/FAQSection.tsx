"use client";

import React, { useState } from 'react';
import { PartnershipModal } from './PartnershipModal';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Mijn EV laadt tot 100%, waarom kan mijn e-bike dat niet?",
      answer: "Uw EV laadt niet echt tot 100% celspanning. De meeste voertuigen hebben een boven- en onderbuffer ingebouwd om klachten van klanten te voorkomen. Tesla staat bijvoorbeeld wel toe om naar een echte 100% te laden voor trips, maar zet dit automatisch terug naar veiligere laadniveaus."
    },
    {
      question: "Mijn e-bike batterij heeft al een Battery Management System (BMS), waarom heb ik BetterE nodig?",
      answer: "Een standaard BMS beschermt tegen extreme situaties, maar richt zich niet op het verlengen van de levensduur. BetterE gaat verder: het optimaliseert laadcycli, laadstromen en temperaturen, waardoor batterijdegradatie aanzienlijk vermindert en uw batterij langer meegaat."
    },
    {
      question: "Hoe voorkomt BetterE brand?",
      answer: "BetterE bewaakt continu het laadproces. Bij afwijkende omstandigheden zoals te hoge temperatuur of onveilige spanning wordt het laden gestopt en de gebruiker gewaarschuwd. Zo wordt de kans op oververhitting en brand geminimaliseerd."
    },
    {
      question: "Een laadlimiet verkleint mijn bereik, wat is het voordeel?",
      answer: "Het beperken van de laadcapaciteit verkleint het bereik iets, maar levert veel voordelen op: een langere levensduur van de batterij, meer veiligheid, lagere kosten en minder e-waste. Het volledige bereik kunt u nog steeds gebruiken wanneer dat echt nodig is – voor een optimale balans tussen prestaties en duurzaamheid."
    }
  ];

  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);

  const sendEmail = async (subject: string, html: string, replyTo?: string) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, html, replyTo }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
    } catch (err) {
      console.error("Send email error", err);
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
    const html = `<h3>Contactverzoek (via FAQ)</h3><p><b>Bedrijf:</b> ${
      data.company
    }</p>${
      data.website ? `<p><b>Website:</b> ${data.website}</p>` : ""
    }<p><b>Contactpersoon:</b> ${data.name}</p><p><b>Email:</b> ${
      data.email
    }</p><p><b>Bericht:</b> ${data.message}</p><p><b>Toestemming gegeven:</b> ${
      data.consent ? "Ja" : "Nee"
    }</p>`;
    await sendEmail("Contactverzoek", html, data.email);
    setIsPartnershipOpen(false);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-center mb-4 sm:mb-6 lg:mb-8">
          Veelgestelde vragen
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 lg:mb-12 px-4">
          Vind antwoorden op veelgestelde vragen over onze diensten
        </p>

        <div className="flex flex-col rounded-2xl py-2 px-2 sm:px-4 lg:px-8 justify-center max-w-4xl mx-auto text-green-600">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                className="w-full py-4 sm:py-5 text-left flex justify-between items-start gap-3 sm:gap-4 border-b border-gray-300 hover:bg-gray-50 px-2 sm:px-4 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-green-600 group-hover:text-black transition-colors duration-200 leading-relaxed">
                  {faq.question}
                </h3>
                <span className="shrink-0 text-green-600 group-hover:text-black transition-colors duration-200 mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              {openQuestion === index && (
                <div className="py-4 sm:py-5 text-foreground font-medium px-2 sm:px-4">
                  <p className="leading-relaxed text-xs sm:text-sm lg:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          <div className="text-center text-gray-500 mt-6 sm:mt-8 lg:mt-10 text-xs sm:text-sm">
            <span>Kan je niet vinden wat je zoekt? </span>
            <PartnershipModal
              open={isPartnershipOpen}
              onOpenChange={setIsPartnershipOpen}
              onSubmit={handlePartnershipSubmit}
              trigger={
                <button className="text-green-600 underline underline-offset-4 hover:text-green-700 transition-colors cursor-pointer">
                  Neem contact op
                </button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;