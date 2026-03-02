import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Code2, Heart, ArrowUp, MapPin } from 'lucide-react'
import { personalInfo, contactLinks, navLinks } from '../data/data'

// ── Icon map ──────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  Mail, Github, Linkedin,
}

// ── Main component ────────────────────────────
export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-slate-300">

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-600 text-white">
                <Code2 size={17} />
              </span>
              <span className="font-bold text-white text-lg">
                {personalInfo.nameEn.split(' ')[0]}
                <span className="text-primary-400">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              IT Instructor at {personalInfo.institution} ({personalInfo.institutionShort}).
              Passionate about Web Development, Cloud, and Network Infrastructure.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin size={11} className="text-primary-500 inline" />
              {personalInfo.location}
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 mb-6">
              {contactLinks.map(link => {
                const Icon = iconMap[link.icon] ?? Mail
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-primary-400 transition-colors group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-primary-900/60 transition-colors">
                      <Icon size={15} />
                    </span>
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Social icon row */}
            <div className="flex gap-2">
              {contactLinks.map(link => {
                const Icon = iconMap[link.icon] ?? Mail
                return (
                  <a
                    key={link.label + '-icon'}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 flex items-center gap-1 flex-wrap justify-center">
            © {year} {personalInfo.nameEn} · Built with
            <Heart size={11} className="text-rose-500 inline mx-0.5" />
            using React, Tailwind CSS &amp; Framer Motion
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary-400 transition-colors"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

