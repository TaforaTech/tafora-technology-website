import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    category: "Food Tech",
    title: "Rail Rolls",
    description:
      "A PWA platform for ordering food on trains with real-time tracking, 1000+ restaurant partnerships, and seamless payment integration.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    category: "Education",
    title: "Uslot AI",
    description:
      "An AI-powered personality assessment and career guidance platform helping students make data-driven decisions about their future.",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    category: "Healthcare",
    title: "Paadha",
    description:
      "Hospital navigation system and blood-bank registry connecting patients with critical resources in real-time across Kerala.",
    gradient: "from-green-600 to-emerald-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Real-world solutions that drive measurable impact for our clients
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i + 1}>
              <div className="group relative h-full rounded-2xl border border-card-border bg-card-bg/50 overflow-hidden transition-all duration-500 hover:border-accent-cyan/30 hover:-translate-y-1">
                {/* Project visual */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
                >
                  <div className="text-white/90 text-2xl font-bold">
                    {project.title}
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs border border-card-border text-muted mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <a href="#contact" className="btn-outline text-sm">
            View All Projects
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
