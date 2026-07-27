"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DiscountCards() {
  return (
    <section className="w-full pb-14 px-4 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* Card 1: Summer Sale */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] md:rounded-[32px] overflow-hidden min-h-[260px] md:min-h-[300px] lg:min-h-[320px] flex flex-col justify-between p-7 md:p-9 shadow-xl group cursor-pointer"
        >
          {/* Background Image */}
          <img
            src="/banner-bag.png"
            alt="Summer Sale Handbag"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent z-0" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Tag */}
            <div className="w-fit">
              <span className="bg-white/90 text-zinc-950 font-extrabold text-[10px] md:text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                Summer Sale
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="my-auto py-4 max-w-[65%]">
              <h3 className="font-syne text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
                Up to 50% Off
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-medium mt-2">
                On selected items
              </p>
            </div>

            {/* Action Button */}
            <div>
              <button className="bg-zinc-950 hover:bg-black text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all duration-200">
                Shop Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 2: New Arrivals */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-[28px] md:rounded-[32px] overflow-hidden min-h-[260px] md:min-h-[300px] lg:min-h-[320px] flex flex-col justify-between p-7 md:p-9 shadow-xl group cursor-pointer"
        >
          {/* Background Image */}
          <img
            src="/banner-sunglasses.png"
            alt="New Arrivals Sunglasses"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent z-0" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Tag */}
            <div className="w-fit">
              <span className="bg-white/90 text-zinc-950 font-extrabold text-[10px] md:text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                New Arrivals
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="my-auto py-4 max-w-[65%]">
              <h3 className="font-syne text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
                Discover The Latest Trends
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-medium mt-2">
                Explore our newest drop
              </p>
            </div>

            {/* Action Button */}
            <div>
              <button className="bg-zinc-950 hover:bg-black text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all duration-200">
                Explore Now
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
