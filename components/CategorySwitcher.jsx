"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CategorySwitcher() {
  const [activeTab, setActiveTab] = useState("Men");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start lg:items-end w-full mt-auto"
    >
      {/* Glassmorphic Sliding Toggle */}
      <div className="relative bg-black/25 backdrop-blur-xl rounded-full p-1.5 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center w-full max-w-[210px] self-start lg:self-end select-none">
        
        {/* Active Sliding Pill Background */}
        <div
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_15px_rgba(255,255,255,0.35)] ${
            activeTab === "Men" ? "left-1.5" : "left-[calc(50%+1.5px)]"
          }`}
        />

        {/* Men Tab Button */}
        <button
          onClick={() => setActiveTab("Men")}
          className={`relative z-10 flex-1 py-2 text-xs font-black tracking-wider uppercase transition-colors duration-300 cursor-pointer text-center ${
            activeTab === "Men" ? "text-zinc-950" : "text-white/75 hover:text-white"
          }`}
        >
          Men
        </button>

        {/* Women Tab Button */}
        <button
          onClick={() => setActiveTab("Women")}
          className={`relative z-10 flex-1 py-2 text-xs font-black tracking-wider uppercase transition-colors duration-300 cursor-pointer text-center ${
            activeTab === "Women" ? "text-zinc-950" : "text-white/75 hover:text-white"
          }`}
        >
          Women
        </button>

      </div>
    </motion.div>
  );
}
