import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // --- Language State ---
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('appLanguage');
    return saved || 'id';
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  // --- Global Data Strings ---
  const [globalPrediction, setGlobalPrediction] = useState(null);
  const [globalFormData, setGlobalFormData] = useState({});

  // --- Helpers ---
  const t = (path) => {
    const keys = path.split('.');
    let obj = translations[language];
    for (const key of keys) {
      if (!obj) return path;
      obj = obj[key];
    }
    return obj || path;
  };

  const formatCurrency = (value) => {
    const priceUSD = value * 1000;
    
    if (language === 'id') {
      const priceIDR = priceUSD * 15500; 
      return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        maximumFractionDigits: 0 
      }).format(priceIDR);
    } else {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD', 
        maximumFractionDigits: 0 
      }).format(priceUSD);
    }
  };

  return (
    <GlobalContext.Provider value={{ 
        language, 
        setLanguage, 
        t, 
        formatCurrency,
        globalPrediction,
        setGlobalPrediction,
        globalFormData,
        setGlobalFormData
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
