import { Bot, Database, LineChart, Network, Workflow } from "lucide-react";

const items = [
  { icon: Bot, title: "Generative AI", text: "LLM applications, prompt engineering, model integration and grounded generation." },
  { icon: Network, title: "Agentic AI", text: "Multi-agent orchestration, tool calling, routing, planning and human-in-the-loop workflows." },
  { icon: Database, title: "RAG", text: "Embeddings, vector databases, retrieval, metadata filtering and document-grounded answers." },
  { icon: Workflow, title: "AI Automation", text: "APIs, n8n workflows and tool execution that connect AI systems to useful actions." },
  { icon: LineChart, title: "AI Analytics", text: "Natural-language analytics, SQL agents, anomaly detection and decision-support dashboards." }
];

export function Specializations() {
  return (
    <section className="border-y border-slate-200/80 py-16 dark:border-slate-800/80">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">What I build</p>
          <h2 className="section-title">AI engineering across the application stack.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-5">
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-300">
                <Icon size={19} />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
