import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiStar } from 'react-icons/hi'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <AnimatedSection id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              expanded={expandedId === project.title}
              onToggle={() => setExpandedId(expandedId === project.title ? null : project.title)}
              featured
            />
          ))}
        </div>

        <SectionTitle subtitle="More Work" title="Other Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              expanded={expandedId === project.title}
              onToggle={() => setExpandedId(expandedId === project.title ? null : project.title)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function ProjectCard({ project, index, expanded, onToggle, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`glass rounded-2xl overflow-hidden glow-border ${featured ? 'lg:col-span-1' : ''}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            {featured && (
              <span className="inline-flex items-center gap-1 text-xs text-yellow-400 mb-2">
                <HiStar /> Featured
              </span>
            )}
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
          <motion.button
            onClick={onToggle}
            animate={{ rotate: expanded ? 180 : 0 }}
            className="p-2 rounded-lg hover:bg-white/5 text-slate-400 cursor-pointer"
          >
            <HiChevronDown size={20} />
          </motion.button>
        </div>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-800 pt-4 mt-2">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <span className="text-emerald-400 mt-0.5">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
