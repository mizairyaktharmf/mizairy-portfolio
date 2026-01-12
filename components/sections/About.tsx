"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-lg neon-border">
              <div className="w-full h-96 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg flex items-center justify-center">
                {/* Placeholder for profile image or 3D element */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full border-4 border-[var(--primary)] flex items-center justify-center text-6xl font-bold neon-text">
                    {PERSONAL_INFO.name.charAt(0)}
                  </div>
                  <p className="text-xl neon-text-secondary">{PERSONAL_INFO.title}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Hello! I'm{" "}
              <span className="neon-text">{PERSONAL_INFO.name}</span>
            </h3>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                MERN Stack Developer with <span className="text-[var(--primary)] font-semibold">3+ years of experience</span> building scalable, high-performance web applications using React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, REST APIs, React Hooks, and Context API.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Worked at <span className="text-[var(--secondary)] font-semibold">Galadari Company UAE</span> as Developer and currently at <span className="text-[var(--secondary)] font-semibold">NexCodeNova</span> as a MERN Stack Developer, delivering monorepo projects with React Native, Next.js, Node.js, Express.js, MongoDB, AWS, Docker, Git, CI/CD, and DevOps tools.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Strong track record in UI optimization, troubleshooting, and end-to-end full-stack development. Highly passionate about <span className="text-[var(--accent)] font-semibold">Data Engineering, Big Data, AI ethics, and research</span>, currently working on personal data engineering and big-data projects.
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-400 italic mt-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass p-6 rounded-lg border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 hover:scale-105">
                <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-wide mb-2">Location</p>
                <p className="text-white text-lg font-semibold">{PERSONAL_INFO.location}</p>
              </div>
              <div className="glass p-6 rounded-lg border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 hover:scale-105">
                <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-wide mb-2">Email</p>
                <p className="text-white text-sm font-semibold break-all">{PERSONAL_INFO.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-40 h-40 border-2 border-[var(--secondary)] opacity-10 rotate-45" />
      <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-[var(--accent)] opacity-10 rotate-12" />
    </section>
  );
}
