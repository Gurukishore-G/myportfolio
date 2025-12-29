import { motion } from 'framer-motion';
import { Code2, Database, Globe2, Laptop } from 'lucide-react';

export function About() {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: 'AI & LLMs', items: ['LangGraph', 'CrewAI', 'LangChain', 'GPT/Llama', 'Prompt Engineering', 'Multimodal AI'] },
    { icon: <Database className="w-6 h-6" />, name: 'Backend', items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Node.js', 'Docker'] },
    { icon: <Laptop className="w-6 h-6" />, name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'] },
    { icon: <Globe2 className="w-6 h-6" />, name: 'Expertise', items: ['Agent Design', 'Data & BI', 'NLP', 'Problem Solving', 'Leadership', 'System Architecture'] },
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-[#9b6cc0] tracking-widest uppercase"
          >
            Learn About Me
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-8 mt-4">About Me</h1>
          <p className="text-lg text-[#B0B9C3] max-w-3xl mx-auto leading-relaxed">
            I'm an AI/ML Engineer with 1+ years working with LLMs and agentic AI frameworks.
            2+ years building software across AI, automation, and machine learning. 4+ years
            leveraging data & BI for strategic impact. I blend technical depth with creative
            problem-solving to deliver production-grade solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-xl border border-[#1E293B]/50 hover:border-[#9b6cc0]/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className="text-[#9b6cc0] p-3 rounded-lg bg-[#9b6cc0]/10 group-hover:bg-[#9b6cc0]/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-[#F8FAFC]">{skill.name}</h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="text-[#B0B9C3] text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b6cc0] mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}