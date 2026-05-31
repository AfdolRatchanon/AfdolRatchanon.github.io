import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, ArrowUpRight, ArrowUp } from 'lucide-react'
import { personalInfo, contactLinks } from '../data/data'
import { footer, nav } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

const iconMap: Record<string, React.ElementType> = {
  Mail, Github, Linkedin, Phone,
}

const ease = [0.22, 1, 0.36, 1] as const

export default function Footer() {
  const { lang } = useLanguage()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  // Email + GitHub + LinkedIn from data, plus phone
  const connectLinks = [
    ...contactLinks,
    { label: 'Phone', icon: 'Phone', href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  ]

  return (
    <footer
      id="contact"
      className="border-t border-ink-800 bg-ink-950 text-ink-300"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4 text-ink-500">
            <DrawLine className="h-px w-10 bg-ink-700" />
            <span className="eyebrow">{footer.eyebrow[lang]}</span>
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {footer.ctaTitle[lang].map((line, i) => (
              <LineReveal key={i} delay={i * 0.09}>{line}</LineReveal>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-ink-400">{footer.ctaLead[lang]}</p>

          {/* Big email link */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group mt-8 inline-flex items-center gap-3 font-display text-xl font-medium text-white transition-colors hover:text-primary-400 sm:text-2xl"
          >
            {personalInfo.email}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 transition-colors group-hover:border-primary-400 group-hover:bg-primary-500/10">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </motion.div>

        {/* ── Columns ── */}
        <div className="grid gap-12 border-t border-ink-800 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-bold text-white">
              R<span className="text-primary-400">.</span>S
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-400">
              {lang === 'th' ? personalInfo.nameTh : personalInfo.nameEn} — {footer.roleLine[lang]}
            </p>
          </div>

          {/* Navigate */}
          <nav className="lg:col-span-3">
            <p className="eyebrow mb-4 text-ink-500">{footer.navHeading[lang]}</p>
            <ul className="flex flex-col gap-2.5">
              {nav.links.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => goTo(id)}
                    className="cursor-pointer text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4 text-ink-500">{footer.connectHeading[lang]}</p>
            <ul className="flex flex-col gap-3">
              {connectLinks.map(link => {
                const Icon = iconMap[link.icon] ?? Mail
                const external = !/^(mailto|tel):/.test(link.href)
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-white"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-800 transition-colors group-hover:border-primary-400 group-hover:text-primary-400">
                        <Icon size={14} />
                      </span>
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {year} {personalInfo.nameEn} · {footer.builtWith[lang]}
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-ink-400 transition-colors hover:text-primary-400"
          >
            <ArrowUp size={14} />
            {footer.backToTop[lang]}
          </button>
        </div>
      </div>
    </footer>
  )
}
