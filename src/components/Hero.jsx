import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { personalInfo, stats } from '../data/portfolioData'
import DownloadCVButton from './DownloadCVButton'

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <FloatingOrb className="w-96 h-96 bg-cyan-500/10 top-20 -left-48" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-emerald-500/10 bottom-20 -right-32" delay={2} />
      <FloatingOrb className="w-64 h-64 bg-cyan-400/5 top-1/2 left-1/2 -translate-x-1/2" delay={4} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 h-10"
          >
            <TypeAnimation
              sequence={personalInfo.typingRoles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400 font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg"
          >
            {personalInfo.subtitle} · Building scalable enterprise solutions with passion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 glass text-slate-300 font-semibold rounded-xl hover:text-white hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </button>
            <DownloadCVButton variant="hero" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-16"
          >
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <HiOutlineMail className="text-cyan-400" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <HiOutlinePhone className="text-cyan-400" />
              {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-cyan-400" />
              {personalInfo.location}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-4 glow-border"
              >
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
