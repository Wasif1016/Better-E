import React from 'react';

const CallToActionSection = () => {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="flex flex-col rounded-2xl bg-primary py-8 md:py-10 px-4 md:px-10 justify-center max-w-5xl mx-auto p-4 md:p-8">
          <h2 className="section-title">BetterE voor jou</h2>
          <div className='flex gap-4 md:gap-6 py-6 flex-col md:flex-row'>
            {/* 1st */}
            <div className="bg-white p-6  rounded-lg shadow-sm border border-gray-100 text-center flex-1">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Consumenten</h3>
              <p className="text-foreground/90 mb-6 text-sm md:text-base">
                Wil jij als eerste de BetterE-adapter gebruiken?
              </p>
              <button className="text-background bg-foreground rounded-md border py-2 hover:bg-primary cursor-pointer transition duration-200 w-full">
                Pre-order
              </button>
            </div>

            {/* Retailers */}
            <div className="bg-white p-6  rounded-lg shadow-sm border border-gray-100 text-center flex-1">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Retailers/Verkopers</h3>
              <p className="text-foreground/90 mb-6 text-sm md:text-base">
                Voeg BetterE toe aan je assortiment.
              </p>
              <button className="text-background bg-foreground rounded-md border py-2 hover:bg-primary cursor-pointer transition duration-200 w-full">
                Wordt verkoper
              </button>
            </div>

            {/* Partnerships */}
            <div className="bg-white p-6  rounded-lg shadow-sm border border-gray-100 text-center flex-1">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Samenwerkingen</h3>
              <p className="text-foreground/90 mb-6 text-sm md:text-base">
                Voor verzekeraars, fleet operators en organisaties.
              </p>
              <button className="text-background bg-foreground rounded-md border py-2 hover:bg-primary cursor-pointer transition duration-200 w-full">
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