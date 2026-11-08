"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, Award, MessageCircle, Menu, X, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = siteConfig.getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl">
      {/* Top Bar with Accreditations & Direct Contact */}
   

      {/* Main Navigation Bar */}
      <nav className="bg-zinc-950/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl wine-gradient flex items-center justify-center shadow-lg shadow-rose-950/50 border border-wine-400/30 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-gold-400 fill-gold-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-[9px] tracking-widest text-zinc-400 font-medium">
                Homes of Connections
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <Link href="/profiles" className="hover:text-gold-400 transition-colors">
              Sugar Mummies
            </Link>
            <Link href="/profiles?category=Sugar+Daddy" className="hover:text-gold-400 transition-colors">
              Sugar Daddies
            </Link>
            <Link href="/profiles?category=Gay+%26+Lesbian" className="hover:text-gold-400 transition-colors">
              LGBT Partners
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/register"
              className="text-xs font-semibold px-4 py-2 rounded-lg border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 transition-colors"
            >
              Register Profile
            </Link>
           
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 text-sm text-zinc-300 pb-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-gold-400 hover:bg-zinc-900 rounded"
            >
              Home
            </Link>
            <Link
              href="/profiles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-gold-400 hover:bg-zinc-900 rounded"
            >
              Sugar Mummies
            </Link>
            <Link
              href="/profiles?category=Sugar+Daddy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-gold-400 hover:bg-zinc-900 rounded"
            >
              Sugar Daddies
            </Link>
            <Link
              href="/profiles?category=Gay+%26+Lesbian"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-gold-400 hover:bg-zinc-900 rounded"
            >
              Gay &amp; Lesbian Services
            </Link>
        
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-gold-400 hover:bg-zinc-900 rounded"
            >
              Agency Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-gold-400 hover:bg-zinc-900 rounded"
            >
              Contact Agent
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs font-semibold py-2.5 rounded-lg border border-gold-500/40 text-gold-300 bg-zinc-900"
              >
                Register For Matchmaking
              </Link>
            
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
