import Link from "next/link";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

const categoryStyles: Record<string, string> = {
  "Agentic AI": "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-900 dark:bg-fuchsia-950/50 dark:text-fuchsia-300",
  "Generative AI": "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950/50 dark:text-violet-300",
  RAG: "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300",
  "AI Analytics": "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300",
  Automation: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300",
  "Machine Learning": "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-300",
  "Software Development": "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-300"
};

const defaultCategoryStyle =
  "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300";

function hasLink(url?: string) {
  return Boolean(url && url.trim() !== "" && url.trim() !== "#");
}

export function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = `/projects/${project.slug}`;
  const categoryStyle = categoryStyles[project.category] ?? defaultCategoryStyle;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300/70 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-violet-800/70">
      <Link href={caseStudyHref} className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950" aria-label={`Open ${project.title} details`}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="bg-grid flex h-full items-center justify-center">
            <p className="text-4xl font-semibold tracking-tight text-slate-300 dark:text-slate-700">
              {project.title
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 3)}
            </p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight">
                <Link href={caseStudyHref} className="transition hover:text-violet-600 dark:hover:text-violet-300">
                  {project.title}
                </Link>
              </h3>
              {project.featured ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300">
                  <Sparkles size={12} /> Featured
                </span>
              ) : null}
            </div>
            {project.subtitle ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p> : null}
          </div>
          <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryStyle}`}>{project.category}</span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

        {project.highlights && project.highlights.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.highlights.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-violet-200 bg-violet-50/60 px-2 py-0.5 font-mono text-xs text-violet-700 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-5 border-t border-slate-200 pt-4 text-sm dark:border-slate-800">
            {hasLink(project.githubUrl) ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                <Github size={16} /> GitHub
              </a>
            ) : null}
            {hasLink(project.demoUrl) ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : null}
            <Link
              href={caseStudyHref}
              className="ml-auto text-xs font-medium text-violet-600 transition hover:text-violet-800 dark:text-violet-300 dark:hover:text-violet-200"
            >
              Details →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}