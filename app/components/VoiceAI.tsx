"use client";

import AnimateOnScroll from "./AnimateOnScroll";

function WaveVisualizer() {
  return (
    <div className="flex items-center justify-center gap-1 h-20">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-accent-blue to-accent-cyan wave-bar"
          style={{
            height: "100%",
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${1 + Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function VoiceAI() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 radial-glow-blue opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl border border-card-border bg-card-bg/70 backdrop-blur-sm overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-accent-cyan/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
            <AnimateOnScroll>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 mb-6">
                  <span className="text-xs text-accent-cyan">New Product</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Conversational AI
                  <br />
                  <span className="gradient-text">Voice Agent</span>
                </h2>
                <p className="text-sm text-accent-cyan mb-4">
                  Human-Like. Real-Time. Responsive.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  Deploy intelligent voice agents that understand context, handle complex
                  conversations, and deliver human-like experiences at scale. Perfect for
                  customer support, sales, and internal operations.
                </p>
                <a href="#contact" className="btn-gradient text-sm">
                  Explore Voice AI
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={2}>
              <div className="relative">
                <div className="rounded-2xl border border-card-border bg-[#0a0a10] p-8 animate-pulse-glow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-sm text-muted">AI Voice Active</span>
                  </div>
                  <WaveVisualizer />
                  <div className="mt-6 flex items-center justify-between text-xs text-muted">
                    <span>Latency: 120ms</span>
                    <span>Accuracy: 98.5%</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
