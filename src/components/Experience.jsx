import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Career" title="Work Experience" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent md:-translate-x-px" />

          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 ring-4 ring-slate-900"
                />
              </div>

              <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 glow-border"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <HiOutlineBriefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-cyan-400 font-medium">{job.company}</p>
                      <p className="text-sm text-slate-500 mt-1">{job.period}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="text-emerald-400 mt-1">▹</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
