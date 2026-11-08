"use client";

import React, { useState, useMemo } from "react";
import { profiles, Profile } from "@/data/profiles";
import ProfileCard from "@/components/ProfileCard";
import ProfileModal from "@/components/ProfileModal";
import { Search, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ProfilesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);

  const categories = ["All", "Sugar Mummy", "Sugar Daddy", "Gay & Lesbian"];
  const countries = ["All", "Nigeria", "Ghana", "South Africa", "United Kingdom", "USA", "Ivory Coast", "Benin"];

  // Filter profiles
  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      const matchCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchCountry =
        selectedCountry === "All" ||
        p.country.toLowerCase().includes(selectedCountry.toLowerCase());
      const matchSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchCountry && matchSearch;
    });
  }, [selectedCategory, selectedCountry, searchQuery]);

  const whatsappFallbackUrl = siteConfig.getWhatsAppUrl(
    "Hello Afro-Connect Agency, I could not find my specific match in your online catalog. Please check your offline database."
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-gold-500/30 text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
            Member Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Sugar Mummies, Sugar Daddies &amp; <span className="gold-shimmer">VIP Partners</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Browse verified profiles across Africa and the international diaspora. Select any profile to view full requirements and connect via WhatsApp.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-5 rounded-3xl border border-white/10 mb-10 shadow-2xl space-y-4">
          {/* Top row: search + category filters */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, role, or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "wine-gradient text-white shadow border border-wine-400"
                      : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom row: Country selection pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-xs">
            <span className="text-zinc-400 font-semibold flex items-center gap-1 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Country:
            </span>
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedCountry === c
                    ? "bg-gold-500 text-zinc-950 font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-zinc-400">
          <p>
            Showing <strong className="text-white">{filteredProfiles.length}</strong> profiles
          </p>
          <div className="flex items-center gap-2 text-emerald-400">
         
      
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProfiles.map((p) => (
              <ProfileCard
                key={p.id}
                profile={p}
                onOpenDetails={(profile) => setActiveProfile(profile)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel rounded-3xl border border-white/10 p-8">
            <p className="text-base text-zinc-300 font-bold mb-2">
              No matching profiles found for your selection.
            </p>
            <p className="text-xs text-zinc-400 mb-6">
              Contact our matchmaker directly to search our confidential database.
            </p>
            <a
              href={whatsappFallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 wine-gradient text-white text-xs font-bold px-6 py-3 rounded-xl shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Contact Matchmaker on WhatsApp{siteConfig.phone ? ` (${siteConfig.phone})` : ""}
            </a>
          </div>
        )}

        {/* Profile Modal */}
        <ProfileModal
          profile={activeProfile}
          onClose={() => setActiveProfile(null)}
        />
      </div>
    </div>
  );
}
