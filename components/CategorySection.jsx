"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CategorySection() {
  const categories = [
    {
      id: "dress",
      title: "Dress",
      image: "/f4463082bcad3d854ee1792f98389683.png",
      bgGradient: "from-[#8553fb] to-[#a27bfe]",
      imgClasses: "h-[140%] -top-7 right-0",
    },
    {
      id: "shoes",
      title: "Shoes",
      image: "/pngegg.png",
      bgGradient: "from-zinc-900 to-zinc-800 border border-white/10",
      imgClasses: "h-[120%] -top-3 right-1",
    },
    {
      id: "perfume",
      title: "Perfume",
      image: "/pngegg (1).png",
      bgGradient: "from-[#967df5] to-[#b49eff]",
      imgClasses: "h-[130%] -top-4 right-1",
    },
    {
      id: "jewellery",
      title: "Jewellery",
      image: "/pngegg (2).png",
      bgGradient: "from-[#6c39e8] to-[#8d5eff]",
      imgClasses: "h-[115%] -top-2 right-2",
    },
  ];

  return (
    <section className="w-full pt-8 pb-10 px-4 md:px-8 lg:px-10">

      {/* Decorative Top Divider matching reference */}
      <div className="flex items-center justify-center gap-3 mb-8 w-full max-w-md mx-auto opacity-75">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-brand-purple/40 to-brand-purple" />
        <div className="flex items-center gap-1.5 text-brand-purple">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-purple" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/40" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-brand-purple/40 to-brand-purple" />
      </div>

      {/* 4 Category Pill Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-center">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-gradient-to-r ${cat.bgGradient} rounded-full h-24 md:h-28 lg:h-28 px-6 flex items-center justify-start overflow-visible cursor-pointer shadow-lg`}
          >
            {/* Left Content (Title Only) */}
            <div className="flex flex-col items-start z-10 max-w-[55%]">
              <h3 className="text-white font-black text-lg md:text-xl lg:text-2xl tracking-tight leading-none drop-shadow-sm">
                {cat.title}
              </h3>
            </div>

            {/* Right Overlapping Product PNG (Increased Scale, Static) */}
            <div className={`absolute pointer-events-none z-20 ${cat.imgClasses}`}>
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
              />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
