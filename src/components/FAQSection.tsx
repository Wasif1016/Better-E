"use client";

import React, { useState } from 'react';

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

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Veelgestelde vragen</h2>
        
        <div className="max-w-3xl mx-auto mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;