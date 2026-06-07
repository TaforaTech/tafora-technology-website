# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Tafora Technology landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Light-themed marketing site with scroll animations and gradient effects.

## Commands

- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint (flat config, `eslint.config.mjs`)
- No test framework is configured

## Stack Details

- **Next.js 16.2.7** - Read `node_modules/next/dist/docs/` before using any Next.js APIs, as this version has breaking changes from earlier versions
- **Tailwind CSS 4** - Uses `@tailwindcss/postcss` plugin (configured in `postcss.config.mjs`). Custom theme colors defined via `@theme inline` in `globals.css`, not a tailwind config file
- **ESLint 9** - Flat config with `core-web-vitals` and `typescript` presets
- **TypeScript** - Strict mode enabled
- Path alias: `@/*` maps to project root

## Architecture

- **Next.js App Router** - All routes in `app/`
- **Routes**: `/` (home), `/services`, `/case-study`, `/case-study/[slug]`, `/about`, `/contact`
- **Shared components** live in `app/components/` (not a top-level `components/` dir)
- **Layout**: `app/layout.tsx` - Root layout with Geist font
- **No `lib/` or `utils/` directories** - No external data fetching; all data is co-located (e.g., `app/case-study/data.ts`)

## Page Composition

The home page (`app/page.tsx`) assembles section components in order: Navbar, Hero, Solutions, VoiceAI, Projects, Clients, Testimonials, CTA, Footer. Sub-pages (services, case-study) reuse Navbar and Footer directly in their page files.

## Styling Conventions

- **Light theme** - Background `#ffffff`, foreground `#1a1a2e`, card-bg `#f5f7fa`, card-border `#e2e4e9`.
- **Custom CSS classes** in `globals.css`: `.gradient-text`, `.btn-gradient`, `.btn-outline`, `.glow-border`, `.card-hover-lift`, `.card-inner-glow`, `.grid-bg`, `.radial-glow-*`, `.noise-overlay`, `.shimmer-line`
- **Scroll animations**: `AnimateOnScroll` component (client component using IntersectionObserver) adds `.visible` class. Supports variants: `from-left`, `from-right`, `scale-up`, and delay classes `delay-1` through `delay-4`
- **Color tokens**: `accent-blue` (#4285EC), `accent-cyan` (#0BBAFB), `card-bg`, `card-border`, `muted` - all usable as Tailwind classes (e.g., `text-accent-blue`, `bg-card-bg`)

## Key Patterns

- Dynamic route params are `Promise`-based in Next.js 16: `params: Promise<{ slug: string }>` — must `await params` before use
- Case study data uses `generateStaticParams` for static generation from `app/case-study/data.ts`
- Client components (`"use client"`) used for: Navbar (scroll/mobile state), AnimateOnScroll (IntersectionObserver)
