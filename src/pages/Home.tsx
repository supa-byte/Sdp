import { motion } from 'motion/react';
import { ArrowRight, Code, Brain, Rocket, Zap } from 'lucide-react';
import { Hero3D } from '../components/Hero3D';
import { SkillGalaxy } from '../components/SkillGalaxy';

export function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-neon-blue font-display font-semibold tracking-widest uppercase mb-4">
              Welcome to the Digital Universe
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
              I am <span className="text-gradient">Supan Desai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Architecting the future through AI, automation, and immersive digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); scrollTo('portfolio'); }}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-electric-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
      </div>

      {/* Skill Galaxy Section */}
      <div className="py-24 relative bg-space-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              The <span className="text-gradient">Skill Galaxy</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A multi-disciplinary approach to digital creation. Explore the interconnected universe of my expertise.
            </p>
          </div>
          
          <SkillGalaxy />
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'AI Development', desc: 'Custom chatbots, generative AI integration, and prompt engineering.' },
              { icon: Zap, title: 'Automation', desc: 'Streamlining workflows with intelligent automation systems.' },
              { icon: Code, title: 'Web & App Dev', desc: 'High-performance React, Unity, and native applications.' },
              { icon: Rocket, title: 'Digital Marketing', desc: 'Data-driven strategies powered by generative AI.' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
