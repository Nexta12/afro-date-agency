"use client";

import React from "react";
import Link from "next/link";
import { Heart, Phone, Mail, ShieldCheck, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const whatsappUrl = siteConfig.getWhatsAppUrl();

  return (
    <footer className="bg-black text-zinc-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Overview */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl wine-gradient flex items-center justify-center text-gold-400 shadow">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              <strong className="text-white">{siteConfig.agencyName}</strong> is Africa&apos;s leading matchmaking and sugar connection agency. Committed to connecting ambitious individuals with high-net-worth professionals in an atmosphere of confidentiality, safety, and mutual support.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Matchmaking Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/profiles?category=Sugar+Mummy" className="hover:text-gold-400 transition-colors">
                  Sugar Mummies in Nigeria &amp; Ghana
                </Link>
              </li>
              <li>
                <Link href="/profiles?category=Sugar+Daddy" className="hover:text-gold-400 transition-colors">
                  Sugar Daddies &amp; Sponsors
                </Link>
              </li>
              <li>
                <Link href="/profiles?category=Gay+%26+Lesbian" className="hover:text-gold-400 transition-colors">
                  Gay &amp; Lesbian Connections
                </Link>
              </li>
            
              <li>
                <Link href="/register" className="hover:text-gold-400 transition-colors">
                  Register For Matching
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Help Desk &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Covered */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Locations Served
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              We coordinate matches across all major cities and international destinations:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Nigeria</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Ghana</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">South Africa</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Cotonou (Benin)</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Togo</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Cameroon</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Ivory Coast</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">United Kingdom</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">USA</span>
              <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-white/5">Canada &amp; Germany</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-white hover:text-gold-400 transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                {siteConfig.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-zinc-400 pt-1">
                <MapPin className="w-4 h-4 text-wine-400 shrink-0 mt-0.5" />
                <span>Headquarters: Lagos, Nigeria • Operations across Africa &amp; Diaspora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & CAC Badge */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-zinc-500 space-y-2">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> {siteConfig.agencyName} is strictly for consenting adults aged 18 and above. We operate under strict confidentiality.
          </p>
        </div>
      </div>
    </footer>
  );
}
