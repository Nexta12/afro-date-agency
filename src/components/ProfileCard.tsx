"use client";

import React from "react";
import { Profile } from "@/data/profiles";
import { MapPin, ArrowRight } from "lucide-react";

interface ProfileCardProps {
  profile: Profile;
  onOpenDetails: (profile: Profile) => void;
}

export default function ProfileCard({ profile, onOpenDetails }: ProfileCardProps) {
  return (
    <div
      onClick={() => onOpenDetails(profile)}
      className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 cursor-pointer"
    >
      {/* Profile Picture */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      </div>

      {/* Name, Location & View Bio CTA */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
            {profile.name}
          </h3>
          <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{profile.location}</span>
          </p>
        </div>

        <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
          <span>View Bio</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
