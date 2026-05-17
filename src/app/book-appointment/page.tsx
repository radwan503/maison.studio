'use client';

import { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const smoothEase = [0.76, 0, 0.24, 1] as const;

export default function BookAppointmentPage() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Interior Design',
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '01873843384';

    const text = `
Hello Maison Living Studio,

I want to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred Date: ${form.date}

Project Details:
${form.message}
    `.trim();

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, '_blank');
  };

  return (
    <main
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#fbf7ee] pt-32 text-[#15110c] md:pt-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-15%] h-[520px] w-[520px] rounded-full bg-[#F2C84B]/25 blur-[150px]" />

        <div className="absolute bottom-[-20%] right-[-12%] h-[560px] w-[560px] rounded-full bg-[#8b5e34]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.25]" />
      </div>

      <section className="relative mx-auto max-w-[1320px] px-5 pb-24 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.75,
              ease: smoothEase,
            }}
            className="lg:col-span-5"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#15110c]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/40">
                Book Appointment
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.065em] text-[#15110c] md:text-7xl">
              Start your interior project with us.
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-black/55 md:text-base">
              Share your furniture or interior design needs. After submitting,
              your details will open directly in WhatsApp.
            </p>

            {/* Image */}
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-3 shadow-[0_24px_80px_rgba(21,17,12,0.08)] backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85&auto=format&fit=crop"
                  alt="Furniture design appointment"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Maison Living Studio
                  </p>

                  <h3 className="mt-2 text-3xl font-black leading-none tracking-[-0.05em] text-white md:text-5xl">
                    Warm interiors built around comfort.
                  </h3>
                </div>
              </div>
            </div>

            {/* Small cards */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ['24+', 'Projects'],
                ['4.9', 'Rating'],
                ['12wk', 'Delivery'],
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: smoothEase,
            }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={sendToWhatsApp}
              className="rounded-[2.2rem] border border-black/10 bg-white/70 p-5 shadow-[0_24px_80px_rgba(21,17,12,0.08)] backdrop-blur-xl md:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
                    Booking Form
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#15110c] md:text-4xl">
                    Tell us about your project
                  </h2>
                </div>

                <div className="hidden rounded-full bg-[#F2C84B] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#15110c] sm:block">
                  WhatsApp
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Abu Naser"
                />

                <Input
                  label="Phone number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+880..."
                />

                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
                    Service
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-black/10 bg-[#f8f3e7] px-4 text-sm font-semibold text-[#15110c] outline-none transition focus:border-[#F2C84B]"
                  >
                    <option>Interior Design</option>
                    <option>Furniture Styling</option>
                    <option>Custom Furniture</option>
                    <option>Design Consultation</option>
                  </select>
                </div>

                <Input
                  label="Preferred date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
                  Project details
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your room, furniture needs, budget, timeline..."
                  rows={7}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-[#f8f3e7] px-4 py-4 text-sm font-medium leading-7 text-[#15110c] outline-none transition placeholder:text-black/25 focus:border-[#F2C84B]"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#15110c] px-6 py-4 text-sm font-black text-white"
              >
                Send booking to WhatsApp

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2C84B] text-[#15110c] transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
        {label}
      </label>

      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-black/10 bg-[#f8f3e7] px-4 text-sm font-semibold text-[#15110c] outline-none transition placeholder:text-black/25 focus:border-[#F2C84B]"
      />
    </div>
  );
}