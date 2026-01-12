"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench, Server } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-8 h-8" />,
    skills: [
      { name: "React.js", level: 95, color: "primary" },
      { name: "Next.js", level: 90, color: "primary" },
      { name: "JavaScript (ES6+)", level: 93, color: "primary" },
      { name: "TypeScript", level: 88, color: "primary" },
      { name: "HTML5", level: 95, color: "primary" },
      { name: "CSS3", level: 92, color: "primary" },
      { name: "Tailwind CSS", level: 90, color: "primary" },
      { name: "React Native", level: 85, color: "primary" },
      { name: "React Hooks", level: 92, color: "primary" },
      { name: "Context API", level: 88, color: "primary" },
      { name: "Responsive Design", level: 93, color: "primary" },
      { name: "UI/UX Design", level: 85, color: "primary" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    skills: [
      { name: "Node.js", level: 88, color: "secondary" },
      { name: "Express.js", level: 85, color: "secondary" },
      { name: "REST APIs", level: 90, color: "secondary" },
      { name: "MongoDB", level: 85, color: "secondary" },
      { name: "Authentication", level: 87, color: "secondary" },
      { name: "API Integration", level: 88, color: "secondary" },
    ],
  },
  {
    title: "Database & Data",
    icon: <Database className="w-8 h-8" />,
    skills: [
      { name: "MongoDB", level: 85, color: "accent" },
      { name: "Data Engineering", level: 80, color: "accent" },
      { name: "Big Data", level: 75, color: "accent" },
      { name: "Database Design", level: 82, color: "accent" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-8 h-8" />,
    skills: [
      { name: "Git", level: 90, color: "secondary" },
      { name: "Docker", level: 80, color: "secondary" },
      { name: "AWS", level: 78, color: "secondary" },
      { name: "CI/CD", level: 82, color: "secondary" },
      { name: "Performance Optimization", level: 88, color: "secondary" },
      { name: "System Troubleshooting", level: 85, color: "secondary" },
      { name: "Monorepo Architecture", level: 83, color: "secondary" },
    ],
  },
];

export default function Skills() {
  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "from-[var(--primary)] to-[var(--primary)]";
      case "secondary":
        return "from-[var(--secondary)] to-[var(--secondary)]";
      case "accent":
        return "from-[var(--accent)] to-[var(--accent)]";
      default:
        return "from-[var(--primary)] to-[var(--secondary)]";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-[var(--primary)]";
      case "secondary":
        return "text-[var(--secondary)]";
      case "accent":
        return "text-[var(--accent)]";
      default:
        return "text-[var(--primary)]";
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center pt-40 pb-32 mt-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold neon-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to build scalable,
            high-performance applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass p-6 rounded-lg border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="neon-text">{category.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className={`font-bold ${getTextColor(skill.color)}`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getColorClass(
                          skill.color
                        )} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getColorClass(
                          skill.color
                        )} rounded-full opacity-50 blur-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass p-6 rounded-lg text-center border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold neon-text mb-2">30+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="glass p-6 rounded-lg text-center border border-[var(--secondary)]/30 hover:border-[var(--secondary)] transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold neon-text-secondary mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="glass p-6 rounded-lg text-center border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold neon-text-accent mb-2">7+</div>
            <div className="text-gray-400 text-sm">Big Projects</div>
          </div>
          <div className="glass p-6 rounded-lg text-center border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold neon-text mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border-2 border-[var(--accent)] opacity-10 rotate-45" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-[var(--secondary)] opacity-10 rotate-12" />
    </section>
  );
}
