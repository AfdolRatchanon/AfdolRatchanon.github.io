import { motion } from 'framer-motion'
import { credibility } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1] as const

export default function Credibility() {
  const { lang } = useLanguage()

  return (
    <section
      aria-label="Credentials"
      className="border-y border-ink-200 bg-white py-14 dark:border-ink-800 dark:bg-ink-900/40 lg:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease }}
          className="eyebrow mb-10 text-ink-500 dark:text-ink-400"
        >
          {credibility.caption[lang]}
        </motion.p>

        {/* Stats grid */}
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {credibility.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="relative pl-5"
            >
              {/* Accent rule */}
              <span className="absolute left-0 top-1 h-[calc(100%-0.25rem)] w-px bg-primary-600/70 dark:bg-primary-400/60" />
              <dt className="font-display text-3xl font-semibold leading-none text-ink-950 dark:text-ink-50 lg:text-4xl">
                {stat.value[lang]}
              </dt>
              <dd className="mt-3 text-sm leading-snug text-ink-500 dark:text-ink-400">
                {stat.label[lang]}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
