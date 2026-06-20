import { motion } from 'framer-motion'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Academics" title="Education" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass rounded-2xl p-8 glow-border text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                  <HiOutlineAcademicCap size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mb-4">{edu.institution}</p>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <div className="text-3xl font-bold gradient-text">{edu.score}</div>
                    <div className="text-xs text-slate-500 mt-1">Score</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-bold text-white">{edu.year}</div>
                    <div className="text-xs text-slate-500 mt-1">Graduated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
