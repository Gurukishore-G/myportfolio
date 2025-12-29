import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'ed239a84-84fe-468f-b5ce-2e6e77f5732f'); // Replace with your actual access key
    formData.append('subject', 'New Contact Form Submission from Portfolio');
    formData.append('from_name', 'Portfolio Contact Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const contactItems = [
    {
      icon: Calendar,
      label: 'Schedule a Call with Me',
      value: 'Book a 30-minute meeting',
      href: 'https://calendly.com/gurukishore-g7/30min',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'g.gurukishore78@outlook.com',
      href: 'mailto:g.gurukishore78@outlook.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: 'https://maps.app.goo.gl/T4nstdqyzAb4NJTr5',
    },
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
            Get In Touch
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-8 mt-4">Let's Connect</h1>
          <p className="text-lg text-[#B0B9C3] max-w-4xl mx-auto">
            Let's discuss AI/ML projects, agentic AI design, product development, business strategy, finance, money, psychology, sports, fitness, chess and a thousand other things. JUST RING THE BELL!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#F8FAFC] mb-8">Contact Information</h2>
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Schedule a Call' ? '_blank' : undefined}
                  rel={item.label === 'Schedule a Call' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#131B2E]/50 transition-all duration-300 group"
                >
                  <motion.div
                    className="p-3 rounded-lg bg-[#9b6cc0]/10 group-hover:bg-[#9b6cc0]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-[#9b6cc0]" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm text-[#9B9BA8] uppercase tracking-wider">{item.label}</p>
                    <p className="text-[#E2E8F0] font-medium group-hover:text-[#9b6cc0] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#131B2E] to-[#0A0F1C] p-8 rounded-xl border border-[#1E293B]/50"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-[#F8FAFC] mb-3 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0A0F1C] text-[#E2E8F0] border border-[#1E293B] rounded-lg focus:border-[#9b6cc0] focus:ring-2 focus:ring-[#9b6cc0]/20 outline-none transition-all duration-300"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <label htmlFor="email" className="block text-[#F8FAFC] mb-3 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0A0F1C] text-[#E2E8F0] border border-[#1E293B] rounded-lg focus:border-[#9b6cc0] focus:ring-2 focus:ring-[#9b6cc0]/20 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="message" className="block text-[#F8FAFC] mb-3 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#0A0F1C] text-[#E2E8F0] border border-[#1E293B] rounded-lg focus:border-[#9b6cc0] focus:ring-2 focus:ring-[#9b6cc0]/20 outline-none resize-none transition-all duration-300"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#9b6cc0] to-[#ff4d5d] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#9b6cc0]/30"
              >
                Send Message
              </motion.button>

              {formStatus !== 'idle' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center text-sm ${
                    formStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {formStatus === 'success'
                    ? 'Message sent successfully!'
                    : 'There was an error sending your message.'}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}