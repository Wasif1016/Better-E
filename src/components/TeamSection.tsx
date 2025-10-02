import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
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
      role: "Co-founder & Business Development",
      image: "/Inse van Houts BetterE Team.jpg",
      description: "Studeert Technische Bestuurskunde aan de TU Delft met een focus op Energie & Industrie en volgde een minor in Finance aan de Comillas Universiteit in Madrid. Hij heeft meerdere jaren ervaring in de blockchain sector, waar hij investeerde in startups, samenwerkte met teams, adviseerde en deelnam aan investeringsrondes. De combinatie van deze academische achtergrond en praktijkervaring met startups geeft hem de drive en expertise om BetterE tot een succes te maken."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">De BetterE Team</h2>
        <p className="section-subtitle">
          BetterE is een Nederlandse technologie-startup die oplossingen ontwikkelt voor veilig en duurzaam batterijgebruik. 
          Ons team combineert expertise in energie, technologie en ondernemerschap. Onze missie: de levensduur van elke batterij 
          verlengen, e-waste verminderen en de energietransitie veiliger en slimmer maken.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative w-full h-80">
                <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Team Member Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;