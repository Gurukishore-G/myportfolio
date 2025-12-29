import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene } from '../components/Scene';
import { ArrowDown, Code, Layout, Terminal, GraduationCap, Github, Linkedin, Mail, Twitter, Code2, Trophy } from 'lucide-react';

export function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // LinkedIn Posts - Add screenshots of your posts here
  // 1. Take screenshots of your LinkedIn posts
  // 2. Save them in public/linkedin-posts/ folder as post1.png, post2.png, etc.
  // 3. Update the paths below
  const linkedInPosts = [
    {
      screenshot: "linkedin-posts/mckinsey.png", // Path to screenshot
      url: "https://www.linkedin.com/posts/activity-7406913563837198336-4iFP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADruzoIBCkMYNKvq4HSaNn-DNMiDVcweO8A", // LinkedIn post URL
    },
    {
      screenshot: "/linkedin-posts/cgs.png",
      url: "https://www.linkedin.com/posts/activity-7383454018615836672-PadC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADruzoIBCkMYNKvq4HSaNn-DNMiDVcweO8A",
    },
    {
      screenshot: "/linkedin-posts/educo.png",
      url: "https://www.linkedin.com/posts/activity-7378651058509811712-ndca?utm_source=share&utm_medium=member_desktop&rcm=ACoAADruzoIBCkMYNKvq4HSaNn-DNMiDVcweO8A",
    },
  ];

  return (
    <>
      <motion.section
        className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#131B2E]"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 text-left px-4 md:px-16 lg:px-24 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#E2E8F0] via-[#9b6cc0] to-[#ff4d5d] bg-clip-text text-transparent drop-shadow-lg leading-tight"
          >
            Gurukishore G
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#B0B9C3] mb-8 tracking-wide"
          >
            AI/ML Engineer | Analyst | Product Enthusiast
          </motion.p>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#9B9BA8] mb-12 max-w-2xl mx-auto"
          >
            Building intelligent systems with LLMs and autonomous agents. 2+ years crafting AI solutions. Based in Chennai, India.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-start gap-4 mb-12"
          >
            <motion.a
              href="/GurukishoreG_CV.pdf"
              download="Gurukishore_G_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#9b6cc0] to-[#ff4d5d] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9b6cc0]/30"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-start gap-12"
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Code className="w-6 h-6 text-[#9b6cc0] mb-3" />
              <p className="text-xs text-[#9B9BA8] uppercase tracking-wider">LLM & AI</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Layout className="w-6 h-6 text-[#ff4d5d] mb-3" />
              <p className="text-xs text-[#9B9BA8] uppercase tracking-wider">Data Science</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Terminal className="w-6 h-6 text-[#9b6cc0] mb-3" />
              <p className="text-xs text-[#9B9BA8] uppercase tracking-wider">Product Management</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-[#9b6cc0]" />
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <section className="py-24 bg-[#0A0F1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">Education</h2>
            <p className="text-lg text-[#B0B9C3]">Academic journey and foundations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(155, 108, 192, 0.2)' }}
              className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-xl border border-[#1E293B]/50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#9b6cc0]/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#9b6cc0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Bachelor of Engineering - ECE</h3>
                  <p className="text-[#9b6cc0] font-medium mb-1">SSN College of Engineering</p>
                  <p className="text-sm text-[#B0B9C3] mb-2">Chennai, Tamil Nadu, India</p>
                  <span className="inline-block px-3 py-1 bg-[#1E293B]/30 rounded-full text-[#B0B9C3] text-sm">
                    2020 - 2024
                  </span>
                  <p className="text-sm text-[#9B9BA8] mt-4">
                    Electrical, Electronics and Communications Engineering
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(255, 77, 93, 0.2)' }}
              className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-xl border border-[#1E293B]/50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#ff4d5d]/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#ff4d5d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">High School</h3>
                  <p className="text-[#ff4d5d] font-medium mb-1">The PSBB Millennium School</p>
                  <p className="text-sm text-[#B0B9C3] mb-2">Chennai, Tamil Nadu, India</p>
                  <span className="inline-block px-3 py-1 bg-[#1E293B]/30 rounded-full text-[#B0B9C3] text-sm">
                    2012 - 2020
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0F1C] to-[#131B2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">Connect With Me</h2>
            <p className="text-lg text-[#B0B9C3]">Let's collaborate and build something amazing together</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/gurukishore-g', color: '#9b6cc0' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gurukishore-g/', color: '#0077b5' },
              { icon: Twitter, label: 'Twitter', href: 'https://x.com/gurukishoreg77?t=IKFU3xJP9AJQL7ZJ8pHGnw&s=09', color: '#1DA1F2' },
              { icon: Mail, label: 'Email', href: 'mailto:g.gurukishore78@outlook.com', color: '#ff4d5d' },
              { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/Gurukishoreg78/', color: '#FFA116' },
              { icon: Trophy, label: 'HackerRank', href: 'https://www.hackerrank.com/profile/gurukishore20101', color: '#00EA64' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] rounded-xl border border-[#1E293B]/50 hover:border-[#9b6cc0]/50 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 mb-3" style={{ color: social.color }} />
                  <span className="text-[#E2E8F0] font-medium text-sm">{social.label}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured LinkedIn Posts Section */}
      <section className="py-24 bg-[#0A0F1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">Featured</h2>
            {/* <p className="text-lg text-[#B0B9C3]">Recent thoughts and insights on AI/ML and technology</p> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedInPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 60px rgba(155, 108, 192, 0.3)',
                  borderColor: 'rgba(155, 108, 192, 0.5)'
                }}
                className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] rounded-xl border border-[#1E293B]/50 overflow-hidden cursor-pointer transition-all duration-300 block"
              >
                <img
                  src={post.screenshot}
                  alt={`LinkedIn post ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}