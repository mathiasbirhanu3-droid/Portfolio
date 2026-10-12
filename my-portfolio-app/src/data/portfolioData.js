export const initialProfile = {
  name: "Mathias Birhanu",
  title: "Software Engineer & Web Developer",
  status: "Available for Hire & Projects",
  email: "mathiasbirhanu89@gmail.com",
  location: "Ethiopia, Addis Ababa",
  avatarUrl: "https://lh3.googleusercontent.com/d/1NMCvYwHjE_7a4LaRZJgwyAvEVA0nUvrD",
  bio: "Passionate Full-Stack Software Engineer specializing in modern JavaScript/TypeScript ecosystems, Python, and C# (.NET), with expertise in high-performance web applications and software architecture.",
  roles: [
    "Full-Stack Software Engineer",
    "React & Next.js Specialist",
    "Python and C# Specialist",
    "Software Archetect and Designer",
    "UI/UX Design Enthusiast"
  ],
  stats: [
    { value: "3", label: "Years Experience" },
    { value: "5", label: "Projects Completed" },
    { value: "99.9%", label: "Uptime Guaranteed" },
   {/* { value: "15k+", label: "Code Commits" }*/}
  ],
  socials: {
    github: "https://github.com/mathiasbirhanu3-droid",
    linkedin: "https://www.linkedin.com/in/mathias-berhanu-249855315/",
    twitter: "https://twitter.com"
  }
};

export const initialCertifications = [
  {
    id: 1,
    title: "Network Security",
    issuer: "Addis Ababa university and Cisco",
    date: "Issued Oct 2024",
    credentialId: "AWS-ASA-849201",
    verifyUrl: "https:www.netacad.com/certificates/?issuanceId=0ea93123-07e1-4aad-9adb-e891bea21f1f",
    /*badgeColor: "from-amber-500 to-orange-600",*/
    skills: ["secure routers", "Deploy ASA, NAT/PAT ", "S3", "Implement AAA"]
  },
  {
    id: 2,
    title: "CyberOps Associate",
    issuer: "Addis Ababa university and Cisco",
    date: "Issued Dec 2024",
    credentialId: "9babf41f-1167-49f2-8191-1f9598313157",
    verifyUrl: "https://www.netacad.com/certificates/?issuanceId=9babf41f-1167-49f2-8191-1f9598313157",
    /*badgeColor: "from-blue-600 to-indigo-600",*/
    skills: ["Create safe environment", "Prevent malicious access", "Investigate vulnerabilities", "Apply incident response"]
  },
  {
    id: 3,
    title: "Programming In Python",
    issuer: "Addis Ababa university, Cisco & PyTHON Institute",
    date: "Issued Nov 2024",
    credentialId: "d9af196d-62ef-4f4c-857c-e9b4c05fbb86",
    verifyUrl: "https://cloud.google.com/certification",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["Object Oriented Programming", "Coding"]

  },
  {
    id: 4,
    title: "Web Programming Nano Degree",
    issuer: "UDACITY",
    date: "Issued September, 2024",
    credentialId: "3049b2fa-4bce-11ef-bc63-d73d33f3cd82",
    verifyUrl: "https://www.udacity.com/certificate/e/3049b2fa-4bce-11ef-bc63-d73d33f3cd82",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["HTML", "CSS", "JavaScript"]
    
  },
  {
    id: 5,
    title: "Android Developer Nano Degree",
    issuer: "UDACITY",
    date: "Issued October, 2024",
    credentialId: "32e14742-4bd0-11ef-9faf-0beb8f8efbb2",
    verifyUrl: "https://www.udacity.com/certificate/e/32e14742-4bd0-11ef-9faf-0beb8f8efbb2",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["Android Development Using Kotlin"]
    
  },
   {
    id: 6,
    title: "Full Stack Developer",
    issuer: "IBT College Of Canada",
    date: "2026",
    credentialId: "-------",
    verifyUrl: "",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["Python, React, Next.js, C#(.NET), MongoDB, PostgreSQL, Software Testing"]
    
  }
  
];

export const initialSkills = [
  
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript / JavaScriptS", level: 92, category: "Languages" },
  { name: "C#(.NET) / Python", level: 92, category: "Languages" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Tailwind CSS", level: 96, category: "Frontend" },
  { name: "PostgreSQL / Prisma / MongoDB", level: 85, category: "Database" },
  { name: "GraphQL & REST APIs", level: 90, category: "Backend" },
  { name: "Docker", level: 90, category: "DevOps" },
  { name: "Git", level: 90, category: "DevOps" },
  { name: "Jest & Cypress", level: 82, category: "Testing" }
];

export const initialProjects = [
  {
    id: 1,
    title: "Tourist Registration System",
    category: "Full-Stack",
    description: "A Tourist Registration System is a digital platform used to collect, manage, and verify information about visitors.",
    image: "https://i.pinimg.com/736x/3e/48/d0/3e48d06216577195f037f7fcbcbca386.jpg",
    tags: ["React", "Next.js", "Node.js", "Postman", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    architecture: {
      overview: "Microservices architecture deployed on AWS ECS with Redis cache layers for real-time aggregation queries.",
      metrics: ["100k+ events/sec", "<50ms query latency", "99.99% availability"]
    }
  },
  {
    id: 2,
    title: "General Purpose Booking System",
    category: "Web App",
    description: "A flexible scheduling platform that enables accept online reservations and track availability in real time..",
    image: "https://i.pinimg.com/1200x/b5/86/39/b58639b0cb3521255b1d534e51cf4621.jpg",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    architecture: {
      overview: "Next.js App Router streaming endpoints integrated with Pinecone vector database for high-accuracy RAG workflows.",
      metrics: ["Sub-second generation", "98% context recall", "10k active users"]
    }
  },
  {
    id: 3,
    title: "Addis-Eats Food Delivery System",
    category: "Web App",
    description: "An online food ordering platform that connects customers with local eateries.",
    image: "https://i.pinimg.com/736x/4c/d5/fd/4cd5fd9ec6e635e133508cfbe186648a.jpg",
    tags: ["Next.js", "Stripe API", "GraphQL", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    architecture: {
      overview: "Headless commerce architecture with incremental static regeneration (ISR) ensuring sub-second page loads.",
      metrics: ["100/100 Lighthouse score", "45% conversion boost", "Global edge distribution"]
    }
  }
];

export const initialExperience = [
  {
    id: 1,
    role: "Full Stack Developer and Technology Adviser ",
    company: "Addis Ababa City Development & Charity Organization (NGO)",
    period: "2024 - Present",
    type: "Work",
    description: "Full-stack software architect and strategic technology adviser turning complex business goals into scalable, end-to-end technical execution.",
    highlights: [
      "Advised organizational leaders on technology adoption, infrastructure upgrades",
      "Designed and built scalable, high-performance full-stack applications based on the organization goals",
      "Led technical workflows, managed IT operations"
    ]
  },
  {
    id: 3,
    role: "Msc. in Software Engineering",
    company: "HiLCoE School of Computer Science and Technology",
    period: "2024",
    type: "Education",
    description: "Focused on Software Engineering(Requairement, Archetecture & Design), Data Structures, Algorithms, and Distributed Systems.",
    highlights: [
      "Dean's Honor List 2021-2024",      
    ]
  }
];

export const estimatorOptions = {
  types: [
    { id: "landing", name: "Landing Page / Portfolio", baseHours: 25, basePrice: 1200 },
    { id: "webapp", name: "Full Web Application", baseHours: 80, basePrice: 4000 },
    { id: "saas", name: "Complex SaaS Platform", baseHours: 150, basePrice: 7500 }
  ],
  features: [
    { id: "auth", name: "User Auth & Roles", price: 500, hours: 10 },
    { id: "payment", name: "Stripe Payment Gateway", price: 600, hours: 12 },
    { id: "cms", name: "Headless CMS Integration", price: 700, hours: 14 },
    { id: "ai", name: "AI LLM Integration", price: 900, hours: 16 },
    { id: "mobile", name: "PWA / Touch Optimized", price: 400, hours: 8 }
  ]
};

export const INITIAL_MESSAGES = [
  {
    id: 1,
    name: "Sarah Jenkins",
    email: "sarah.j@techcorp.io",
    subject: "Full-Stack Web App Development Inquiry",
    message: "Hi Alex! We loved your portfolio and are looking for a senior React engineer for a 3-month contract starting next month. Are you available for a quick call?",
    timestamp: "2 hours ago",
    read: false
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@designstudio.com",
    subject: "Frontend UI Audit & Redesign",
    message: "Hello Alex, I tested out your project cost estimator. We need a similar interactive tool built for our client site. What is your estimated timeline?",
    timestamp: "Yesterday",
    read: true
  }
];