export const personalInfo = {
  name: "Vikram Singh Bisht",
  title: "Senior Full Stack Developer",
  subtitle: "Technical Team Lead",
  location: "Sector 50, Gurgaon, Haryana",
  phone: "+91 7453088456",
  email: "vikrambisht426@gmail.com",
  objective:
    "Results-driven Technical Team Lead & Senior Full Stack Developer with over 5 years of experience in delivering complex web and enterprise solutions. Experienced in leading project teams, technical planning, and execution. Adept at blending Agile leadership, project management, and robust solution architecture with hands-on expertise in RAG-based LLM systems, model training, and AI-powered enterprise tooling.",
  typingRoles: [
    "Senior Full Stack Developer",
    "Technical Team Lead",
    "RAG & LLM Engineer",
    "Solution Architect",
  ],
};

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Delivered", value: 8, suffix: "+" },
  { label: "MCA Score", value: 82, suffix: "%" },
  { label: "Teams Led", value: 10, suffix: "+" },
];

export const experience = [
  {
    company: "Ginni Systems Limited",
    role: "SDE - 1",
    period: "Feb 2021 – Present",
    tech: ["Node.js", "Express.js", "NestJS", "MySQL", "MongoDB", "PHP", "Laravel", "RAG", "LLM"],
    highlights: [
      "Leading cross-functional teams for business-critical SaaS products",
      "Overseeing technical strategy, sprint planning, and stakeholder communication",
      "Defining project scope, timelines, and ensuring Agile best practices (Scrum/Kanban)",
      "Mentoring junior developers and setting code review/architectural standards",
      "Hands-on development of critical features, backend/frontend architecture, and database design",
      "Built ZWING AI — a RAG-based LLM assistant for ZWING POS domain intelligence and API debugging",
      "Designed and trained custom LLM workflows for invoice, tax, and stock validation",
      "Optimizing performance, troubleshooting complex issues, and implementing CI/CD pipelines (Azure, Docker)",
      "Automating monitoring and enhancing QA processes",
    ],
  },
  {
    company: "Syscom Softech Pvt Ltd",
    role: "PHP Developer Trainee",
    period: "Jan 2020 – July 2020",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    highlights: [
      "Developed backend APIs and database components",
      "Designed and optimized data schemas",
      "Ensured seamless communication between frontend and backend through API integrations",
      "Contributed to documentation and collaborative project delivery",
    ],
  },
];

export const skills = [
  {
    category: "Project Management",
    items: ["Agile (Scrum/Kanban)", "Sprint Planning", "Jira", "Asana", "Trello"],
  },
  {
    category: "Backend",
    items: ["PHP (Laravel)", "Node.js", "NestJS", "Express.js", "Eloquent ORM"],
  },
  {
    category: "Frontend",
    items: ["Vue.js", "React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "Dexie.js (IndexedDB)"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Docker", "CI/CD Pipelines", "GitHub Actions"],
  },
  {
    category: "Quality Assurance",
    items: ["Testing", "Quality Gates", "Code Reviews", "Process Improvement"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "RAG (Retrieval-Augmented Generation)",
      "LLM Model Training & Fine-tuning",
      "Vector Embeddings",
      "Prompt Engineering",
      "Semantic Search",
      "Knowledge Base Indexing",
    ],
  },
  {
    category: "AI Tools & LLMs",
    items: [
      "OpenAI API",
      "Claude",
      "Gemini",
      "GitHub Copilot",
      "Cursor AI",
      "ChromaDB / Vector DB",
      "Python (AI/ML)",
    ],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Team Leadership", "Risk Management", "Multi-project Handling"],
  },
];

export const projects = [
  {
    title: "ZWING POS",
    description:
      "Planned and architected a highly configurable, cloud-based POS system; managed full SDLC and multiple project teams. Developed robust billing, inventory, and compliance modules.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL", "Node.js", "Express.js", "NestJS", "Azure"],
    featured: true,
    responsibilities: [
      "Product Creation – Easily add and manage products within the system",
      "Promotion and Discounts – Set up and manage promotional offers",
      "Invoice, Sale Return, and Order Creation – Streamlined billing processes",
      "Bill Exchanges – Facilitate easy exchange of bills",
      "Invoice Modification – Edit and update invoices for accuracy",
      "Sale Pricebook Management – Maintain pricing structures efficiently",
      "MRP Management – Manage Maximum Retail Price for all products",
      "Tax Management – Simplify tax calculations and compliance",
      "Inventory Management – Track and manage inventory in real-time",
      "Stock Audit – Handled stock audits for accurate inventory management",
    ],
  },
  {
    title: "ZWING AI",
    description:
      "Built a RAG-powered LLM assistant trained on ZWING POS domain knowledge — enabling intelligent support for invoices, tax compliance, stock validation, and API debugging across the ZWING ecosystem.",
    tech: ["Python", "RAG", "LLM", "OpenAI", "Vector DB", "NestJS", "Node.js"],
    featured: true,
    responsibilities: [
      "Designed and implemented a RAG (Retrieval-Augmented Generation) pipeline with custom model training on ZWING project documentation and codebase",
      "Built an AI assistant that answers queries about ZWING POS modules — billing, inventory, promotions, and compliance workflows",
      "Automated invoice validation — checks invoice correctness, tax calculations, GST compliance, and pricing accuracy",
      "Implemented stock intelligence — verifies inventory levels, stock audit discrepancies, and MRP/pricebook consistency",
      "Developed API debugging capabilities — diagnoses API failures, traces request/response issues, and suggests fixes",
      "Indexed ZWING domain knowledge base with vector embeddings for semantic search and context-aware responses",
      "Fine-tuned LLM prompts and retrieval strategies for accurate, domain-specific answers with reduced hallucinations",
      "Integrated AI assistant with existing ZWING backend services for real-time data validation and troubleshooting",
    ],
  },
  {
    title: "Zwing Connect (Web Chat App)",
    description:
      "Designed, coded, and led rollout of real-time chat platform with advanced communication and team productivity features.",
    tech: ["NestJS", "Vue.js", "Socket.io", "WebRTC", "MongoDB"],
    featured: true,
    responsibilities: [
      "Developed web-based chat application for seamless organizational communication",
      "Implemented one-on-one and group chat features across departments",
      "Added meeting scheduling, emoji sharing, and file uploads",
      "Integrated advanced communication and team productivity features",
    ],
  },
  {
    title: "CRM Software",
    description:
      "Drove end-to-end delivery as technical lead and hands-on coder with analytics and automated workflows.",
    tech: ["NestJS", "Vue.js", "MySQL", "MongoDB"],
    featured: true,
    responsibilities: [
      "Drove end-to-end delivery as technical lead and hands-on coder",
      "Implemented analytics, automated workflows, and reporting modules",
    ],
  },
  {
    title: "Loyalty Coupon",
    description:
      "Owned technical planning, coding, and project execution for enterprise-grade SaaS solutions.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL"],
    responsibilities: [
      "Owned technical planning, coding, and project execution for multiple enterprise-grade SaaS solutions",
      "Focused on process automation, secure integrations, and robust data management throughout SDLC",
    ],
  },
  {
    title: "HRMS Portal",
    description:
      "Developed a comprehensive Human Resource Management System for enterprise operations.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL"],
    responsibilities: [
      "Developed web-based HRMS for employee data, payroll, attendance, and recruitment",
      "Implemented automated workflows and self-service portals",
      "Integrated real-time reporting and performance evaluation features",
      "Ensured data security and seamless enterprise system integration",
    ],
  },
  {
    title: "Project Management System",
    description:
      "Built a scalable, mobile-friendly platform for task management and team collaboration.",
    tech: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
    responsibilities: [
      "Developed web-based system for task management and team collaboration",
      "Enabled task creation, assignment, milestone tracking, and real-time updates",
      "Implemented customizable user roles and integrated reporting",
      "Supported third-party integrations for scalable operations",
    ],
  },
  {
    title: "E-Invoice & E-Way Bill Software",
    description:
      "Implemented GST compliance solutions with automated invoicing and ERP integration.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL"],
    responsibilities: [
      "Implemented solutions for GST compliance and streamlined invoicing",
      "Automated invoice generation and goods tracking",
      "Integrated with existing ERP systems for efficient business operations",
      "Conducted user training sessions for smooth system adoption",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Uttarakhand Technical University, Dehradun",
    year: "2020",
    score: "82%",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kumaon University, Nainital",
    year: "2018",
    score: "65%",
  },
];

export const achievements = [
  {
    title: "Zwing Chat Web Application",
    description: "Secured 2nd Prize for development and successfully led a team through design, build, and delivery within a competition framework.",
    icon: "trophy",
  },
  {
    title: "WalkAThon Champion",
    description: "Won the WalkAThon event in 2021, 2022, and 2023, organized by Ginesys One Company.",
    icon: "medal",
  },
  {
    title: "Student of the Year",
    description: "Received a scholarship in MCA for the Student of the Year Award.",
    icon: "star",
  },
  {
    title: "Sandhaan-2019 Tech Fest",
    description: "Organized Sandhaan-2019, an Annual Tech Fest at Amrapali Group of Institutes.",
    icon: "event",
  },
];

export const certifications = [
  { name: "Cloud Computing & The Virtual World", issuer: "Amrapali Group of Institutes" },
  { name: "CodeIgniter-MySQL Certification (40 Hrs)", issuer: "Amrapali Group of Institutes" },
  { name: "Advanced Office Automation (40 Hrs)", issuer: "Amrapali Group of Institutes" },
  { name: "Intellectual Property Rights Awareness", issuer: "Uttarakhand State Council of Science & Technology" },
  { name: "Hybrid App Development Workshop", issuer: "Amrapali Group of Institutes" },
  { name: "Cloud Security Alliance", issuer: "OWASP Security Summit" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
