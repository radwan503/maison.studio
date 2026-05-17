'use client';

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <Services />
      <Projects />
    </main>
  );
}