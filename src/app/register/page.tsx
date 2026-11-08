"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Male",
    age: "",
    lookingFor: "Sugar Mummy",
    phone: "",
    location: "",
    occupation: "",
    profileCode: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setRedirectUrl(data.whatsappUrl);
        // Automatically redirect to WhatsApp after 2 seconds
        setTimeout(() => {
          window.location.href = data.whatsappUrl;
        }, 1800);
      } else {
        alert(data.error || "Failed to submit. Please contact us on WhatsApp.");
      }
    } catch (err) {
      console.error(err);
      // Fallback direct WhatsApp redirect
      const fallbackMsg = `Hello Afro-Connect Agency! %0AMy Name: ${encodeURIComponent(formData.fullName)}%0AAge: ${formData.age}%0ASeeking: ${encodeURIComponent(formData.lookingFor)}%0ALocation: ${encodeURIComponent(formData.location)}%0APhone: ${encodeURIComponent(formData.phone)}%0APlease process my connection.`;
      window.location.href = siteConfig.getWhatsAppUrl(fallbackMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-16 px-4 sm:px-8 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-gold-500/30 text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
            Client Registration
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Register for <span className="gold-shimmer">Connection</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Fill in your details to get connected with a verified Sugar Mummy, Sugar Daddy, or LGBT partner. All applications are protected under strict confidentiality protocols.
          </p>
        </div>

        {/* Card Form */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-wine-500/40 shadow-2xl relative">
          {success ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">Application Received!</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Redirecting you to our matchmaker on WhatsApp ({siteConfig.phone}) to finalize your profile verification...
              </p>
              {redirectUrl && (
                <div className="pt-4">
                  <a
                    href={redirectUrl}
                    className="inline-flex items-center gap-2 wine-gradient text-white text-xs font-bold px-6 py-3 rounded-xl shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Open WhatsApp Manually
                  </a>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Full Name / Alias *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David / Emeka"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Your Age (Must be 18+) *
                  </label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="65"
                    placeholder="e.g. 25"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Row 2: Gender & Seeking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Your Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Seeking Connection *
                  </label>
                  <select
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Sugar Mummy">Sugar Mummy</option>
                    <option value="Sugar Daddy">Sugar Daddy</option>
                    <option value="Gay & Lesbian">Gay / Lesbian Partner</option>
                    <option value="Executive Mentorship">Business Sponsor &amp; Contracts</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Phone/WhatsApp & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Active Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 810 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                  />
                  <span className="text-[10px] text-zinc-400 mt-1 block">
                    Our agent will contact you via WhatsApp with available matches.
                  </span>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Current Location / City &amp; Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lagos, Nigeria or Accra, Ghana"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Row 4: Occupation & Specific Profile Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Your Occupation / Field
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Student, Model, Tech, Banking"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Preferred Profile Code (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AFRO-SM-001"
                    value={formData.profileCode}
                    onChange={(e) => setFormData({ ...formData, profileCode: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  Special Requirements or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any specific preferences you have..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500"
                ></textarea>
              </div>

              {/* Privacy seal */}
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center gap-3 text-xs text-zinc-300">
                <Lock className="w-5 h-5 text-gold-400 shrink-0" />
                <p>
                  <strong>Confidentiality:</strong> Your identity is kept 100% private. We do not share your information without direct consent.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full wine-gradient text-white text-sm font-black py-4 rounded-xl shadow-xl shadow-rose-950/80 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Processing..." : "Submit & Connect via WhatsApp"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
