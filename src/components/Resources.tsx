import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Monitor, Server, Network, Cloud,
  Search, Download, FileText, Presentation, Film, Link2, Archive,
  ChevronRight,
} from 'lucide-react'
import { resourceCategories, type ResourceItem, type ResourceCategory } from '../data/data'

// ── Icon maps ──────────────────────────────────
const categoryIconMap: Record<string, React.ElementType> = {
  Monitor, Server, Network, Cloud,
}

const typeIconMap: Record<ResourceItem['type'], React.ElementType> = {
  PDF: FileText,
  Slide: Presentation,
  Video: Film,
  Link: Link2,
  Zip: Archive,
}

const colorMap: Record<string, { tab: string; badge: string; icon: string; card: string }> = {
  blue: { tab: 'bg-blue-600 text-white', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300', icon: 'text-blue-500', card: 'border-blue-200 dark:border-blue-800' },
  violet: { tab: 'bg-violet-600 text-white', badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300', icon: 'text-violet-500', card: 'border-violet-200 dark:border-violet-800' },
  emerald: { tab: 'bg-emerald-600 text-white', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300', icon: 'text-emerald-500', card: 'border-emerald-200 dark:border-emerald-800' },
  sky: { tab: 'bg-sky-600 text-white', badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300', icon: 'text-sky-500', card: 'border-sky-200 dark:border-sky-800' },
}

const inactiveTab = 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'

// ── Fade-up variant ───────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
}

// ── Resource Card ─────────────────────────────
function ResourceCard({ item, color }: { item: ResourceItem; color: string }) {
  const TypeIcon = typeIconMap[item.type]
  const colors = colorMap[color] ?? colorMap['blue']

  return (
    <motion.div
      variants={fadeUp}
      className={`group flex flex-col bg-white dark:bg-slate-800/60 border ${colors.card} rounded-xl p-4 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-200`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <TypeIcon size={15} className={`shrink-0 ${colors.icon}`} />
          <h4 className="font-semibold text-slate-800 dark:text-white text-sm leading-tight line-clamp-2">
            {item.title}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {item.badge && (
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
              {item.badge}
            </span>
          )}
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400`}>
            {item.type}
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
        {item.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        {item.size && (
          <span className="text-[11px] text-slate-400 dark:text-slate-500">{item.size}</span>
        )}
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-auto inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.badge} hover:opacity-90 transition-opacity`}
        >
          <Download size={12} />
          Download
        </a>
      </div>
    </motion.div>
  )
}

// ── Main component ────────────────────────────
export default function Resources() {
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

  const CategoryIcon = categoryIconMap[activeCategory.icon] ?? Monitor
  const colors = colorMap[activeCategory.color] ?? colorMap['blue']

  return (
    <section id="resources" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">
            Teaching Materials
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Mockup Education Resources
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Downloadable course slides, PDF handouts, lab files, and reference guides for my students.
            Use the search or category tabs to find what you need quickly.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {resourceCategories.map(cat => {
            const Icon = categoryIconMap[cat.icon] ?? Monitor
            const isActive = cat.id === activeId
            const cColors = colorMap[cat.color] ?? colorMap['blue']
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveId(cat.id); setQuery('') }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive ? cColors.tab : inactiveTab
                  }`}
              >
                <Icon size={15} />
                {cat.label}
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/25' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  {cat.items.length}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-8"
        >
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={`Search in ${activeCategory.label}…`}
            className="w-full sm:w-80 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition"
          />
        </motion.div>

        {/* Category meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className={`flex items-center justify-center w-10 h-10 rounded-xl ${colors.badge}`}>
            <CategoryIcon size={20} />
          </span>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">{activeCategory.label}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{activeCategory.description}</p>
          </div>
          <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 ml-auto" />
          <span className="text-sm text-slate-400 dark:text-slate-500">
            {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* Resource grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            key={activeId + query}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredItems.map(item => (
              <ResourceCard key={item.title} item={item} color={activeCategory.color} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-slate-400 dark:text-slate-500"
          >
            <Search size={40} className="mx-auto mb-3 opacity-40" />
            <p className="font-medium">No materials found for "{query}"</p>
            <button
              onClick={() => setQuery('')}
              className="mt-2 text-sm text-primary-500 hover:underline"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
