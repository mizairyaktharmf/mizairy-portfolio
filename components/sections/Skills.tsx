"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  const stats = [
    { value: "30+", label: "Technologies" },
    { value: "3+", label: "Years Experience" },
    { value: "7+", label: "Big Projects" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      {/* Animated Background Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)]/5 rounded-full blur-3xl animate-pulse-delay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold neon-text mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="glass p-8 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/50 transition-all duration-300 text-center">
                <div className="text-5xl font-bold neon-text mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-[var(--primary)]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid - New Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Card */}
              <div className="h-full glass rounded-xl p-6 border border-[var(--primary)]/20 hover:border-[var(--primary)]/50 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                    >
                      {/* Skill Name and Level */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[var(--primary)] text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Modern Progress Bar */}
                      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        >
                          {/* Animated Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass p-8 rounded-xl border border-[var(--secondary)]/20 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Continuously learning and adapting to new technologies.
              <span className="text-[var(--primary)] font-semibold"> Always eager to tackle challenging projects</span> and
              <span className="text-[var(--secondary)] font-semibold"> deliver exceptional results</span>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[var(--primary)] opacity-5 rotate-45" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-[var(--secondary)] opacity-5 -rotate-12" />
    </section>
  );
}
