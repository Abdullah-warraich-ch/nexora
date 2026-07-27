import React from "react";
import BentoContainer from "./BentoContainer";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-between min-h-[700px] lg:min-h-[820px] mt-1 z-10">
      
      {/* SVG Orbits (Behind model, visible on desktop) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[24%] -translate-y-1/2 w-[600px] h-[350px] pointer-events-none z-0">
        <svg className="w-full h-full opacity-60" viewBox="0 0 600 350" fill="none">
          <ellipse 
            cx="300" 
            cy="175" 
            rx="240" 
            ry="70" 
            stroke="#8553fb" 
            strokeWidth="1" 
            strokeDasharray="4 4" 
            className="opacity-40"
            transform="rotate(-12 300 175)"
          />
          <ellipse 
            cx="300" 
            cy="175" 
            rx="200" 
            ry="50" 
            stroke="#8553fb" 
            strokeWidth="1.25" 
            transform="rotate(15 300 175)"
          />
        </svg>
      </div>

      {/* Top Row: Headings */}
      <div className="w-full grid lg:grid-cols-2 gap-8 items-start z-10 px-4 md:px-6 relative pointer-events-none select-none">
        {/* Left Column: Define Your STYLE */}
        <div className="flex flex-col items-start pointer-events-auto">
          <span className="font-sans italic font-bold text-[2rem] md:text-[3.5rem] lg:text-[4.25rem] tracking-tight text-zinc-950 leading-tight">
            Define Your
          </span>
          <span className="font-syne font-black text-[3.5rem] md:text-[6.5rem] lg:text-[7.8rem] leading-[0.8] tracking-tighter text-brand-purple mt-1 md:mt-2">
            STYLE
          </span>
        </div>

        {/* Right Column: Own Your WORLD */}
        <div className="flex flex-col items-end text-right pointer-events-auto mt-[-10px] lg:mt-0 lg:pr-6">
          <div className="flex items-center gap-3 md:gap-4 justify-end">
            <span className="font-sans italic font-bold text-[2rem] md:text-[3.5rem] lg:text-[4.25rem] tracking-tight text-zinc-950 leading-tight">
              Own Your
            </span>
            {/* 8-pointed star */}
            <svg className="w-7 h-7 md:w-9 md:h-9 text-brand-purple fill-current mt-2 animate-[spin_15s_linear_infinite]" viewBox="0 0 24 24">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" />
            </svg>
          </div>
          <span className="font-syne font-black text-[3.5rem] md:text-[6.5rem] lg:text-[7.8rem] leading-[0.8] tracking-tighter text-brand-purple mt-1 md:mt-2">
            WORLD
          </span>
        </div>
      </div>

      {/* Middle: Centered Overlapping Model Image */}
      {/* Desktop model (absolute layout) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[58%] h-[125%] max-h-[1050px] -translate-y-[40px] lg:-translate-y-[60px] pointer-events-none z-20">
        <img 
          src="/hero-model.png" 
          alt="Nexora Model" 
          className="w-full h-full object-contain object-bottom scale-[1.12] origin-bottom"
        />
      </div>

      {/* Bento Container */}
      <BentoContainer />

    </div>
  );
}
