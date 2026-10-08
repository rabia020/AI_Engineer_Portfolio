import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Rabia Haq`,
    description: project.description
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="pt-28">
      <div className="container-shell pb-20 sm:pb-28">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <div className="mt-10 max-w-4xl">
          <span className="tag">{project.category}</span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{project.status}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{project.longDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button-primary">
                Live Demo <ArrowUpRight size={15} />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                <Github size={16} /> GitHub <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_.5fr]">
          <div className="card overflow-hidden">
            <div className="bg-grid flex aspect-[16/8] items-center justify-center bg-slate-50 dark:bg-slate-950">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
              ) : (
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Project Screenshot</p>
                  <p className="mt-2 font-semibold">Add the real image in public/images/projects/</p>
                </div>
              )}
            </div>
          </div>

          <aside className="card p-6">
            <p className="section-kicker">Technology</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span key={tech} className="tag">{tech}</span>)}
            </div>
          </aside>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <section>
            <p className="section-kicker">The problem</p>
            <h2 className="mt-2 text-2xl font-semibold">Why this project exists</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{project.problem}</p>
          </section>

          <section>
            <p className="section-kicker">The solution</p>
            <h2 className="mt-2 text-2xl font-semibold">How it approaches the problem</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{project.solution}</p>
          </section>
        </div>

        <section className="mt-16">
          <p className="section-kicker">Architecture</p>
          <h2 className="mt-2 text-2xl font-semibold">System flow</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.architecture.map((item, index) => (
              <div key={item} className="card p-5">
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-300">0{index + 1}</span>
                <p className="mt-6 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="section-kicker">Key features</p>
          <h2 className="mt-2 text-2xl font-semibold">What the system includes</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div key={feature} className="card p-5 text-sm text-slate-600 dark:text-slate-300">
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="section-kicker">Engineering notes</p>
          <h2 className="mt-2 text-2xl font-semibold">Challenges and decisions</h2>
          <ul className="mt-6 space-y-3">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="flex gap-3 rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                {challenge}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
