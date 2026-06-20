import { motion } from 'framer-motion'
import { HiOutlineStar, HiOutlineCalendar, HiOutlineBadgeCheck, HiOutlineLightningBolt } from 'react-icons/hi'
import { FaTrophy } from 'react-icons/fa'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { achievements, certifications } from '../data/portfolioData'

const iconMap = {
  trophy: FaTrophy,
  medal: HiOutlineBadgeCheck,
  star: HiOutlineStar,
  event: HiOutlineCalendar,
}

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Recognition" title="Achievements & Awards" />

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] || HiOutlineLightningBolt
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass rounded-2xl p-6 glow-border flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <SectionTitle subtitle="Credentials" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-5 glow-border group"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 group-hover:scale-150 transition-transform" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
