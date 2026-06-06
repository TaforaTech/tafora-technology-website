import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Tafora transformed our ordering system completely. Queue times dropped by 70% and customer satisfaction soared. Their team truly understood our vision.",
    author: "Rail Rolls",
    role: "CEO, Food Tech Platform",
  },
  {
    quote:
      "The AI-powered assessment platform they built exceeded all expectations. The app performance is stellar and the UX is incredibly intuitive.",
    author: "Uslot AI",
    role: "Director, Education Platform",
  },
  {
    quote:
      "Two years of partnership and counting. Tafora consistently delivers high-quality solutions and has become an integral part of our tech strategy.",
    author: "Skillmount",
    role: "Director, EdTech Company",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 radial-glow-blue opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.author} delay={i + 1}>
              <div className="h-full rounded-2xl border border-card-border bg-card-bg/50 p-8 flex flex-col transition-all duration-300 hover:border-accent-cyan/20">
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-accent-cyan/30 mb-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-card-border pt-4">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted">{testimonial.role}</div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
