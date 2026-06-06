"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import CalendlyButton from "../components/CalendlyButton";
import { projects, categories } from "./data";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 radial-glow-top" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] radial-glow-blue opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-6">
                Our Work
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight animate-fade-in-up-delay-1">
              Crafting Industry-Focused{" "}
              <span className="gradient-text">Digital Experiences</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
              Real products. Real impact. Explore the work we&apos;ve shipped
              for ambitious teams across industries.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
        </section>

        {/* ── Filter Tabs ── */}
        <section className="relative pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-[0_0_20px_rgba(11,186,251,0.2)]"
                      : "border border-card-border text-muted hover:text-foreground hover:border-accent-cyan/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <AnimateOnScroll
                  key={project.slug}
                  delay={Math.min((i % 3) + 1, 3)}
                >
                  <Link
                    href={`/case-study/${project.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full rounded-2xl border border-card-border bg-card-bg/50 overflow-hidden transition-all duration-500 hover:border-accent-cyan/30 hover:-translate-y-1">
                      {/* Visual */}
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/90 text-2xl font-bold drop-shadow-lg">
                            {project.title}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] border border-card-border/60 text-accent-cyan/70 mb-3 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-accent-cyan/50 group-hover:text-accent-cyan transition-colors duration-300">
                          <span>View project</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted py-20">
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="relative rounded-3xl border border-card-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-card-bg to-accent-cyan/10" />
                <div className="absolute inset-0 grid-bg opacity-40" />

                <div className="relative z-10 py-16 md:py-24 px-8 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Let&apos;s{" "}
                    <span className="gradient-text">Build With Us</span>
                  </h2>
                  <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed">
                    We don&apos;t just talk ideas — we build them. Join us in
                    creating products that work, grow, and last.
                  </p>
                  <CalendlyButton />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
