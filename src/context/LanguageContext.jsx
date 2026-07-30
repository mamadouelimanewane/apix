import React, { createContext, useState, useContext, useEffect } from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr,
    en,
    ar: fr, // Fallback to fr for now
    zh: fr  // Fallback to fr for now
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let i = 0; i < keys.length; i++) {
      if (value && value[keys[i]]) {
        value = value[keys[i]];
      } else {
        return key; // Fallback: return the key if not found
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
