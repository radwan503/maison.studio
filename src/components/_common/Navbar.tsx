'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const smoothEase = [0.76, 0, 0.24, 1] as const;

const links = [
  { label: 'Home', type: 'section', href: 'home' },
  { label: 'Studio', type: 'section', href: 'studio' },
  { label: 'Services', type: 'section', href: 'services' },
  { label: 'Projects', type: 'section', href: 'projects' },
  { label: 'Contact', type: 'page', href: '/contact' },
] as const;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 96;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const handleNavigate = (
    link: (typeof links)[number]
  ) => {
    setMenuOpen(false);

    if (link.type === 'page') {
      router.push(link.href);
      return;
    }

    if (pathname !== '/') {
      router.push(`/#${link.href}`);
      return;
    }

    scrollToSection(link.href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: smoothEase,
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto max-w-[1320px] rounded-full border transition-all duration-500 ${
            scrolled
              ? 'border-white/10 bg-[#15110c]/90 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl'
              : 'border-white/10 bg-[#15110c]/40 backdrop-blur-md'
          }`}
        >
          <div className="flex h-16 items-center justify-between px-4 sm:px-5 md:h-[72px] md:px-6">
            {/* Logo */}
            <button
              type="button"
              onClick={() => {
                if (pathname !== '/') {
                  router.push('/');
                  return;
                }

                scrollToSection('home');
              }}
              className="group flex items-center gap-3 text-left"
            >
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#F2C84B] text-[#15110c] shadow-[0_12px_30px_rgba(242,200,75,0.25)]">
                <span className="absolute inset-1 rounded-xl border border-black/10" />

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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

              <span className="leading-none">
                <span className="block text-sm font-black uppercase tracking-[0.2em] text-white">
                  Maison
                </span>

                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Living Studio
                </span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 md:flex">
              {links.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavigate(link)}
                  className="group relative rounded-full px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
                >
                  <span className="absolute inset-0 scale-75 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />

                  <span className="relative z-10">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={() =>
                  router.push('/book-appointment')
                }
                className="text-sm font-semibold text-white/45 transition-colors hover:text-white"
              >
                Book visit
              </button>

              <motion.button
                type="button"
                onClick={() => router.push('/contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 rounded-full bg-[#F2C84B] py-2 pl-5 pr-2 text-sm font-black text-[#15110c]"
              >
                Start project

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#15110c]/12 transition-transform duration-500 group-hover:rotate-45">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] md:hidden"
            >
              <span className="relative h-4 w-5">
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 7 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: smoothEase,
                  }}
                  className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white"
                />

                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1,
                    x: menuOpen ? -8 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: smoothEase,
                  }}
                  className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white/70"
                />

                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -7 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: smoothEase,
                  }}
                  className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-white"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -24,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -24,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: smoothEase,
              }}
              className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-[2rem] border border-white/10 bg-[#15110c] p-4 shadow-2xl md:hidden"
            >
              <div className="rounded-[1.5rem] bg-white/[0.04] p-3">
                {links.map((link, index) => (
                  <motion.button
                    key={link.label}
                    type="button"
                    initial={{
                      opacity: 0,
                      x: -16,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                      ease: smoothEase,
                    }}
                    onClick={() =>
                      handleNavigate(link)
                    }
                    className="group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-lg font-black tracking-[-0.03em] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all group-hover:rotate-45 group-hover:bg-[#F2C84B] group-hover:text-[#15110c]">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M3 10L10 3M10 3H5M10 3V8"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    router.push('/book-appointment');
                  }}
                  className="rounded-2xl border border-white/10 px-4 py-4 text-center text-sm font-bold text-white/60"
                >
                  Book visit
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    router.push('/contact');
                  }}
                  className="rounded-2xl bg-[#F2C84B] px-4 py-4 text-center text-sm font-black text-[#15110c]"
                >
                  Start project
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}