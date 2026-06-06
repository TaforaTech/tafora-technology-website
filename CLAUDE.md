# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Tafora Technology landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Commands

- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint (flat config, `eslint.config.mjs`)
- No test framework is configured

## Architecture

- **Next.js App Router** - All routes live in `app/`
- `app/layout.tsx` - Root layout with Geist font family
- `app/page.tsx` - Single landing page (coming soon placeholder)
- `app/globals.css` - Global styles (Tailwind)
- Path alias: `@/*` maps to project root

## Stack Details

- **Next.js 16.2.7** - Read `node_modules/next/dist/docs/` before using any Next.js APIs, as this version has breaking changes from earlier versions
- **Tailwind CSS 4** - Uses `@tailwindcss/postcss` plugin (configured in `postcss.config.mjs`)
- **ESLint 9** - Flat config with `core-web-vitals` and `typescript` presets
- **TypeScript** - Strict mode enabled
