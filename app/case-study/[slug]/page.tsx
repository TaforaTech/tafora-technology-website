import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { projects, getProjectBySlug } from "../data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Tafora Technology`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 radial-glow-top" />

          <div className="relative z-10 max-w-5xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="animate-fade-in-up mb-8">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Link
                  href="/case-study"
                  className="hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-foreground">{project.title}</span>
              </div>
            </div>

            {/* Category + Title */}
            <div className="animate-fade-in-up-delay-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs border border-accent-cyan/20 text-accent-cyan mb-4 uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-text">{project.title}</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl">
                {project.tagline}
              </p>
            </div>

            {/* Banner */}
            <div className="mt-12 animate-fade-in-up-delay-2">
              <div
                className={`rounded-2xl bg-gradient-to-br ${project.gradient} aspect-[2/1] flex items-center justify-center overflow-hidden`}
              >
                <span className="text-white text-4xl md:text-6xl font-bold opacity-60">
                  {project.title}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Tags ── */}
        <section className="relative pb-12">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="flex flex-wrap gap-3">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full text-sm border border-card-border bg-card-bg/50 text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <AnimateOnScroll>
                <div>
                  <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                    Overview
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    {project.tagline.charAt(0).toUpperCase() +
                      project.tagline.slice(1)}
                  </h2>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={2}>
                <p className="text-muted leading-relaxed text-lg">
                  {project.overview}
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Challenge & Solution ── */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 radial-glow-blue opacity-10" />
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <div className="h-full rounded-2xl border border-card-border bg-card-bg/50 p-8">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                  <p className="text-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={2}>
                <div className="h-full rounded-2xl border border-card-border bg-card-bg/50 p-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                  <p className="text-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="mb-12">
              <p className="text-sm text-accent-cyan tracking-widest uppercase mb-3">
                Key Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                What We <span className="gradient-text">Built</span>
              </h2>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <AnimateOnScroll
                  key={feature}
                  delay={Math.min((i % 2) + 1, 2)}
                >
                  <div className="flex items-start gap-4 rounded-xl border border-card-border bg-card-bg/50 p-5 transition-all duration-300 hover:border-accent-cyan/20">
                    <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack & Results ── */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 radial-glow-blue opacity-10" />
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tech Stack */}
              <AnimateOnScroll>
                <div className="rounded-2xl border border-card-border bg-card-bg/50 p-8">
                  <p className="text-sm text-accent-cyan tracking-widest uppercase mb-4">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg text-sm border border-card-border bg-card-bg text-foreground/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Results */}
              <AnimateOnScroll delay={2}>
                <div className="rounded-2xl border border-card-border bg-card-bg/50 p-8">
                  <p className="text-sm text-accent-cyan tracking-widest uppercase mb-4">
                    Results
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <div className="text-2xl font-bold gradient-text">
                          {r.value}
                        </div>
                        <div className="text-xs text-muted mt-1">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="relative rounded-3xl border border-card-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-card-bg to-accent-cyan/10" />
                <div className="absolute inset-0 grid-bg opacity-40" />

                <div className="relative z-10 py-16 md:py-24 px-8 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Let&apos;s{" "}
                    <span className="gradient-text">Build With Us</span>
                  </h2>
                  <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed">
                    Have a project in mind? Let&apos;s talk about how we can
                    bring your vision to life.
                  </p>
                  <Link
                    href="mailto:infor.tafora@gmail.com"
                    className="btn-gradient text-base"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
