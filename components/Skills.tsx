const groups = [
  {
    title: "AI & LLM",
    items: ["Generative AI", "Agentic AI", "LLM Applications", "RAG", "Prompt Engineering", "Tool Calling", "Human-in-the-Loop"]
  },
  {
    title: "AI Frameworks",
    items: ["LangGraph", "LangChain"]
  },
  {
    title: "Vector / Retrieval",
    items: ["ChromaDB", "FAISS", "Sentence Transformers"]
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "REST APIs"]
  },
  {
    title: "Data",
    items: ["PostgreSQL", "DuckDB", "Pandas", "NumPy", "Scikit-learn"]
  },
  {
    title: "Automation & Tools",
    items: ["n8n", "Docker", "Git", "GitHub", "Streamlit", "VS Code"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Technical toolkit</p>
          <h2 className="section-title">Tools I use to turn ideas into working systems.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="card p-6">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
