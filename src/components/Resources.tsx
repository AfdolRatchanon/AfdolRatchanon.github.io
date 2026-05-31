import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Monitor, Server, Network, Cloud,
  Search, ArrowUpRight, FileText, Presentation, Film, Link2, Archive,
} from 'lucide-react'
import { resourceCategories, type ResourceItem, type ResourceCategory } from '../data/data'
import { resources } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

// ── Icon maps ──────────────────────────────────
const categoryIconMap: Record<string, React.ElementType> = {
  Monitor, Server, Network, Cloud,
}
const typeIconMap: Record<ResourceItem['type'], React.ElementType> = {
  PDF: FileText, Slide: Presentation, Video: Film, Link: Link2, Zip: Archive,
}

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
const stagger = { show: { transition: { staggerChildren: 0.06 } } }

// ── Resource Card ─────────────────────────────
function ResourceCard({ item, downloadLabel }: { item: ResourceItem; downloadLabel: string }) {
  const TypeIcon = typeIconMap[item.type]
  return (
    <motion.div
      variants={reveal}
      className="group flex flex-col rounded-md border border-ink-200 bg-white p-5 transition-colors duration-200 hover:border-primary-600 dark:border-ink-800 dark:bg-ink-950/50 dark:hover:border-primary-400"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <TypeIcon size={15} className="shrink-0 text-primary-600 dark:text-primary-400" />
          <h4 className="font-display text-base font-semibold leading-tight text-ink-950 dark:text-ink-50 line-clamp-2">
            {item.title}
          </h4>
        </div>
        <span className="eyebrow shrink-0 text-ink-500 dark:text-ink-400">{item.type}</span>
      </div>

      <p className="mb-4 flex-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
        {item.description}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-3 dark:border-ink-800">
        <span className="flex items-center gap-2 text-[11px] text-ink-500 dark:text-ink-400">
          {item.badge && (
            <span className="rounded-full bg-ink-100 px-2 py-0.5 font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300">
              {item.badge}
            </span>
          )}
          {item.size}
        </span>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          {downloadLabel}
          <ArrowUpRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.div>
  )
}

// ── Main component ────────────────────────────
export default function Resources() {
  const { lang } = useLanguage()
  const [activeId, setActiveId] = useState<string>(resourceCategories[0]?.id ?? '')
  const [query, setQuery] = useState('')

  const activeCategory = resourceCategories.find(c => c.id === activeId) as ResourceCategory

  const filteredItems = useMemo(() => {
    const q = query.toLowerCase()
    if (!q) return activeCategory.items
    return activeCategory.items.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q),
    )
  }, [activeCategory, query])

  const catLabel = (id: string, fallback: string) =>
    resources.categoryLabels[id]?.[lang] ?? fallback

  return (
    <section
      id="resources"
      className="bg-ink-50 py-16 text-ink-950 dark:bg-ink-950 dark:text-ink-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-12 max-w-2xl"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center gap-4 text-ink-500 dark:text-ink-400"
          >
            <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
              {resources.index}
            </span>
            <DrawLine className="h-px w-10 bg-ink-300 dark:bg-ink-700" />
            <span className="eyebrow">{resources.eyebrow[lang]}</span>
          </motion.div>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <LineReveal>{resources.title[lang]}</LineReveal>
          </h2>
          <motion.p variants={reveal} className="mt-5 text-ink-600 dark:text-ink-300">
            {resources.intro[lang]}
          </motion.p>
        </motion.div>

        {/* ── Controls: tabs + search ── */}
        <div className="mb-10 flex flex-col gap-5 border-y border-ink-200 py-5 dark:border-ink-800 lg:flex-row lg:items-center lg:justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map(cat => {
              const Icon = categoryIconMap[cat.icon] ?? Monitor
              const isActive = cat.id === activeId
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveId(cat.id); setQuery('') }}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950'
                      : 'border border-ink-200 text-ink-600 hover:border-ink-400 dark:border-ink-700 dark:text-ink-300 dark:hover:border-ink-500'
                  }`}
                >
                  <Icon size={15} />
                  {catLabel(cat.id, cat.label)}
                  <span
                    className={`rounded-full px-1.5 text-[11px] font-bold ${
                      isActive
                        ? 'bg-white/20 dark:bg-ink-950/15'
                        : 'text-ink-500 dark:text-ink-400'
                    }`}
                  >
                    {cat.items.length}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative lg:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 dark:text-ink-400"
            />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={resources.searchPlaceholder[lang]}
              aria-label={resources.searchPlaceholder[lang]}
              className="w-full rounded-full border border-ink-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 transition placeholder:text-ink-500 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/30 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-50 dark:placeholder:text-ink-400 dark:focus:border-primary-400"
            />
          </div>
        </div>

        {/* ── Active category meta ── */}
        <div className="mb-6 flex items-baseline justify-between">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            {activeCategory.description}
          </p>
          <span className="section-index shrink-0 text-xs text-ink-500 dark:text-ink-400">
            {filteredItems.length} {resources.itemsLabel[lang]}
          </span>
        </div>

        {/* ── Grid ── */}
        {filteredItems.length > 0 ? (
          <motion.div
            key={activeId + query}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map(item => (
              <ResourceCard key={item.title} item={item} downloadLabel={resources.download[lang]} />
            ))}
          </motion.div>
        ) : (
          <div className="py-16 text-center text-ink-500 dark:text-ink-400">
            <Search size={36} className="mx-auto mb-3 opacity-40" />
            <p className="font-medium">
              {resources.noResults[lang]} “{query}”
            </p>
            <button
              onClick={() => setQuery('')}
              className="mt-2 cursor-pointer text-sm font-semibold text-primary-600 hover:underline dark:text-primary-400"
            >
              {resources.clearSearch[lang]}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
