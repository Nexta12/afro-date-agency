"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloating() {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hello Afro-Connect Agency! I want to get connected to a verified Sugar Mummy / Sugar Daddy. Please guide me."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 transition-all hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
        <span className="absolute -top-1 -right-1 bg-gold-500 text-zinc-950 text-[10px] font-black px-1.5 py-0.2 rounded-full border border-zinc-950 shadow">
          LIVE
        </span>
      </a>
    </div>
  );
}
