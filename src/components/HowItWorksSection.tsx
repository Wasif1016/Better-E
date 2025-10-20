"use client";

import React, { useState } from "react";
import { Battery, Leaf, Snowflake } from "lucide-react";
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
      description:
        "Wanneer een modus actief is, regelt BetterE het oplaadproces automatisch. Je batterij wordt slim en veilig opgeladen zodat deze langer meegaat.",
      points: [
        {
          icon: <Battery className="w-6 h-6" />,
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
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <p className="bg-primary text-background w-fit px-3 py-1 rounded-full text-sm font-semibold mb-3 mx-auto lg:mx-0">
            ★ Hoe BetterE werkt
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Slim laden in 3 stappen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 text-foreground/80">
            Kies een stap om de uitleg te zien. Links staat een statische
            afbeelding van een e-bike die via BetterE wordt opgeladen.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="/cycle.jpg"
                alt="BetterE Charging Process"
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - Tabs and Content */}
          <div className="order-1 lg:order-2">
            {/* Tabs */}
            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto pb-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer px-3 sm:px-4 text-center flex items-center justify-center py-2 sm:py-3 rounded-lg flex-1 min-w-0 font-medium transition-all duration-200 ${
                    activeTab === index
                      ? "bg-primary text-background shadow-md"
                      : "bg-background text-foreground/70 hover:bg-foreground/5 hover:text-foreground border"
                  }`}
                >
                  <span className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                    <span
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                        activeTab === index
                          ? "bg-foreground/20 text-background"
                          : "bg-foreground/10"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-sm">{tab.label}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-background rounded-xl shadow-sm">
              <div className="animate-in fade-in-50 duration-300 h-full">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                    {tabs[activeTab].heading}
                  </h3>
                  <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {tabs[activeTab].description}
                  </p>
                </div>

                {/* Points - Only for tab 2 - Display in Row */}
                {tabs[activeTab].points.length > 0 && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {tabs[activeTab].points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col p-3 sm:p-4 rounded-xl bg-primary/50 border border-primary/10 hover:border-primary/30 transition-colors"
                        >
                          <div className="mb-2 sm:mb-3 p-2 rounded-full bg-background w-fit shrink-0">
                            {point.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">
                              {point.name}
                            </h4>
                            <p className="text-foreground text-xs sm:text-sm leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
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
