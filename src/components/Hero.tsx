'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ThreeBackground from './ThreeBackground';
import CountUp from './CountUp';

const YELLOW = '#F2C84B';
const EASE = 'easeOut';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const fadeOnScroll = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden" style={{ background: '#0a0a0a', minHeight: '100svh' }}>
      <ThreeBackground />

      {/* Radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(242,200,75,0.08) 0%, transparent 70%)' }}
      />

      <motion.div style={{ opacity: fadeOnScroll }} className="relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-16">

          {/* ── Eyebrow bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex items-center justify-between pt-32 md:pt-40 mb-14 md:mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: YELLOW }} />
              <span className="text-white/40 text-xs tracking-[0.18em] uppercase font-medium">
                Interior Design Studio
              </span>
            </div>
            <span className="hidden sm:block text-white/20 text-xs tracking-[0.14em] uppercase">Est. 2012</span>
          </motion.div>

          {/* ── 12-col grid ── */}
          <div className="grid grid-cols-12 gap-x-5">

            {/* Headline — 8 cols */}
            <div className="col-span-12 lg:col-span-8">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: '0%' }}
                  transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
                  className="text-white font-black leading-none"
                  style={{
                    fontSize: 'clamp(3.6rem, 9.5vw, 8.5rem)',
                    letterSpacing: '-0.035em',
                    lineHeight: 0.9,
                  }}
                >
                  Let&apos;s Design<br />
                  <span style={{ color: YELLOW }}>Your Home</span><br />
                  Very Easily
                </motion.h1>
              </div>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                className="flex items-center gap-5 mt-10 md:mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ background: YELLOW }}
                  className="group flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full text-[#0a0a0a] font-bold text-sm tracking-wide"
                >
                  Get Started
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5"
                    style={{ background: 'rgba(0,0,0,0.12)' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </motion.button>

                <a
                  href="#"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white/70 transition-colors text-sm font-medium"
                >
                  <span
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ borderColor: 'rgba(255,255,255,0.14)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 6H3M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  View our work
                </a>
              </motion.div>
            </div>

            {/* Right sidebar — 4 cols */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-between gap-10 mt-10 lg:mt-1">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="text-white/40 leading-relaxed max-w-xs"
                style={{ fontSize: '0.875rem', lineHeight: '1.75' }}
              >
                Interior design is the art of enhancing spaces — creating healthier, more 
                aesthetically pleasing environments where every detail serves both form and function.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
                className="grid grid-cols-3 lg:grid-cols-1 gap-y-5 gap-x-4"
              >
                {[
                  { end: 400, suffix: '+', label: 'Happy Clients' },
                  { end: 2500, suffix: '+', label: 'Products Placed' },
                  { end: 12, suffix: 'yr', label: 'Experience' },
                ].map(({ end, suffix, label }) => (
                  <div
                    key={label}
                    className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4"
                    style={{ paddingBottom: '1rem', borderBottom: '0.5px solid rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="font-black tabular-nums text-white"
                      style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      <CountUp end={end} suffix={suffix} />
                    </div>
                    <div
                      className="text-white/30 font-medium"
                      style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Image mosaic ── */}
          <div className="grid grid-cols-12 gap-3 md:gap-4 mt-14 md:mt-16 pb-20">

            {/* Large image */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.48, ease: EASE }}
              className="col-span-12 md:col-span-7 rounded-2xl overflow-hidden relative"
              style={{ height: 'clamp(200px, 34vw, 400px)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85"
                alt="Modern living room"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-4 left-4">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(8px)', border: '0.5px solid rgba(255,255,255,0.1)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: YELLOW }} />
                  <span className="text-white/85 text-xs font-medium tracking-wide">Living Spaces</span>
                </div>
              </div>
            </motion.div>

            {/* Right stack */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-4">

              {/* Small image */}
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.58, ease: EASE }}
                className="rounded-2xl overflow-hidden relative flex-1"
                style={{ minHeight: 160 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=85"
                  alt="Cozy sofa room"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%', minHeight: 160 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }}
                />
                <div className="absolute bottom-4 right-4">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(8px)', border: '0.5px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: YELLOW }} />
                    <span className="text-white/85 text-xs font-medium tracking-wide">Bedroom Design</span>
                  </div>
                </div>
              </motion.div>

              {/* Scroll pill */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
                className="hidden md:flex items-center justify-between px-4 py-3 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                }}
              >
                <span className="text-white/30 text-xs tracking-[0.15em] uppercase font-medium">Scroll to explore</span>
                <button
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className="w-8 h-8 rounded-full flex items-center justify-center scroll-bounce hover:scale-110 transition-transform"
                  style={{ background: YELLOW }}
                  aria-label="Scroll down"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2.5 6.5L6 10l3.5-3.5" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Marquee ── */}
        <div
          className="marquee-track overflow-hidden"
          style={{ background: YELLOW, borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="marquee-inner py-3">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-5 px-5 text-[#0a0a0a] font-bold text-xs uppercase tracking-[0.2em]">
                Interior Design
                <span className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0" />
                Home Decoration
                <span className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0" />
                Furniture Design
                <span className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0" />
                Consultancy
                <span className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}