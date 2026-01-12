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
export const SKILLS = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "REST APIs", level: 85 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 75 },
    { name: "Postman", level: 80 },
  ],
};

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    description: "A cutting-edge web application with modern features",
    image: "/images/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Full-stack application with real-time capabilities",
    image: "/images/project2.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Innovative solution with 3D graphics and animations",
    image: "/images/project3.jpg",
    tags: ["Three.js", "WebGL", "GSAP"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
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
