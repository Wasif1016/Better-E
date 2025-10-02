import React from 'react';
import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    { name: "GBO", url: "https://gbo.eu/", logo: "/Partner 1 innovation makers.png" },
    { name: "VEDS Group", url: "https://www.vedsgroup.com/", logo: "/VEDS group Partner2.jpg" },
    { name: "RVO", url: "https://www.rvo.nl/", logo: "/partner 3 Rijksdienst voor....jpg" }
  ];

  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-48 flex items-center justify-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">{partner.name}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">{partner.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;