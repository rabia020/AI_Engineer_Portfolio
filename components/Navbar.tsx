"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white shadow-sm transition group-hover:rotate-6">
            RH
          </span>
          <span className="hidden sm:block">Rabia Haq</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/60 p-1 backdrop-blur md:flex dark:border-slate-800/80 dark:bg-slate-900/60">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a className="icon-button hidden sm:grid" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          {siteConfig.linkedin ? (
            <a className="icon-button hidden sm:grid" href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          ) : null}
          <ThemeToggle />
          <button
            type="button"
            className="icon-button md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="container-shell flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-lg px-3 py-2.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 ${
                  active === item.href ? "bg-slate-100 font-medium dark:bg-slate-900" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
