import React from "react";

export default function FeaturedLook() {
  return (
    <div className="flex flex-col items-start lg:items-end w-full">
      <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3.5 self-start lg:self-end pr-2">
        Featured Look
      </span>
      
      {/* White Card */}
      <div className="bg-white rounded-[20px] p-2.5 shadow-lg flex flex-col gap-2.5 w-full max-w-[210px] self-start lg:self-end hover:shadow-xl transition-shadow duration-300">
        {/* Card Image */}
        <div className="rounded-[14px] overflow-hidden aspect-[4/5] relative w-full group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=300&q=80" 
            alt="Graffiti Hoodie" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-0.5 text-left px-1">
          <span className="text-zinc-950 font-bold text-xs">Graffiti Hoodie</span>
          <span className="text-zinc-400 text-[10px] font-medium">Streetwear Essential</span>
        </div>
        {/* Cart/Price Button */}
        <button className="flex items-center justify-center gap-2 bg-brand-purple hover:bg-[#643feb] transition-colors duration-300 rounded-full py-2 px-3 text-white text-[11px] font-bold shadow-md hover:shadow-lg cursor-pointer focus:outline-none">
          <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>$79.99</span>
        </button>
      </div>
    </div>
  );
}
