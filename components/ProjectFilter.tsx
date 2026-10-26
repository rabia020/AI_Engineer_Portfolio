"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectFilter() {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], []);

  const visible = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((project) => project.category === active);
    return [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [active]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by category">
        {categories.map((category) => {
          const isActive = category === active;
          const count = category === "All" ? projects.length : projects.filter((p) => p.category === category).length;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-violet-600 bg-violet-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {category}
              <span className={`ml-2 text-xs ${isActive ? "text-violet-200" : "text-slate-400"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}