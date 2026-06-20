import { motion } from 'framer-motion'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { personalInfo } from '../data/portfolioData'

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="About Me" title="Professional Summary" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 glow-border">
              <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-4xl font-bold text-white">
                VS
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{personalInfo.name}</h3>
              <p className="text-cyan-400 text-center text-sm font-mono mb-6">{personalInfo.title}</p>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Experience</span>
                  <span className="text-white">5+ Years</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Current Role</span>
                  <span className="text-white">SDE - 1</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Company</span>
                  <span className="text-white">Ginni Systems</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-white">Gurgaon, Haryana</span>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {personalInfo.objective}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['PHP', 'Node.js', 'Vue.js', 'NestJS', 'RAG / LLM', 'React.js', 'MySQL', 'PostgreSQL'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
