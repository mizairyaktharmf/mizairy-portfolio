"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl mb-4 neon-text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name with Glitch Effect */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-20">
            <TypeAnimation
              sequence={[
                "MERN Full Stack Developer",
                2000,
                "Frontend Specialist",
                2000,
                "Data Engineering Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="neon-text-secondary"
              repeat={Infinity}
            />
          </div>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#contact"
              className="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-semibold text-lg hover:bg-[var(--primary)] hover:text-black transition-all duration-300 neon-border pulse-glow text-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-transparent border-2 border-[var(--secondary)] text-[var(--secondary)] rounded-lg font-semibold text-lg hover:bg-[var(--secondary)] hover:text-black transition-all duration-300 neon-border-secondary text-center"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-[var(--primary)] transition-colors duration-300 hover:scale-110 transform"
            >
              <FaGithub />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-[var(--primary)] transition-colors duration-300 hover:scale-110 transform"
            >
              <FaLinkedin />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-[var(--primary)] transition-colors duration-300 hover:scale-110 transform"
            >
              <FaTwitter />
            </a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            onClick={scrollToNext}
            className="text-[var(--accent)] animate-bounce cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            aria-label="Scroll to next section"
          >
            <HiArrowDown className="text-4xl mx-auto" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-[var(--primary)] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[var(--secondary)] opacity-20 animate-pulse" />
    </section>
  );
}
