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
    <section id="oplossing" className="">
      <div className="max-w-[1500px] mx-auto px-4 py-20">
        <h2 className="section-title">De BetterE Oplossing</h2>

        <p className="max-w-2xl text-foreground/80 mx-auto text-center font-medium text-lg px-4">
          BetterE is een innovatief product dat e-bike-, e-step- en e-scooter
          batterijen slimmer en veiliger oplaadt, waardoor ze langer meegaan.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12 px-4">
          <div className="md:w-1/2 w-full">
            <img
              src="/3rd-section.gif"
              alt="BetterE Product"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <div className="space-y-8">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border-l-4 border-primary pl-4"
                >
                  <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                  <p className="text-foreground/90 mb-3">{section.summary}</p>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="cursor-pointer flex items-center gap-2  font-medium transition-colors border px-3 py-1 rounded-xl"
                    aria-expanded={expandedSection === section.id}
                  >
                    <span>
                      {expandedSection === section.id ? "Minder" : "Lees meer"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSection === section.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
                      <p className="text-foreground/90">{section.details}</p>
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
