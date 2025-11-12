import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PartnersSection = () => {
  const partners = [
    { name: "GBO Innovation makers", url: "https://gbo.eu/", logo: "/GBO.jpg" },
    { name: "VEDS Group", url: "https://www.vedsgroup.com/", logo: "/vedsgroup.png" },
    { name: "RVO", url: "https://www.rvo.nl/", logo: "/rvo.png" }
  ];

  return (
    <section id="partners" className="pt-6 pb-10 sm:pt-10 sm:pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-6 sm:mb-6 lg:mb-8">Partners</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Link
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 sm:p-6 lg:p-8 border border-foreground/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-background/50 hover:bg-background"
            >
              <div className="relative w-full flex items-center justify-center mb-4 sm:mb-6">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={120} 
                  height={120}
                  className="object-contain transition-transform duration-300 hover:scale-105 h-16 w-auto sm:h-20 lg:h-24"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;