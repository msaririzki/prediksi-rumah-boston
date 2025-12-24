import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-6 py-10">
      {/* Icon Placeholder */}
      <div className="w-20 h-20 rounded-full bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      </div>
      
      {/* Text Placeholder */}
      <div className="h-8 w-48 bg-white/5 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      </div>

      <div className="h-4 w-32 bg-white/5 rounded-lg relative overflow-hidden">
         <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      </div>

      {/* Meter Placeholder */}
      <div className="w-full h-24 bg-white/5 rounded-xl mt-8 relative overflow-hidden">
         <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
