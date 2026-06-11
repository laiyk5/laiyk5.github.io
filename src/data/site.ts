export const personalInfo = {
  name: "Yikai Lai",
  initials: "YL",
  title: "Machine learning engineer and computer science master's student",
  subtitle: "I build practical AI systems, especially around retrieval, graph learning, and knowledge tools.",
  affiliation: "MSc Computer Science, City University of Hong Kong",
  location: "Shenzhen, China",
  email: "laiyk5@163.com",
  github: "https://github.com/laiyk5",
  twitter: "https://x.com/LaiAlex6",
  scholar: "",
  blog: "https://laiyk5.github.io/blog",
  notes: "https://laiyk5.github.io/my-obsidian-site",
};

export const snapshotItems = [
  {
    label: "Who I am",
    value: "A builder with one foot in research and one foot in product work.",
  },
  {
    label: "What I do",
    value: "RAG systems, graph-based modeling, evaluation workflows, and information tools.",
  },
  {
    label: "What matters to me",
    value: "Making useful systems that stay clear, testable, and grounded in real usage.",
  },
];

export const quickDestinations = [
  {
    title: "Blog",
    description: "Writing about technology, learning, and how I think through problems.",
    href: personalInfo.blog,
    cta: "Visit blog",
  },
  {
    title: "Notes",
    description: "A working notebook of math, machine learning, systems ideas, and references.",
    href: personalInfo.notes,
    cta: "Open notes",
  },
];

export const internalPages = [
  {
    title: "Achievements",
    description: "Selected projects, internship work, and academic milestones.",
    href: "/achievements",
  },
  {
    title: "Vision",
    description: "How I think about useful AI systems and the kind of work I want to do.",
    href: "/vision",
  },
  {
    title: "Contact",
    description: "Ways to reach me and the best place to start a conversation.",
    href: "/contact",
  },
];

export const achievements = {
  highlights: [
    {
      title: "CVRP FunSearch",
      meta: "Optimization + LLMs",
      description:
        "Applied Google's FunSearch pattern to the Capacitated Vehicle Routing Problem and evolved a solution that beat the baseline with very low API cost.",
    },
    {
      title: "PCI Chatbot",
      meta: "RAG systems",
      description:
        "Built and evaluated an internal retrieval assistant, structuring over 1000 company documents and improving search quality with real user feedback.",
    },
    {
      title: "Protein Interaction Prediction",
      meta: "Graph learning",
      description:
        "Designed a graph neural network that combines amino acid sequence features with 3D protein structure information.",
    },
  ],
  timeline: [
    {
      year: "2025",
      title: "Algorithm Intern, PCI",
      detail:
        "Worked on chatbot development, document structuring, and evaluation pipelines for internal knowledge systems.",
    },
    {
      year: "2025 - 2026",
      title: "MSc, City University of Hong Kong",
      detail:
        "Focusing on machine learning systems, graph methods, and practical AI engineering.",
    },
    {
      year: "2021",
      title: "Third Prize, International Contest of Autonomous and Intelligent Robots",
      detail:
        "Contributed to autonomous navigation and AI decision logic in an international competition.",
    },
  ],
};

export const visionPoints = [
  {
    title: "Useful beats flashy",
    text: "I care more about whether a system helps someone think or act better than whether it produces an impressive one-minute demo.",
  },
  {
    title: "Evaluation is part of design",
    text: "Retrieval, ranking, and interaction quality should be measured early, not treated as cleanup work after the model is chosen.",
  },
  {
    title: "Knowledge should feel navigable",
    text: "I am drawn to interfaces that help people move through dense information with confidence instead of friction.",
  },
  {
    title: "Research should survive contact with reality",
    text: "I like turning research ideas into systems that can handle messy documents, ambiguous questions, and real constraints.",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    note: "Best for collaboration, internships, and longer conversations.",
  },
  {
    label: "GitHub",
    value: "github.com/laiyk5",
    href: personalInfo.github,
    note: "Code, experiments, and project history.",
  },
  {
    label: "Twitter",
    value: "@LaiAlex6",
    href: personalInfo.twitter,
    note: "Smaller updates, links, and things I am thinking about.",
  },
];
