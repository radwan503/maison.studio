'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/_common/Footer';

const smoothEase = [0.76, 0, 0.24, 1] as const;

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
 
    <main ref={ref} className="relative min-h-screen overflow-hidden bg-[#fbf7ee] pt-32 md:pt-46 text-[#15110c]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[10%] h-[480px] w-[480px] rounded-full bg-[#F2C84B]/30 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[560px] w-[560px] rounded-full bg-[#8b5e34]/15 blur-[150px]" />
      </div>

      <section className="relative mx-auto max-w-[1320px] px-5 pb-24 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#15110c]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
                Contact Studio
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] md:text-7xl lg:text-8xl">
              Let’s design a space that feels like home.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-5"
          >
            <p className="max-w-md text-sm leading-7 text-black/55 md:text-base">
              Tell us about your room, your furniture needs, or your full-home
              interior project. We usually reply within one business day.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#15110c] py-2 pl-6 pr-2 text-sm font-black text-white"
            >
              Book appointment
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2C84B] text-[#15110c]">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: smoothEase }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-[2.2rem] bg-[#15110c] p-3 shadow-2xl">
              <div className="relative h-[520px] overflow-hidden rounded-[1.7rem]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85&auto=format&fit=crop"
                  alt="Luxury furniture interior"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/45">
                    Maison Living Studio
                  </p>
                  <h2 className="mt-3 max-w-xl text-4xl font-black leading-none tracking-[-0.05em] text-white md:text-6xl">
                    Warm materials. Calm rooms. Better living.
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3, ease: smoothEase }}
            className="lg:col-span-5"
          >
            <div className="rounded-[2.2rem] border border-black/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(21,17,12,0.08)] backdrop-blur-md md:p-8">
              <h3 className="text-3xl font-black tracking-[-0.04em]">
                Contact details
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  ['Studio', '356 Oak Avenue, New York, NY 10013'],
                  ['Email', 'hello@maisonstudio.com'],
                  ['Phone', '+023 574 6857'],
                  ['Hours', 'Mon - Sat, 10:00 AM - 7:00 PM'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#f3eadb] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-bold text-black/65">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {['Instagram', 'Pinterest', 'Facebook'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="rounded-2xl border border-black/10 px-3 py-4 text-center text-xs font-black text-black/45 transition hover:bg-[#15110c] hover:text-white"
                  >
                    {item.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>

  );
}