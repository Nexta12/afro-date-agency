"use client";

import React from "react";
import { testimonials, Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

function getAbbreviatedName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) return fullName;
  const firstName = parts[0];
  const lastPart = parts[parts.length - 1];
  if (lastPart.endsWith(".")) return fullName;
  return `${firstName} ${lastPart.charAt(0)}.`;
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-wine-900/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Client <span className="gold-shimmer">Testimonials</span>
          </h2>
          <p className="text-sm text-zinc-400">
            Real experiences and verified feedback from our connected members.
          </p>
        </div>

        {/* Simplified Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item: Testimonial) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
               
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{item.story}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10">
                <span className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                  {getAbbreviatedName(item.name)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
