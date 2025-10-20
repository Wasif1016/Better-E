"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleMember = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  const teamMembers = [
    {
      name: "Pepijn Kluijtmans",
      role: "Co-founder & Battery Specialist",
      image: "/Pepijn Kluijtmans BetterE Team.jpg",
      description: "Gespecialiseerd in solid-state batterijen, met onderzoek naar de invloed van roterende anionen in plastic kristallen op de geleidbaarheid van elektrolyten. Medeoprichter van PickMe, een duurzame tandenstoker-abonnementsstartup, met ervaring in management en fondsenwerving. Droeg binnen het TU Delft Ecorunner-team bij aan het ontwerp van ’s werelds meest efficiënte waterstofauto, leidde acquisitie en haalde meer dan €150.000 op. Pepijns expertise verbindt technologie en duurzaamheid, met focus op next-gen energieopslag."
    },
    {
      name: "Inse van Houts",
      role: "Co-founder & Data Scientist",
      image: "/Better E Team member.jpg",
      description: "Goed onderlegd in duurzame innovaties en energiemodellering, met sterke focus op data-analyse, data science en business intelligence. Inse werkt al vier jaar aan BetterE, een project dat begon als studenteninitiatief en nu uitgroeit tot een oplossing voor elektrische mobiliteit. Bij Vrijopnaam, een duurzame energieleverancier, ontwikkelt hij optimalisatiemodellen en past hij neurale netwerken toe om hernieuwbare energie-assets te optimaliseren. Hij presenteerde BetterE op COP28 in Dubai tijdens de internationale “Prototypes for Humanity”-competitie en op de Sustainability Day van de TU/e."
    },
    {
      name: "Godard Lensvelt",
      role: "Business Development",
      image: "/Godard Lensvelt.webp",
      description: "Studeert Technische Bestuurskunde aan de TU Delft met een focus op Energie & Industrie en volgde een minor in Finance aan de Comillas Universiteit in Madrid. Hij heeft meerdere jaren ervaring in de blockchain sector, waar hij investeerde in startups, samenwerkte met teams, adviseerde en deelnam aan investeringsrondes. De combinatie van deze academische achtergrond en praktijkervaring met startups geeft hem de drive en expertise om BetterE tot een succes te maken."
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-foreground/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <h2 className="section-title">De BetterE Team</h2>
        <p className="section-subtitle mb-8 md:mb-10 max-w-2xl mx-auto px-4">
        BetterE is een Nederlandse technologie-startup die oplossingen ontwikkelt voor veilig en duurzaam batterijgebruik. Ons team combineert expertise in energie, technologie en ondernemerschap.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative w-full h-64 md:h-80">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-green-600 mb-4 text-sm md:text-base">{member.role}</p>
                <p className={`text-foreground/90 text-sm mb-3 ${expandedMember === member.name ? '' : 'line-clamp-3'}`}>
                  {member.description}
                </p>
                <button
                  onClick={() => toggleMember(member.name)}
                  className="cursor-pointer bg-background flex items-center gap-2 font-medium transition-colors border px-3 py-1 w-full justify-center"
                  aria-expanded={expandedMember === member.name}
                >
                  <span>{expandedMember === member.name ? 'Minder' : 'Lees meer'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedMember === member.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;