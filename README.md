# Maison Living Studio

A premium furniture and interior design website built with modern frontend technologies, cinematic motion, and luxury-inspired UI systems.

The project focuses on creating a calm, elegant, and high-end digital experience for furniture brands, interior studios, and modern living spaces.

---

# Preview

Maison Living Studio delivers:

* Premium furniture-focused UI
* Smooth motion design and page transitions
* Luxury editorial layouts
* Sticky stacked image storytelling sections
* Responsive modern navigation
* WhatsApp appointment booking
* Premium project showcase
* Elegant service presentation
* Fully responsive mobile-first experience
* Soft luxury color palette
* Motion designer level interactions

---

# Tech Stack

## Frontend

* Next.js 15+
* React 19+
* TypeScript
* Tailwind CSS
* Framer Motion

## Design System

* Custom spacing system
* Glassmorphism layers
* Soft luxury gradients
* Motion-driven UI interactions
* Editorial typography layouts

---

# Features

## Modern Luxury Navbar

* Floating glass navbar
* Smooth scroll section navigation
* Mobile animated menu
* Blur and shadow on scroll
* Responsive navigation system
* Global shared layout support

## Hero Section

* Cinematic typography
* Premium furniture visual presentation
* Motion-driven entrance animations
* Luxury branding system

## What We Do Section

* Sticky stacked image scroll animation
* Scroll-driven storytelling
* Animated capability cards
* Premium editorial composition
* Smooth section transitions

## Services Section

* Interactive hover-based service preview
* Animated image switching
* Glassmorphism card layouts
* Responsive luxury UI

## Projects Section

* Large editorial furniture showcase cards
* Hover zoom image interactions
* Animated project reveal system
* Premium interior design layout

## Contact Page

* Luxury contact presentation
* Brand-focused imagery
* Studio information cards
* Premium responsive layout

## Book Appointment Page

* WhatsApp integrated booking form
* Smooth form animations
* Responsive form experience
* Luxury glassmorphism layout

## Footer

* Large background branding typography
* Luxury glow effects
* Premium CTA section
* Modern footer grid layout
* Social and contact integration

---

# Folder Structure

```bash
app/
 ├── contact/
 │    └── page.tsx
 │
 ├── book-appointment/
 │    └── page.tsx
 │
 ├── layout.tsx
 ├── page.tsx
 │
components/
 ├── _common/
 │    ├── Navbar.tsx
 │    └── Footer.tsx
 │
 ├── Hero.tsx
 ├── WhatWeDo.tsx
 ├── Services.tsx
 ├── Projects.tsx
 └── CTA.tsx
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/maison-living-studio.git
```

## 2. Open Project

```bash
cd maison-living-studio
```

## 3. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

# Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Production Build

```bash
npm run build
```

```bash
npm start
```

---

# Required Packages

```bash
npm install framer-motion
```

Tailwind CSS should already be configured.

---

# WhatsApp Booking Setup

Inside:

```bash
app/book-appointment/page.tsx
```

Replace:

```ts
const whatsappNumber = '8801700000000';
```

With your WhatsApp number:

```ts
const whatsappNumber = '8801XXXXXXXXX';
```

Format:

* Country code required
* No + symbol
* No spaces

Example:

```ts
8801700000000
```

---

# Global Layout Setup

Navbar and Footer are globally shared using:

```bash
app/layout.tsx
```

Example:

```tsx
<Navbar />
{children}
<Footer />
```

---

# Section Navigation IDs

Add IDs for smooth scrolling:

```tsx
<section id="home">
<section id="studio">
<section id="services">
<section id="projects">
<section id="contact">
```

---

# Design Philosophy

Maison Living Studio uses a modern luxury design language inspired by:

* Editorial interior magazines
* Premium furniture brands
* Scandinavian calm aesthetics
* Warm minimalism
* Motion-first interactions
* High-end hospitality websites

The goal is to make the interface feel:

* Quiet
* Warm
* Expensive
* Spacious
* Elegant
* Cinematic

---

# Motion System

Animations are built using:

* Framer Motion
* Smooth cubic-bezier easing
* Scroll-driven transitions
* Sticky stacked storytelling
* Hover motion interactions
* Layered image transitions

Primary easing:

```ts
const smoothEase = [0.76, 0, 0.24, 1] as const;
```

---

# Responsive Design

Fully optimized for:

* Mobile
* Tablet
* Laptop
* Large desktop
* Ultra wide displays

Responsive techniques used:

* Fluid typography
* Grid-based scaling
* Mobile-first layouts
* Dynamic spacing systems

---

# Recommended Improvements

Future upgrades:

* CMS integration
* Dark/light theme toggle
* Multi-language support
* Animated page transitions
* GSAP cinematic scroll effects
* 3D furniture configurator
* Product catalog system
* Admin dashboard
* Online payment system
* Real-time consultation booking

---

# SEO Suggestions

Recommended SEO improvements:

* Add metadata per page
* Use Open Graph images
* Add schema markup
* Optimize image sizes
* Add sitemap.xml
* Configure robots.txt
* Add blog/journal system

---

# Performance Optimizations

Recommended:

* Use Next.js Image component
* Enable lazy loading
* Compress large images
* Use CDN delivery
* Enable caching strategies
* Optimize Framer Motion rendering

---

# Deployment

## Deploy to Vercel

```bash
npm install -g vercel
```

```bash
vercel
```

or connect GitHub directly to:

* Vercel
* Netlify
* Cloudflare Pages

---

# Marketing Copy

## Short Brand Description

Maison Living Studio creates calm, luxurious furniture and interior experiences through thoughtful layouts, premium materials, and motion-driven modern design.

---

## Website Marketing Headline

Crafted interiors with warmth, balance, and timeless furniture design.

---

## Hero Marketing Copy

Modern interiors designed around comfort, material harmony, and elevated everyday living.

---

## Elevator Pitch

Maison Living Studio is a premium furniture and interior design website experience built for modern luxury brands. Combining editorial layouts, cinematic motion, and sophisticated UI systems, the project delivers a calm and immersive digital experience inspired by high-end interior studios.

---

# GitHub Description

Premium furniture and interior design website built with Next.js, Tailwind CSS, TypeScript, and Framer Motion featuring luxury UI, stacked scroll animations, and WhatsApp booking.

---

# GitHub Topics

```bash
nextjs
react
typescript
tailwindcss
framer-motion
interior-design
furniture-website
luxury-ui
motion-design
responsive-design
modern-ui
frontend
```

---

# Author

- Radwan Ahmed
- Built with modern frontend engineering, motion design principles, and luxury UI systems.

---

# License

MIT License
