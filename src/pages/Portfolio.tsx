import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Android Apps',
    category: 'App Development',
    tech: ['React Native', 'AI Integration', 'Admin Panel'],
    desc: 'Modern Android applications featuring AI capabilities, complete with a robust admin panel and minimal games.',
    link: 'https://osdire.com/supan_desai/offer/i-will-create-ai-modern-android-apps-with-admin-panel-and-minimal-games',
    image: 'https://picsum.photos/seed/appdev/800/600?blur=2'
  },
  {
    title: 'Advanced SEO Audit',
    category: 'Digital Marketing',
    tech: ['SEO Tools', 'Data Analysis', 'Competitor Research'],
    desc: 'Comprehensive SEO audits and competitor analysis reports to dominate search engine rankings.',
    link: 'https://osdire.com/supan_desai/offer/i-will-provide-advanced-seo-audit-and-competitor-analysis-report',
    image: 'https://picsum.photos/seed/seo/800/600?blur=2'
  },
  {
    title: 'Custom AI Chatbots',
    category: 'AI Development',
    tech: ['Generative AI', 'Prompt Engineering', 'Automation'],
    desc: 'Intelligent conversational agents designed to automate customer service and lead generation.',
    link: 'https://www.fiverr.com/s/8z32qPE',
    image: 'https://picsum.photos/seed/chatbot/800/600?blur=2'
  },
  {
    title: '3D Web Experiences',
    category: 'Web Development',
    tech: ['React', 'Three.js', 'WebGL'],
    desc: 'Immersive, interactive 3D websites that captivate users and elevate brand identity.',
    link: 'https://supandesaiportfolio.netlify.app/',
    image: 'https://picsum.photos/seed/webgl/800/600?blur=2'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Interactive <span className="text-gradient">Portfolio Lab</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of digital products, AI tools, and immersive web experiences built for the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-panel"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-neon-blue">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 relative z-20 -mt-12">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-gray-500 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-electric-purple transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
