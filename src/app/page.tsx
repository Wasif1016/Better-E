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
        <section id="probleem" className="py-20 bg-foreground/5">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="section-title">Het Probleem</h2>
            <p className="section-subtitle px-4 md:px-80">
              Accu's slijten te vroeg, laden kan risicovol zijn en vervanging
              zorgt voor hoge kosten en e-waste.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center max-w-5xl mx-auto">
              <div className="bg-background p-8 w-full md:w-fit shadow-lg rounded-lg border  text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BatteryCharging className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Vervroegde veroudering
                </h3>
                <p className="text-foreground/90">
                  Accu’s van e-bike’s, e-steps en e-scooters moeten na 4-5 jaar
                  worden vervangen door suboptimaal laden.
                </p>
              </div>

              <div className="bg-background p-8 w-full md:w-fit shadow-lg rounded-lg border  text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldAlert className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">Veiligheidszorgen</h3>
                <p className="text-foreground/90">
                  Overladen en hitte degraderen cellen - met een hoger risico op
                  incidenten.
                </p>
              </div>

              <div className="bg-background p-8 w-full md:w-fit shadow-lg rounded-lg border  text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Hoge kosten & e-waste
                </h3>
                <p className="text-foreground/90">
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
