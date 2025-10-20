"use client";

import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-24 right-4 z-[60] animate-in slide-in-from-top-5 duration-300">
      <div className={`max-w-md w-full shadow-lg rounded-xl border-2 p-4 ${
        type === 'success' 
          ? 'bg-green-50 border-green-500' 
          : 'bg-red-50 border-red-500'
      }`}>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            {type === 'success' ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600" />
            )}
          </div>
          <div className="flex-1">
            <h3 className={`font-semibold mb-1 ${
              type === 'success' ? 'text-green-900' : 'text-red-900'
            }`}>
              {type === 'success' ? 'Gelukt!' : 'Fout'}
            </h3>
            <p className={`text-sm ${
              type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`flex-shrink-0 rounded-lg p-1 hover:bg-black/5 transition-colors ${
              type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

