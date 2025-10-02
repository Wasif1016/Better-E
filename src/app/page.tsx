import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SolutionSection from '../components/SolutionSection';
import ImpactSection from '../components/ImpactSection';
import PartnersSection from '../components/PartnersSection';
import TeamSection from '../components/TeamSection';
import CallToActionSection from '../components/CallToActionSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Problem Section */}
        <section id="probleem" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Het Probleem</h2>
            <p className="section-subtitle">
              E-bikes, e-steps en e-scooters worden steeds populairder, maar hun batterijen worden vaak te intensief geladen, 
              wat leidt tot versneld batterijverloop, veiligheidsrisico's en veel elektronisch afval.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Batterijleven</h3>
                <p className="text-gray-600">
                  Overladen verkort de levensduur van lithium-ion batterijen tot wel 50%, wat resulteert in frequente vervanging.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Veiligheidsrisico's</h3>
                <p className="text-gray-600">
                  Te hoge laadtemperaturen en spanningen veroorzaken brandgevaar, met jaarlijks honderden incidenten in huishoudens.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Elektronisch afval</h3>
                <p className="text-gray-600">
                  Vervroegde batterijvervanging produceert enorme hoeveelheden e-waste met schaarse en giftige materialen.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <SolutionSection />
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