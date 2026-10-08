import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main>
      <Hero />
      <Specializations />

      <section id="projects" className="section-space">
        <div className="container-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="section-kicker">Featured work</p>
              <h2 className="section-title">Projects built around real AI application patterns.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Explore systems involving agent orchestration, retrieval, analytics, automation, and machine learning.
              </p>
            </div>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="button-secondary shrink-0">
              <Github size={16} /> Open source <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <div key={project.slug} className={project.slug === "workpilot-ai" ? "md:col-span-2" : ""}>
                {/* ProjectFilter is used below for the complete searchable list. */}
                <div className="sr-only">{project.title}</div>
              </div>
            ))}
          </div>

          <ProjectFilter />
        </div>
      </section>

      <section className="section-space border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">How I build AI systems</p>
            <h2 className="section-title">From a user problem to an orchestrated application.</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {[
              ["01", "Understand", "Define the user problem and required context."],
              ["02", "Retrieve", "Bring in documents, data or external context."],
              ["03", "Reason", "Route the request through the right agent or workflow."],
              ["04", "Act", "Use tools, APIs or structured data when needed."],
              ["05", "Approve", "Keep side effects behind appropriate human review."],
              ["06", "Respond", "Return a useful, grounded and traceable result."]
            ].map(([number, title, text]) => (
              <div key={number} className="card p-5">
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-300">{number}</span>
                <h3 className="mt-8 font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Skills />

      <About />

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
            <div className="card p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-300">
                  <Sparkles size={19} />
                </div>
                <div>
                  <p className="section-kicker">Open source</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">Built in the open.</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                    This portfolio is open source and designed so projects, screenshots, links, and technical case studies can be updated without rebuilding the site architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="card flex flex-col justify-between p-7">
              <div>
                <p className="section-kicker">Resume</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Want the concise version?</h2>
              </div>
              <a href={siteConfig.resume} className="button-primary mt-8 w-full">
                View Resume <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="container-shell flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Rabia Haq</p>
          <p>AI Engineer · Generative AI · Agentic AI · RAG</p>
        </div>
      </footer>
    </main>
  );
}
