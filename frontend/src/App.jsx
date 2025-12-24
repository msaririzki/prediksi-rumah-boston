import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MultiStepForm from './components/MultiStepForm';
import WhatsAppButton from './components/WhatsAppButton';
import heroBg from './assets/hero-bg.png';
import { Sparkles, Building2, Globe } from 'lucide-react';
import { GlobalProvider, useGlobal } from './contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useGlobal();
  return (
    <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
      <button 
        onClick={() => setLanguage('id')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === 'id' ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
      >
        ID
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === 'en' ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
      >
        EN
      </button>
    </div>
  );
};

function AppContent() {
  const { t } = useGlobal();

  return (
    <div className="min-h-screen flex bg-[#0f0f0f] text-gray-100 font-sans overflow-hidden">
      
      {/* Left Side: Cinematic Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        {/* Background Image with Parallax-like scale */}
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img src={heroBg} alt="Luxury Home" className="w-full h-full object-cover" />
        </motion.div>

        {/* Brand & Language Switcher */}
        <div className="relative z-20 flex justify-between items-center w-full">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <Building2 className="w-6 h-6 text-emerald-400 shadow-glow" />
                </div>
                <span className="text-xl font-bold tracking-widest uppercase">Boston<span className="text-emerald-400">Prime</span></span>
            </div>
            
            {/* Desktop Switcher */}
            <LanguageSwitcher />
        </div>

        {/* Hero Copy */}
        <div className="relative z-20 max-w-lg mb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">{t('hero.badge')}</span>
                </div>
                <h1 className="text-6xl font-extrabold leading-tight mb-6">
                    {t('hero.title_start')} <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">{t('hero.title_mid')}</span>
                    <br/> {t('hero.title_end')}
                </h1>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                    {t('hero.desc')}
                </p>
            </motion.div>
        </div>

        {/* Footer info */}
        <div className="relative z-20 flex space-x-8 text-xs text-gray-500 font-mono tracking-widest uppercase">
            <span>© 2025 BostonPrime</span>
            <span>{t('hero.footer_est')}</span>
            <span>{t('hero.version')}</span>
        </div>
      </div>

      {/* Right Side: Interactive Form */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 sm:p-8 lg:p-12">
        {/* Background Mesh Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Mobile Header (Visible only on small screens) */}
        <div className="lg:hidden absolute top-6 left-6 right-6 z-30 flex justify-between items-center">
             <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-bold tracking-widest uppercase text-sm">Boston<span className="text-emerald-400">Prime</span></span>
             </div>
             {/* Mobile Switcher */}
             <LanguageSwitcher />
        </div>

        {/* Glass Card Container */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-xl h-[85vh] lg:h-[80vh] bg-[#1a1a1a]/60 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex flex-col p-6 sm:p-10 relative z-20"
        >
            <MultiStepForm />
        </motion.div>
      </div>

      <WhatsAppButton />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
