import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export default function Projects() {
  const { lang } = useLanguage()

  return (
    <section
      id="projects"
      className="border-t border-ink-200 bg-white py-16 text-ink-950 dark:border-ink-800 dark:bg-ink-900/40 dark:text-ink-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={reveal}
              className="mb-6 flex items-center gap-4 text-ink-500 dark:text-ink-400"
            >
              <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
                {projects.index}
              </span>
              <DrawLine className="h-px w-10 bg-ink-300 dark:bg-ink-700" />
              <span className="eyebrow">{projects.eyebrow[lang]}</span>
            </motion.div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              <LineReveal>{projects.title[lang]}</LineReveal>
            </h2>
            <motion.p
              variants={reveal}
              className="mt-5 text-ink-600 dark:text-ink-300"
            >
              {projects.intro[lang]}
            </motion.p>
          </div>
          <motion.span
            variants={reveal}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-ink-300 px-3 py-1.5 text-xs font-medium text-ink-500 dark:border-ink-700 dark:text-ink-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {projects.placeholderNote[lang]}
          </motion.span>
        </motion.div>

        {/* ── Bento grid ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[minmax(190px,1fr)] md:grid-cols-3"
        >
          {projects.items.map((item, i) => {
            const featured = i === 0
            return (
              <motion.article
                key={i}
                variants={reveal}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-md border border-ink-200 bg-ink-50 p-6 transition-colors duration-200 hover:border-primary-600 dark:border-ink-800 dark:bg-ink-950/60 dark:hover:border-primary-400 ${item.span}`}
              >
                {/* Top: category + arrow */}
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-primary-600 dark:text-primary-400">
                    {item.category[lang]}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600 dark:text-ink-600 dark:group-hover:text-primary-400"
                  />
                </div>

                {/* Body: title + desc */}
                <div className="mt-8">
                  <h3
                    className={`font-display font-semibold leading-tight text-ink-950 dark:text-ink-50 ${
                      featured ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}
                  >
                    {item.title[lang]}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-ink-500 dark:text-ink-400 ${
                      featured ? 'text-base max-w-md' : 'text-sm'
                    }`}
                  >
                    {item.desc[lang]}
                  </p>

                  {/* Tags */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <li
                        key={tag}
                        className="rounded-full border border-ink-200 px-2.5 py-0.5 text-[11px] font-medium text-ink-500 dark:border-ink-700 dark:text-ink-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
