import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowUpRight, X } from 'lucide-react';

const cases = [
  {
    title: 'AI-Powered E-commerce Automation',
    problem: 'Manual product categorization and customer support taking 40+ hours weekly.',
    strategy: 'Implemented a custom NLP model to auto-tag products and deployed a generative AI chatbot for 24/7 support.',
    tech: ['Python', 'OpenAI API', 'React', 'Node.js'],
    result: 'Reduced manual work by 85% and increased customer satisfaction scores by 40%.',
    image: 'https://picsum.photos/seed/ecommerceai/800/400?blur=2',
    fullContent: 'The client, a mid-sized e-commerce retailer, was struggling to scale their operations. Every new product required manual tagging, categorization, and description writing. Additionally, their customer support team was overwhelmed with repetitive queries about shipping and returns.\n\nWe implemented a two-pronged AI strategy. First, we developed a Python-based microservice utilizing the OpenAI API to automatically analyze product images and vendor descriptions. This service generated SEO-optimized titles, descriptions, and tags, reducing the time to list a new product from 15 minutes to 30 seconds.\n\nSecond, we deployed a custom generative AI chatbot integrated directly into their React storefront. Trained on their specific return policies and product catalog, the bot successfully resolved 70% of customer inquiries without human intervention.'
  },
  {
    title: 'Global SEO Domination for SaaS',
    problem: 'Stagnant organic traffic and poor ranking for high-intent keywords.',
    strategy: 'Conducted advanced technical SEO audits, restructured site architecture, and created AI-assisted, human-edited pillar content.',
    tech: ['Ahrefs', 'Next.js', 'Schema Markup', 'Generative AI'],
    result: 'Achieved #1 ranking for 15 target keywords and grew organic traffic by 300% in 6 months.',
    image: 'https://picsum.photos/seed/saasseo/800/400?blur=2',
    fullContent: 'A B2B SaaS company approached us with a plateau in organic growth. Despite having a great product, they were being outranked by competitors with inferior offerings but stronger SEO profiles.\n\nOur approach began with a deep technical SEO audit, identifying crawl errors, slow page speeds, and missing schema markup. We restructured their Next.js application to ensure optimal Core Web Vitals and implemented dynamic JSON-LD structured data.\n\nFor content, we utilized generative AI to analyze search intent and outline comprehensive pillar pages. These outlines were then fleshed out by subject matter experts, ensuring the content was both highly authoritative and perfectly optimized. Within 6 months, the site secured the #1 spot for 15 highly competitive industry keywords, resulting in a 300% increase in organic traffic and a significant boost in qualified leads.'
  }
];

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  useEffect(() => {
    if (selectedCase) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCase]);

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Dynamic <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world problems solved through innovative technology and strategic thinking.
          </p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl border-l-4 border-l-neon-blue relative overflow-hidden flex flex-col lg:flex-row cursor-pointer group hover:border-l-electric-purple transition-colors"
              onClick={() => setSelectedCase(study)}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-purple/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
                <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-neon-blue transition-colors">{study.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-neon-blue font-mono text-sm uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-electric-purple font-mono text-sm uppercase tracking-wider mb-1">The Result</h4>
                    <p className="text-glowing-cyan font-medium leading-relaxed text-sm">{study.result}</p>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-electric-purple transition-colors w-max">
                  Read Full Case Study <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-space-900 border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto custom-scrollbar relative flex flex-col"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 sm:h-96 shrink-0 relative">
                <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6">
                  <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">{selectedCase.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
                <div className="flex-1 space-y-8">
                  <div>
                    <h4 className="text-neon-blue font-mono text-sm uppercase tracking-wider mb-3">The Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCase.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-electric-purple font-mono text-sm uppercase tracking-wider mb-3">The Strategy</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCase.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-3">Execution Details</h4>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{selectedCase.fullContent}</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/3 space-y-8">
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-white font-display font-semibold mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 border-l-4 border-l-glowing-cyan">
                    <h4 className="text-white font-display font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-glowing-cyan" /> Final Results
                    </h4>
                    <p className="text-glowing-cyan font-medium leading-relaxed">
                      {selectedCase.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
