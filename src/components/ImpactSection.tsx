"use client";

import React, { useState } from 'react';

const ImpactSection = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Stats data
  const stats = [
    { value: "1,5-2x", label: "Levensduurverlenging" },
    { value: "50%", label: "Minder e-waste" },
    { value: "€38M", label: "Potentiële besparing Zuid-NL" },
    { value: "4,18M kg", label: "Minder grondstoffen" }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Gemeten Impact</h2>
        <p className="section-subtitle">
          Onderzoek toont aan dat BetterE haalbaar is, inspeelt op een duidelijke behoefte en bijdraagt aan een duurzamere wereld.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Detailed Impact Points */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">Haalbaarheid</h3>
            <p className="text-gray-600 mb-3">
              BetterE is technologisch, economisch en commercieel haalbaar.
            </p>
            <button 
              className={`dropdown-button ${openDropdown === 'feasibility' ? 'open' : ''}`}
              onClick={() => toggleDropdown('feasibility')}
            >
              Lees meer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`dropdown-content ${openDropdown === 'feasibility' ? 'open' : ''}`}>
              <p className="text-gray-600 mt-2">
                Uit een MIT-haalbaarheidsstudie is gebleken dat BetterE technologisch, economisch en commercieel haalbaar is. 
                De technologie richt zich op het beperken van batterijdegradatie, die vooral wordt veroorzaakt door chemische nevenreacties 
                zoals elektrolyt-afbraak en SEI-vorming. Door optimale laadcycli, laadstromen en temperaturen toe te passen kan deze 
                degradatie sterk worden teruggedrongen.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">Grote marktbehoefte</h3>
            <p className="text-gray-600 mb-3">
              Miljoenen e-bike gebruikers herkennen het probleem van batterijdegradatie.
            </p>
            <button 
              className={`dropdown-button ${openDropdown === 'demand' ? 'open' : ''}`}
              onClick={() => toggleDropdown('demand')}
            >
              Lees meer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`dropdown-content ${openDropdown === 'demand' ? 'open' : ''}`}>
              <p className="text-gray-600 mt-2">
                Nederland telt inmiddels ruim 5 miljoen e-bikes, waarvan er in 2024 meer dan 453.000 nieuw zijn verkocht (56% van alle fietsen). 
                Uit marktonderzoek blijkt dat 75% van de gebruikers het probleem van batterijdegradatie herkent. Maar liefst 98% toont interesse 
                in een oplossing die de levensduur kan verlengen, terwijl 47% aangeeft ontevreden te zijn over de huidige prestaties van hun batterij.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">Meetbare impact</h3>
            <p className="text-gray-600 mb-3">
              BetterE verlengt de levensduur van batterijen met 1,5 tot 2 keer.
            </p>
            <button 
              className={`dropdown-button ${openDropdown === 'measurable' ? 'open' : ''}`}
              onClick={() => toggleDropdown('measurable')}
            >
              Lees meer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`dropdown-content ${openDropdown === 'measurable' ? 'open' : ''}`}>
              <p className="text-gray-600 mt-2">
                BetterE kan de levensduur van e-bike batterijen met 1,5 tot 2 keer verlengen – een verbetering van minstens 50%. 
                Dit levert een aanzienlijke besparing op van kritieke grondstoffen: naar schatting 4,18 miljoen kilo kobalt, nikkel, 
                lithium, grafiet en mangaan minder in Nederland, elke vijf jaar. Tegelijkertijd daalt de CO₂-uitstoot doordat er 
                minder nieuwe batterijen geproduceerd hoeven te worden.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">Economische waarde</h3>
            <p className="text-gray-600 mb-3">
              Gebruikers besparen miljoenen op batterijvervanging.
            </p>
            <button 
              className={`dropdown-button ${openDropdown === 'economic' ? 'open' : ''}`}
              onClick={() => toggleDropdown('economic')}
            >
              Lees meer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`dropdown-content ${openDropdown === 'economic' ? 'open' : ''}`}>
              <p className="text-gray-600 mt-2">
                Voor e-bike gebruikers in Zuid-Nederland alleen al betekent dit een potentiële kostenbesparing van €38,3 miljoen. 
                BetterE bewijst daarmee dat de technologie niet alleen duurzaam en veilig is, maar ook economisch aantrekkelijk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;