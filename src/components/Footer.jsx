import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-12 sm:px-12 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
