import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import AnimatedSection, { SectionTitle } from './AnimatedSection'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const contactItems = [
    {
      icon: HiOutlineMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: HiOutlinePhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: HiOutlineLocationMarker,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ]

  return (
    <AnimatedSection id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 mb-12 text-lg"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center glow-border"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-cyan-400">
                  <item.icon size={28} />
                </div>
                <h3 className="text-sm text-slate-500 mb-2">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-sm font-medium">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <a
              href={`mailto:${personalInfo.email}?subject=Portfolio Contact`}
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <HiOutlineMail size={20} />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
