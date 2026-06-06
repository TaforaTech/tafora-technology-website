"use client";

import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow-top" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Morphing gradient blob */}
      <div
        className="absolute top-1/4 left-1/2 w-[700px] h-[500px] animate-morph-glow opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, rgba(66,133,236,0.3) 0%, rgba(11,186,251,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Secondary ambient glow */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(11,186,251,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute top-20 left-[10%] w-1.5 h-1.5 rounded-full bg-accent-cyan/40 animate-float" />
      <div className="absolute top-32 right-[12%] w-2 h-2 rounded-full bg-accent-blue/25 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-44 left-[18%] w-1 h-1 rounded-full bg-accent-cyan/30 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-[8%] w-1.5 h-1.5 rounded-full bg-accent-blue/20 animate-float" style={{ animationDelay: "4.5s" }} />
      <div className="absolute bottom-60 right-[25%] w-1 h-1 rounded-full bg-accent-cyan/25 animate-float-slow" style={{ animationDelay: "2s" }} />

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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
    </section>
  );
}
