import React from "react";

import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hello Afro-Connect Agency! I am ready to get connected with a partner today."
  );

  return (
    <div className="relative overflow-hidden pt-12 pb-20 dark-luxury-gradient">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-wine-900/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Announcement Pill */}
      

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
        
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Get Connected to <span className="gold-shimmer">Rich &amp; Wealthy</span> Sugar Mummies, Sugar Daddies &amp; Partners
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
            Welcome to <strong className="text-white font-semibold">{siteConfig.agencyName}</strong>. Connecting individuals with successful, high-net-worth professionals including sugar mummies, sugar daddies, and gay &amp; lesbian partners across Africa and the diaspora.
          </p>


          {/* Location Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2 text-[11px] text-zinc-400 font-medium">
            <span className="text-zinc-300 font-semibold">Locations:</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">Nigeria</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">Ghana</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">South Africa</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">Cotonou</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">Ivory Coast</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">Cameroon</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">UK</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">USA</span>
            <span className="bg-zinc-900/90 border border-white/10 px-2 py-0.5 rounded">Germany &amp; Canada</span>
          </div>
        </div>

        {/* The Quick Match Finder Search Widget */}
      

        {/* Quick Trust Bar */}
        <div className="mt-12 max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center pt-8 border-t border-white/10">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">10,000+</p>
            <p className="text-xs text-zinc-400 mt-0.5">Connections</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-gold-400">100%</p>
            <p className="text-xs text-zinc-400 mt-0.5">Discretion &amp; Privacy</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">48 Hours</p>
            <p className="text-xs text-zinc-400 mt-0.5">Connection Time</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">Awarded #1</p>
            <p className="text-xs text-zinc-400 mt-0.5">Pulse Awarded Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
