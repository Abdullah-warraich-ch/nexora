"use client";
import React from "react";
import { motion } from "framer-motion";
import BentoContainer from "./BentoContainer";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-between flex-1 min-h-0 z-10">

      {/* SVG Orbits (Behind model, visible on desktop) */}
      <div className="hidden overflow-hidden lg:block absolute left-1/2 -translate-x-1/2 top-[20%] -translate-y-1/2 w-[550px] h-[320px] pointer-events-none z-0">
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

      {/* Top Row: Headings (ONLY THESE ANIMATE AT TOP) */}
      <div className="w-full grid lg:grid-cols-2 gap-8 items-start z-10 px-4 md:px-6 relative pointer-events-none select-none">
        {/* Left Column: Define Your STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start pointer-events-auto"
        >
          <span className="font-sans italic font-bold text-[1.85rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[3.85rem] tracking-tight text-zinc-950 leading-tight">
            Define Your
          </span>
          <span className="font-syne font-black text-[3.25rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.8] tracking-tighter text-brand-purple mt-1">
            STYLE
          </span>
        </motion.div>

        {/* Right Column: Own Your WORLD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-end text-right pointer-events-auto mt-[-10px] lg:mt-0 lg:pr-6"
        >
          <div className="flex items-center gap-2 md:gap-3 justify-end">
            <span className="font-sans italic font-bold text-[1.85rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[3.85rem] tracking-tight text-zinc-950 leading-tight">
              Own Your
            </span>
            {/* World Globe Icon */}
            <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-purple fill-none stroke-[2.2] stroke-current mt-1 animate-[spin_25s_linear_infinite]" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          <span className="font-syne font-black text-[3.25rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.8] tracking-tighter text-brand-purple mt-1">
            WORLD
          </span>
        </motion.div>
      </div>

      {/* Middle: Centered Overlapping Model Image (STATIC - NO ANIMATION) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[54%] h-[130%] max-h-[1050px] pointer-events-none z-20">
        <img
          src="/hero-model.png"
          alt="Nexora Model"
          className="w-full h-full object-contain object-bottom scale-[1.22] origin-bottom"
        />
      </div>

      {/* Bento Container */}
      <BentoContainer />

    </div>
  );
}
