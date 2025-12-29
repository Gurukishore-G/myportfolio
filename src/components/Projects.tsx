import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "AI-Powered Job Automation Portal",
    description: "Scalable job automation platform for 1000+ users leveraging LLMs (GPT/Llama) with mock interview module, real-time tracking dashboard, and 5x efficiency improvement",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com",
    live: "https://example.com",
    color: "#9b6cc0"
  },
  {
    title: "Restaurant Ordering AI Agent",
    description: "Agentic system built with CrewAI framework enabling natural language food ordering with smart menu exploration and structured order generation",
    image: "https://images.unsplash.com/photo-1555521572-daf45c6cec8a?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com",
    live: "https://example.com",
    color: "#ff4d5d"
  },
  {
    title: "Intelligent Shopping Agent",
    description: "LangGraph-based autonomous agent for product search and recommendations with advanced prompt optimization reducing LLM costs by 25-35%",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com",
    live: "https://example.com",
    color: "#9b6cc0"
  }
];

export function Projects() {
  return (
    <section className="py-32 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-[#9b6cc0] tracking-widest uppercase"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6 mt-4">Featured Projects</h2>
          <p className="text-lg text-[#B0B9C3] max-w-2xl mx-auto">
            Showcasing AI and ML solutions that drive real impact
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}