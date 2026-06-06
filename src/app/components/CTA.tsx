import AnimateOnScroll from "./AnimateOnScroll";
import CalendlyButton from "./CalendlyButton";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="relative rounded-3xl border border-card-border overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-card-bg to-accent-cyan/10" />
            <div className="absolute inset-0 grid-bg opacity-50" />

            <div className="relative z-10 py-16 md:py-24 px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let&apos;s <span className="gradient-text">Build Together</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-10">
                Ready to transform your business with intelligent software? Let&apos;s
                discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CalendlyButton />
                <a href="#projects" className="btn-outline text-base">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
