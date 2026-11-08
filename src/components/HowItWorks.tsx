import React from "react";
import { MessageSquare, ShieldCheck, Heart, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Profile or Submit Form",
      description:
        "Browse verified Sugar Mummy, Sugar Daddy, or LGBT profiles. Alternatively, complete our private registration form with your preferred location, age, and interests.",
      icon: Heart,
    },
    {
      number: "02",
      title: "Chat with Matchmaker",
      description: `Connect directly with our verification team on WhatsApp (${siteConfig.phone}). We confirm eligibility, protect your identity, and set the meeting terms.`,
      icon: MessageSquare,
    },
    {
      number: "03",
      title: "Private Introduction",
      description:
        "Receive your matched partner's verified contact. Enjoy direct meetings, monthly upkeep payments, mentorship, and support with 100% discretion guaranteed.",
      icon: ShieldCheck,
    },
  ];

  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hello Afro-Connect Agency! I am ready to get started with the connection process right away."
  );

  return (
    <section className="py-20 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-gold-500/30 text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
            3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            How Matchmaking Works at <span className="gold-shimmer">Afro-Connect</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our discreet matching system is fast, secure, and designed to ensure maximum safety for all parties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/10 relative hover:border-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-wine-400/40">{st.number}</span>
                    <div className="w-12 h-12 rounded-2xl wine-gradient flex items-center justify-center text-gold-300 shadow-lg shadow-rose-950/50">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{st.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confidential &amp; Verified</span>
                </div>
              </div>
            );
          })}
        </div>

     
      </div>
    </section>
  );
}
