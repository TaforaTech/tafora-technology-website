"use client";

import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="animate-hero-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/50 backdrop-blur-sm mb-8 border-breathe">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs text-muted tracking-wide">Building the Future with AI</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight animate-hero-reveal-1">
          Build Intelligent Software
          <br />
          <span className="gradient-text animate-text-clip inline-block">for a Smarter Future</span>
        </h1>

        {/* Subline */}
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto animate-hero-reveal-2">
          We design and develop AI-powered applications that help businesses scale
          efficiently, automate workflows, and deliver exceptional experiences.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-reveal-3">
          <CalendlyButton />
          <a href="#services" className="btn-outline text-base">
            Our Services
          </a>
        </div>

        {/* Stats with staggered pop-in */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "3+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={stat.label} className={`text-center animate-stat-pop animate-stat-pop-${i + 1}`}>
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
