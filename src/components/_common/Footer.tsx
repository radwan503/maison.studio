'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const smoothEase = [0.76, 0, 0.24, 1] as const;

const footerLinks = {
  Studio: ['About', 'Process', 'Journal', 'Careers'],
  Services: ['Interior Design', 'Furniture Styling', 'Custom Furniture', 'Consultation'],
  Support: ['Privacy Policy', 'Terms of Use', 'Refund Policy', 'Contact'],
};

const socials = ['Instagram', 'Pinterest', 'Facebook'];

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-[#15110c] text-white"
    >
      {/* Big background brand */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-0 select-none text-center">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: smoothEase }}
          className="block text-[18vw] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.035]"
        >
          Maison
        </motion.span>
      </div>

      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-15%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#F2C84B]/20 blur-[150px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#8b5e34]/20 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 pt-24 pb-10 sm:px-8 md:pt-32 lg:px-14 xl:px-16">
        {/* CTA */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-16 md:grid-cols-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="md:col-span-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F2C84B]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/40">
                Start Your Interior Story
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] text-white md:text-7xl lg:text-8xl">
              Let’s craft a home that feels quietly luxurious.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: smoothEase }}
            className="flex flex-col justify-end md:col-span-4"
          >
            <p className="max-w-md text-sm leading-7 text-white/48 md:text-base">
              From furniture selection to full-room transformation, we create
              warm, balanced interiors with thoughtful materials and lasting
              comfort.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#F2C84B] py-2 pl-6 pr-2 text-sm font-black text-[#15110c]"
            >
              Book a consultation
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#15110c]/12 transition-transform duration-500 group-hover:rotate-45">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M3 12L12 3M12 3H5.5M12 3V9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: smoothEase }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2C84B] text-[#15110c]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 18V9.8L12 4L19 9.8V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 18V12.5H15.5V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.22em]">
                  Maison
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Living Studio
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              A furniture and interior studio designing calm homes through
              custom pieces, warm materials, and thoughtful spatial detail.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/45 transition-all hover:border-[#F2C84B]/60 hover:text-[#F2C84B]"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.16 + index * 0.08,
                ease: smoothEase,
              }}
              className="lg:col-span-2"
            >
              <h4 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-white">
                {title}
              </h4>

              <div className="space-y-3">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm font-medium text-white/42 transition-colors hover:text-[#F2C84B]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.42, ease: smoothEase }}
            className="lg:col-span-2"
          >
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-white">
              Visit
            </h4>

            <p className="text-sm leading-7 text-white/42">
              356 Oak Avenue,
              <br />
              New York, NY 10013
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="tel:+10235746857"
                className="block text-sm font-medium text-white/42 transition-colors hover:text-[#F2C84B]"
              >
                +023 574 6857
              </a>
              <a
                href="mailto:hello@maisonstudio.com"
                className="block text-sm font-medium text-white/42 transition-colors hover:text-[#F2C84B]"
              >
                hello@maisonstudio.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-white/30">
            © 2026 Maison Living Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs font-medium text-white/30">
            <a href="#" className="transition-colors hover:text-[#F2C84B]">
              Privacy
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="transition-colors hover:text-[#F2C84B]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}