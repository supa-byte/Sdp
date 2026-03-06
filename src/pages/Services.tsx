import { motion } from 'motion/react';
import { Bot, Code2, LineChart, Cpu, PenTool, Gamepad2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    desc: 'Custom conversational agents trained on your data to automate support and sales.',
    features: ['NLP Integration', 'Custom Training', 'Multi-platform Deployment']
  },
  {
    icon: Code2,
    title: 'Web & App Development',
    desc: 'High-performance, scalable applications built with React, React Native, and modern stacks.',
    features: ['Responsive Design', 'API Integration', 'Admin Panels']
  },
  {
    icon: LineChart,
    title: 'Digital Marketing & SEO',
    desc: 'Data-driven marketing strategies powered by generative AI to dominate search rankings.',
    features: ['Advanced Audits', 'Competitor Analysis', 'Content Strategy']
  },
  {
    icon: Cpu,
    title: 'Automation Systems',
    desc: 'Intelligent workflows that connect your tools and eliminate repetitive manual tasks.',
    features: ['Zapier/Make Integration', 'Custom Scripts', 'API Bridging']
  },
  {
    icon: PenTool,
    title: 'UI/UX & Graphic Design',
    desc: 'Futuristic, user-centric interfaces that captivate and convert visitors.',
    features: ['Wireframing', 'Prototyping', 'Brand Identity']
  },
  {
    icon: Gamepad2,
    title: '3D & Game Development',
    desc: 'Immersive WebGL experiences and Unity games that push the boundaries of digital interaction.',
    features: ['Three.js', 'Unity3D', 'Interactive Storytelling']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Digital <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions designed for the modern web. From intelligent automation to immersive 3D experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:border-neon-blue/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-space-800 to-space-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-neon-blue transition-colors shadow-lg">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                    <div className="w-1 h-1 rounded-full bg-electric-purple" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
