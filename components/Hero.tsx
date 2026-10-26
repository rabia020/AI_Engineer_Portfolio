"use client";

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";

const stack = ["Python", "LangGraph", "LangChain", "FastAPI", "RAG", "ChromaDB", "FAISS", "Docker", "n8n", "PostgreSQL", "Streamlit", "Next.js"];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400/20 via-indigo-400/15 to-sky-400/20 blur-3xl dark:from-violet-600/15 dark:via-indigo-600/10 dark:to-sky-600/10" />

      <div className="container-shell pb-16 lg:pb-24">
        <div className="max-w-4xl">
          <motion.div {...fadeUp(0)}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to AI Engineering roles
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Hi, I&apos;m Rabia.
            <br />
            I build <span className="text-gradient">AI systems</span> that actually ship.
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            AI Engineer working with Generative AI, Agentic AI, RAG and LLMs — turning complex workflows into
            grounded, traceable and useful software.
          </motion.p>

          <motion.div {...fadeUp(0.18)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="button-secondary">
              <Mail size={16} /> Contact me
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={16} /> GitHub <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.24)} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            {siteConfig.linkedin ? (
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white">
                <Linkedin size={16} /> LinkedIn
              </a>
            ) : null}
            {siteConfig.email ? (
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white">
                <Mail size={16} /> {siteConfig.email}
              </a>
            ) : null}
          </motion.div>
        </div>
      </div>

      <div className="border-y border-slate-200/80 py-5 dark:border-slate-800/80">
        <div className="marquee-track mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max gap-10">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`} className="whitespace-nowrap text-sm font-medium text-slate-400 dark:text-slate-500">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}