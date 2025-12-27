import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

const Toast = ({ message, type = 'error', onClose, duration = 4000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const isError = type === 'error';

  // Premium Colors
  const gradientBorder = isError 
    ? 'from-rose-500 via-red-500 to-amber-500' 
    : 'from-emerald-400 via-teal-500 to-cyan-500';
  
  const glowColor = isError ? 'shadow-[0_0_40px_-5px_rgba(244,63,94,0.3)]' : 'shadow-[0_0_40px_-5px_rgba(16,185,129,0.3)]';
  const iconBg = isError ? 'bg-gradient-to-br from-rose-500 to-red-600' : 'bg-gradient-to-br from-emerald-400 to-teal-600';
  const Icon = isError ? AlertTriangle : CheckCircle2;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex items-stretch rounded-2xl p-[1px] bg-gradient-to-r ${gradientBorder} ${glowColor}`}
    >
      <div className="flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-2xl px-5 py-4 min-w-[340px] max-w-sm relative overflow-hidden">
        
        {/* Animated Background Mesh */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${isError ? 'bg-red-500' : 'bg-emerald-500'} rounded-full blur-[60px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>

        {/* Floating Icon */}
        <div className={`relative shrink-0 w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center shadow-lg`}>
            <Icon className="text-white w-5 h-5 drop-shadow-md" strokeWidth={2.5} />
            <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="flex-1 z-10">
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${isError ? 'text-rose-400' : 'text-emerald-400'}`}>
            {isError ? 'Attention Required' : 'Success'}
          </h4>
          <p className="text-white text-sm font-medium leading-snug">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="relative z-10 text-white/30 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-lg"
        >
          <X size={14} strokeWidth={3} />
        </button>

        {/* Progress Line */}
        <motion.div 
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r ${gradientBorder} opacity-50`}
        />
      </div>
    </motion.div>
  );
};

export default Toast;
