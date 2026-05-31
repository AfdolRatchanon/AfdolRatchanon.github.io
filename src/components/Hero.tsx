import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { personalInfo } from '../data/data'
import { hero } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export default function Hero() {
  const { lang } = useLanguage()

  // Scroll to a section; fall back to a sibling if it doesn't exist yet
  // (the Projects section is added in a later round).
  const scrollTo = (id: string, fallback?: string) => {
    const el = document.getElementById(id) ?? (fallback ? document.getElementById(fallback) : null)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const headlineLines = hero.headline[lang]
  const accent = hero.accentWord[lang]

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-ink-50 dark:bg-ink-950 text-ink-950 dark:text-ink-50"
    >
      {/* Faint editorial grid — restrained, decorative only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px)',
          backgroundSize: '12.5% 100%',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 pt-28 pb-20 lg:grid-cols-12 lg:gap-8">
          {/* ── Left: editorial headline ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Section index + eyebrow */}
            <motion.div
              variants={item}
              className="mb-8 flex items-center gap-4 text-ink-500 dark:text-ink-400"
            >
              <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
                01
              </span>
              <DrawLine className="h-px w-10 bg-ink-300 dark:bg-ink-700" />
              <span className="eyebrow">{hero.eyebrow[lang]}</span>
            </motion.div>

            {/* Display headline — masked line-by-line rise */}
            <h1 className="font-display text-[2.5rem] leading-[1.06] font-semibold sm:text-6xl lg:text-7xl">
              {headlineLines.map((line, i) => (
                <LineReveal
                  key={i}
                  delay={0.1 + i * 0.09}
                  className={line === accent ? 'text-primary-600 dark:text-primary-400' : ''}
                >
                  {line}
                </LineReveal>
              ))}
            </h1>

            {/* Lead paragraph */}
            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
            >
              {hero.lead[lang]}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects', 'resources')}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-600 dark:bg-white dark:text-ink-950 dark:hover:bg-primary-500 dark:hover:text-white"
              >
                {hero.primaryCta[lang]}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition-colors duration-200 hover:border-ink-950 hover:bg-ink-100 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-400 dark:hover:bg-ink-900"
              >
                {hero.secondaryCta[lang]}
              </button>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-2.5 text-sm text-ink-500 dark:text-ink-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.available[lang]}
            </motion.div>
          </motion.div>

          {/* ── Right: portrait, editorial frame ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <figure className="relative mx-auto w-full max-w-sm">
              {/* Offset accent block */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-sm border border-primary-600/40 dark:border-primary-400/30" />
              {/* Photo */}
              <div className="relative overflow-hidden rounded-sm bg-ink-200 dark:bg-ink-800">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.nameEn} — IT Instructor at SBAC`}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
                {/* Name plate */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent p-5">
                  <p className="font-display text-xl font-semibold text-white">
                    {lang === 'th' ? personalInfo.nameTh : personalInfo.nameEn}
                  </p>
                  <p className="mt-0.5 text-xs text-white/70">
                    {lang === 'th' ? personalInfo.nameEn : personalInfo.nameTh}
                  </p>
                </figcaption>
              </div>
            </figure>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center gap-2 text-xs font-medium tracking-wide text-ink-500 transition-colors hover:text-primary-600 dark:text-ink-400 dark:hover:text-primary-400 sm:flex"
      >
        <span className="eyebrow">{lang === 'th' ? 'เลื่อนลง' : 'Scroll'}</span>
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  )
}
