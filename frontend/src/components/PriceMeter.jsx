import React from 'react';
import { motion } from 'framer-motion';
import { useGlobal } from '../contexts/LanguageContext';

const PriceMeter = ({ price }) => {
  const { t, formatCurrency } = useGlobal();
  // Boston Dataset Stats (USD thousands)
  // Min: ~5, Max: ~50, Mean: ~22.5
  const min = 5; 
  const max = 50;
  const avg = 22.5;
  
  const priceVal = Math.max(min, Math.min(max, price || 0));
  const percentage = ((priceVal - min) / (max - min)) * 100;

  let statusColor = "text-emerald-400";
  let statusText = t('meter.avg');
  
  if (price < 15) {
      statusColor = "text-blue-400";
      statusText = t('meter.low');
  } else if (price > 30) {
      statusColor = "text-amber-400";
      statusText = t('meter.high');
  }

  return (
    <div className="w-full mt-8 p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">{t('meter.market_pos')}</span>
        <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 ${statusColor}`}>
          {statusText}
        </span>
      </div>

      <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 opacity-20"></div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/30 z-10" style={{ left: `${((avg - min) / (max - min)) * 100}%` }}></div>
        <motion.div 
          className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
        {/* We can also format these indicators if we want precise USD/IDR, but usually markers are static.
            For simplicity, let's keep them generic or use the formatter locally if needed.
            But min/max are raw numbers from model logic. 
            For display purposes, let's just show "Low" / "High" markers or currency.
        */}
        <span>{formatCurrency(min)}</span>
        <span className="text-gray-400">{t('meter.avg_label')}: {formatCurrency(avg)}</span>
        <span>{formatCurrency(max)}+</span>
      </div>
    </div>
  );
};

export default PriceMeter;
