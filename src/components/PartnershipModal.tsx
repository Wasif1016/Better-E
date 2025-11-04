"use client";

import React, { useState } from 'react';
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

interface PartnershipModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  onSubmit: (data: {
    company: string;
    website: string;
    name: string;
    email: string;
    message: string;
    consent: boolean;
  }) => Promise<void>;
}

export const PartnershipModal: React.FC<PartnershipModalProps> = ({
  open,
  onOpenChange,
  trigger,
  onSubmit,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      consent: (form.elements.namedItem('consent') as HTMLInputElement).checked,
    };
    await onSubmit(formData);
    form.reset();
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,90vh)] sm:max-w-xl [&>button:last-child]:hidden">
        <ScrollArea className="flex max-h-full flex-col overflow-hidden">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6">Samenwerken met BetterE</DialogTitle>
            <DialogDescription asChild>
              <div className="px-6 pt-3 pb-6">
                <p className="mb-4">
                  Voor retailers, verzekeraars, fleet-operators en andere organisaties. Laat je gegevens achter en ontvang ons partnerdeck en vervolgstappen.
                </p>
                <p className="mb-4 font-medium text-foreground">
                  Laat je gegevens achter
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Bedrijfsnaam & Website side by side on desktop */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
                    <div className="flex-1">
                      <label htmlFor="company" className="text-foreground/90 block text-sm font-medium mb-1">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="website" className="text-foreground/90 block text-sm font-medium mb-1">
                        Website (optioneel)
                      </label>
                      <input
                        type="url"
                        name="website"
                        id="website"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="name" className="text-foreground/90 block text-sm font-medium mb-1">
                      Contactpersoon
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-foreground/90 block text-sm font-medium mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-foreground/90 block text-sm font-medium mb-1">
                      Bericht
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      required
                      className="cursor-pointer mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent focus:ring-2"
                    />
                    <label htmlFor="consent" className="text-sm text-foreground">
                      Ik ga akkoord dat mijn gegevens gebruikt worden om contact op te nemen.
                    </label>
                  </div>
                  <Button type="submit" className="w-full">
                    {isLoading ? "Verstuur je aanvraag..." : "Verstuur je aanvraag"}
                  </Button>
                </form>
              </div>
            </DialogDescription>
          </DialogHeader>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

