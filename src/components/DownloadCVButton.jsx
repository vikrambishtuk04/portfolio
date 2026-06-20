import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'
import { downloadCV } from '../utils/downloadCV'

export default function DownloadCVButton({ variant = 'primary', className = '' }) {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    if (loading) return
    setLoading(true)
    try {
      await downloadCV()
    } catch (error) {
      console.error('CV download failed:', error)
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'nav') {
    return (
      <motion.button
        onClick={handleDownload}
        disabled={loading}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer disabled:opacity-60 ${className}`}
      >
        <HiOutlineDownload size={16} />
        {loading ? 'Generating...' : 'Download CV'}
      </motion.button>
    )
  }

  if (variant === 'nav-mobile') {
    return (
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`flex items-center gap-2 px-4 py-3 text-left rounded-lg text-cyan-400 bg-cyan-500/10 font-semibold cursor-pointer disabled:opacity-60 ${className}`}
      >
        <HiOutlineDownload size={18} />
        {loading ? 'Generating PDF...' : 'Download CV'}
      </button>
    )
  }

  if (variant === 'hero') {
    return (
      <motion.button
        onClick={handleDownload}
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-flex items-center gap-2 px-8 py-3 glass text-slate-300 font-semibold rounded-xl hover:text-white hover:border-cyan-500/30 transition-all duration-300 cursor-pointer disabled:opacity-60 ${className}`}
      >
        <HiOutlineDownload size={18} />
        {loading ? 'Generating PDF...' : 'Download CV'}
      </motion.button>
    )
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl cursor-pointer disabled:opacity-60 ${className}`}
    >
      <HiOutlineDownload size={16} />
      {loading ? 'Generating...' : 'Download CV'}
    </button>
  )
}
