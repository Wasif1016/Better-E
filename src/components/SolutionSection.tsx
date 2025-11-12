"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SolutionSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "duurzaamheid",
      title: "Duurzaamheid",
      summary:
        "Lithium-ion batterijen gebruiken schaarse metalen. BetterE verlengt de levensduur 1,5–2 keer, vermindert e-waste en verlaagt de milieu-impact én kosten.",
      details:
        "Lithium-ion batterijen gebruiken schaarse metalen zoals kobalt en lithium, die vaak onder schadelijke omstandigheden worden gewonnen. Door de levensduur 1,5–2 keer te verlengen, verminderen we e-waste en de vraag naar nieuwe grondstoffen. Dit verlaagt de kosten voor gebruikers en verkleint de milieu-impact van e-bike batterijen.",
    },
    {
      id: "veiligheid",
      title: "Veiligheid",
      summary:
        "BetterE bewaakt het laadproces en stopt direct bij afwijkingen. Het checkt vermogen, temperatuur en celspanningen.",
      details:
        "BetterE houdt het laadproces nauwlettend in de gaten en stopt automatisch met laden bij afwijkende omstandigheden. Het controleert laadvermogen, temperatuur, celspanningen en meer. Bij gevaarlijke situaties wordt de gebruiker direct gewaarschuwd.",
    },
    {
      id: "gebruiksgemak",
      title: "Gebruiksgemak",
      summary:
        "BetterE maakt laden veilig en zorgeloos. Je beschermt je batterij, omgeving en de mensen die erop vertrouwen.",
      details:
        "BetterE verbetert niet alleen de veiligheid van je batterij, het geeft ook gemoedsrust. Met onze technologie bescherm je je apparaten, je omgeving en de mensen die er dagelijks op vertrouwen.",
    },
  ];

  return (
    <section id="oplossing" className="pt-8 pb-8 sm:pt-8 sm:pb-8 lg:pt-8 lg:pb-8">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-6 sm:mb-3 lg:mb-4">
          <span className="text-foreground">De BetterE Oplossing</span>
        </h2>

        <p className="max-w-3xl text-foreground/80 mx-auto text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 lg:mb-6 px-4">
          BetterE is een innovatief product dat e-bike-, e-step- en e-scooter batterijen slimmer en veiliger oplaadt, waardoor ze langer meegaan.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden bg-transparent">
            <img
              src="/3rd-section.gif"
              alt="BetterE Product"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {sections.map((section) => (
                <div key={section.id} className="border-l-4 border-primary pl-2.5 sm:pl-3 lg:pl-4">
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">{section.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-foreground/90 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">{section.summary}</p>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="cursor-pointer flex items-center gap-2 text-xs sm:text-sm lg:text-base font-medium transition-colors border border-gray-300 hover:border-primary px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl hover:bg-primary/5"
                    aria-expanded={expandedSection === section.id}
                  >
                    <span>
                      {expandedSection === section.id ? "Minder" : "Lees meer"}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                        expandedSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSection === section.id && (
                    <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
                      <p className="text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed">{section.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
