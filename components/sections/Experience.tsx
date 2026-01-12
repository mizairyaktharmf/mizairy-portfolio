"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: "Nexcode Nova",
    position: "MERN Stack Engineer (Freelancer)",
    period: "Jan 2025 - Present",
    location: "Dubai, UAE",
    description:
      "Design, develop, and deploy scalable web applications using MongoDB, Express.js, React.js, Next.js, and Node.js. Built monorepo architecture projects with React Native, implemented REST API integrations, authentication, and admin dashboards. Experience with AWS, Docker, Git, CI/CD, performance optimization, and troubleshooting. Contributed to both client and internal platforms, delivering production-ready solutions with clean UI, reusable components, and responsive design.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Next.js",
      "Node.js",
      "React Native",
      "REST APIs",
      "AWS",
      "Docker",
      "Git",
      "CI/CD",
      "TypeScript",
    ],
  },
  {
    id: 2,
    company: "Galadari Brothers",
    position: "Developer",
    period: "Sep 2024 - Present",
    location: "Dubai, UAE",
    description:
      "Joined as Customer Support and progressively transitioned into the IT department by actively solving technical issues and contributing to digital operations. Worked on website maintenance, front-end fixes, system troubleshooting, and performance optimization, while ensuring smooth platform functionality and supporting day-to-day business operations.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "System Troubleshooting",
      "Performance Optimization",
      "Website Maintenance",
    ],
  },
  {
    id: 3,
    company: "AI Communik it solution",
    position: "Junior Software Engineer",
    period: "Jan 2024 - July 2024",
    location: "Dubai, UAE",
    description:
      "Worked as a Front-End Software Engineer responsible for managing the company website and developing client projects, mainly eCommerce and portfolio platforms for businesses in Canada and the UK. Designed and built modern, responsive user interfaces using React.js, JavaScript, and CSS, created reusable components, and integrated dynamic data through APIs connected to backend services and MongoDB. Collaborated with backend and design teams to deliver complete web solutions focused on performance and user experience. Left the company due to lack of ongoing projects and limited development opportunities.",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "MongoDB",
      "REST APIs",
      "Responsive Design",
      "UI/UX",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold neon-text mb-6">
            Work Experience
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--primary)] border-4 border-[var(--background)] pulse-glow hidden md:block z-10" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] glass p-8 rounded-lg border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {/* Company & Position */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-xl neon-text-secondary font-semibold mb-3">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-4 mb-6 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[var(--secondary)] text-[var(--secondary)] rounded-lg font-semibold text-lg hover:bg-[var(--secondary)] hover:text-black transition-all duration-300 neon-border-secondary"
          >
            <Briefcase className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[var(--primary)] opacity-10 rotate-12" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--accent)] opacity-10 rotate-45" />
    </section>
  );
}
