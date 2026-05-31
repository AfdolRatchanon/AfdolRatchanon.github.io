import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { certifications } from '../data/data'
import { about } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export default function About() {
  const { lang } = useLanguage()
  const cert = certifications[0]

  return (
    <section
      id="about"
      className="bg-ink-50 py-16 text-ink-950 dark:bg-ink-950 dark:text-ink-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-16 max-w-3xl"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center gap-4 text-ink-500 dark:text-ink-400"
          >
            <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
              {about.index}
            </span>
            <DrawLine className="h-px w-10 bg-ink-300 dark:bg-ink-700" />
            <span className="eyebrow">{about.eyebrow[lang]}</span>
          </motion.div>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <LineReveal>{about.title[lang]}</LineReveal>
          </h2>
        </motion.div>

        {/* ── Narrative + photo essay ── */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left: narrative */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="lg:col-span-7"
          >
            {about.paragraphs[lang].map((para, i) => (
              <motion.p
                key={i}
                variants={reveal}
                className={`text-ink-600 dark:text-ink-300 ${i === 0
                  ? 'text-lg leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-primary-600 dark:first-letter:text-primary-400'
                  : 'mt-6 leading-relaxed'
                  }`}
              >
                {para}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              variants={reveal}
              className="my-10 border-l-2 border-primary-600 pl-6 dark:border-primary-400"
            >
              <p className="font-display text-2xl font-medium italic leading-snug text-ink-900 dark:text-ink-100 sm:text-3xl">
                “{about.pullQuote[lang]}”
              </p>
              <cite className="eyebrow mt-4 block not-italic text-ink-500 dark:text-ink-400">
                {about.pullQuoteAttr[lang]}
              </cite>
            </motion.blockquote>

            {/* Credential card */}
            <motion.a
              variants={reveal}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-sm border border-ink-200 bg-white p-5 transition-colors duration-200 hover:border-primary-600 dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-primary-400"
            >
              <BadgeCheck
                size={28}
                className="shrink-0 text-primary-600 dark:text-primary-400"
              />
              <div className="min-w-0 flex-1">
                <p className="eyebrow text-ink-500 dark:text-ink-400">
                  {about.credentialHeading[lang]}
                </p>
                <p className="font-display text-lg font-semibold leading-tight text-ink-950 dark:text-ink-50">
                  {cert.name}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400">
                  {cert.issuer} · {cert.issued}
                  {cert.expires ? ` – ${cert.expires}` : ''}
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
                {about.viewCredential[lang]}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </motion.a>
          </motion.div>

          {/* Right: photo essay — the journey */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="lg:col-span-5"
          >
            <motion.p
              variants={reveal}
              className="eyebrow mb-5 text-ink-500 dark:text-ink-400"
            >
              {about.journeyHeading[lang]}
            </motion.p>
            <div className="flex flex-col gap-4">
              {about.photos.map((photo, i) => (
                <motion.figure
                  key={i}
                  variants={reveal}
                  className="group relative overflow-hidden rounded-sm bg-ink-200 dark:bg-ink-800"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption[lang]}
                    loading="lazy"
                    style={{ objectPosition: photo.pos, aspectRatio: photo.aspect }}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent p-4">
                    <span className="text-sm font-medium text-white">
                      {photo.caption[lang]}
                    </span>
                    <span className="section-index shrink-0 text-xs font-semibold text-white/70">
                      {photo.year}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Facets ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mt-20 border-t border-ink-200 pt-12 dark:border-ink-800"
        >
          <motion.p
            variants={reveal}
            className="eyebrow mb-10 text-ink-500 dark:text-ink-400"
          >
            {about.facetsHeading[lang]}
          </motion.p>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {about.facets.map((facet, i) => (
              <motion.div key={i} variants={reveal}>
                <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink-950 dark:text-ink-50">
                  {facet.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {facet.body[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
