import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PartnersSection = () => {
  const partners = [
    { name: "GBO", url: "https://gbo.eu/", logo: "/Partner 1 innovation makers.png" },
    { name: "VEDS Group", url: "https://www.vedsgroup.com/", logo: "/VEDS group Partner2.jpg" },
    { name: "RVO", url: "https://www.rvo.nl/", logo: "/partner 3 Rijksdienst voor....jpg" }
  ];

  return (
    <section id="partners" className="py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="section-title">Partners</h2>
        
        <div className="mt-4 flex flex-col md:flex-row bg-transparent justify-center max-w-5xl mx-auto ">
          {partners.map((partner, index) => (
            <Link
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex flex-col items-center  p-8  border-foreground/20 transition-shadow duration-300 ${ index === partners.length - 1 ? '' : 'border-r-2'}`}
            >
              <div className="relative w-full flex items-center justify-center mb-6">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={100} 
                  height={100}
                  className="object-contain transition-transform duration-300 hover:scale-105 h-24 w-100"
                />
              </div>
              <h3 className="text-xl pt-2 font-bold underline">{partner.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;