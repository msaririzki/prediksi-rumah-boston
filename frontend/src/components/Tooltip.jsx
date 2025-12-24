import React from 'react';
import { Info } from 'lucide-react';

const Tooltip = ({ text }) => {
  return (
    <div className="group relative inline-block ml-2 align-middle">
      <Info className="w-3 h-3 text-gray-500 hover:text-emerald-400 cursor-help transition-colors" />
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-black/90 border border-white/10 rounded-lg text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-xl text-center">
        {text}
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
      </div>
    </div>
  );
};

export default Tooltip;
