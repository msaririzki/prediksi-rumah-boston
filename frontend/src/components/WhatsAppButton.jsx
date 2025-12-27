import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useGlobal } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const { t, globalPrediction, formatCurrency, globalFormData } = useGlobal();
  const phoneNumber = "628978967755";
  
  // Construct dynamic dfdfmessage
  // Halo BostonAI, saya baru saja memprediksi rumah dengan [Jumlah Kamar] kamar dan hasilnya adalah [Harga]. 
  const rooms = globalFormData && globalFormData['RM'] ? globalFormData['RM'] : '...';
  const price = globalPrediction ? formatCurrency(globalPrediction) : '...';
  
  // Only use detailed message if prediction exists, else generic
  let rawMsg = t('wa.msg'); // Fallback key if exists, or defaults
  
  if (globalPrediction) {
      rawMsg = `${t('wa.msg_start')} ${rooms} ${t('wa.msg_mid')} ${price}. ${t('wa.msg_end')}`;
  } else {
      // Default welcome message if no prediction yet
      rawMsg = "Halo BostonAI, saya tertarik konsultasi properti.";
  }

  const message = encodeURIComponent(rawMsg);
  
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center">
      {/* Speech Bubble / Call to Action */}
      <AnimatePresence>
        {!globalPrediction && (
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mr-4 bg-white text-black text-xs font-bold py-2 px-4 rounded-xl shadow-lg relative hidden sm:block"
            >
                {t('wa.bubble')}
                {/* Triangle */}
                <div className="absolute top-1/2 -right-1 w-3 h-3 bg-white rotate-45 -translate-y-1/2"></div>
            </motion.div>
        )}
      </AnimatePresence>

      <a 
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:scale-110 group border border-white/10"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
