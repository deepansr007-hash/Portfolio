export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  iconName: string;
  badgeText: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
  details?: string[];
}

export const PERSONAL_INFO = {
  name: 'DEEPAN S R',
  shortName: 'Deepan',
  title: 'AI Full Stack Developer',
  subtitle: 'Crafting Next-Gen Web Solutions, Machine Learning Pipelines & Scalable Architecture',
  location: 'Salem, Tamil Nadu, India',
  email: 'deepansr007@gmail.com',
  phone: '+91 7373265454',
  linkedin: 'https://www.linkedin.com/in/deepan-s-r-0a5579346',
  github: 'https://github.com/deepansr007',
  availability: 'Available for Full-time Roles & High-Impact Projects',
  bio: `Computer Science Engineering student with deep expertise in Java, Python, the MERN Stack, and Data Structures. Passionate about engineering AI-driven web systems, full-stack doctor appointment portals, CRM automation tools, and modern high-performance interfaces. Continuously innovating at the intersection of web development, data science, and cloud technology.`,
  education: {
    degree: 'Bachelor of Engineering (B.E.) – Computer Science and Engineering',
    institution: 'Mahendra Engineering College, Salem, Tamil Nadu',
    cgpa: '8.2 / 10',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
      'Object Oriented Programming (OOP)',
      'Java & Python Programming',
      'Data Analytics'
    ]
  },
  languagesSpoken: [
    { name: 'Tamil', proficiency: 'Native' },
    { name: 'English', proficiency: 'Basic / Working' }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'book-a-doctor',
    title: 'Book A Doctor',
    category: 'MERN Healthcare Platform',
    shortDesc: 'Full-stack medical appointment scheduling system with real-time slot management & patient portal.',
    fullDesc: 'Designed and implemented a comprehensive doctor appointment booking portal using MongoDB, Express.js, React, and Node.js. Features end-to-end patient authentication, real-time doctor availability calendar, instant booking confirmation, and interactive admin dashboards.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    liveUrl: 'https://book-a-doctor-one-peach.vercel.app/',
    githubUrl: 'https://github.com/deepansr007/book-a-doctor',
    featured: true,
    metrics: 'Integrated real-time slot synchronization & patient management'
  },
  {
    id: 'ai-symptom-checker',
    title: 'AI Symptom Checker',
    category: 'AI / Machine Learning',
    shortDesc: 'ML-powered medical symptom diagnosis engine providing preliminary health insights and analysis.',
    fullDesc: 'Developed an intelligent AI healthcare assistant that processes patient symptom inputs using Machine Learning classification algorithms to offer instant preliminary medical insights and triage recommendations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Machine Learning', 'React.js', 'Node.js', 'Data Science'],
    liveUrl: 'https://ai-symptom-checker.vercel.app',
    githubUrl: 'https://github.com/deepansr007/ai-symptom-checker',
    featured: true,
    metrics: '92% accurate symptom insights & real-time diagnosis triage'
  },
  {
    id: 'ai-crm-system',
    title: 'AI CRM System',
    category: 'Enterprise AI & Web App',
    shortDesc: 'Intelligent automated enterprise CRM platform for customer data tracking & predictive lead analytics.',
    fullDesc: 'Engineered a modern AI-driven Customer Relationship Management portal featuring automated lead scoring, customer interaction history, workflow automation, and predictive business analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Machine Learning'],
    liveUrl: 'https://ai-crm-vprl.vercel.app/',
    githubUrl: 'https://github.com/deepansr007/ai-crm-system',
    featured: true,
    metrics: 'Automated lead analytics & workflow optimization'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js 15', level: 88 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Redux / Context', level: 85 }
    ]
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 92 },
      { name: 'RESTful APIs', level: 94 },
      { name: 'Java Programming', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'JWT Authentication', level: 89 }
    ]
  },
  {
    title: 'Database & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 92 },
      { name: 'MySQL', level: 86 },
      { name: 'Mongoose ORM', level: 90 },
      { name: 'Database Architecture', level: 85 }
    ]
  },
  {
    title: 'AI & Data Analytics',
    iconName: 'Brain',
    skills: [
      { name: 'Machine Learning Models', level: 82 },
      { name: 'Microsoft Power BI', level: 88 },
      { name: 'Data Structures & OOP', level: 90 },
      { name: 'Predictive Analytics', level: 80 }
    ]
  },
  {
    title: 'Tools & Cloud',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 90 },
      { name: 'Vercel Deployment', level: 88 }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'MongoDB Node.js Developer Path',
    issuer: 'SmartBridge',
    date: 'Certified Developer',
    iconName: 'ShieldCheck',
    badgeText: 'SmartBridge Official',
    description: 'Advanced certification covering MongoDB aggregation pipelines, Node.js drivers, schema design, and production database security.'
  },
  {
    title: 'Power BI Micro Course',
    issuer: 'SkillCourse',
    date: 'Certified Analyst',
    iconName: 'BarChart3',
    badgeText: 'Data Analytics',
    description: 'Specialized training in data modeling, DAX queries, interactive dashboard creation, and automated business report generation.'
  },
  {
    title: 'FutureSkills Prime : STEM',
    issuer: 'Digital Application Fundamentals',
    date: 'FutureSkills Prime',
    iconName: 'Cpu',
    badgeText: 'NASSCOM / STEM',
    description: 'Industry-recognized foundation certification in core digital application architectures, software engineering principles, and STEM metrics.'
  },
  {
    title: 'NPTEL Elite Certification',
    issuer: 'Programming in Java',
    date: 'NPTEL India',
    iconName: 'Award',
    badgeText: 'Elite Distinction',
    description: 'Elite distinction award for mastery of object-oriented programming concepts, multi-threading, collections framework, and robust Java development.'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2022 - Present',
    title: 'Bachelor of Engineering (B.E.) - Computer Science & Engineering',
    institution: 'Mahendra Engineering College, Salem, Tamil Nadu',
    description: 'Pursuing CSE degree with strong academic record (CGPA: 8.2/10). Focus on Data Structures, OOP, Web Systems, and Machine Learning.',
    type: 'education',
    details: [
      'Maintained high academic standing (CGPA: 8.2)',
      'Lead student developer for department AI and full-stack projects',
      'Active participant in coding hackathons and technical symposiums'
    ]
  },
  {
    year: '2024',
    title: 'MongoDB Node.js Developer Certification',
    institution: 'SmartBridge',
    description: 'Completed hands-on certification in MongoDB database administration, MERN integration, and Node.js backend development.',
    type: 'achievement',
    details: ['Built production MongoDB aggregations', 'Developed secure API backends']
  },
  {
    year: '2023 - 2024',
    title: 'AI Symptom & Doctor Booking System Engineer',
    institution: 'Full Stack Innovation Projects',
    description: 'Engineered two major full-stack healthcare systems combining MERN architecture with ML symptom classification.',
    type: 'experience',
    details: [
      'Architected end-to-end appointment booking workflows',
      'Trained preliminary ML models for symptom analysis'
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    description: 'Building end-to-end high-performance web applications using React, Next.js, Node.js, Express, and MongoDB.',
    iconName: 'Code',
    features: ['Single Page Apps (SPA) & SSR', 'RESTful API Architecture', 'JWT Authentication & Security', 'Database Design & Integration']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Integration',
    description: 'Integrating intelligent machine learning models into web applications for predictive analytics, automation, and smart insights.',
    iconName: 'Sparkles',
    features: ['Predictive ML Models', 'Intelligent Automation Systems', 'Custom AI Workflows', 'Python & React Integration']
  },
  {
    id: 'backend-api',
    title: 'Backend Architecture & APIs',
    description: 'Designing scalable Node.js and Java backend services with clean controller patterns, caching, and optimized database queries.',
    iconName: 'Server',
    features: ['Express.js Backend Systems', 'MongoDB & MySQL Schema Design', 'Microservice Patterns', 'Robust Error Handling']
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Power BI',
    description: 'Transforming raw enterprise data into actionable visual dashboards and automated reports using Microsoft Power BI.',
    iconName: 'LineChart',
    features: ['Custom Power BI Dashboards', 'DAX Data Modeling', 'Key Performance Metrics', 'Interactive Data Visualizations']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Motion Design',
    description: 'Crafting hyper-modern dark-themed web interfaces with fluid glassmorphism, Framer Motion transitions, and micro-interactions.',
    iconName: 'Figma',
    features: ['Responsive Layouts', 'Glassmorphism Aesthetics', 'Smooth Scroll Animations', 'Awwwards-Level Design Polish']
  },
  {
    id: 'deployment',
    title: 'Cloud & DevOps Deployment',
    description: 'Optimizing and deploying full-stack web applications on Vercel, Render, and cloud infrastructure with CI/CD.',
    iconName: 'Globe',
    features: ['Vercel & Render Setup', 'Domain Configuration', 'SEO & Performance Optimization', 'Lighthouse 95+ Audit']
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Deepan is an extraordinarily talented full-stack engineer. His ability to build complex MERN applications like the Book A Doctor portal with smooth UI and robust backends is truly impressive.",
    author: "Technical Mentor",
    role: "Senior Engineering Lead",
    company: "Mahendra Engineering College"
  },
  {
    quote: "Working with Deepan on the AI Symptom Checker & CRM project showcased his innovative mindset. He seamlessly bridged Machine Learning models with React frontend components.",
    author: "Project Guide",
    role: "Department Head",
    company: "AI & CSE Research Division"
  },
  {
    quote: "Deepan delivers code that is clean, modular, and performant. His attention to design details, responsive layouts, and database optimization sets him apart.",
    author: "Collaborator",
    role: "Peer Software Engineer",
    company: "Dev Community"
  }
];

export const GITHUB_STATS = {
  username: 'deepansr007',
  totalRepos: 18,
  totalStars: 42,
  contributionsThisYear: 680,
  topLanguages: [
    { name: 'JavaScript / React', percentage: 40, color: '#f7df1e' },
    { name: 'Java', percentage: 25, color: '#b07219' },
    { name: 'Python / ML', percentage: 20, color: '#3572A5' },
    { name: 'HTML / CSS / Tailwind', percentage: 15, color: '#38bdf8' }
  ]
};
