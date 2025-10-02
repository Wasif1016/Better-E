"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            De Universele Laadlimiet
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            BetterE is een universele slimme laadadapter voor e‑bikes, e-steps en e-scooters. 
            Verdubbel de acculevensduur, verlaag brandrisico en laad zonder gedoe.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bullet-point">
              <div className="bullet-icon">1</div>
              <p className="text-lg"><strong>Duurzaamheid:</strong> tot 50% minder e-waste door langere levensduur</p>
            </div>
            
            <div className="bullet-point">
              <div className="bullet-icon">2</div>
              <p className="text-lg"><strong>Veiligheid eerst:</strong> intelligente laadlimieten en thermische bescherming</p>
            </div>
            
            <div className="bullet-point">
              <div className="bullet-icon">3</div>
              <p className="text-lg"><strong>Gebruiksgemak:</strong> plug-and-play - direct inzetbaar zonder gedoe</p>
            </div>
          </div>
          
          <button className="btn-primary text-lg">
            Pre-order
          </button>
        </div>
        
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Image 
              src="/Better E product image.png" 
              alt="BetterE Product" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;