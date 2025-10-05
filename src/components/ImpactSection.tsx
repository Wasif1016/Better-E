"use client";

import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import ReadMoreTooltipButton from '@/components/ui/read-more-tooltip-button';

const ImpactSection = () => {
  // Removed dropdown state; using hover tooltips instead

  // Stats data
  const stats = [
    { value: "1,5-2x", label: "Levensduurverlenging", },
    { value: "50%", label: "Minder e-waste" },
    { value: "€38M", label: "Potentiële besparing Zuid-NL" },
    { value: "4,18M kg", label: "Minder grondstoffen" }
  ];

  // Impact features data
  const impactFeatures = [
    {
      id: 'feasibility',
      title: 'Feasibility',
      subtitle: 'BetterE is technologically, economically and commercially viable.',
      content: 'Uit een MIT-haalbaarheidsstudie is gebleken dat BetterE technologisch, economisch en commercieel haalbaar is. De technologie richt zich op het beperken van batterijdegradatie, die vooral wordt veroorzaakt door chemische nevenreacties zoals elektrolyt-afbraak en SEI-vorming. Door optimale laadcycli, laadstromen en temperaturen toe te passen kan deze degradatie sterk worden teruggedrongen.'
    },
    {
      id: 'demand',
      title: 'Great market need',
      subtitle: 'Millions of e-bike users recognize the problem of battery degradation.',
      content: 'Nederland telt inmiddels ruim 5 miljoen e-bikes, waarvan er in 2024 meer dan 453.000 nieuw zijn verkocht (56% van alle fietsen). Uit marktonderzoek blijkt dat 75% van de gebruikers het probleem van batterijdegradatie herkent. Maar liefst 98% toont interesse in een oplossing die de levensduur kan verlengen, terwijl 47% aangeeft ontevreden te zijn over de huidige prestaties van hun batterij.'
    },
    {
      id: 'measurable',
      title: 'Measurable impact',
      subtitle: 'BetterE extends the life of batteries by 1.5 to 2 times.',
      content: 'BetterE kan de levensduur van e-bike batterijen met 1,5 tot 2 keer verlengen – een verbetering van minstens 50%. Dit levert een aanzienlijke besparing op van kritieke grondstoffen: naar schatting 4,18 miljoen kilo kobalt, nikkel, lithium, grafiet en mangaan minder in Nederland, elke vijf jaar. Tegelijkertijd daalt de CO₂-uitstoot doordat er minder nieuwe batterijen geproduceerd hoeven te worden.'
    },
    {
      id: 'economic',
      title: 'Economic value',
      subtitle: 'Users save millions on battery replacement.',
      content: 'Voor e-bike gebruikers in Zuid-Nederland alleen al betekent dit een potentiële kostenbesparing van €38,3 miljoen. BetterE bewijst daarmee dat de technologie niet alleen duurzaam en veilig is, maar ook economisch aantrekkelijk.'
    }
  ];

  return (
    <section id="impact" className="py-24 bg-gray-50">
      <div className="max-w-{1400px} px-4">
        <h2 className="section-title">Gemeten Impact</h2>
        <p className="section-subtitle px-50">
          Onderzoek toont aan dat BetterE haalbaar is, inspeelt op een duidelijke behoefte en bijdraagt aan een duurzamere wereld.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white hover:bg-foreground/[0.02] p-6 shadow-sm border border-gray-100 ">
              <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className=" font-medium text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Redesigned Impact Features in Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-4 px-8">
            {impactFeatures.map((feature) => (
              <div key={feature.id} className="h-full bg-white hover:bg-foreground/[0.02] p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="gap-2 flex flex-col h-full justify-between">

                  {/* Title and description */}
                  <div>
                    {/* Icon */}
                    <div className="flex-shrink-0 mr-4 mb-4">
                      <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                        {feature.id === 'feasibility' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {feature.id === 'demand' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                        {feature.id === 'measurable' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                        {feature.id === 'economic' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Read more button directly under the description */}
                  <div className="w-full">
                    <ReadMoreTooltipButton content={feature.content} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ImpactSection;