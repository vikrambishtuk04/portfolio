import { motion } from 'framer-motion'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { skills } from '../data/portfolioData'

const categoryColors = [
  'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
  'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  'from-purple-500/20 to-purple-500/5 border-purple-500/20',
  'from-orange-500/20 to-orange-500/5 border-orange-500/20',
  'from-pink-500/20 to-pink-500/5 border-pink-500/20',
  'from-yellow-500/20 to-yellow-500/5 border-yellow-500/20',
  'from-teal-500/20 to-teal-500/5 border-teal-500/20',
  'from-violet-500/20 to-violet-500/5 border-violet-500/20',
]

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Expertise" title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${categoryColors[index % categoryColors.length]} glow-border`}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + i * 0.03 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-xs rounded-lg bg-slate-900/60 text-slate-300 border border-slate-700/50 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
