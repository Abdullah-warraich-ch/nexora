import React from "react";

export default function FeatureItem({ icon, label, maxWClass = "max-w-[70px]" }) {
  return (
    <div className="flex flex-col items-center text-center gap-2.5">
      <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shadow-inner">
        {icon}
      </div>
      <span className={`text-[10px] md:text-xs font-bold text-white/90 leading-tight ${maxWClass} uppercase tracking-wider`}>
        {label}
      </span>
    </div>
  );
}
