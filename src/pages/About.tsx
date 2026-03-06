import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            The <span className="text-gradient">Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-300 leading-relaxed"
          >
            <p className="text-lg">
              I am Supan Desai, a multi-disciplinary digital professional bridging the gap between creative design and advanced technology.
            </p>
            <p>
              With expertise spanning Digital Marketing with Generative AI, Web & App Development, and Automation Systems, I build solutions that don't just look good—they perform exceptionally.
            </p>
            <p>
              My tech stack includes React, HTML, Java, C++, Unity, and cutting-edge AI coding tools. I thrive on creating futuristic 3D digital experiences and intelligent chatbots that redefine user interaction.
            </p>
            
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-display font-semibold text-white mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['AI Coding', 'React', 'Unity', 'Automation', 'Prompt Engineering', 'UI/UX', 'Digital Marketing'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon-blue">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Timeline Resume */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-blue via-electric-purple to-transparent" />
            
            <div className="space-y-12 pl-12">
              {[
                { year: 'Present', role: 'AI & Automation Specialist', desc: 'Developing custom AI chatbots and automated workflows for international clients.' },
                { year: '2023', role: 'Full-Stack Developer', desc: 'Building high-performance React applications and Unity games.' },
                { year: '2022', role: 'Digital Marketer', desc: 'Leveraging generative AI for data-driven marketing campaigns.' },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-space-900 border-2 border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                  <span className="text-neon-blue font-mono text-sm mb-1 block">{item.year}</span>
                  <h4 className="text-xl font-display font-bold text-white mb-2">{item.role}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
