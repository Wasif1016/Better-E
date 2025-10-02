"use client";

import React, { useState } from 'react';

const SolutionSection = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <section id="oplossing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">De BetterE Oplossing</h2>
        <p className="section-subtitle">
          BetterE is een innovatief product dat een nieuwe manier biedt om het laadproces van lithium-ion batterijen 
          van e-bikes, e-steps en e-scooters te beheren. Door overladen – een belangrijke oorzaak van batterijdegradatie – 
          te voorkomen, verdubbelt BetterE de levensduur.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className="md:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold mb-3">Duurzaamheid</h3>
                <p className="text-gray-600 mb-3">
                  Lithium-ion batterijen gebruiken schaarse metalen. BetterE verlengt de levensduur 1,5–2 keer, 
                  vermindert e-waste en verlaagt de milieu-impact én kosten.
                </p>
                <button 
                  className={`dropdown-button ${openDropdown === 'sustainability' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('sustainability')}
                >
                  Lees meer
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`dropdown-content ${openDropdown === 'sustainability' ? 'open' : ''}`}>
                  <p className="text-gray-600 mt-2">
                    Lithium-ion batterijen gebruiken schaarse metalen zoals kobalt en lithium, die vaak onder schadelijke omstandigheden 
                    worden gewonnen. Door de levensduur 1,5–2 keer te verlengen, verminderen we e-waste en de vraag naar nieuwe grondstoffen. 
                    Dit verlaagt de kosten voor gebruikers en verkleint de milieu-impact van e-bike batterijen.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold mb-3">Veiligheid</h3>
                <p className="text-gray-600 mb-3">
                  BetterE bewaakt het laadproces en stopt direct bij afwijkingen. Het checkt vermogen, temperatuur en celspanningen, 
                  en waarschuwt bij gevaar.
                </p>
                <button 
                  className={`dropdown-button ${openDropdown === 'safety' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('safety')}
                >
                  Lees meer
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`dropdown-content ${openDropdown === 'safety' ? 'open' : ''}`}>
                  <p className="text-gray-600 mt-2">
                    BetterE houdt het laadproces nauwlettend in de gaten en stopt automatisch met laden bij afwijkende omstandigheden. 
                    Het controleert laadvermogen, temperatuur, celspanningen en meer. Bij gevaarlijke situaties wordt de gebruiker direct gewaarschuwd.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold mb-3">Gebruiksgemak</h3>
                <p className="text-gray-600 mb-3">
                  BetterE maakt laden veilig en zorgeloos. Je beschermt je batterij, omgeving en de mensen die erop vertrouwen.
                </p>
                <button 
                  className={`dropdown-button ${openDropdown === 'usability' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('usability')}
                >
                  Lees meer
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`dropdown-content ${openDropdown === 'usability' ? 'open' : ''}`}>
                  <p className="text-gray-600 mt-2">
                    BetterE verbetert niet alleen de veiligheid van je batterij, het geeft ook gemoedsrust. 
                    Met onze technologie bescherm je je apparaten, je omgeving en de mensen die er dagelijks op vertrouwen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;