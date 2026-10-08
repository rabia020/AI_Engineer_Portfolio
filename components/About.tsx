export function About() {
  return (
    <section id="about" className="section-space border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Focused on useful AI, not AI for decoration.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          <p>
            I&apos;m an AI Engineer focused on building practical intelligent applications using Generative AI, Agentic AI, RAG, automation, and data analytics.
          </p>
          <p>
            My projects explore how LLMs can be connected to retrieval systems, structured data, tools, APIs, and human approval workflows to solve real application problems.
          </p>
          <p>
            I enjoy working across the AI application stack — from data preparation and retrieval to agent orchestration, backend services, interfaces, and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
