import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-shell">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14 dark:bg-white dark:text-slate-950">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s build something useful.</h2>
              <p className="mt-5 max-w-xl leading-7 opacity-70">
                Interested in AI engineering, Generative AI, agentic systems, RAG, or AI automation? Get in touch through the links below.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {siteConfig.email ? (
                <a href={`mailto:${siteConfig.email}`} className="contact-button">
                  <Mail size={16} /> Email <ArrowUpRight size={14} />
                </a>
              ) : null}
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact-button">
                <Github size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
              {siteConfig.linkedin ? (
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact-button">
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
