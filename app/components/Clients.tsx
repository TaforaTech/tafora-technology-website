import AnimateOnScroll from "./AnimateOnScroll";

const clients = [
  "Rail Rolls",
  "Uslot AI",
  "Paadha",
  "Silvermount",
  "Skillmount",
  "Al Abrar",
  "Techmine",
  "Golgenie",
];

export default function Clients() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-sm text-muted uppercase tracking-widest">
            Trusted by innovative companies
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-20 rounded-xl border border-card-border bg-card-bg/30 text-muted font-medium text-sm hover:text-foreground hover:border-accent-cyan/20 transition-all duration-300 hover:scale-105"
              >
                {client}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
