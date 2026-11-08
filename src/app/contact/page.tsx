import React from "react";
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hello Afro-Connect Agency! I am contacting you directly to make an inquiry about getting connected."
  );

  const faqs = [
    {
      q: "How fast will I be matched with a Sugar Mummy or Sugar Daddy?",
      a: "Our typical matching timeframe is between 24 and 48 hours once your identity and age (18+) are verified by our matchmaker on WhatsApp."
    },
   
    {
      q: "How are the monthly allowances and upkeep settlements handled?",
      a: "Allowances are settled directly between you and your verified sponsor. Our agency establishes the terms beforehand so both parties are completely aligned without misunderstanding."
    },
    {
      q: "Do you offer connections in international countries?",
      a: "Yes! In addition to Nigeria, Ghana, South Africa, Benin, Togo, and Cameroon, we actively match clients in the UK, USA, Germany, Canada, and Brazil."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-gold-500/30 text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            Matchmaking Help Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Contact <span className="gold-shimmer">{siteConfig.agencyName}</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Need assistance or have questions about our matching services? Reach out directly via WhatsApp, Call, or Email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: WhatsApp */}
          <div className="glass-panel p-7 rounded-3xl border border-emerald-500/30 text-center flex flex-col justify-between hover:border-emerald-500/60 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp Fast Desk</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Available 24/7 for instant profile matching and guidance.
              </p>
              <p className="text-sm font-black text-emerald-400 mb-4">{siteConfig.phone}</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl shadow transition-all"
            >
              Start WhatsApp Chat
            </a>
          </div>

          {/* Card 2: Phone Hotline */}
          <div className="glass-panel p-7 rounded-3xl border border-gold-500/30 text-center flex flex-col justify-between hover:border-gold-500/60 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-950/80 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Direct Helpline</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Speak directly with matchmakers for consultations.
              </p>
              <p className="text-sm font-black text-gold-300 mb-4">{siteConfig.phone}</p>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full wine-gradient text-white text-xs font-bold py-3 rounded-xl shadow hover:opacity-95 transition-all"
            >
              Call Customer Line
            </a>
          </div>

          {/* Card 3: Email Support */}
          <div className="glass-panel p-7 rounded-3xl border border-wine-500/30 text-center flex flex-col justify-between hover:border-wine-500/60 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-wine-950/80 border border-wine-500/40 text-wine-400 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Official Email</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Send inquiries, partnership proposals, or verification materials.
              </p>
              <p className="text-sm font-black text-zinc-200 mb-4 truncate">{siteConfig.email}</p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold py-3 rounded-xl border border-white/10 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>

       

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-gold-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="glass-panel p-5 rounded-2xl border border-white/10">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  {f.q}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
