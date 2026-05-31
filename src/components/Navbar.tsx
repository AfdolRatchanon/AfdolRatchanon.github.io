import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { personalInfo } from '../data/data'
import { nav } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

interface NavbarProps {
  isDark: boolean
  onToggle: () => void
}

export default function Navbar({ isDark, onToggle }: NavbarProps) {
  const { lang, toggle: toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    nav.links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/80 dark:bg-ink-950/80 backdrop-blur-md border-b border-ink-200/70 dark:border-ink-800/70'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo / monogram */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex cursor-pointer items-center gap-2.5 text-ink-900 dark:text-ink-50"
        >
          <span className="font-display text-xl font-bold leading-none">
            R<span className="text-primary-600 dark:text-primary-400">.</span>S
          </span>
          <span className="hidden text-xs font-medium tracking-wide text-ink-500 transition-colors group-hover:text-ink-700 dark:text-ink-400 dark:group-hover:text-ink-200 sm:block">
            {personalInfo.nameEn}
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.links.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`relative cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-ink-950 dark:text-white'
                      : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
                  }`}
                >
                  {label[lang]}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary-600 dark:bg-primary-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'เปลี่ยนเป็นภาษาไทย' : 'Switch to English'}
            className="flex h-11 items-center rounded-lg border border-ink-200 px-1 text-xs font-semibold transition-colors hover:bg-ink-100 dark:border-ink-700 dark:hover:bg-ink-800"
          >
            <span className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${lang === 'en' ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950' : 'text-ink-500 dark:text-ink-400'}`}>
              EN
            </span>
            <span className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${lang === 'th' ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950' : 'text-ink-500 dark:text-ink-400'}`}>
              TH
            </span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-800"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-800 md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-ink-200 bg-ink-50/95 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {nav.links.map(({ id, label }) => {
                const isActive = activeSection === id
                return (
                  <li key={id}>
                    <button
                      onClick={() => handleNavClick(id)}
                      className={`w-full cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-ink-100 text-ink-950 dark:bg-ink-800 dark:text-white'
                          : 'text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900'
                      }`}
                    >
                      {label[lang]}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
