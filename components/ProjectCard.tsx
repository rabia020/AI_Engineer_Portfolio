import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-950">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div className="bg-grid flex h-full items-center justify-center">
            <div className="rounded-2xl border border-slate-300/80 bg-white/80 px-5 py-4 text-center backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Project Preview</p>
              <p className="mt-2 font-semibold">{project.title}</p>
              <p className="mt-1 text-xs text-slate-500">Add your screenshot</p>
            </div>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-violet-600 dark:text-violet-300">{project.status}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <Link href={`/projects/${project.slug}`} className="icon-button" aria-label={`Open ${project.title} case study`}>
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.technologies.length > 5 ? <span className="tag">+{project.technologies.length - 5}</span> : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link href={`/projects/${project.slug}`} className="button-secondary !px-3 !py-2 text-xs">
            Case Study <ArrowUpRight size={14} />
          </Link>
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button-secondary !px-3 !py-2 text-xs">
              Live Demo <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary !px-3 !py-2 text-xs">
              <Github size={14} /> GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
