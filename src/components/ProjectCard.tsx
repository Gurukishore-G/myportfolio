import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
    color: string;
  };
  index: number;
}

const ProjectSphere = ({ color }: { color: string }) => (
  <Float speed={2} rotationIntensity={2} floatIntensity={1}>
    <Sphere args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.3}
        metalness={0.6}
      />
    </Sphere>
  </Float>
);

export function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 60px rgba(155, 108, 192, 0.3)',
      }}
      className="group bg-[#131B2E] rounded-xl overflow-hidden border border-[#1E293B]/50 hover:border-[#9b6cc0]/50 shadow-lg transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <ProjectSphere color={project.color} />
          </Canvas>
        </div>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        className="p-6 bg-[#131B2E]/95 backdrop-blur-sm"
      >
        <motion.h3
          className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#9b6cc0] transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        <p className="text-[#B0B9C3] mb-5 text-sm leading-relaxed">
          {project.description}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className="flex gap-4 pt-4 border-t border-[#1E293B]/50"
        >
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#B0B9C3] hover:text-[#9b6cc0] transition-colors duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#B0B9C3] hover:text-[#ff4d5d] transition-colors duration-300 text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}