import { Bot, Boxes, Database, Layers, Search, Server, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  wide?: boolean;
};

const groups: SkillGroup[] = [
  {
    title: "AI & LLM",
    description: "Designing LLM-powered applications with agents, retrieval and human review.",
    icon: Bot,
    items: ["Generative AI", "Agentic AI", "LLM Applications", "RAG", "Prompt Engineering", "Tool Calling", "Human-in-the-Loop"],
    wide: true
  },
  {
    title: "AI Frameworks",
    description: "Orchestrating multi-step agent workflows.",
    icon: Layers,
    items: ["LangGraph", "LangChain"]
  },
  {
    title: "Vector / Retrieval",
    description: "Semantic search over documents and data.",
    icon: Search,
    items: ["ChromaDB", "FAISS", "Sentence Transformers"]
  },
  {
    title: "Backend",
    description: "APIs that serve models and agents.",
    icon: Server,
    items: ["Python", "FastAPI", "REST APIs"]
  },
  {
    title: "Data",
    description: "Analytics, SQL and classic machine learning.",
    icon: Database,
    items: ["PostgreSQL", "DuckDB", "Pandas", "NumPy", "Scikit-learn"]
  },
  {
    title: "Automation & Tools",
    description: "Shipping, automating and packaging work.",
    icon: Boxes,
    items: ["n8n", "Docker", "Git", "GitHub", "Streamlit", "VS Code"],
    wide: true
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-shell">
        <Reveal className="mb-12 max-w-2xl">
          <p className="section-kicker">Technical toolkit</p>
          <h2 className="section-title">Tools I use to turn ideas into working systems.</h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.05} className={group.wide ? "lg:col-span-2" : ""}>
                <div className="card card-hover group h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:scale-110 dark:bg-violet-950/40 dark:text-violet-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
