import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'AI/ML Engineer',
      company: 'Constient Global Solutions',
      location: 'Greater Chennai Area, Tamil Nadu, India (On-Site)',
      period: 'September 2025 - Present',
      type: 'work',
      description: [
        'Conducted organization-wide technical workshop on LangGraph and autonomous agents',
        'Developed restaurant ordering assistant using Crew AI framework',
        'Built secure three-tier authentication system with LangGraph agents',
        'Optimized core system architecture, reducing workflow failures by 30%',
        'Migrated stateless LLM workflows to stateful execution, reducing hallucination by 25%',
        'Connected PostgreSQL database layer, cutting query time by 30%',
      ],
    },
    {
      title: 'Campus Strategist',
      company: 'Perplexity AI',
      location: 'Chennai, Tamil Nadu, India (Remote)',
      period: 'August 2025 - October 2025',
      type: 'work',
      description: [
        'Led on-campus growth for Perplexity AI & Comet via digital campaigns, Instagram Reels, and live activations.',
        'Hosted AI tech talks and demos, introducing state-of-the-art AI tools to student coders and researchers.',
        'Drove measurable user adoption through referral tracking, analytics-driven outreach, and global partner collaboration.'
      ],
    },    
    {
      title: 'Founder\'s Office - AI & Product',
      company: 'Nhancio',
      location: 'Greater Hyderabad Area, Telangana, India (Remote)',
      period: 'November 2024 - August 2025',
      type: 'work',
      description: [
        'Led development of AI-powered job automation portal for 1000+ job seekers',
        'Built AI mock interview module with Whisper-based voice input',
        'Implemented automation improving job-seeking efficiency by over 50%',
        'Collaborated cross-functionally to deliver customer-centric features by connecting and understanding their pain points',
      ],
    },
    {
      title: 'Multimodal LLM Trainer',
      company: 'Outlier',
      location: 'San Francisco, California, United States (Remote)',
      period: 'August 2024 - July 2025',
      type: 'work',
      description: [
        'Enhanced AI Model Accuracy by 34% through multimodal solutions',
        'Developed 100+ robust prompts to challenge AI capabilities',
        'Designed 70+ intricate image-based queries exposing model limitations',
        'Collaborated on innovative learning datasets for LLM training',
      ],
    },
    // {
    //   title: 'Analyst',
    //   company: 'Turing',
    //   location: 'Palo Alto, California, United States (Remote)',
    //   period: 'September 2024 - July 2025',
    //   type: 'work',
    //   description: [
    //     'Conducted data analysis and provided insights for AI/ML projects',
    //     'Collaborated with cross-functional teams on technical evaluations',
    //   ],
    // },
    {
      title: 'Associate Software Engineering Intern',
      company: 'Bosch Global Software Technologies',
      location: 'Coimbatore, Tamil Nadu, India (On-Site)',
      period: 'February 2024 - June 2024',
      type: 'work',
      description: [
        'Developed dashboard for learning resources accessible via Degreed and Confluence',
        'Automated over 63% of ECU Post Integration process with Python script and Tkinter GUI',
        'Contributed to automotive software integration for Engine Management System',
      ],
    },
    {
      title: 'Summer Intern',
      company: 'Emertxe Information Technologies',
      location: 'Bengaluru, Karnataka, India (Remote)',
      period: 'March 2023 - May 2023',
      type: 'work',
      description: [
        'Designed washing machine control system with IoT integration',
        'Implemented multithread programming and memory optimization',
        'Developed GUIs using PyQt utility classes',
      ],
    },
  ];

  // const education = [
    // {
    //   title: 'Bachelor of Engineering - ECE',
    //   company: 'SSN College of Engineering',
    //   location: 'Chennai, Tamil Nadu, India',
    //   period: '2020 - 2024',
    //   type: 'education',
    //   description: ['Electrical, Electronics and Communications Engineering'],
    // },
    // {
    //   title: 'High School',
    //   company: 'The PSBB Millennium School',
    //   location: 'Chennai, Tamil Nadu, India',
    //   period: '2012 - 2020',
    //   type: 'education',
    //   description: [],
    // },
  // ];

  const allItems = [...experiences];

  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-4">My Experience</h1>
          {/* <p className="text-lg text-[#B0B9C3] max-w-2xl mx-auto">
            A journey through AI/ML engineering, product development, and continuous learning
          </p> */}
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#9b6cc0] via-[#6b4f8c] to-[#9b6cc0] opacity-80"></div>

          {allItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.type === 'education' ? GraduationCap : Briefcase;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-[45%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 20px 60px rgba(155, 108, 192, 0.3)',
                      borderColor: 'rgba(155, 108, 192, 0.5)'
                    }}
                    className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-6 rounded-xl border border-[#1E293B]/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{item.title}</h3>
                    <p className="text-[#9b6cc0] font-medium mb-1">{item.company}</p>
                    {item.location && <p className="text-sm text-[#B0B9C3] mb-2">{item.location}</p>}
                    {item.description.length > 0 && (
                      <ul className={`mt-4 space-y-2 text-sm text-[#9B9BA8]`}>
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#9b6cc0] mt-0.5">•</span>
                            <span className="flex-1">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>

                {/* Timeline Icon - centered on line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-[#9b6cc0]" />
                  </motion.div>
                </div>

                {/* Period - opposite side of content card */}
                {isLeft ? (
                  // Content on left, period on right of icon
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 flex items-center" style={{ marginLeft: '40px' }}>
                    <span className="inline-block px-5 py-2.5 bg-gradient-to-br from-[#2A2A3E] to-[#1E293B] rounded-full text-[#F8FAFC] text-xs font-bold shadow-lg border border-[#9b6cc0]/30 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                ) : (
                  // Content on right, period on left of icon
                  <div className="absolute right-1/2 top-1/2 transform -translate-y-1/2 flex items-center" style={{ marginRight: '40px' }}>
                    <span className="inline-block px-5 py-2.5 bg-gradient-to-br from-[#2A2A3E] to-[#1E293B] rounded-full text-[#F8FAFC] text-xs font-bold shadow-lg border border-[#9b6cc0]/30 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                )}

                {/* Empty space for balance */}
                <div className={`w-[45%]`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
