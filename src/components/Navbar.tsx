import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/95 backdrop-blur-md border-b border-[#1E293B]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-16 lg:px-24 py-3">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-3 py-2.5 border-2 border-[#1E293B]/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => {
                  return isActive
                    ? 'bg-[#2A2A2A] text-white rounded-full'
                    : 'text-[#B0B9C3] rounded-full'
                }}
                style={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              >
                {({ isActive }) => (
                  <motion.div
                    className={`px-5 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[#2A2A2A]' : 'hover:bg-white/5'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      outline: 'none',
                      boxShadow: 'none',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    </motion.nav>
  );
}