import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-2 px-4 z-30 relative">
      {/* Left: Nav Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-zinc-800">
        <a href="#" className="hover:text-brand-purple transition-colors duration-200">Shop</a>
        <a href="#" className="hover:text-brand-purple transition-colors duration-200">New In</a>
        <a href="#" className="hover:text-brand-purple transition-colors duration-200">Collections</a>
        <a href="#" className="hover:text-brand-purple transition-colors duration-200">About</a>
        <a href="#" className="hover:text-brand-purple transition-colors duration-200">Contact</a>
      </div>
      
      {/* Mobile Menu Indicator (Hidden on Desktop) */}
      <div className="lg:hidden flex items-center">
        <button className="p-2 text-zinc-800 focus:outline-none" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Middle: Brand Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <span className="font-syne font-black text-2xl md:text-3xl tracking-[0.15em] text-zinc-950">NEXORA</span>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Search Icon */}
        <button className="p-2.5 rounded-full hover:bg-zinc-100 transition-colors duration-200 focus:outline-none" aria-label="Search">
          <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Profile Avatar */}
        <div className="relative group cursor-pointer flex items-center justify-center">
          <div className="w-9 h-9 md:w-10 md:h-10 group-hover:w-24 md:group-hover:w-28 rounded-full overflow-hidden border-2 border-brand-purple/20 group-hover:border-brand-purple transition-all duration-500 ease-out shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=150&q=80" 
              alt="User profile" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Cart Button */}
        <button className="flex items-center gap-2 border border-brand-purple/15 bg-brand-purple/[0.03] hover:bg-brand-purple/[0.08] text-brand-purple hover:border-brand-purple/30 transition-all duration-300 px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm focus:outline-none">
          <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>1 Item</span>
        </button>
      </div>
    </nav>
  );
}
