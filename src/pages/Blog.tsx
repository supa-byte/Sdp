import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Generative AI in Digital Marketing',
    excerpt: 'How LLMs and diffusion models are reshaping content creation, SEO, and personalized customer journeys.',
    content: 'In early 2026, Generative AI has completely transformed the digital marketing landscape. We are no longer just using AI to write generic blog posts; we are deploying autonomous agents that can analyze market trends, generate hyper-personalized ad creatives in real-time, and optimize bidding strategies across multiple platforms simultaneously.\n\nOne of the biggest shifts has been in SEO. With search engines prioritizing AI-generated summaries, the focus has moved from keyword density to topical authority and entity relationships. Brands that leverage AI to build comprehensive knowledge graphs are dominating the search results.\n\nFurthermore, diffusion models have advanced to the point where generating high-fidelity, brand-consistent imagery and video takes seconds. This allows for rapid A/B testing of visual assets at a scale previously unimaginable.',
    date: 'Mar 02, 2026',
    readTime: '5 min read',
    category: 'AI & Marketing',
    image: 'https://picsum.photos/seed/aimarketing/800/400?blur=2'
  },
  {
    title: 'Building High-Performance React Applications',
    excerpt: 'Advanced techniques for optimizing rendering, managing state, and leveraging modern React features.',
    content: 'React has evolved significantly by 2026. With the widespread adoption of the React Compiler and advanced server components, the way we build high-performance applications has fundamentally changed.\n\nIn this article, we explore how to leverage these new paradigms to achieve sub-second load times and buttery-smooth 120fps animations. We dive deep into memory management, avoiding unnecessary re-renders, and utilizing WebGL within React seamlessly using libraries like React Three Fiber.\n\nThe key to performance is no longer just memoization; it is architecture. By pushing heavy computations to the edge and streaming UI components directly to the client, we can create experiences that feel instantaneous.',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/reactdev/800/400?blur=2'
  },
  {
    title: 'Automating Workflows with Custom Scripts',
    excerpt: 'A deep dive into connecting disparate APIs and creating seamless automation pipelines.',
    content: 'Automation is no longer a luxury; it is a necessity for survival in the fast-paced digital economy of 2026. Businesses that rely on manual data entry and repetitive tasks are being rapidly outpaced by those that embrace intelligent automation.\n\nThis guide covers how to build robust automation pipelines using Python, Node.js, and modern integration platforms. We look at real-world examples, such as automatically syncing CRM data with marketing platforms, triggering personalized email sequences based on user behavior, and using AI to categorize and route incoming support tickets.\n\nThe true power of automation lies in its ability to free up human capital for creative and strategic endeavors.',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    category: 'Automation',
    image: 'https://picsum.photos/seed/automation/800/400?blur=2'
  }
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  useEffect(() => {
    if (selectedPost) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Insights & <span className="text-gradient">Thoughts</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep dives into technology, design, and the future of the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="glass-panel rounded-2xl overflow-hidden group hover:border-neon-blue/30 transition-colors flex flex-col cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neon-blue px-2 py-1 bg-neon-blue/10 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-electric-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-neon-blue transition-colors mt-auto group/btn">
                  Read Article <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-space-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar relative flex flex-col"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="h-64 sm:h-80 shrink-0">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neon-blue font-mono mb-6">
                  <span className="px-3 py-1 bg-neon-blue/10 rounded-full">{selectedPost.category}</span>
                  <span className="text-gray-400 flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                  <span className="text-gray-400 flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">{selectedPost.title}</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
                  {selectedPost.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
