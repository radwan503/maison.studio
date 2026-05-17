'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const smoothEase = [0.76, 0, 0.24, 1] as const;

const projects = [
  {
    id: 1,
    title: 'Meridian Residence',
    category: 'Full Home Interior',
    location: 'New York City',
    year: '2024',
    description:
      'A warm minimalist residence shaped with soft materials, custom furniture, calm lighting, and a balanced open-plan layout.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1100&q=85&auto=format&fit=crop',
    align: 'left',
  },
  {
    id: 2,
    title: 'Oakwood Living',
    category: 'Furniture Styling',
    location: 'Los Angeles',
    year: '2023',
    description:
      'A quiet living space with sculptural seating, layered textiles, natural oak finishes, and a curated furniture language.',
    image:
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=1100&q=85&auto=format&fit=crop',
    align: 'right',
  },
  {
    id: 3,
    title: 'Nordic Lounge',
    category: 'Residential Design',
    location: 'Copenhagen',
    year: '2024',
    description:
      'A refined lounge concept combining monochrome furniture, organic shapes, greenery, and soft ambient lighting.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1100&q=85&auto=format&fit=crop',
    align: 'left',
  },
];

function ProjectItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  const isRight = project.align === 'right';

  return (
    <motion.div
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: smoothEase,
      }}
      className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div
        className={`lg:col-span-5 ${
          isRight ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
        }`}
      >
        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(21,17,12,0.08)] backdrop-blur-md md:p-8">
          <div className="mb-12 flex items-center justify-between">
            <span className="text-xs font-black tabular-nums text-black/30">
              {String(project.id).padStart(2, '0')}
            </span>

            <span className="rounded-full border border-black/10 bg-[#15110c] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
              {project.year}
            </span>
          </div>

          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-black/35">
            {project.category}
          </p>

          <h3 className="text-4xl font-black leading-none tracking-[-0.055em] text-[#15110c] md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 max-w-md text-sm leading-7 text-black/52">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#f3eadb] px-4 py-2 text-xs font-bold text-black/50">
              {project.location}
            </span>
            <span className="rounded-full bg-[#f3eadb] px-4 py-2 text-xs font-bold text-black/50">
              Furniture + Interior
            </span>
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="mt-10 inline-flex items-center gap-3 text-sm font-black text-[#15110c]"
          >
            View project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2C84B] text-[#15110c] transition-transform duration-500 group-hover:rotate-45">
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
        </div>
      </div>

      <div
        className={`lg:col-span-7 ${
          isRight ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <motion.div
          whileHover={{ scale: 0.985 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="relative h-[360px] overflow-hidden rounded-[2.2rem] bg-[#15110c] shadow-[0_35px_100px_rgba(21,17,12,0.18)] md:h-[560px]"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.9, ease: smoothEase }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-80" />

          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md md:left-7 md:top-7">
            {project.category}
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 md:bottom-7 md:left-7 md:right-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                Location
              </p>
              <p className="mt-1 text-lg font-black tracking-[-0.03em] text-white">
                {project.location}
              </p>
            </div>

            <div className="hidden rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-right backdrop-blur-md sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Completed
              </p>
              <p className="mt-1 text-sm font-black text-white/80">
                {project.year}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const refHead = useRef<HTMLDivElement | null>(null);
  const inViewHead = useInView(refHead, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden bg-[#fbf7ee] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[10%] h-[460px] w-[460px] rounded-full bg-[#F2C84B]/25 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[-14%] h-[540px] w-[540px] rounded-full bg-[#8b5e34]/12 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 xl:px-16">
        <div
          ref={refHead}
          className="mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-12 md:mb-24"
        >
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inViewHead ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#15110c]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
                Selected Projects
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 44 }}
              animate={inViewHead ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: smoothEase }}
              className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] text-[#15110c] md:text-7xl lg:text-8xl"
            >
              Crafted interiors with a furniture-first approach.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={inViewHead ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: smoothEase }}
            className="lg:col-span-5"
          >
            <p className="max-w-md text-sm leading-7 text-black/52 md:text-base">
              A selection of calm, refined rooms designed through furniture,
              proportion, material balance, and warm everyday functionality.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ['24+', 'Projects'],
                ['12', 'Cities'],
                ['4.9', 'Rating'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur-md"
                >
                  <p className="text-xl font-black tracking-[-0.04em] text-[#15110c]">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-black/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}