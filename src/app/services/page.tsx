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

/* ── Engagement Models ── */
const engagementModels = [
  {
    title: "Staff Augmentation",
    description:
      "Embed senior engineers directly into your team. We match skills, timezone, and culture — so they feel like your own people from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: ["Dedicated full-time engineers", "Direct team integration", "Flexible scaling"],
  },
  {
    title: "Managed Teams",
    description:
      "A full cross-functional squad — PM, designers, engineers, QA — managed by us, accountable to you. Ship faster without the hiring overhead.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: ["End-to-end project ownership", "Weekly sprint demos", "Transparent reporting"],
  },
  {
    title: "Technology Consulting",
    description:
      "Architecture audits, tech-stack evaluations, and strategic roadmaps. We help you make the right bets before committing resources.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: ["Architecture reviews", "Tech debt assessment", "Migration planning"],
  },
  {
    title: "MVP Development",
    description:
      "Validate your idea with a lean, functional product. We go from concept to a testable MVP in weeks — not months.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: ["Rapid prototyping", "User-tested iterations", "Launch-ready in weeks"],
  },
];

/* ── Core Services ── */
const services = [
  {
    title: "Strategic IT Consultation",
    description:
      "Align technology with business outcomes through expert guidance, architecture reviews, and actionable roadmaps.",
    capabilities: [
      "Technology roadmapping",
      "Architecture & code audits",
      "Cloud migration strategy",
      "Vendor & stack evaluation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI-Driven Transformation",
    description:
      "Build bespoke AI systems that automate decisions, enrich experiences, and unlock operational leverage.",
    capabilities: [
      "Custom LLM integration",
      "Agentic workflow automation",
      "Predictive analytics",
      "RAG & knowledge systems",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile Development",
    description:
      "Ship high-performing apps with modern stacks — from responsive PWAs to native mobile experiences.",
    capabilities: [
      "React / Next.js frontends",
      "React Native & Flutter apps",
      "API design & microservices",
      "Real-time & offline-first",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Startup Acceleration",
    description:
      "From zero to one — discovery workshops, MVP builds, cloud ops, CI/CD pipelines, and growth analytics.",
    capabilities: [
      "Idea-to-MVP in weeks",
      "Product-market fit testing",
      "Growth engineering",
      "Investor-ready demos",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Growth Engineering",
    description:
      "Engineer for scale with performance tuning, data pipelines, and cost-optimized infrastructure.",
    capabilities: [
      "Performance optimization",
      "Data pipeline architecture",
      "Auto-scaling infrastructure",
      "Observability & monitoring",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise Platforms",
    description:
      "Secure, compliant platforms integrating with enterprise systems — built for millions of users.",
    capabilities: [
      "SSO & RBAC systems",
      "ERP & CRM integrations",
      "Multi-tenant architectures",
      "Compliance & audit trails",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ── Tech Stack ── */
const technologies = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "Flutter",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "TensorFlow",
  "OpenAI", "LangChain", "Figma", "Tailwind CSS",
];

/* ── Process Steps ── */
const processSteps = [
  {
    number: "01",
    title: "Requirement Gathering",
    description:
      "Deep understanding of your business, users, and goals through workshops and interviews.",
  },
  {
    number: "02",
    title: "Assumption Validation",
    description:
      "Testing critical assumptions through market research and user interviews — building on certainty.",
  },
  {
    number: "03",
    title: "Feature Finalization",
    description:
      "Prioritizing and locking down features that map directly to user needs and business objectives.",
  },
  {
    number: "04",
    title: "UX Definition",
    description:
      "Defining user flows, information architecture, and interaction patterns for intuitive experiences.",
  },
  {
    number: "05",
    title: "Wireframing",
    description:
      "Low-fidelity wireframes bring structure to life — iterating fast while changes are cheap.",
  },
  {
    number: "06",
    title: "Prototyping",
    description:
      "Interactive prototypes validated with real users before a single line of production code.",
  },
  {
    number: "07",
    title: "Software Development",
    description:
      "Building with modern stacks. Weekly sprint demos and CI/CD for production-ready releases.",
  },
  {
    number: "08",
    title: "User Acceptance Testing",
    description:
      "Rigorous QA and real-user testing. We don't ship until it meets the bar — then keep iterating.",
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
            <p className="text-sm text-accent-blue tracking-widest uppercase mb-6 font-medium">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              We offer a comprehensive range of technology services to help
              businesses transform, scale, and stay ahead. From AI strategy to
              production-grade platforms.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ── Engagement Models ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll className="mb-14">
              <p className="text-sm text-accent-blue tracking-widest uppercase mb-3 font-medium">
                Collaboration Models
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                How We <span className="gradient-text">Work With You</span>
              </h2>
              <p className="mt-4 text-muted max-w-xl">
                Flexible engagement models designed to fit your stage, budget,
                and pace
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-5">
              {engagementModels.map((model, i) => (
                <AnimateOnScroll key={model.title} delay={Math.min(i + 1, 4)}>
                  <div className="group h-full rounded-2xl border border-card-border bg-white p-7 md:p-8 transition-all duration-500 hover:border-accent-blue/30 hover:shadow-[0_8px_30px_rgba(66,133,236,0.08)]">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform duration-300">
                        {model.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-blue transition-colors duration-300">
                          {model.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {model.description}
                        </p>
                        <ul className="space-y-1.5">
                          {model.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2 text-sm text-foreground/70"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Services ── */}
        <section className="relative py-20 md:py-28 bg-card-bg/60">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm text-accent-blue tracking-widest uppercase mb-3 font-medium">
                Core Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                What We <span className="gradient-text">Build</span>
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto">
                End-to-end technology solutions powered by cutting-edge AI and
                modern engineering
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <AnimateOnScroll key={service.title} delay={Math.min(i + 1, 4)}>
                  <div className="group h-full rounded-2xl border border-card-border bg-white p-8 transition-all duration-500 hover:border-accent-blue/30 hover:shadow-[0_12px_40px_rgba(66,133,236,0.08)] card-inner-glow">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 group-hover:border-accent-blue/30 transition-all duration-300">
                      {service.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <ul className="space-y-2 mb-6">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-sm text-foreground/75"
                        >
                          <svg
                            className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {cap}
                        </li>
                      ))}
                    </ul>

                    {/* Hover arrow */}
                    <div className="flex items-center gap-2 text-sm text-accent-blue/50 group-hover:text-accent-blue transition-colors duration-300">
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
                        <path
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technology Stack ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-14">
              <p className="text-sm text-accent-blue tracking-widest uppercase mb-3 font-medium">
                Technology Stack
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Technologies We{" "}
                <span className="gradient-text">Work With</span>
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto">
                We pick the right tool for the job — battle-tested frameworks
                and cutting-edge AI infrastructure
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 rounded-full text-sm font-medium border border-card-border bg-white text-foreground/80 hover:border-accent-blue/30 hover:text-accent-blue hover:shadow-[0_2px_12px_rgba(66,133,236,0.08)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-card-bg/40">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm text-accent-blue tracking-widest uppercase mb-3 font-medium">
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
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/30 via-accent-cyan/15 to-transparent md:-translate-x-px" />

              <div className="space-y-10 md:space-y-14">
                {processSteps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <AnimateOnScroll
                      key={step.number}
                      delay={Math.min((i % 3) + 1, 3)}
                    >
                      <div className="relative flex items-start gap-6 md:gap-0">
                        {/* Number badge */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-accent-blue/20 flex items-center justify-center z-10 shadow-sm">
                          <span className="text-sm font-bold gradient-text">
                            {step.number}
                          </span>
                        </div>

                        {/* Card — alternating sides on desktop */}
                        <div
                          className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                            isLeft
                              ? "md:mr-auto md:pr-4"
                              : "md:ml-auto md:pl-4"
                          }`}
                        >
                          <div className="rounded-2xl border border-card-border bg-white p-6 transition-all duration-500 hover:border-accent-blue/20 hover:shadow-[0_4px_20px_rgba(66,133,236,0.06)]">
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
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/[0.04] via-white to-accent-cyan/[0.04]" />
                <div className="absolute inset-0 grid-bg opacity-40" />

                <div className="relative z-10 py-16 md:py-24 px-8 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to{" "}
                    <span className="gradient-text">Build Something Great</span>
                    ?
                  </h2>
                  <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed">
                    Whether you need a dedicated team, a technical partner, or a
                    full product build — let&apos;s talk about what&apos;s
                    possible.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <CalendlyButton />
                    <Link href="/contact" className="btn-outline text-base">
                      Send a Message
                    </Link>
                  </div>
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
