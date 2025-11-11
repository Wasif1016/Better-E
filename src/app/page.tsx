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
        <section id="probleem" className="pt-4 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 bg-foreground/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">
              Het Probleem
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center text-foreground/90 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto px-4">
              Accu's slijten te vroeg, laden kan risicovol zijn en vervanging
              zorgt voor hoge kosten en e-waste.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="bg-background p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg border text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <BatteryCharging className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-background" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">
                  Vervroegde veroudering
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed">
                  Accu's van e-bike's, e-steps en e-scooters moeten na 4-5 jaar
                  worden vervangen door suboptimaal laden.
                </p>
              </div>

              <div className="bg-background p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg border text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <ShieldAlert className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-background" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">Veiligheidszorgen</h3>
                <p className="text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed">
                  Overladen en hitte degraderen cellen - met een hoger risico op
                  incidenten.
                </p>
              </div>

              <div className="bg-background p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg border text-center md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <Trash2 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-background" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">
                  Hoge kosten & e-waste
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed">
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
