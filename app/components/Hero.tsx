"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow-top" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] radial-glow-blue opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-accent-cyan/30 animate-float" />
      <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-accent-blue/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-[20%] w-2 h-2 rounded-full bg-accent-cyan/20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs text-muted">Building the Future with AI</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up-delay-1">
          Build Intelligent Software
          <br />
          <span className="gradient-text">for a Smarter Future</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto animate-fade-in-up-delay-2">
          We design and develop AI-powered applications that help businesses scale
          efficiently, automate workflows, and deliver exceptional experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a href="#contact" className="btn-gradient text-base">
            Get in Touch
          </a>
          <a href="#services" className="btn-outline text-base">
            Our Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 animate-fade-in-up-delay-3">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "3+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  );
}
