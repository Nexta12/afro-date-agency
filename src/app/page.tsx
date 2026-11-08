"use client";

import React from "react";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* 1. Hero Section with Quick Match Finder */}
      <Hero />

      {/* 2. Client Testimonials */}
      <TestimonialsSection />
    </main>
  );
}
