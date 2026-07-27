import React from "react";

export default function SocialProof() {
  return (
    <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md rounded-2xl py-2.5 px-4 border border-white/15 w-fit shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
      {/* Overlapping Avatars */}
      <div className="flex -space-x-3">
        <img 
          className="w-9 h-9 rounded-full border-2 border-[#967df5] object-cover" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" 
          alt="User testimonial 1" 
        />
        <img 
          className="w-9 h-9 rounded-full border-2 border-[#967df5] object-cover" 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" 
          alt="User testimonial 2" 
        />
        <img 
          className="w-9 h-9 rounded-full border-2 border-[#967df5] object-cover" 
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&h=80&q=80" 
          alt="User testimonial 3" 
        />
      </div>
      {/* Text Info */}
      <div className="text-left leading-tight pr-2">
        <p className="text-[11px] font-bold text-white uppercase tracking-wider">Loved by 20K+</p>
        <p className="text-[10px] text-white/70 font-semibold">Trendsetters</p>
      </div>
      {/* Heart Icon */}
      <div className="ml-1 text-white/90">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
}
