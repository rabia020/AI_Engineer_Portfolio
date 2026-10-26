import { ArrowUpRight, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "./Reveal";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
};

function linkedinHandle(url: string) {
  const match = url.match(/linkedin\.com\/in\/([^/?#]+)/i);
  return match ? `in/${match[1]}` : "View profile";
}

function githubHandle(url: string) {
  const match = url.match(/github\.com\/([^/?#]+)/i);
  return match ? `@${match[1]}` : "View profile";
}

export function Contact() {
  const email = siteConfig.email ?? "";
  const linkedin = siteConfig.linkedin ?? "";
  const github = siteConfig.github ?? "";

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const items: ContactItem[] = [];

  if (email) {
    items.push({ label: "Gmail", value: email, href: gmailComposeUrl, icon: Mail, external: true });
  }
  if (linkedin) {
    items.push({ label: "LinkedIn", value: linkedinHandle(linkedin), href: linkedin, icon: Linkedin, external: true });
  }
  if (github) {
    items.push({ label: "GitHub", value: githubHandle(github), href: github, icon: Github, external: true });
  }

  return (
    <section id="contact" className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">Contact</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Let&apos;s build something{" "}
                  <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">useful</span>.
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  Hiring for AI engineering, or working on Generative AI, agentic systems, RAG or AI automation? I&apos;d love to hear
                  about it.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {email ? (
                    <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="contact-button-primary">
                      <Mail size={16} /> Email me on Gmail <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                  {linkedin ? (
                    <a href={linkedin} target="_blank" rel="noreferrer" className="contact-button">
                      <Linkedin size={16} /> Connect on LinkedIn
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-3">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/10"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-slate-400">{item.label}</span>
                        <span className="block truncate font-medium text-white">{item.value}</span>
                      </span>
                      <ArrowUpRight size={18} className="shrink-0 text-slate-500 transition group-hover:rotate-45 group-hover:text-white" />
                    </a>
                  );
                })}
                {email ? (
                  <p className="px-1 text-xs text-slate-500">
                    Prefer another email app?{" "}
                    <a href={`mailto:${email}`} className="text-slate-300 underline-offset-2 hover:underline">
                      Open in your default mail app
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}