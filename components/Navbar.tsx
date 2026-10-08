"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="container-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
            RH
          </span>
          <span className="hidden sm:block">Rabia Haq</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
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
              <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-900" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
