import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { experience } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

export default function Experience() {
  const { lang } = useLanguage()

  return (
    <section
      id="experience"
      className="bg-ink-50 py-16 text-ink-950 dark:bg-ink-950 dark:text-ink-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-16 max-w-2xl"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center gap-4 text-ink-500 dark:text-ink-400"
          >
            <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
              {experience.index}
            </span>
            <DrawLine className="h-px w-10 bg-ink-300 dark:bg-ink-700" />
            <span className="eyebrow">{experience.eyebrow[lang]}</span>
          </motion.div>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <LineReveal>{experience.title[lang]}</LineReveal>
          </h2>
          <motion.p variants={reveal} className="mt-5 text-ink-600 dark:text-ink-300">
            {experience.intro[lang]}
          </motion.p>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="relative"
        >
          {experience.items.map((item, i) => (
            <motion.li
              key={i}
              variants={reveal}
              className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-ink-200 py-10 dark:border-ink-800 lg:grid-cols-12"
            >
              {/* Left: period + location */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2">
                  <span className="section-index text-sm font-semibold text-ink-950 dark:text-ink-50">
                    {item.period[lang]}
                  </span>
                  {item.current && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                  )}
                </div>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                  <MapPin size={12} />
                  {item.location[lang]}
                </p>
              </div>

              {/* Right: role + body */}
              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-ink-50 sm:text-2xl">
                    {item.role[lang]}
                  </h3>
                  {item.current && (
                    <span className="eyebrow rounded-full bg-primary-600 px-2 py-0.5 text-[10px] text-white dark:bg-primary-500">
                      {experience.currentLabel[lang]}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-medium text-primary-700 dark:text-primary-400">
                  {item.institution[lang]}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description[lang]}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {item.highlights[lang].map((h, hi) => (
                    <li
                      key={hi}
                      className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300"
                    >
                      <ArrowRight
                        size={15}
                        className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-400"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
