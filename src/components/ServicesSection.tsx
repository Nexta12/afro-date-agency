import React from "react";
import { HeartHandshake, Gem, Users, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ServicesSection() {
  const services = [
    {
      title: "Sugar Mummy Connections",
      tagline: "High-Net-Worth Women & Female Executives",
      description:
        "Connect with successful female bankers, oil directors, business owners, and diaspora mummies in Nigeria, Ghana, South Africa, UK, and USA. Enjoy monthly financial allowances (₦500k - ₦3M+), car gifts, rented apartments, and seed funding for your projects.",
      perks: ["Monthly financial upkeep", "Business capital sponsorship", "Discreet private retreats", "Rent & luxury living assistance"],
      icon: Gem,
      accent: "from-rose-900 to-wine-950",
      border: "border-rose-500/30",
      cta: "Browse Sugar Mummies",
      link: "/profiles?category=Sugar+Mummy",
    },
    {
      title: "Sugar Daddy Connections",
      tagline: "Generous Politicians, Investors & Executives",
      description:
        "Tailored for ladies and students seeking mature, generous male sponsors who provide financial freedom, vacations to Dubai and Europe, educational tuition settlement, and executive networking.",
      perks: ["High monthly allowances", "Shopping holidays", "Tuition & lifestyle coverage", "Absolute privacy & respect"],
      icon: HeartHandshake,
      accent: "from-amber-950 to-zinc-950",
      border: "border-gold-500/30",
      cta: "Browse Sugar Daddies",
      link: "/profiles?category=Sugar+Daddy",
    },
    {
      title: "Gay & Lesbian Connections",
      tagline: "Confidential LGBT Matching",
      description:
        "A confidential haven for same-sex partners seeking genuine romantic connections and wealthy companionship across Africa and the diaspora. Protected by strict non-disclosure protocols.",
      perks: ["Zero public disclosure", "Encrypted communication", "Mutual respect & safety", "Verified partners"],
      icon: Users,
      accent: "from-purple-950 to-zinc-950",
      border: "border-purple-500/30",
      cta: "Explore LGBT Matches",
      link: "/profiles?category=Gay+%26+Lesbian",
    },
    {
      title: "Business & Contract Procurement",
      tagline: "Career Mentorship, Job Placement & Contracts",
      description:
        "Our network includes politicians, oil workers, and corporate directors who facilitate career advancements, supply contracts, internships, and direct funding for ambitious entrepreneurs.",
      perks: ["Corporate job openings", "Contract allocations", "Startup seed investments", "Direct executive mentorship"],
      icon: Briefcase,
      accent: "from-emerald-950 to-zinc-950",
      border: "border-emerald-500/30",
      cta: "Apply For Executive Link",
      link: "/register",
    },
  ];

  return (
    <section id="services" className="py-20 bg-zinc-900/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-gold-500/30 text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Connection <span className="gold-shimmer">Services</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {siteConfig.agencyName} provides secure channels designed for mutual satisfaction, financial support, and executive networking.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const whatsappMatchUrl = siteConfig.getWhatsAppUrl(
              `Hello Afro-Connect Agency! I am interested in your ${s.title} package. Please tell me the registration details.`
            );
            return (
              <div
                key={idx}
                className={`glass-panel p-7 sm:p-9 rounded-3xl border ${s.border} relative overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1 rounded-full border border-white/10">
                      Service 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{s.title}</h3>
                  <p className="text-xs font-semibold text-gold-400 mb-4">{s.tagline}</p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {/* Bullet perks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {s.perks.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={s.link}
                    className="text-xs font-bold text-gold-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={whatsappMatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-4 py-2 rounded-xl wine-gradient text-white hover:opacity-95 shadow transition-all"
                  >
                    WhatsApp Match
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
