import React from 'react';

const CallToActionSection = () => {
  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">BetterE voor jou</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Consumers */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-accent-foreground">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Consumenten</h3>
            <p className="text-gray-600 mb-6">
              Wil jij als eerste de BetterE-adapter gebruiken?
            </p>
            <button className="btn-primary w-full">
              Pre-order
            </button>
          </div>
          
          {/* Retailers */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-accent-foreground">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Retailers/Verkopers</h3>
            <p className="text-gray-600 mb-6">
              Voeg BetterE toe aan je assortiment.
            </p>
            <button className="btn-primary w-full">
              Wordt verkoper
            </button>
          </div>
          
          {/* Partnerships */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-accent-foreground">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Samenwerkingen</h3>
            <p className="text-gray-600 mb-6">
              Voor verzekeraars, fleet operators en organisaties.
            </p>
            <button className="btn-primary w-full">
              Samenwerken
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;