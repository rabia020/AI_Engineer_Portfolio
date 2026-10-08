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
  category: ProjectCategory;
  description: string;
  longDescription: string;
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
    slug: "workpilot-ai",
    title: "WorkPilot AI",
    category: "Agentic AI",
    description:
      "AI-powered work management platform combining multi-agent orchestration, RAG, persistent memory, workplace tools, and human-in-the-loop automation.",
    longDescription:
      "WorkPilot AI is an AI work management platform designed around a supervisor-led multi-agent workflow. It combines retrieval, planning, workplace integrations, persistent memory, and approval-based actions.",
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
    githubUrl: "",
    demoUrl: "",
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
    slug: "datapilot",
    title: "DataPilot",
    category: "AI Analytics",
    description:
      "Agentic analytics platform that turns business data into SQL analysis, visualizations, anomaly detection, and AI-generated insights.",
    longDescription:
      "DataPilot provides a natural-language interface over structured business data. Its agent workflow routes requests to analytics capabilities and uses DuckDB for read-only analytical SQL.",
    technologies: [
      "Python",
      "LangGraph",
      "DuckDB",
      "Pandas",
      "SQL",
      "Plotly",
      "Streamlit"
    ],
    features: [
      "Natural-language data analysis",
      "SQL generation and validation",
      "DuckDB analytics",
      "Anomaly detection",
      "Interactive visualizations",
      "Executive summaries",
      "Agent routing"
    ],
    featured: true,
    status: "Open Source",
    githubUrl: "",
    demoUrl: "",
    problem:
      "Small-business data is often available in spreadsheets but requires technical skills to turn into useful analysis.",
    solution:
      "Provide a conversational analytics layer that translates business questions into validated read-only queries and useful visual insights.",
    architecture: [
      "User question",
      "Agent router",
      "Analytics / anomaly / recommendation agents",
      "Validated DuckDB SQL",
      "Data analysis and visualization",
      "Natural-language response"
    ],
    challenges: [
      "Keeping generated SQL safe and read-only",
      "Routing different business questions to appropriate analysis paths",
      "Presenting analytical output in a useful form"
    ]
  },
  {
    slug: "bazaarpilot",
    title: "BazaarPilot",
    category: "Generative AI",
    description:
      "AI business co-pilot for sales, profit, inventory, anomaly detection, and business insights through natural-language interaction.",
    longDescription:
      "BazaarPilot is a small-business analytics co-pilot built around structured sales data. It supports natural-language business questions and provides analytical insights through an agent workflow.",
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
    githubUrl: "",
    demoUrl: "",
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
    slug: "enterprise-knowledge-assistant",
    title: "Enterprise Knowledge Assistant",
    category: "RAG",
    description:
      "Workplace knowledge assistant combining enterprise RAG, metadata-based access control, multi-agent orchestration, and workplace automation.",
    longDescription:
      "An enterprise-style knowledge assistant that combines document retrieval with workplace integrations and agent orchestration.",
    technologies: [
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "PostgreSQL",
      "FastAPI",
      "Streamlit",
      "n8n",
      "Docker"
    ],
    features: [
      "Enterprise document retrieval",
      "Metadata-based access control",
      "Multi-agent routing",
      "Email and Calendar workflows",
      "Slack and Jira workflows",
      "Human-in-the-loop actions"
    ],
    featured: true,
    status: "Open Source",
    githubUrl: "",
    demoUrl: "",
    problem:
      "Workplace knowledge can be distributed across documents and communication systems, making it difficult to retrieve the right context quickly.",
    solution:
      "Combine RAG with agent routing and workplace tools so a user can retrieve knowledge and coordinate actions through one interface.",
    architecture: [
      "User",
      "Supervisor",
      "RAG / workplace agents",
      "ChromaDB and metadata filters",
      "PostgreSQL memory",
      "n8n integrations",
      "Human approval for side effects"
    ],
    challenges: [
      "Controlling retrieval using metadata and access rules",
      "Coordinating retrieval and external tool workflows",
      "Handling side effects safely with approval gates"
    ]
  },
  {
    slug: "rag-pdf-assistant",
    title: "RAG PDF Assistant",
    category: "RAG",
    description:
      "Multi-PDF question-answering application using retrieval-augmented generation, FAISS, embeddings, query rewriting, and page citations.",
    longDescription:
      "A document question-answering application designed to retrieve relevant PDF passages and provide answers grounded in the uploaded documents.",
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
    githubUrl: "",
    demoUrl: "",
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
    category: "Machine Learning",
    description:
      "Content-based movie recommendation application using feature similarity and an interactive Streamlit interface.",
    longDescription:
      "A machine-learning recommendation project that uses content information to find movies similar to a selected title.",
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
    githubUrl: "",
    demoUrl: "",
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
  },
  {
    slug: "online-car-booking",
    title: "Online Car Booking Application",
    category: "Software Development",
    description:
      "Android ride-booking application developed with a supporting administrative dashboard as a university final-year project.",
    longDescription:
      "An Android application for online car booking with a backend and administrative interface.",
    technologies: ["Java", "Android", "PHP"],
    features: [
      "Ride booking workflow",
      "Android application interface",
      "Backend integration",
      "Administrative dashboard"
    ],
    featured: false,
    status: "University Project",
    githubUrl: "",
    demoUrl: "",
    problem:
      "Users need a convenient way to request and manage rides through a mobile interface.",
    solution:
      "Build an Android application backed by a web-oriented backend and administrative workflow.",
    architecture: [
      "Android application",
      "Backend API",
      "Application data",
      "Administrative dashboard"
    ],
    challenges: [
      "Connecting the mobile application with backend functionality",
      "Designing an understandable booking workflow"
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
