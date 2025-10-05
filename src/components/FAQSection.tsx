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
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <h2 className="text-6xl md:text-4xl font-extrabold tracking-tight text-center">Veelgestelde vragen</h2>
        <p className="text-center text-gray-500 mt-2">Vind antwoorden op veelgestelde vragen over onze diensten</p>

        <div className="flex flex-col rounded-2x py-2 px-10 justify-center max-w-4xl mx-auto text-green-600 ">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                className="w-full py-5 text-left flex justify-between items-center gap-6 border-b border-black hover:bg-gray-50 px-1 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium text-green-600 group-hover:text-black transition-colors duration-200">{faq.question}</h3>
                <span className="shrink-0 text-green-600 group-hover:text-black transition-colors duration-200">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              {openQuestion === index && (
                <div className="py-5 text-foreground font-medium">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          <div className="text-center text-gray-500 mt-10">
            <span>Kan je niet vinden wat je zoekt? </span>
            <a href="#contact" className="text-green-600 underline underline-offset-4">Neem contact op</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;