import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

const process = [
  ["01", "Understand", "Define the user problem and required context."],
  ["02", "Retrieve", "Bring in documents, data or external context."],
  ["03", "Reason", "Route the request through the right agent or workflow."],
  ["04", "Act", "Use tools, APIs or structured data when needed."],
  ["05", "Approve", "Keep side effects behind appropriate human review."],
  ["06", "Respond", "Return a useful, grounded and traceable result."]
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Specializations />

      <section id="projects" className="section-space">
        <div className="container-shell">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="section-kicker justify-center">Projects</p>
            <h2 className="section-title">
              Things I&apos;ve <span className="text-gradient">built</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Systems involving agent orchestration, retrieval, analytics, automation and machine learning — each one built to
              solve a real problem.
            </p>
          </Reveal>

          <ProjectFilter />

          <div className="mt-12 text-center">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={16} /> See more on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-space relative border-y border-slate-200/80 bg-slate-50/60 dark:border-slate-800/80 dark:bg-slate-900/30">
        <div className="container-shell">
          <Reveal className="mb-12 max-w-2xl">
            <p className="section-kicker">How I build AI systems</p>
            <h2 className="section-title">From a user problem to an orchestrated application.</h2>
          </Reveal>

          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <div className="pointer-events-none absolute left-0 right-0 top-[2.15rem] hidden h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent lg:block dark:via-violet-800" />
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.06}>
                <div className="card card-hover group relative h-full p-5">
                  <span className="relative grid h-8 w-8 place-items-center rounded-full border border-violet-200 bg-white font-mono text-xs font-semibold text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white dark:border-violet-800 dark:bg-slate-900 dark:text-violet-300">
                    {number}
                  </span>
                  <h3 className="mt-6 font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Skills />

      <About />

      <Contact />

      <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
        <div className="container-shell flex flex-col items-center justify-between gap-6 text-sm text-slate-500 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-medium text-slate-950 dark:text-white">Rabia Haq</p>
            <p className="mt-1">AI Engineer · Generative AI · Agentic AI · RAG</p>
          </div>

          <div className="flex items-center gap-2">
            <a className="icon-button" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            {siteConfig.linkedin ? (
              <a className="icon-button" href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            ) : null}
            {siteConfig.email ? (
              <a className="icon-button" href={`mailto:${siteConfig.email}`} aria-label="Email">
                <Mail size={16} />
              </a>
            ) : null}
            <a className="icon-button" href="#home" aria-label="Back to top">
              <ArrowUp size={16} />
            </a>
          </div>

          <p>© {new Date().getFullYear()} Rabia Haq</p>
        </div>
      </footer>
    </main>
  );
}