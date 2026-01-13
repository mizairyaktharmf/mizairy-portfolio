"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
            A showcase of my recent work, from full-stack applications to data engineering platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-[var(--accent)] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 pulse-glow">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Card */}
              <div className="glass rounded-lg overflow-hidden border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold neon-text opacity-20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[var(--primary)] text-black rounded-lg hover:bg-[var(--primary)]/80 transition-all duration-300"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[var(--secondary)] text-white rounded-lg hover:bg-[var(--secondary)]/80 transition-all duration-300"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium rounded bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium rounded bg-gray-800 text-gray-400">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm">Private Project</span>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[var(--secondary)] hover:text-[var(--secondary)]/80 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Want to see more? Check out my GitHub for all projects
          </p>
          <a
            href="https://github.com/mizairyaktharmf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] rounded-lg font-semibold text-lg hover:bg-[var(--accent)] hover:text-black transition-all duration-300 neon-border pulse-glow"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border-2 border-[var(--secondary)] opacity-10 rotate-45" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-[var(--accent)] opacity-10 rotate-12" />
    </section>
  );
}
