'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

const YELLOW = '#F2C84B';
const DARK = '#15110c';
const smoothEase = [0.76, 0, 0.24, 1] as const;

const stackImages = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85',
    label: 'The Meridian Penthouse',
    sub: 'New York City · 2024',
    tag: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    label: 'Studio Loft Renovation',
    sub: 'Los Angeles · 2023',
    tag: 'Commercial',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85',
    label: 'Coastal Villa Interior',
    sub: 'Miami Beach · 2023',
    tag: 'Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85',
    label: 'Nordic Minimalist Home',
    sub: 'Copenhagen · 2024',
    tag: 'Full Home',
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Space Planning',
    description:
      'We refine room flow, furniture placement, light access, and daily movement so every corner feels considered.',
    tag: 'Layout',
  },
  {
    number: '02',
    title: 'Material Curation',
    description:
      'Warm woods, textured fabrics, stone, metal, and soft finishes selected with durability and atmosphere in mind.',
    tag: 'Materials',
  },
  {
    number: '03',
    title: 'Lighting Design',
    description:
      'Layered lighting plans that balance mood, comfort, and visual depth from morning routines to evening hosting.',
    tag: 'Ambience',
  },
  {
    number: '04',
    title: 'Bespoke Furniture',
    description:
      'Custom pieces designed around exact dimensions, lifestyle needs, proportion, and long-term interior harmony.',
    tag: 'Custom',
  },
];

const stats = [
  { value: '340+', label: 'Rooms styled' },
  { value: '97%', label: 'Client approval' },
  { value: '12wk', label: 'Avg. project' },
];

function StackedImageCard({
  img,
  index,
  activeIndex,
}: {
  img: (typeof stackImages)[0];
  index: number;
  activeIndex: number;
}) {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-[2rem]"
      animate={{
        y: isPast ? '-8%' : index > activeIndex ? '105%' : '0%',
        scale: isPast ? 0.94 : isActive ? 1 : 1.03,
        opacity: isPast ? 0.86 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: smoothEase,
      }}
      style={{ zIndex: index + 1 }}
    >
      <motion.img
        src={img.src}
        alt={img.label}
        className="h-full w-full object-cover"
        animate={{ scale: isActive ? 1 : 1.08 }}
        transition={{ duration: 1, ease: smoothEase }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
    </motion.div>
  );
}

function ImageStack() {
  const total = stackImages.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 25%', 'end 75%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const safeValue = Math.min(Math.max(value, 0), 0.999);
    const nextIndex = Math.min(Math.floor(safeValue * total), total - 1);
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  const activeImage = stackImages[activeIndex];

  return (
    <div
      ref={sectionRef}
      className="relative"
      id="studio"
      style={{ height: `calc(72vh + ${(total - 1) * 2}vh)` }}
    >
      <div className="sticky top-20 h-[68vh] md:h-[76vh]">
        <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#0d0d0d] shadow-2xl">
          {stackImages.map((img, index) => (
            <StackedImageCard
              key={img.label}
              img={img}
              index={index}
              activeIndex={activeIndex}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 z-20">
            <motion.div
              key={activeImage.label}
              initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="absolute bottom-6 left-5 right-5 md:bottom-10 md:left-10 md:right-10"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F2C84B]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/60">
                  {activeImage.tag}
                </span>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.05em] text-white md:text-6xl">
                    {activeImage.label}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-white/45">
                    {activeImage.sub}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {stackImages.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className="h-1.5 rounded-full transition-all duration-700"
                      style={{
                        width: dotIndex === activeIndex ? 34 : 7,
                        background:
                          dotIndex === activeIndex
                            ? YELLOW
                            : 'rgba(255,255,255,0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/80 backdrop-blur-md md:left-8 md:top-8">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityCard({
  item,
  index,
}: {
  item: (typeof capabilities)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: smoothEase }}
      className="group rounded-[1.7rem] border border-black/10 bg-[#f8f3e7] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-[#15110c] md:p-7"
    >
      <div className="mb-10 flex items-center justify-between">
        <span className="text-xs font-black text-black/30 group-hover:text-[#F2C84B]">
          {item.number}
        </span>
        <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 group-hover:bg-white/10 group-hover:text-white/45">
          {item.tag}
        </span>
      </div>

      <h3 className="text-2xl font-black tracking-[-0.04em] text-[#15110c] group-hover:text-white">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-black/50 group-hover:text-white/45">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const headRef = useRef(null);
  const inViewHead = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden bg-[#fbf7ee]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#F2C84B]/25 blur-[130px]" />
        <div className="absolute right-[-12%] top-[35%] h-[520px] w-[520px] rounded-full bg-[#8b5e34]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 pt-24 pb-14 sm:px-8 md:pt-32 md:pb-20 lg:px-14 xl:px-16">
        <div
          ref={headRef}
          className="grid grid-cols-12 items-end gap-x-8 gap-y-10"
        >
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inViewHead ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#15110c]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/45">
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 44 }}
              animate={inViewHead ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: smoothEase }}
              className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] text-[#15110c] md:text-7xl lg:text-8xl"
            >
              We compose spaces with furniture, light and material.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inViewHead ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: smoothEase }}
            className="col-span-12 lg:col-span-5"
          >
            <p className="max-w-md text-sm leading-7 text-black/50 md:text-base">
              From the first layout idea to the final furniture placement, we
              design rooms that feel warm, balanced, useful, and quietly
              luxurious.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur-md"
                >
                  <div className="text-xl font-black tracking-[-0.04em] text-[#15110c]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold leading-4 text-black/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 xl:px-16">
        <ImageStack />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-14 xl:px-16">
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <CapabilityCard key={item.number} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}