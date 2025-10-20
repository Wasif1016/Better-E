"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PreOrderInfoModalProps {
  trigger: React.ReactNode;
}

export const PreOrderInfoModal: React.FC<PreOrderInfoModalProps> = ({ trigger }) => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <ScrollArea className="flex max-h-full flex-col overflow-hidden">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6">Pre-order BetterE</DialogTitle>
            <DialogDescription asChild>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Waarom pre-orderen?</h3>
                    <p>
                      Wees een van de eersten die BetterE ontvangt en profiteer van exclusieve voordelen:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Vroege toegang tot het product</li>
                      <li>Speciale pre-order korting</li>
                      <li>Prioriteit in levering</li>
                      <li>Gratis verzending</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Productspecificaties</h3>
                    <ul className="space-y-1">
                      <li><strong>Capaciteit:</strong> Hoogwaardige energieopslag</li>
                      <li><strong>Duurzaamheid:</strong> 100% hernieuwbare energie</li>
                      <li><strong>Garantie:</strong> 2 jaar volledige garantie</li>
                      <li><strong>Ondersteuning:</strong> 24/7 klantenservice</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Verwachte levertijd</h3>
                    <p>
                      De eerste batch wordt verwacht in Q2 2025. Pre-order klanten krijgen prioriteit 
                      en worden als eerste beleverd zodra de productie is voltooid.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Hoe werkt het?</h3>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Vul het contactformulier in op onze website</li>
                      <li>Ons team neemt binnen 24 uur contact met u op</li>
                      <li>U ontvangt een persoonlijk voorstel</li>
                      <li>Na bevestiging wordt uw order geregistreerd</li>
                      <li>U ontvangt updates over de productiestatus</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Betaalvoorwaarden</h3>
                    <p>
                      Betaling is mogelijk in termijnen. Bij pre-order is een aanbetaling van 30% vereist. 
                      Het resterende bedrag is verschuldigd vóór levering.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Annuleringsbeleid</h3>
                    <p>
                      Pre-orders kunnen tot 30 dagen voor de verwachte leverdatum kosteloos worden geannuleerd. 
                      De aanbetaling wordt volledig teruggestort.
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="px-6 pb-6 sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Sluiten
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" onClick={handleContactClick}>
                Neem Contact Op
              </Button>
            </DialogClose>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

