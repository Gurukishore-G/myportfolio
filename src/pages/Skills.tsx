import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      category: 'AI / ML',
      color: '#00ff88',
      skills: ['LangChain', 'LangGraph', 'Computer Vision', 'RAG', 'CrewAI', 'OpenAI GPT', 'Llama', 'Whisper', 'NLP', 'Machine Learning', 'Automation', 'Prompt Engineering'],
    },
    {
      category: 'Data',
      color: '#00ff88',
      skills: ['Numpy', 'Pandas', 'Scikit-Learn', 'Data Preparation', 'Analytical Skills', 'Business Intelligence (BI)', 'Microsoft Power BI', 'Exploratory Data Analysis (EDA)', 'Microsoft Excel'],
    },
    {
      category: 'Frontend + Backend',
      color: '#00ff88',
      skills: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'MySQL', 'MongoDB', 'Flask', 'PostgreSQL', 'FastAPI', 'REST APIs'],
    },
    {
      category: 'Soft Skills',
      color: '#00ff88',
      skills: ['Conflict Resolution', 'Critical Thinking', 'Logical Reasoning', 'Strategic Planning', 'Customer Relationship Management', 'Emotional Intelligence'],
    },
    {
      category: 'Programming',
      color: '#00ff88',
      skills: ['Python', 'C','C++', 'Data Structures','Cryptography', 'Object-Oriented Programming (OOP)', 'Database Management System (DBMS)', 'Software Development Life Cycle (SDLC)'],
    },
    {
      category: 'Tools',
      color: '#00ff88',
      skills: ['Git', 'Linux','Docker', 'Redis', 'PyQt', 'Postman', 'Confluence', 'Jira'],
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-4">
            Skills & <span className="text-[#00ff88]">Technologies</span>
          </h1>
          {/* <p className="text-lg text-[#B0B9C3] max-w-3xl mx-auto">
            A blend of engineering depth, practical problem-solving, and product-focused development.
          </p> */}
        </motion.div>

        {/* Categorized Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-2xl border border-[#1E293B]/50 relative overflow-hidden"
            >
              {/* Green accent line */}
              <div
                className="absolute top-0 right-0 w-32 h-1 rounded-full"
                style={{ backgroundColor: category.color }}
              ></div>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">{category.category}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                    className="px-4 py-2 bg-[#1E293B]/50 hover:bg-[#1E293B] text-[#E2E8F0] rounded-full text-sm font-medium transition-all duration-300 border border-[#1E293B] hover:border-[#00ff88]/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
