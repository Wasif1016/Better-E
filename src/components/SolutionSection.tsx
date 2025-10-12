"use client";

import React from 'react';
import ReadMoreTooltipButton from '@/components/ui/read-more-tooltip-button';

const SolutionSection = () => {
  // Replaced dropdowns with tooltip button

  return (
    <section id="oplossing" className="">
      <div className="max-w-[1400px] mx-auto px-4 py-20">
        <h2 className="section-title"> <span className="relative inline-block align-middle ml-2">
          <span className="relative z-10 text-foreground"> De BetterE Oplossing </span>
          <span className="absolute inset-0 -z-0 rounded-xl bg-600/90 px-3 -mx-2"></span>
        </span> </h2>

        <p className="max-w-4xl mx-auto text-center font-medium text-lg px-4">
          BetterE is een innovatief product dat een nieuwe manier biedt om het laadproces van lithium-ion batterijen
          van e-bikes, e-steps en e-scooters te beheren. Door overladen – een belangrijke oorzaak van batterijdegradatie –
          te voorkomen, verdubbelt BetterE de levensduur.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12 px-4">
          <div className="md:w-1/2 w-full">
            <img
              src="/better_E_product_image.png"
              alt="BetterE Product"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <div className="space-y-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">Duurzaamheid</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  Lithium-ion batterijen gebruiken schaarse metalen. BetterE verlengt de levensduur 1,5–2 keer,
                  vermindert e-waste en verlaagt de milieu-impact én kosten.
                </p>
                <ReadMoreTooltipButton
                  content={(
                    <p>
                      Lithium-ion batterijen gebruiken schaarse metalen zoals kobalt en lithium, die vaak onder schadelijke omstandigheden
                      worden gewonnen. Door de levensduur 1,5–2 keer te verlengen, verminderen we e-waste en de vraag naar nieuwe grondstoffen.
                      Dit verlaagt de kosten voor gebruikers en verkleint de milieu-impact van e-bike batterijen.
                    </p>
                  )}
                />
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">Veiligheid</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  BetterE bewaakt het laadproces en stopt direct bij afwijkingen. Het checkt vermogen, temperatuur en celspanningen,
                  en waarschuwt bij gevaar.
                </p>
                <ReadMoreTooltipButton
                  content={(
                    <p>
                      BetterE houdt het laadproces nauwlettend in de gaten en stopt automatisch met laden bij afwijkende omstandigheden.
                      Het controleert laadvermogen, temperatuur, celspanningen en meer. Bij gevaarlijke situaties wordt de gebruiker direct gewaarschuwd.
                    </p>
                  )}
                />
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">Gebruiksgemak</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  BetterE maakt laden veilig en zorgeloos. Je beschermt je batterij, omgeving en de mensen die erop vertrouwen.
                </p>
                <ReadMoreTooltipButton
                  content={(
                    <p>
                      BetterE verbetert niet alleen de veiligheid van je batterij, het geeft ook gemoedsrust.
                      Met onze technologie bescherm je je apparaten, je omgeving en de mensen die er dagelijks op vertrouwen.
                    </p>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;