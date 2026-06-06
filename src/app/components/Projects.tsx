import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    slug: "khabar-express",
    category: "Food Tech",
    title: "Khabar Express",
    description:
      "Multi-vendor cloud kitchen marketplace with real-time order tracking, dynamic pricing, and rider management across Dhaka.",
    gradient: "from-orange-600 to-amber-400",
  },
  {
    slug: "pathshala-ai",
    category: "Education",
    title: "Pathshala AI",
    description:
      "AI-powered adaptive learning platform for K-12 students with personalized tutoring in Bangla and English.",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    slug: "shastho-seba",
    category: "Healthcare",
    title: "Shastho Seba",
    description:
      "Telemedicine platform connecting patients with verified doctors, with integrated health records and pharmacy delivery.",
    gradient: "from-emerald-600 to-teal-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Real-world solutions that drive measurable impact for our clients
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i + 1}>
              <Link href={`/case-study/${project.slug}`} className="group block h-full">
                <div className="h-full rounded-2xl border border-card-border bg-card-bg/50 overflow-hidden card-hover-lift card-inner-glow">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Shimmer overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="text-white/90 text-2xl font-bold relative z-10">
                      {project.title}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs border border-card-border text-muted mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <Link href="/case-study" className="btn-outline text-sm">
            View All Case Studies
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
