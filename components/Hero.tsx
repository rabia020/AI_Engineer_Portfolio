"use client";

import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10" />

      <div className="container-shell grid items-center gap-14 pb-20 lg:grid-cols-[1.15fr_.85fr] lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 dark:border-violet-900/70 dark:bg-violet-950/30 dark:text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            AI Engineer
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Building practical AI systems with{" "}
            <span className="text-gradient">intelligence and orchestration.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            I build applications using Generative AI, Agentic AI, RAG, LLMs, data analytics, and workflow automation — turning complex workflows into useful software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={16} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a href={siteConfig.resume} className="button-secondary">
              Resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            {siteConfig.linkedin ? (
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-950 dark:hover:text-white">
                <Linkedin size={16} /> LinkedIn
              </a>
            ) : null}
            {siteConfig.email ? (
              <a href={`mailto:${siteConfig.email}`} className="hover:text-slate-950 dark:hover:text-white">
                {siteConfig.email}
              </a>
            ) : null}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="mx-auto w-full max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">AI Engineering</p>
                <p className="mt-1 text-sm font-semibold">System Thinking</p>
              </div>
              <div className="rounded-lg border border-slate-200 px-2 py-1 text-[10px] text-slate-500 dark:border-slate-700">01</div>
            </div>

            <div className="my-7 space-y-3">
              {["LLM Application", "Agent Orchestration", "Retrieval + Tools", "Human Approval"].map((label, index) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-xs font-semibold dark:bg-slate-800">
                    0{index + 1}
                  </div>
                  <div className="h-10 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium dark:border-slate-800 dark:bg-slate-950">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
              <p className="text-xs uppercase tracking-[0.18em] opacity-60">Focus</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Generative AI", "Agentic AI", "RAG", "Automation"].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 text-xs dark:border-slate-900/15">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
