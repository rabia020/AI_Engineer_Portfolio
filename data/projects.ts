export type ProjectCategory =
  | "Agentic AI"
  | "Generative AI"
  | "RAG"
  | "AI Analytics"
  | "Automation"
  | "Machine Learning"
  | "Software Development";

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  highlights?: string[];
  technologies: string[];
  features: string[];
  featured: boolean;
  status: string;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
};

export const projects: Project[] = [
  {
    slug: "reliefmesh-ai",
    title: "ReliefMesh AI",
    subtitle: "Multi-Agent Disaster-Response Coordination Platform",
    category: "Agentic AI",
    description:
      "Disaster-response coordination platform where AI agents triage incidents, analyse field photos, optimise resource allocation, and route critical decisions through human approval.",
    longDescription:
      "ReliefMesh AI is a team hackathon project built for the HEC-NCEAC & PEC Generative & Agentic AI Training (Cohort 11, Hackathon 2). A supervisor agent coordinates specialised agents for incidents, resources, mapping, image intelligence and optimisation, connected through three MCP servers, with an AI copilot and an approval center for human review.",
    highlights: ["3 MCP Servers", "Image Intelligence", "Human Approval Center"],
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "MCP",
      "Groq",
      "SQLite",
      "OR-Tools",
      "Folium",
      "Sentence Transformers"
    ],
    features: [
      "Supervisor-led multi-agent workflow",
      "Incident, Resource and Mapping MCP servers",
      "AI image analysis of field photos",
      "Resource allocation optimisation with OR-Tools",
      "AI copilot for responders",
      "Human approval center for critical actions",
      "Interactive maps with Folium",
      "Deployed backend and frontend"
    ],
    featured: true,
    status: "Hackathon Project",
    image: "/images/projects/command_center.png",
    githubUrl: "https://github.com/rabia020/ReliefMesh-AI",
    demoUrl: "https://drive.google.com/file/d/18_N3lFQLQPto2lj5gJ9sUJhdOVy-YaiR/view?usp=sharing",
    problem:
      "During disasters, incident reports, available resources and field information are scattered, which slows down coordination and decision-making.",
    solution:
      "Bring incidents, resources, maps and field photos into one platform where AI agents analyse the situation, suggest optimised resource allocation, and send critical actions to humans for approval.",
    architecture: [
      "Incident reports and field photos",
      "Streamlit dashboard",
      "FastAPI backend",
      "Supervisor agent",
      "Incident / resource / mapping MCP servers",
      "Image analysis and OR-Tools optimiser",
      "Human approval center",
      "Coordinated response plan"
    ],
    challenges: [
      "Coordinating several specialised agents through one supervisor",
      "Exposing incident, resource and mapping data as MCP tools",
      "Keeping high-impact decisions behind human approval",
      "Delivering a working, deployed system within a 20-day hackathon"
    ]
  },
  {
    slug: "workpilot-ai",
    title: "WorkPilot AI",
    subtitle: "Multi-Agent Work Management Platform",
    category: "Agentic AI",
    description:
      "AI-powered work management platform combining multi-agent orchestration, RAG, persistent memory, workplace tools, and human-in-the-loop automation.",
    longDescription:
      "WorkPilot AI is an AI work management platform designed around a supervisor-led multi-agent workflow. It combines retrieval, planning, workplace integrations, persistent memory, and approval-based actions.",
    highlights: ["Multi-Agent Orchestration", "Persistent Memory", "Human-in-the-Loop"],
    technologies: [
      "LangGraph",
      "LangChain",
      "RAG",
      "FastAPI",
      "PostgreSQL",
      "ChromaDB",
      "n8n",
      "Docker",
      "Streamlit",
      "Python"
    ],
    features: [
      "Multi-agent orchestration",
      "Supervisor and planner workflow",
      "RAG",
      "Persistent memory",
      "Email, Calendar, Slack and Jira workflows",
      "Human approval for side effects",
      "Tool calling"
    ],
    featured: true,
    status: "Open Source",
    image: "/images/projects/manager_panel.png",
    githubUrl: "https://github.com/rabia020/WorkPilot-AI-Hackathon/tree/main",
    demoUrl: "https://drive.google.com/file/d/1t4UnU3jqGWjHcP4VX6cAhy4iIjFtZq7c/view",
    problem:
      "Work information and actions are often spread across documents, messages, tasks, calendars, and other workplace tools.",
    solution:
      "Use an orchestrated set of AI agents to understand a request, retrieve relevant knowledge, plan work, call tools, and route side effects through human approval.",
    architecture: [
      "User request",
      "Application UI",
      "LangGraph supervisor",
      "Planner and specialized agents",
      "RAG and workplace tools",
      "Human approval when required",
      "Verified action and response"
    ],
    challenges: [
      "Coordinating multiple agents while keeping responsibilities clear",
      "Separating read-only retrieval from side-effecting actions",
      "Combining enterprise retrieval with tool execution"
    ]
  },
  {
    slug: "bazaarpilot",
    title: "BazaarPilot",
    subtitle: "AI Business Co-Pilot for Small Businesses",
    category: "Generative AI",
    description:
      "AI business co-pilot for sales, profit, inventory, anomaly detection, and business insights through natural-language interaction.",
    longDescription:
      "BazaarPilot is a small-business analytics co-pilot built around structured sales data. It supports natural-language business questions and provides analytical insights through an agent workflow.",
    highlights: ["English · Roman Urdu · Urdu", "Sales & Profit Insights", "Approval-Based Actions"],
    technologies: [
      "Python",
      "LangGraph",
      "Groq",
      "DuckDB",
      "Pandas",
      "Streamlit",
      "Plotly"
    ],
    features: [
      "Sales analysis",
      "Profit analysis",
      "Inventory insights",
      "Anomaly detection",
      "Recommendations",
      "Natural-language queries",
      "English, Roman Urdu and Urdu support",
      "Human approval for business actions"
    ],
    featured: true,
    status: "Open Source",
    image: "/images/projects/dashboard.png",
    githubUrl: "https://github.com/rabia020/BazaarPilot-Agentic-Analytics-Engine-",
    demoUrl: "https://drive.google.com/file/d/161fxEIhxl_cHKIrh8j_gxGIBnquVA0d6/view?usp=sharing",
    problem:
      "Small businesses may have useful sales data without having a dedicated analyst to interpret it.",
    solution:
      "Turn structured sales data into an approachable conversational analytics experience with specialized agent capabilities.",
    architecture: [
      "Business question",
      "LangGraph routing",
      "Sales / profit / inventory / anomaly agents",
      "DuckDB read-only analysis",
      "Visualization and recommendations",
      "Human approval for actions"
    ],
    challenges: [
      "Making structured business analysis accessible through natural language",
      "Supporting multiple languages without losing analytical context",
      "Keeping business actions behind an approval step"
    ]
  },

    {
    slug: "resume-review-agent",
    title: "Resume Review Agent",
    subtitle: "AI-Powered Resume Feedback Assistant",
    category: "Generative AI",
    description:
      "AI agent that reviews a resume and gives clear, actionable feedback to help candidates improve their CV for the roles they are applying to.",
    longDescription:
      "Resume Review Agent is a Generative AI application where a user uploads a resume and receives structured feedback on its content, strengths and areas for improvement through an interactive Streamlit interface.",
    highlights: ["Resume Upload", "Actionable Feedback", "Live on Streamlit"],
    technologies: ["Python", "LLM", "Prompt Engineering", "Streamlit"],
    features: [
      "Resume upload",
      "AI-generated review",
      "Strengths and improvement suggestions",
      "Interactive Streamlit interface"
    ],
    featured: false,
    status: "Live",
    image: "/images/projects/Resume_review_agent.png",
    githubUrl: "https://github.com/rabia020/Resume-Review-Agent/",
    demoUrl: "https://drive.google.com/file/d/1ZHxH_tvvLuR5zirq2jo7SzmpyjJCHRz0/view?usp=sharing",
    problem:
      "Job seekers often do not know which parts of their resume are weak or how to improve them for a specific role.",
    solution:
      "Use an AI agent to read the resume and return clear, structured and actionable feedback in seconds.",
    architecture: [
      "Resume upload",
      "Text extraction",
      "LLM review agent",
      "Structured feedback",
      "Streamlit results view"
    ],
    challenges: [
      "Extracting clean text from different resume formats",
      "Writing prompts that produce specific, useful feedback",
      "Presenting feedback in an easy-to-read layout"
    ]
  },
  
  {
    slug: "rag-pdf-assistant",
    title: "RAG PDF Assistant",
    subtitle: "Multi-PDF Question Answering",
    category: "RAG",
    description:
      "Multi-PDF question-answering application using retrieval-augmented generation, FAISS, embeddings, query rewriting, and page citations.",
    longDescription:
      "A document question-answering application designed to retrieve relevant PDF passages and provide answers grounded in the uploaded documents.",
    highlights: ["Page-Level Citations", "Query Rewriting", "Cached Vector Indexes"],
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Hugging Face",
      "Groq",
      "Streamlit"
    ],
    features: [
      "Multiple PDF upload",
      "PDF deletion",
      "FAISS indexing",
      "Embeddings",
      "Query rewriting",
      "Conversation history",
      "Page-level citations",
      "Cached vector indexes"
    ],
    featured: false,
    status: "Open Source",
    image: "/images/projects/Rag_Dashboard.png",
    githubUrl: "https://github.com/rabia020/RAG_Based_Application",
    demoUrl: "https://drive.google.com/file/d/1-GlUDArFtNFDkNVm-T_R4gtqk-mPV5kT/view?usp=sharing",
    problem:
      "Finding specific information in long PDF documents can be slow when users have to manually search through pages.",
    solution:
      "Use retrieval-augmented generation to retrieve relevant chunks and answer questions with document-grounded context and page references.",
    architecture: [
      "PDF upload",
      "Document parsing and chunking",
      "Embedding generation",
      "FAISS retrieval",
      "Query rewriting",
      "LLM response with citations"
    ],
    challenges: [
      "Maintaining useful retrieval quality across multiple PDFs",
      "Caching indexes without rebuilding unnecessarily",
      "Preserving page-level source information"
    ]
  },
  {
    slug: "movie-recommender",
    title: "Movie Recommendation System",
    subtitle: "Content-Based Recommender",
    category: "Machine Learning",
    description:
      "Content-based movie recommendation application using feature similarity and an interactive Streamlit interface.",
    longDescription:
      "A machine-learning recommendation project that uses content information to find movies similar to a selected title.",
    highlights: ["Cosine Similarity", "TMDB Metadata", "Interactive UI"],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Cosine Similarity",
      "Streamlit",
      "TMDB"
    ],
    features: [
      "Content-based recommendations",
      "Similarity scoring",
      "Interactive movie selection",
      "Movie metadata"
    ],
    featured: false,
    status: "Project",
    image: "/images/projects/Movie_Recommender.png",
    githubUrl: "https://github.com/rabia020/movie-recommender-streamlit",
    demoUrl: "https://drive.google.com/file/d/1cn3jAE4gv5QEnNkmTHUU2vm3PJV_Sna3/view?usp=sharing",
    problem:
      "Users often want recommendations based on the characteristics of movies they already like.",
    solution:
      "Represent movie information as features and use similarity measures to retrieve related titles.",
    architecture: [
      "Movie metadata",
      "Feature preparation",
      "Vector representation",
      "Cosine similarity",
      "Recommended titles"
    ],
    challenges: [
      "Preparing useful content features",
      "Balancing recommendation relevance with a simple user experience"
    ]
  }
];

export const projectCategories = [
  "All",
  "Agentic AI",
  "Generative AI",
  "RAG",
  "AI Analytics",
  "Automation",
  "Machine Learning",
  "Software Development"
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}