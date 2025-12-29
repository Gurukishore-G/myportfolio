import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0A0F1C] to-[#000000] border-t border-[#1E293B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9b6cc0] via-[#c084c0] to-[#ff4d5d] bg-clip-text text-transparent mb-4">
              Gurukishore G
            </h3>
            <p className="text-[#B0B9C3] text-sm leading-relaxed">
              AI/ML Engineer | Analyst | Product Enthusiast
            </p>
            <p className="text-[#9B9BA8] text-sm mt-2">
              Building intelligent systems with LLMs and autonomous agents
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Skills', path: '/skills' },
                { label: 'Experience', path: '/experience' },
                { label: 'Projects', path: '/projects' },
                { label: 'Certifications', path: '/certifications' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-[#B0B9C3] hover:text-[#9b6cc0] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:g.gurukishore78@outlook.com"
                  className="text-[#B0B9C3] hover:text-[#9b6cc0] transition-colors"
                >
                  g.gurukishore78@outlook.com
                </a>
              </li>
              <li className="text-[#9B9BA8]">Chennai, Tamil Nadu, India</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gurukishore-g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B0B9C3] hover:text-[#9b6cc0] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E293B]/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#9B9BA8] text-sm flex items-center"
            >
              © {currentYear} Gurukishore G
              {/* <Heart className="w-4 h-4 mx-1 text-[#ff4d5d] fill-current" /> and React */}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#9B9BA8] text-sm mt-2 md:mt-0"
            >
              {/* Powered by Three.js, Tailwind CSS & Framer Motion */}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
