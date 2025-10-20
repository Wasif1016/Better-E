import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SolutionSection from "../components/SolutionSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ImpactSection from "../components/ImpactSection";
import PartnersSection from "../components/PartnersSection";
import TeamSection from "../components/TeamSection";
import CallToActionSection from "../components/CallToActionSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

// Import Lucide React icons
import { BatteryCharging, ShieldAlert, Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg">
      <Header />
      <main>
        <Hero />

        {/* Problem Section */}
        <section id="probleem" className="py-12 sm:py-16 lg:py-20 bg-foreground/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">
              Het Probleem
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-center text-foreground/90 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              Accu's slijten te vroeg, laden kan risicovol zijn en vervanging
              zorgt voor hoge kosten en e-waste.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="bg-background p-6 sm:p-8 shadow-lg rounded-lg border text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BatteryCharging className="h-6 w-6 sm:h-8 sm:w-8 text-background" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Vervroegde veroudering
                </h3>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  Accu's van e-bike's, e-steps en e-scooters moeten na 4-5 jaar
                  worden vervangen door suboptimaal laden.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 shadow-lg rounded-lg border text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldAlert className="h-6 w-6 sm:h-8 sm:w-8 text-background" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Veiligheidszorgen</h3>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  Overladen en hitte degraderen cellen - met een hoger risico op
                  incidenten.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 shadow-lg rounded-lg border text-center md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="h-6 w-6 sm:h-8 sm:w-8 text-background" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Hoge kosten & e-waste
                </h3>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  Nieuwe packs zijn duur en vergroten vraag naar kritieke
                  materialen en afvalstromen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SolutionSection />
        <HowItWorksSection />
        <ImpactSection />
        <PartnersSection />
        <TeamSection />
        <CallToActionSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
