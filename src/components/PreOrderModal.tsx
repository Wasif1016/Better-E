"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PreOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({
  open,
  onOpenChange,
  trigger,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'preorder',
          email: email,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to send email');

      setMessage({ text: 'Bedankt! Je bent op de hoogte gehouden.', type: 'success' });
      setEmail('');
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setMessage(null);
      }, 2000);
    } catch (err) {
      console.error('Send email error', err);
      setMessage({
        text: 'Verzenden mislukt. ' + ((err as Error).message || 'Probeer later opnieuw.'),
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md [&>button:last-child]:hidden">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl sm:text-2xl font-bold mb-2">
            BetterE lanceert binnenkort!
          </DialogTitle>
          <p className="text-sm sm:text-base text-foreground/90 mb-6">
            Laat je e-mailadres achter en wees als eerste op de hoogte van early-bird kortingen.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="preorder-email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="preorder-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
          </div>
          {message && (
            <div className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message.text}
            </div>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3"
          >
            {isSubmitting ? 'Verzenden...' : 'Hou mij op de hoogte'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

