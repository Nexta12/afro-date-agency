"use client";

import React, { useState } from "react";
import { Search, MapPin, HeartHandshake, User, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function QuickMatchFinder() {
  const router = useRouter();
  const [iam, setIam] = useState("Man");
  const [lookingFor, setLookingFor] = useState("Sugar Mummy");
  const [country, setCountry] = useState("Nigeria");
  const [ageGroup, setAgeGroup] = useState("35-50");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      category: lookingFor,
      country: country === "All Countries" ? "" : country,
    }).toString();
    router.push(`/profiles?${query}`);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hello Afro-Connect Agency! I am a: ${iam}. Looking for: ${lookingFor}. Location: ${country}. Age Preference: ${ageGroup}. Please connect me with an available partner.`;
    window.open(siteConfig.getWhatsAppUrl(text), "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel-wine p-6 sm:p-8 rounded-3xl border border-wine-500/40 shadow-2xl relative">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
            Matchmaking Search Filter
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Find Your Match Within 48 Hours
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs text-emerald-400 font-semibold">Matches Available Today</span>
        </div>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* I Am A */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-gold-400" />
            I am a
          </label>
          <select
            value={iam}
            onChange={(e) => setIam(e.target.value)}
            className="w-full bg-zinc-900/90 border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Non-Binary">Non-Binary</option>
          </select>
        </div>

        {/* Seeking */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1">
            <HeartHandshake className="w-3.5 h-3.5 text-wine-400" />
            Seeking
          </label>
          <select
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            className="w-full bg-zinc-900/90 border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="Sugar Mummy">Sugar Mummy</option>
            <option value="Sugar Daddy">Sugar Daddy</option>
            <option value="Gay & Lesbian">Gay &amp; Lesbian</option>
          </select>
        </div>

        {/* Location / Country */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Country
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-zinc-900/90 border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="All Countries">All Countries</option>
            <option value="Nigeria">Nigeria (Lagos, Abuja, PH, etc.)</option>
            <option value="Ghana">Ghana (Accra, Kumasi)</option>
            <option value="South Africa">South Africa</option>
            <option value="Ivory Coast">Ivory Coast</option>
            <option value="Benin">Cotonou (Benin)</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="Other Diaspora">Canada / Germany / Europe</option>
          </select>
        </div>

        {/* Age Bracket */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1">
            <Search className="w-3.5 h-3.5 text-gold-400" />
            Age Range
          </label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full bg-zinc-900/90 border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
          >
            <option value="21-30">21 - 30 years</option>
            <option value="31-40">31 - 40 years</option>
            <option value="41-55">41 - 55 years</option>
            <option value="55+">55+ years</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
         <div className=""></div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              className="flex-1 sm:flex-none text-xs font-bold px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 text-white hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-gold-400" />
              View Profiles
            </button>
        
          </div>
        </div>
      </form>
    </div>
  );
}
