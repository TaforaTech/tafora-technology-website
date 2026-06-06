import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import CalendlyButton from "../components/CalendlyButton";

export const metadata: Metadata = {
  title: "Services | Tafora Technology",
  description:
    "Explore our services — from AI-driven transformation and strategic IT consultation to full-stack development, startup acceleration, and enterprise platforms.",
};

const services = [
  {
    title: "Strategic IT Consultation",
    description:
      "Align technology with business outcomes through expert guidance, architecture reviews, and actionable roadmaps that set the foundation for growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI-Driven Transformation",
    description:
      "Build bespoke AI systems that automate decisions, enrich user experiences, and unlock operational leverage across your entire organization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Ship high-performing apps with modern stacks, robust security, and scalable foundations — from PWAs to native mobile experiences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "End-to-End Startup Acceleration",
    description:
      "From zero to one: discovery workshops, MVP builds, cloud ops, CI/CD pipelines, and growth analytics — all under one roof.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Growth Engineering (x to 10x)",
    description:
      "Engineer for scale with performance tuning, reliability hardening, data pipelines, and cost-optimized infrastructure that grows with you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade Platforms",
    description:
      "Secure, compliant, and extensible platforms integrating seamlessly with enterprise systems — built for millions of users and complex workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Gathering",
    description:
      "We start by deeply understanding your business, users, and goals. Through workshops and interviews, we map out the full picture before a single line of code is written.",
  },
  {
    number: "02",
    title: "Assumption Validation",
    description:
      "We test critical assumptions early — through market research, competitor analysis, and user interviews — so we build on certainty, not guesswork.",
  },
  {
    number: "03",
    title: "Feature Finalization",
    description:
      "Together we prioritize and lock down the feature set. Every feature earns its place by mapping directly to a user need or business objective.",
  },
  {
    number: "04",
    title: "UX Definition",
    description:
      "We define user flows, information architecture, and interaction patterns that make the experience intuitive and delightful at every touchpoint.",
  },
  {
    number: "05",
    title: "Wireframing",
    description:
      "Low-fidelity wireframes bring the structure to life. We iterate quickly at this stage — it's far cheaper to move boxes on a screen than to rewrite code.",
  },
  {
    number: "06",
    title: "Prototyping",
    description:
      "Interactive prototypes let you click through the experience before development begins. We validate with real users and refine until it feels right.",
  },
  {
    number: "07",
    title: "Software Development",
    description:
      "Our engineers build with modern, battle-tested stacks. Sprints keep you in the loop with weekly demos, and CI/CD ensures every release is production-ready.",
  },
  {
    number: "08",
    title: "User Acceptance Testing",
    description:
      "Rigorous QA and real-user testing ensure everything works flawlessly. We don't ship until you're confident it meets the bar — and then we keep iterating.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 radial-glow-top" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] radial-glow-blue opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] radial-glow-blue opacity-20" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-6">
                What We Do
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight animate-fade-in-up-delay-1">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
              Create your digital future — extensible, secured, and innovative.
              End-to-end technology solutions tailored to your ambition.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
        </section>

        {/* ── Services Grid ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <AnimateOnScroll key={service.title} delay={Math.min(i + 1, 4)}>
                  <div className="group h-full rounded-2xl border border-card-border bg-card-bg/50 p-8 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-card-bg">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 flex items-center justify-center text-accent-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Arrow link */}
                    <div className="flex items-center gap-2 text-sm text-accent-cyan/60 group-hover:text-accent-cyan transition-colors duration-300">
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        Learn more
                      </span>
                      <svg
                        className="w-4 h-4 -translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Work Process ── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 radial-glow-blue opacity-10" />

          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                How We Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto">
                A proven 8-step process that takes your idea from concept to a
                production-ready product
              </p>
            </AnimateOnScroll>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/40 via-accent-cyan/20 to-transparent md:-translate-x-px" />

              <div className="space-y-12 md:space-y-16">
                {processSteps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <AnimateOnScroll key={step.number} delay={Math.min((i % 3) + 1, 3)}>
                      <div className="relative flex items-start gap-6 md:gap-0">
                        {/* Number badge */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card-bg border-2 border-accent-blue/30 flex items-center justify-center z-10">
                          <span className="text-sm font-bold gradient-text">
                            {step.number}
                          </span>
                        </div>

                        {/* Card — alternating sides on desktop */}
                        <div
                          className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                            isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                          }`}
                        >
                          <div className="rounded-2xl border border-card-border bg-card-bg/50 p-6 transition-all duration-500 hover:border-accent-cyan/25 hover:bg-card-bg">
                            <h3 className="text-lg font-semibold mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
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
