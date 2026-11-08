import React from "react";
import { ShieldCheck, Award, Lock, CheckCircle2, Globe2, Briefcase } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Verified Matchmaking",
      description: "Trusted connections with verified high-net-worth individuals and professionals.",
      color: "text-gold-400",
      border: "border-gold-500/30",
    },
    {
      icon: Award,
      title: "Pulse Entertainment Awarded",
      description: "Voted #1 for exceptional client safety, professionalism, and executive matchmaking.",
      color: "text-wine-400",
      border: "border-wine-500/30",
    },
    {
      icon: Lock,
      title: "100% Strict Discretion",
      description: "Signed NDAs, encrypted communications, and zero public exposure of personal details.",
      color: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      icon: Briefcase,
      title: "Executive & VIP Network",
      description: "Direct ties to oil sector executives, bankers, politicians, entrepreneurs, and diaspora.",
      color: "text-sky-400",
      border: "border-sky-500/30",
    },
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-5 rounded-2xl border ${b.border} flex items-start gap-4 hover:border-white/20 transition-all`}
              >
                <div className={`p-3 rounded-xl bg-white/5 ${b.color} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                    {b.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
