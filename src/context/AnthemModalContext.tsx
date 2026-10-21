import React, { createContext, useContext, useState } from 'react';

interface AnthemModalContextType {
  isOpen: boolean;
  openAnthem: () => void;
  closeAnthem: () => void;
}

const AnthemModalContext = createContext<AnthemModalContextType | undefined>(undefined);

export function AnthemModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openAnthem = () => setIsOpen(true);
  const closeAnthem = () => setIsOpen(false);

  return (
    <AnthemModalContext.Provider value={{ isOpen, openAnthem, closeAnthem }}>
      {children}
    </AnthemModalContext.Provider>
  );
}

export function useAnthemModal() {
  const context = useContext(AnthemModalContext);
  if (!context) {
    throw new Error('useAnthemModal must be used within an AnthemModalProvider');
  }
  return context;
}
