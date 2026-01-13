// Color Scheme
export const COLORS = {
  primary: "#00f0ff", // Cyan/Neon Blue
  secondary: "#ff00ff", // Purple/Pink
  accent: "#00ff00", // Neon Green
  background: {
    dark: "#0a0a0a",
    light: "#1a1a1a",
  },
  text: {
    primary: "#ffffff",
    secondary: "#e0e0e0",
    muted: "#a0a0a0",
  },
};

// Personal Information
export const PERSONAL_INFO = {
  name: "Mizairy Akthar",
  title: "Full Stack Developer",
  email: "mizairyakthar@gmail.com",
  phone: "+971 563531043",
  location: "Dubai, UAE",
  bio: "Passionate developer focused on creating impressive web experiences with modern technologies.",
};

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  portfolio: "https://yourportfolio.com",
};

// Skills
export const SKILLS = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Native", level: 85 },
      { name: "React Hooks", level: 92 },
      { name: "Context API", level: 88 },
      { name: "Responsive Design", level: 93 },
      { name: "UI/UX Design", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Authentication", level: 87 },
      { name: "API Integration", level: 88 },
    ],
  },
  {
    category: "Database & Data",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Data Engineering (Learning)", level: 40 },
      { name: "Big Data (Learning)", level: 35 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 82 },
      { name: "Performance Optimization", level: 88 },
      { name: "System Troubleshooting", level: 85 },
      { name: "Monorepo Architecture", level: 83 },
    ],
  },
];

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "NexCodeNova – Technology Consulting Company Website",
    description: "Developed a modern, responsive company website showcasing technology consulting, software solutions, and digital products with interactive UI, animations, and multi-page routing. Implemented dark/light/system theme management, WhatsApp-integrated contact form for lead generation, and SEO optimization with analytics tracking.",
    image: "/images/nexcodenova.jpg",
    tags: ["React 19", "Vite", "React Router", "CSS Modules", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.nexcodenova.com",
    githubUrl: "https://github.com/mizairyaktharmf/NexCodeNova",
    featured: true,
  },
  {
    id: 2,
    title: "Nexverce – Full-Stack Affiliate & Solution Discovery Platform",
    description: "Built a full-stack platform with client site, admin dashboard, and REST API enabling solution discovery, reviews, and AI-powered content generation. Implemented secure JWT auth, real-time notifications, analytics tracking, task management, and LinkedIn/Telegram auto-posting.",
    image: "/images/nexverce.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary", "OpenAI", "Docker"],
    liveUrl: "https://www.nexverce.com",
    githubUrl: "https://github.com/mizairyaktharmf/nexverce-monorepo.git",
    featured: true,
  },
  {
    id: 3,
    title: "Nexus Data Intelligence – Data Engineering & AI Platform",
    description: "Built a full-stack data intelligence platform using FastAPI, PostgreSQL, Next.js, and React, implementing secure authentication (JWT), role-based access, and REST APIs. Designing data pipelines with ETL/ELT, PostgreSQL modeling, Docker containers. Currently extending with Apache Airflow, Kafka, Spark, and dbt for real-time fraud detection, churn prediction, and business analytics.",
    image: "/images/nexus-data.jpg",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "React", "Docker", "Apache Airflow", "Kafka", "Spark", "dbt"],
    liveUrl: null,
    githubUrl: "https://github.com/mizairyaktharmf/nexus-data-intelligence",
    featured: true,
  },
  {
    id: 4,
    title: "eCommerce Platform for Canadian Business",
    description: "Developed responsive eCommerce platform with product catalog, shopping cart, checkout system, and order management. Integrated payment gateway and real-time inventory tracking through REST APIs connected to backend services.",
    image: "/images/ecommerce.jpg",
    tags: ["React.js", "JavaScript", "CSS3", "MongoDB", "REST APIs", "Payment Integration"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Platform for UK Business",
    description: "Designed and built modern portfolio website showcasing client's work with interactive galleries, contact forms, and CMS integration. Focused on performance optimization and responsive design for optimal user experience across devices.",
    image: "/images/portfolio-uk.jpg",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Galadari Brothers Website Maintenance",
    description: "Maintained and optimized corporate website with front-end fixes, performance improvements, and system troubleshooting. Ensured smooth platform functionality supporting day-to-day business operations.",
    image: "/images/galadari.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Performance Optimization", "Troubleshooting"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "Portfolio Website – Mizairy Akthar",
    description: "Personal portfolio website with cyberpunk theme, showcasing projects, skills, and experience. Built with Next.js 16, Framer Motion animations, glass morphism effects, and responsive design. Features smooth scrolling, contact form with email and WhatsApp integration.",
    image: "/images/portfolio-personal.jpg",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Vercel"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

// Experience
export const EXPERIENCE = [
  {
    id: 1,
    company: "Tech Company",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Leading frontend development and mentoring junior developers.",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    company: "Startup Inc",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Built and maintained multiple web applications from scratch.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    company: "Digital Agency",
    position: "Frontend Developer",
    period: "2018 - 2020",
    description: "Created responsive websites and web applications for clients.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Tech Co",
    content: "Outstanding work! Delivered beyond expectations with excellent attention to detail.",
    avatar: "/images/avatar1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    content: "Professional, skilled, and great communication. Highly recommended!",
    avatar: "/images/avatar2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "CTO at Startup",
    content: "Exceptional developer with deep technical knowledge and creativity.",
    avatar: "/images/avatar3.jpg",
    rating: 5,
  },
];

// Navigation
export const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};
