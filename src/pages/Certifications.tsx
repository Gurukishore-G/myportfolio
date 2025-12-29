import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Mckinsey.org Forward Program - Core Skills',
      credential: 'https://www.credly.com/badges/4269b859-dfc1-43d9-847c-7c198d9ed111/public_url', // Add actual credential link here
    },
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      credential: '#', // Add actual credential link here
    },
    {
      title: 'Artificial Intelligence : Search methods for Problem Solving by IITM ',
      credential: '#',
    },
    {
      title: 'Machine Learning with Python by IBM',
      credential: 'https://www.credly.com/badges/eb0afe42-b3f7-4ff0-8b7f-607a93fc4fe0/public_url',
    },
    {
      title: 'Data Analysis with Python by IBM',
      credential: 'https://www.coursera.org/account/accomplishments/certificate/8KFCULNYPYWJ',
    },
    {
      title: 'BCG - Strategy Consulting Job Simulation',
      credential: '#',
    },
    {
      title: 'Tame your Market nerves - Stock Trading Simulation Workshop by Vittae',
      credential: '#',
    },
    {
      title: 'Natural Language Processing by IITK',
      credential: '#',
    },
    {
      title: 'Pragmatic Approach to Cyber Security by NIELET',
      credential: 'https://drive.google.com/file/d/1jYEm2m1HZyV6r93WvYRQeb03d_SePTbm/view',
    },
    {
      title: 'Social Networking security and Mobile security by MeitY',
      credential: '#',
    },
    {
      title: 'Summer School Students Workshop on Mathematics and Science by IMSc',
      credential: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#9b6cc0] to-[#ff4d5d] rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-6">Courses & Certifications</h1>
          {/* <p className="text-lg text-[#B0B9C3] max-w-2xl mx-auto">
            Continuous learning and professional development in technology, finance, and cybersecurity
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 60px rgba(155, 108, 192, 0.3)',
                borderColor: 'rgba(155, 108, 192, 0.5)'
              }}
              className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-2xl border border-[#1E293B]/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#9b6cc0]/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-[#9b6cc0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#E2E8F0] font-semibold leading-relaxed">
                    {cert.title}
                  </h3>
                </div>
              </div>
              <div className="ml-16">
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9b6cc0] hover:text-[#ff4d5d] text-sm font-medium transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-center"
        >
          {/* <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-2xl border border-[#1E293B]/50">
            <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Professional Growth</h2>
            <p className="text-[#B0B9C3] leading-relaxed">
              These certifications represent my commitment to staying current with industry trends and
              continuously expanding my expertise across AI/ML, business strategy, cybersecurity, and quantitative analysis.
            </p>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
