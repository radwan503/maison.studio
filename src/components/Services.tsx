'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

type Service = {
  title: string;
  label: string;
  description: string;
  image: string;
  features: string[];
};

const services: Service[] = [
  {
    title: 'Interior Design',
    label: 'Spatial Identity',
    description:
      'Refined interiors with thoughtful layouts, warm material palettes, and a calm visual language made for everyday living.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85&auto=format&fit=crop',
    features: ['Space planning', 'Moodboards', 'Material direction'],
  },
  {
    title: 'Furniture Styling',
    label: 'Curated Pieces',
    description:
      'Premium furniture selection focused on scale, comfort, tone, and how each piece belongs inside your room.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85&auto=format&fit=crop',
    features: ['Furniture selection', 'Scale matching', 'Premium finishes'],
  },
  {
    title: 'Design Consultation',
    label: 'Expert Guidance',
    description:
      'Clear design direction before investing in colors, lighting, renovation, or full room transformation.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85&auto=format&fit=crop',
    features: ['Color advice', 'Lighting strategy', 'Layout review'],
  },
  {
    title: 'Custom Furniture',
    label: 'Made to Measure',
    description:
      'Bespoke furniture with exact dimensions, refined proportions, and finishes made for your interior.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85&auto=format&fit=crop',
    features: ['Bespoke sizing', 'Craft direction', 'Finish selection'],
  },
];

const smoothEase = [0.76, 0, 0.24, 1] as const;

export default function Services() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-90px' });
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = services[activeIdx];

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden bg-[#15110c] py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-20%] h-[440px] w-[440px] rounded-full bg-[#F2C84B]/20 blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-12%] h-[520px] w-[520px] rounded-full bg-[#8b5e34]/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="mb-14 grid grid-cols-12 gap-8 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F2C84B]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                Our Services
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Furniture services with quiet luxury.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: smoothEase }}
            className="col-span-12 flex items-end lg:col-span-5"
          >
            <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
              A refined service experience for furniture, interiors, styling,
              and custom pieces built around comfort, proportion, and timeless
              materials.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              {services.map((service, index) => {
                const isActive = activeIdx === index;

                return (
                  <motion.button
                    key={service.title}
                    type="button"
                    onMouseEnter={() => setActiveIdx(index)}
                    onClick={() => setActiveIdx(index)}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.12 + index * 0.08,
                      ease: smoothEase,
                    }}
                    className="group relative block w-full border-b border-white/10 px-5 py-7 text-left last:border-b-0 md:px-7 md:py-8"
                  >
                    <motion.div
                      className="absolute inset-0 origin-left bg-[#F2C84B]"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: smoothEase }}
                    />

                    <div className="relative grid grid-cols-12 items-center gap-4">
                      <div className="col-span-2 md:col-span-1">
                        <span
                          className={`text-xs font-black tabular-nums transition-colors duration-300 ${
                            isActive ? 'text-[#15110c]' : 'text-white/25'
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <div className="col-span-8 md:col-span-6">
                        <span
                          className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] transition-colors ${
                            isActive ? 'text-black/45' : 'text-white/35'
                          }`}
                        >
                          {service.label}
                        </span>

                        <h3
                          className={`text-3xl font-black leading-none tracking-[-0.04em] transition-colors md:text-5xl ${
                            isActive ? 'text-[#15110c]' : 'text-white/60'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <div className="hidden md:col-span-4 md:block">
                        <p
                          className={`max-w-xs text-sm leading-6 transition-all duration-300 ${
                            isActive
                              ? 'translate-y-0 text-black/55 opacity-100'
                              : 'translate-y-3 text-white/30 opacity-0'
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>

                      <div className="col-span-2 flex justify-end md:col-span-1">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                            isActive
                              ? 'rotate-45 border-black/20 bg-[#15110c] text-white'
                              : 'border-white/15 text-white/40 group-hover:border-white/30'
                          }`}
                        >
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                              d="M4 13L13 4M13 4H6M13 4V11"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: 0.25, ease: smoothEase }}
              className="sticky top-24 rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[1.7rem] bg-[#231b12]">
                <div className="absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                  0{activeIdx + 1} / 04
                </div>

                <div className="relative h-[390px] overflow-hidden md:h-[510px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeService.image}
                      src={activeService.image}
                      alt={activeService.title}
                      initial={{ opacity: 0, scale: 1.1, y: 32 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.04, y: -24 }}
                      transition={{ duration: 0.7, ease: smoothEase }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService.title}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, ease: smoothEase }}
                      >
                        <div className="mb-4 flex flex-wrap gap-2">
                          {activeService.features.map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/75 backdrop-blur-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <h4 className="text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">
                          {activeService.title}
                        </h4>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
                          {activeService.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {['Plan', 'Style', 'Install'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: 0.35 + index * 0.08,
                      ease: smoothEase,
                    }}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Step
                    </p>
                    <p className="mt-1 text-sm font-bold text-white/80">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}