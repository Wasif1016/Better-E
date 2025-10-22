"use client";

import React, { useState } from "react";
import { Battery, Leaf, Snowflake, Zap } from "lucide-react";
import Image from "next/image";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Plug in",
      heading: "1. Sluit je oplader aan op het apparaat",
      description:
        "Als je een accu voor het eerst aan BetterE aansluit, zorg ervoor dat de accu zo leeg mogelijk is (10-20%) en laad hem volledig op met de Power-modus. Zo leert BetterE je batterij kennen en kan hij zijn werk doen.",
      points: [],
    },
    {
      id: 1,
      label: "Modus kiezen",
      heading: "2. Kies de juiste modus",
      description: "Kies een modes om de laadcurve af te stemmen.",
      points: [
        {
          icon: <Zap className="w-6 h-6" />,
          name: "Power-modus",
          description: "Laadt op tot 100% voor maximale actieradius",
        },
        {
          icon: <Leaf className="w-6 h-6" />,
          name: "Eco-modus",
          description: "Voor duurzaam laden (80-90%)",
        },
        {
          icon: <Snowflake className="w-6 h-6" />,
          name: "Winter Storage",
          description: "Voor een lange levensduur bij stilstand (~50%)",
        },
      ],
    },
    {
      id: 2,
      label: "Klaar",
      heading: "3. Klaar om te gaan",
      description:
        "Wanneer een modus actief is, regelt BetterE het oplaadproces automatisch. Je batterij wordt slim en veilig opgeladen zodat deze langer meegaat.",
      points: [],
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12" id="gebruik">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Eenvoudig, veilig en slim opladen in drie stappen
          </h2>
          {/* <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Slim laden in 3 stappen
          </h2> */}
          {/* <p className="text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-foreground/80 mt-4">
            Eenvoudig, veilig en slim opladen in drie stappen
          </p> */}
          <p className="text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-foreground/80 mt-4">
            Kies een stap om de uitleg te zien. Links staat een statische
            afbeelding van een e-bike die via BetterE wordt opgeladen.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <Image
              width={600}
              height={400}
              src="/cycle.png"
              alt="BetterE Charging Process"
              className="w-full h-auto max-h-[450px] object-cover  rounded-xl"
            />
          </div>

          {/* Right Column - Tabs and Content */}
          <div className="order-1 lg:order-2">
            {/* Tabs */}
            <div className="inline-flex gap-3 mb-4 w-full overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer px-4 text-center flex items-center justify-center py-3 rounded-lg w-full font-medium transition-all duration-200 ${
                    activeTab === index
                      ? "bg-primary text-background shadow-md"
                      : "bg-background text-foreground/70 hover:bg-foreground/5 hover:text-foreground border"
                  }`}
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeTab === index
                          ? "bg-foreground/20 text-background"
                          : "bg-foreground/10"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>{tab.label}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-background rounded-t-2xl shadow-sm">
              <div className="animate-in fade-in-50 duration-300 h-full flex flex-col justify-center gap-[65px]">
                <div className=" px-6 pt-6">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">
                    {tabs[activeTab].heading}
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mb-6">
                    {tabs[activeTab].description}
                  </p>
                </div>

                {/* Points - Only for tab 2 - Display in Row */}
                {tabs[activeTab].points.length > 0 && (
                  <div className="flex flex-col sm:flex-row gap-3 p-2">
                    {tabs[activeTab].points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col  p-1 rounded-tl-3xl bg-primary/50 border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        <div className=" mb-3 p-2 rounded-full bg-background w-fit shrink-0">
                          {point.icon}
                        </div>
                        <div className="px-3 pt-2">
                          <h4 className="font-bold text-foreground mb-1 text-base">
                            {point.name}
                          </h4>
                          <p className="text-foreground text-sm leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
