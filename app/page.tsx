import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <div id="projects" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl neon-text">Projects Section - Coming Soon</h2>
      </div>

      <Experience />
      <div id="testimonials" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl neon-text">Testimonials Section - Coming Soon</h2>
      </div>
      <div id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl neon-text">Contact Section - Coming Soon</h2>
      </div>
    </main>
  );
}
