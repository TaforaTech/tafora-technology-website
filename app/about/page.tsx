import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us | Tafora Technology",
  description:
    "Learn about Tafora Technology — a leading web and app development company delivering innovative, AI-powered solutions for startups, scale-ups, and enterprises.",
};

const values = [
  {
    title: "Outcomes Over Output",
    description:
      "We measure success by the business impact we create — not by how many features we ship. Every decision ties back to your goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Systems, Not Shortcuts",
    description:
      "We architect solutions that scale. No band-aids, no tech debt — just clean, maintainable systems built for the long haul.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Clarity Before Code",
    description:
      "We invest deeply in understanding your problem before writing a single line. The right question saves weeks of wrong work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Strategy Before Screens",
    description:
      "Design without strategy is decoration. We ground every pixel in user research, market analysis, and business objectives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Partnership Over Handoffs",
    description:
      "We don&apos;t disappear after launch. We embed with your team, iterate together, and stay accountable to results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const pillars = [
  {
    number: "01",
    title: "Market-Driven Approach",
    description:
      "We stay ahead of industry trends and deeply understand your users. Every solution is built on real-world insights — not assumptions — so your product exceeds market needs from day one.",
  },
  {
    number: "02",
    title: "Selective Partnerships",
    description:
      "We choose our projects carefully, partnering with companies whose vision we believe in. This focus lets us pour our best thinking and craftsmanship into every engagement.",
  },
  {
    number: "03",
    title: "Embracing Youth",
    description:
      "Fresh perspective and relentless energy drive innovation. Young minds with sharp skills, mentored by experienced leaders, create solutions that feel alive and push boundaries.",
  },
];

const team = [
  { name: "Mohammed Salih AK", role: "CEO", initials: "MS" },
  { name: "Naseemudheen", role: "COO", initials: "NU" },
  { name: "Amar Diyab", role: "CTO", initials: "AD" },
  { name: "Mohamed Danis", role: "Project Manager", initials: "MD" },
  { name: "Siyan", role: "Head of Design", initials: "SN" },
  { name: "Ashmal", role: "Business Development Executive", initials: "AS" },
  { name: "Mohammed Afnan KK", role: "Full Stack Developer", initials: "MA" },
  { name: "Shefin", role: "Full Stack Developer", initials: "SF" },
  { name: "Hanna", role: "Marketing Manager", initials: "HN" },
];

const capabilities = [
  {
    title: "Product Strategy",
    items: [
      "Product roadmapping & prioritization",
      "Market & competitive analysis",
      "Go-to-market strategy",
    ],
  },
  {
    title: "Experience Design",
    items: [
      "Design thinking methodology",
      "User research & testing",
      "UI/UX design systems",
    ],
  },
  {
    title: "AI Strategy",
    items: [
      "AI readiness assessment",
      "Custom model development",
      "Workflow automation with AI agents",
    ],
  },
  {
    title: "Product Engineering",
    items: [
      "Full-stack web & mobile development",
      "Cloud-native architectures",
      "API design & integrations",
    ],
  },
  {
    title: "Technical Due Diligence",
    items: [
      "Code & architecture audits",
      "Scalability assessments",
      "Security & performance reviews",
    ],
  },
  {
    title: "Commerce Strategy",
    items: [
      "Platform selection & migration",
      "Conversion rate optimization",
      "Unified commerce solutions",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 radial-glow-top" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] radial-glow-blue opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="animate-fade-in-up">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-6">
                About Us
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight animate-fade-in-up-delay-1">
              What <span className="gradient-text">Tafora</span> is
              <br className="hidden sm:block" /> All About
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
              We are a technology company committed to delivering innovative,
              high-quality solutions. From startups to enterprises, we partner with
              ambitious teams to build AI-powered products that create real impact.
            </p>
            <div className="mt-8 animate-fade-in-up-delay-3">
              <a href="#team" className="inline-flex items-center gap-2 text-sm text-accent-cyan hover:text-accent-blue transition-colors group">
                See who we are
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
        </section>

        {/* ── Values Grid ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll className="mb-14">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                Our Principles
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                What We <span className="gradient-text">Stand For</span>
              </h2>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((value, i) => (
                <AnimateOnScroll key={value.title} delay={Math.min(i + 1, 4)}>
                  <div className="group h-full rounded-2xl border border-card-border bg-card-bg/50 p-7 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-card-bg">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 flex items-center justify-center text-accent-cyan mb-5 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision ── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 radial-glow-blue opacity-15" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimateOnScroll>
                <div>
                  <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                    Our Vision
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    Empowering Progress Through{" "}
                    <span className="gradient-text">Purposeful Innovation</span>
                  </h2>
                  <div className="space-y-4 text-muted leading-relaxed">
                    <p>
                      We believe technology should amplify human potential, not replace it.
                      Our vision is to be the most trusted technology partner for ambitious
                      businesses — the team you call when the stakes are high.
                    </p>
                    <p>
                      Through strategy, design, and engineering, we create sustainable
                      growth and lasting value for the organizations we serve and the
                      communities they impact.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={2}>
                <div className="relative">
                  <div className="rounded-2xl border border-card-border bg-card-bg/60 p-8 md:p-10">
                    <div className="grid grid-cols-2 gap-8">
                      {[
                        { value: "50+", label: "Projects Shipped" },
                        { value: "30+", label: "Happy Partners" },
                        { value: "3+", label: "Years Building" },
                        { value: "9", label: "Team Members" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold gradient-text">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 w-36 h-36 bg-accent-cyan/5 rounded-full blur-3xl" />
                  <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-accent-blue/5 rounded-full blur-3xl" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                We&apos;re Invested in Helping You{" "}
                <span className="gradient-text">Grow</span>
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <AnimateOnScroll key={pillar.number} delay={i + 1}>
                  <div className="group h-full rounded-2xl border border-card-border bg-card-bg/50 p-8 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-card-bg">
                    <span className="inline-block text-5xl font-bold gradient-text opacity-25 group-hover:opacity-50 transition-opacity duration-500 leading-none mb-4">
                      {pillar.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section id="team" className="relative py-20 md:py-28 scroll-mt-20">
          <div className="absolute inset-0 radial-glow-blue opacity-10" />

          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-14">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto">
                Young, sharp, and obsessively focused on building products that matter
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <AnimateOnScroll key={member.name} delay={Math.min(i + 1, 4)}>
                  <div className="group text-center rounded-2xl border border-card-border bg-card-bg/50 p-6 transition-all duration-500 hover:border-accent-cyan/25 hover:bg-card-bg">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 group-hover:from-accent-blue/30 group-hover:to-accent-cyan/30 transition-all duration-500" />
                      <div className="absolute inset-[2px] rounded-full bg-card-bg flex items-center justify-center">
                        <span className="text-lg font-bold gradient-text">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted mt-1">{member.role}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll className="mb-14">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
                Our Capabilities Are Designed to{" "}
                <span className="gradient-text">Solve Your Problems</span>
              </h2>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((cap, i) => (
                <AnimateOnScroll key={cap.title} delay={Math.min(i + 1, 4)}>
                  <div className="group h-full rounded-2xl border border-card-border bg-card-bg/50 p-7 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-card-bg">
                    <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <ul className="space-y-3">
                      {cap.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                        >
                          <svg
                            className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M5 12h14M12 5l7 7-7 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
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
                  <Link
                    href="mailto:info@tafora.in"
                    className="btn-gradient text-base"
                  >
                    Get In Touch
                  </Link>
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
