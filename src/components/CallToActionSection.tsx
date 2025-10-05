import React from 'react';

const CallToActionSection = () => {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="flex flex-col rounded-2xl bg-green-400 py-10 px-10 justify-center max-w-5xl mx-auto  p-8">
          <h2 className="section-title">BetterE voor jou</h2>
          <div className='flex gap-4 py-4 flex-col md:flex-row'>
            {/* 1st */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
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
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
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
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
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
      </div>
    </section>
  );
};

export default CallToActionSection;