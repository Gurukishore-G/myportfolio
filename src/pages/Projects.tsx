import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    title: "AI-Powered Job Automation Portal",
    description: "Scalable AI platform for 1000+ job seekers using OpenAI GPT and Llama, with Redis caching and real-time tracking dashboard. Improved job-seeking efficiency by 50%+",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/Patron-react-app",
    live: "#",
    color: "#9b6cc0"
  },
  {
    title: "Agentic AI Product Recommendation System",
    description: "RecomMate is a fully autonomous AI agent that searches the web, filters products, and recommends the best options to buy - built with LangGraph.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/ShopperAgent",
    live: "#",
    color: "#ff4d5d"
  },
  {
    title: "Corporate Trainer Portfolio",
    description: "Designed a responsive portfolio website showcasing testimonials and services for a corporate trainer to build credibility and client engagement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/mangesh-recom",
    live: "#",
    color: "#9b6cc0"
  },
  {
    title: "StockAdvisorAI - GenAI Financial Assistant",
    description: "A GenAI-powered stock advisor that Analyzes technical, fundamental, and sentiment signals. Builds smart portfolios based on risk profile & predicts price movement using ML & sends daily alerts via Telegram.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/StockAdvisorAI",
    live: "#",
    color: "#ff4d5d"
  },
  {
    title: "AI Mock Interviewer",
    description: "Fully featured module with Whisper-based voice input and NLP analysis, enabling real-time simulations that improved user interview readiness by 60%+",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/MockAI",
    live: "#",
    color: "#ff4d5d"
  },
  {
    title: "ML-powered Trade Simulator",
    description: "Built a real-time trade cost simulator using Almgren–Chriss model and regression to estimate slippage, fees, and market impact.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=90",
    github: "#",
    live: "#",
    color: "#9b6cc0"
  },
  {
    title: "Enhanced Cardiovascular Risk Prediction using ML-powered Cryptographic Web Application",
    description: "Developed a secure, user-friendly full-stack application that makes advanced cardiovascular risk prediction accessible to the public. Addressed a critical gap by bridging sophisticated ML capabilities with real-world usability, highlighting a focus on translating complex systems into practical tools.",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/Final-Year-Project",
    live: "#",
    color: "#9b6cc0"
  },
  {
    title: "Intelligent Traffic management system using IoT",
    description: "A smart traffic management system which will be deployed on a Raspberry Pi 4. Image processing is done at the server side and sends alerts on Telegram.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/traffic-management",
    live: "#",
    color: "#9b6cc0"
  },
  {
    title: "LinkedIn Jobs Utility",
    description: "Created a LinkedIn job-data utility to manage and extract saved job details for analytics and application tracking automation.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/Linkedin-Saved-Jobs",
    live: "#",
    color: "#ff4d5d"
  },
  {
    title: "LinkedIn Connections Utility",
    description: "Created a LinkedIn connections utility to manage and send connection requests in bulk along with personalized messages.",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com/Gurukishore-G/Linkedin-Automation",
    live: "#",
    color: "#ff4d5d"
  }
];

export function Projects() {
  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-4">Featured Projects</h1>
          {/* <p className="text-lg text-[#E2E8F0]">Some of my recent work that showcases my skills and passion</p> */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}