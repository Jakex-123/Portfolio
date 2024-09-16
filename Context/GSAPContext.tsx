"use client"
import React, { createContext, useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Define the type for the context (optional but good practice with TypeScript)
interface GsapContextType {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
}

// Provide a default value (null or empty object to avoid undefined errors)
const GsapContext = createContext<GsapContextType | undefined>(undefined);

export const GsapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Provide gsap and ScrollTrigger to children
  return (
    <GsapContext.Provider value={{ gsap, ScrollTrigger }}>
      {children}
    </GsapContext.Provider>
  );
};

// Hook to use GSAP Context
export const useGsap = () => {
  const context = useContext(GsapContext);
  
  // Ensure context is defined before returning
  if (!context) {
    throw new Error('useGsap must be used within a GsapProvider');
  }
  
  return context; // Now context is guaranteed to be defined
};
