"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureItem from "./FeatureItem";
import CategorySwitcher from "./CategorySwitcher";

export default function BentoContainer() {
  return (
    <div className="w-full bg-[#967df5] rounded-[32px] md:rounded-[40px] p-6 md:p-8 lg:p-8 relative overflow-hidden z-10 mt-4 lg:mt-3 lg:flex-1 flex flex-col justify-center min-h-0 shadow-[0_20px_50px_rgba(150,125,245,0.25)]">

      {/* Grid structure inside the purple card */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-stretch min-h-[340px] lg:min-h-0">

        {/* Left Column: Collection Description */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4 text-white">

          {/* Top content */}
          <div className="flex flex-col items-start gap-3 md:gap-4">

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.65rem] font-bold leading-[1.1] tracking-tight max-w-sm mt-1"
            >
              Where Comfort Meets Confidence
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/80 text-sm md:text-base leading-relaxed max-w-xs"
            >
              Elevate your everyday look with pieces that speak you.
            </motion.p>

            {/* Button */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="group bg-dark-charcoal text-white hover:bg-black font-semibold rounded-full pl-6 pr-2.5 py-2.5 flex items-center gap-4 w-fit text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 mt-2 cursor-pointer focus:outline-none"
            >
              <span>Explore Now</span>
              <div className="bg-white text-dark-charcoal rounded-full p-2 group-hover:bg-[#8553fb] group-hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Middle Column: Spacer on Desktop (Model occupies this space), Mobile model on small screens */}
        <div className="lg:col-span-3 flex items-center justify-center relative min-h-[300px] lg:min-h-0">
          {/* Mobile model image (relative layout) */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/hero-model.png"
              alt="Nexora Model"
              className="h-full object-contain object-bottom scale-110"
            />
          </div>
        </div>

        {/* Right Column: Features List & Featured Look Card */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">

          {/* Feature Icons Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-2"
          >
            <FeatureItem
              label="Premium Quality"
              maxWClass="max-w-[70px]"
              icon={
                <svg className="w-5 h-5 text-white fill-none stroke-[2]" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 4.5L2 6.5l1.5 4L6 9.5V20h12V9.5l2.5 1L22 6.5l-4-2c-1.5 2.5-4.5 2.5-6 0-1.5 2.5-4.5 2.5-6 0z" />
                </svg>
              }
            />

            <FeatureItem
              label="Sustainable Fashion"
              maxWClass="max-w-[80px]"
              icon={
                <svg className="w-5 h-5 text-white fill-none stroke-[2]" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 22C2 22 8 20 12 16C16 12 22 2 22 2C22 2 12 8 8 12C4 16 2 22 2 22Z" />
                </svg>
              }
            />

            <FeatureItem
              label="Limited Edition"
              maxWClass="max-w-[70px]"
              icon={
                <svg className="w-5 h-5 text-white fill-none stroke-[2]" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 5-10 13L2 8l4-5z" />
                </svg>
              }
            />
          </motion.div>

          {/* Category Switcher UI */}
          <CategorySwitcher />

        </div>

      </div>

    </div>
  );
}
