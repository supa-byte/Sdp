import { motion } from 'motion/react';
import { Sparkles, Image as ImageIcon, MessageSquare, Code } from 'lucide-react';

const tools = [
  {
    icon: Sparkles,
    name: 'Prompt Optimizer Pro',
    desc: 'An internal tool that refines raw ideas into highly effective prompts for LLMs, ensuring maximum output quality.',
    status: 'Active'
  },
  {
    icon: ImageIcon,
    name: 'AI Image Generator API',
    desc: 'A custom wrapper around Gemini 3.1 Flash Image Preview for generating high-resolution assets on the fly.',
    status: 'Beta'
  },
  {
    icon: MessageSquare,
    name: 'SupportBot Engine',
    desc: 'A deployable chatbot framework trained on company knowledge bases using RAG architecture.',
    status: 'Active'
  },
  {
    icon: Code,
    name: 'Auto-Scraper AI',
    desc: 'Intelligent web scraping tool that adapts to DOM changes using computer vision and LLM reasoning.',
    status: 'Development'
  }
];

export function AITools() {
  return (
    <section id="ai-tools" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Custom <span className="text-gradient">AI Tools</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proprietary applications and scripts built to accelerate workflows and push the boundaries of generative AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-electric-purple/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-electric-purple/10 rounded-full blur-3xl group-hover:bg-neon-blue/20 transition-colors" />
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                  <tool.icon size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  tool.status === 'Active' ? 'bg-glowing-cyan/10 text-glowing-cyan border-glowing-cyan/20' :
                  tool.status === 'Beta' ? 'bg-electric-purple/10 text-electric-purple border-electric-purple/20' :
                  'bg-gray-500/10 text-gray-400 border-gray-500/20'
                }`}>
                  {tool.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">{tool.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
