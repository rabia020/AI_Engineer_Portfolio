"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectFilter() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(
    () => category === "All" ? projects : projects.filter((project) => project.category === category),
    [category]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full border px-3.5 py-2 text-xs font-medium transition ${
              category === item
                ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
