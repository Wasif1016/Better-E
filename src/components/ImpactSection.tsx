"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ImpactSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Impact features data
  const impactFeatures = [
    {
      id: "feasibility",
      title: "Haalbaarheid",
      subtitle:
        "BetterE is technologisch, economisch en commercieel haalbaar.",
      content:
        "Uit een MIT-haalbaarheidsstudie is gebleken dat BetterE technologisch, economisch en commercieel haalbaar is. De technologie richt zich op het beperken van batterijdegradatie, die vooral wordt veroorzaakt door chemische nevenreacties zoals elektrolyt-afbraak en SEI-vorming. Door optimale laadcycli, laadstromen en temperaturen toe te passen kan deze degradatie sterk worden teruggedrongen.",
    },
    {
      id: "demand",
      title: "Grote marktvraag",
      subtitle:
        "Miljoenen e-bike gebruikers herkennen het probleem van batterijdegradatie.",
      content:
        "Nederland telt inmiddels ruim 5 miljoen e-bikes, waarvan er in 2024 meer dan 453.000 nieuw zijn verkocht (56% van alle fietsen). Uit marktonderzoek blijkt dat 75% van de gebruikers het probleem van batterijdegradatie herkent. Maar liefst 98% toont interesse in een oplossing die de levensduur kan verlengen, terwijl 47% aangeeft ontevreden te zijn over de huidige prestaties van hun batterij.",
    },
    {
      id: "measurable",
      title: "Meetbare impact",
      subtitle: "BetterE verlengt de levensduur van batterijen met 1,5 tot 2×.",
      content:
        "BetterE kan de levensduur van e-bike batterijen met 1,5 tot 2 keer verlengen – een verbetering van minstens 50%. Dit levert een aanzienlijke besparing op van kritieke grondstoffen: naar schatting 4,18 miljoen kilo kobalt, nikkel, lithium, grafiet en mangaan minder in Nederland, elke vijf jaar. Tegelijkertijd daalt de CO₂-uitstoot doordat er minder nieuwe batterijen geproduceerd hoeven te worden.",
    },
    {
      id: "economic",
      title: "Economische waarde",
      subtitle: "Gebruikers besparen miljoenen op batterijvervanging.",
      content:
        "Voor e-bike gebruikers in Zuid-Nederland alleen al betekent dit een potentiële kostenbesparing van €38,3 miljoen. BetterE bewijst daarmee dat de technologie niet alleen duurzaam en veilig is, maar ook economisch aantrekkelijk.",
    },
  ];

  // Custom statistics data
  const customStatistics = [
    {
      id: "battery-costs",
      value: "€80",
      title: "aan batterij kosten",
      subtitle: "(per gebruiker per jaar)",
    },
    {
      id: "critical-materials",
      value: "0,84 kg",
      title: "aan kritieke grondstoffen",
      subtitle: "(per gebruiker per jaar)",
    },
    {
      id: "fire-risk",
      value: "Significant",
      title: "risico op brandgevaar",
      subtitle: "(minder risico per jaar)",
    },
  ];

  return (
    <section id="impact" className="">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-6 lg:mb-8">
          Gemeten Impact
        </h2>
        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-center text-foreground/80 mb-6 sm:mb-8 lg:mb-12">
          Onderzoek toont aan dat BetterE haalbaar is, inspeelt op een duidelijke behoefte en bijdraagt aan een duurzamere wereld.
        </p>

        {/* Impact Features with Accordion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactFeatures.map((feature) => (
            <div key={feature.id} className="h-full bg-background hover:bg-foreground/[0.02] p-4 sm:p-6 shadow-sm border rounded-lg flex flex-col text-center sm:text-left">
              <div className="gap-2 flex flex-col h-full items-center sm:items-start">
                {/* Icon */}
                <div className="flex-shrink-0 mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                    {feature.id === 'feasibility' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {feature.id === 'demand' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {feature.id === 'measurable' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {feature.id === 'economic' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Title and subtitle */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-foreground/90 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>

                {/* Accordion button and content */}
                <div className="mt-auto">
                  <button
                    onClick={() => toggleSection(feature.id)}
                    className="cursor-pointer bg-background flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors border border-gray-300 hover:border-primary px-3 py-2 w-full justify-center rounded-lg hover:bg-primary/5"
                    aria-expanded={expandedSection === feature.id}
                  >
                    <span>
                      {expandedSection === feature.id ? "Minder" : "Lees meer"}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                        expandedSection === feature.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === feature.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
                      <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed">{feature.content}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Statistics Content */}
        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-8 bg-foreground/[0.02] py-8 sm:py-12 rounded-lg">
          <div className="flex flex-col items-center text-center w-full">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
              Besparing per jaar
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground/90">
              Dankzij het verdubbelen van de levensduur verminder je elk jaar:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            {customStatistics.map((stat, index) => (
              <div
                key={stat.id}
                className="flex flex-col items-center bg-background hover:bg-foreground/[0.02] p-4 sm:p-6 shadow-sm border rounded-lg text-center"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3 lg:mb-4">
                  {stat.value}
                </div>
                <div className="font-medium text-gray-800 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
                  {stat.title}
                </div>
                <div className="text-foreground/70 text-xs sm:text-sm">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
