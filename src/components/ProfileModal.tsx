"use client";

import React, { useEffect } from "react";
import { Profile } from "@/data/profiles";
import { X, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ProfileModalProps {
  profile: Profile | null;
  onClose: () => void;
}

export default function ProfileModal({ profile, onClose }: ProfileModalProps) {
  // Close on Escape key & prevent body scrolling when modal is open
  useEffect(() => {
    if (!profile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [profile, onClose]);

  if (!profile) return null;

  const whatsappMessage = `Hello! I would like to connect with ${profile.name} from ${profile.location}.`;
  const whatsappUrl = siteConfig.getWhatsAppUrl(whatsappMessage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header with Photo & Basic Info */}
        <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full bg-zinc-950 shrink-0 overflow-hidden">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Name & Location over photo */}
          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow">
              {profile.name}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 flex items-center gap-1.5 mt-0.5 drop-shadow">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{profile.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body: Bio */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-gold-400 mb-2">
              Bio
            </h3>
            <p className="text-sm text-zinc-200 leading-relaxed bg-zinc-950/50 p-4 rounded-xl border border-white/5">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-zinc-900/95 flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-1 wine-gradient hover:opacity-95 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Connect on WhatsApp
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-semibold py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
