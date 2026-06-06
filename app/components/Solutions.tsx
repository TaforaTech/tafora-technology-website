import AnimateOnScroll from "./AnimateOnScroll";

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Agentic AI Solutions",
    subtitle: "Intelligent. Automated. Adaptive.",
    description:
      "Build autonomous AI agents that can reason, plan, and execute complex tasks to streamline your business operations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Enterprise Solutions",
    subtitle: "Scalable. Secure. Reliable.",
    description:
      "Custom enterprise-grade platforms built to handle millions of users with robust security and seamless scalability.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Growth Acceleration",
    subtitle: "Optimize. Scale. Evolve.",
    description:
      "Data-driven strategies and technology solutions designed to accelerate your business growth and market presence.",
  },
];

export default function Solutions() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            End-to-end technology solutions powered by cutting-edge AI to transform
            your business
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <AnimateOnScroll key={solution.title} delay={i + 1}>
              <div className="group relative h-full rounded-2xl border border-card-border bg-card-bg/50 p-8 card-hover-lift card-inner-glow">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 flex items-center justify-center text-accent-cyan mb-6 group-hover:scale-110 group-hover:border-accent-cyan/40 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">{solution.title}</h3>
                  <p className="text-sm text-accent-cyan mb-3">{solution.subtitle}</p>
                  <p className="text-muted text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-accent-cyan translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
