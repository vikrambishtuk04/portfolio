import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            Built with <span className="text-cyan-400">React</span> &{' '}
            <span className="text-emerald-400">Framer Motion</span>
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
