import React from 'react';

const CallToActionSection = () => {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-background mb-8 sm:mb-10">
            BetterE voor jou
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 1st */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Consumenten</h3>
              <p className="text-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Wil jij als eerste de BetterE-adapter gebruiken?
              </p>
              <button className="text-background bg-foreground rounded-md border py-2 sm:py-3 hover:bg-primary cursor-pointer transition duration-200 w-full text-sm sm:text-base font-medium">
                Pre-order
              </button>
            </div>

            {/* Retailers */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Retailers/Verkopers</h3>
              <p className="text-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Voeg BetterE toe aan je assortiment.
              </p>
              <button className="text-background bg-foreground rounded-md border py-2 sm:py-3 hover:bg-primary cursor-pointer transition duration-200 w-full text-sm sm:text-base font-medium">
                Wordt verkoper
              </button>
            </div>

            {/* Partnerships */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Samenwerkingen</h3>
              <p className="text-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Voor verzekeraars, fleet operators en organisaties.
              </p>
              <button className="text-background bg-foreground rounded-md border py-2 sm:py-3 hover:bg-primary cursor-pointer transition duration-200 w-full text-sm sm:text-base font-medium">
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