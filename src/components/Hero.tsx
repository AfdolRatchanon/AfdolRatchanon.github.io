import { motion } from 'framer-motion'
import { MapPin, Mail, Github, ChevronDown, BookOpen, User } from 'lucide-react'
import { personalInfo, heroFloatingCards } from '../data/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

// ── Single mosaic photo cell ──────────────────
function MosaicPhoto({
  src,
  alt,
  labelEn,
  labelTh,
  emoji,
  delay,
  className = '',
  imgPosition = 'object-top',
}: {
  src: string
  alt: string
  labelEn: string
  labelTh: string
  emoji: string
  delay: number
  className?: string
  imgPosition?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl group cursor-default ${className}`}
    >
      {/* Photo */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgPosition} transition-transform duration-500 group-hover:scale-105`}
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Label */}
      <div className="absolute bottom-0 inset-x-0 p-3">
        <p className="text-white font-bold text-[11px] sm:text-xs leading-tight">
          {emoji} {labelEn}
        </p>
        <p className="text-white/70 text-[10px] leading-tight mt-0.5">{labelTh}</p>
      </div>
    </motion.div>
  )
}

// ── Main Hero ─────────────────────────────────
export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const leftCard  = heroFloatingCards.find(c => c.side === 'left')   // honor guard
  const rightCard = heroFloatingCards.find(c => c.side === 'right')  // discharge

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-200/40 dark:bg-primary-900/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                IT Instructor · {personalInfo.institutionShort}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-2"
            >
              {personalInfo.nameEn}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-2"
            >
              {personalInfo.nameTh}
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-6"
            >
              {personalInfo.title} · {personalInfo.institution}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Meta */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary-500" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={14} className="text-primary-500" />
                {personalInfo.email}
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo('resources')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-primary-500/25"
              >
                <BookOpen size={16} />
                View Resources
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors"
              >
                <User size={16} />
                About Me
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Mosaic photo grid ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            {/*
             * Grid layout:
             *
             *   ┌─────────────┬──────────┐
             *   │             │ Military │
             *   │  SBAC       │ (Honor   │
             *   │  (main,     │ Guard)   │
             *   │   tall)     ├──────────┤
             *   │             │ Discharge│
             *   └─────────────┴──────────┘
             */}
            <div
              className="grid gap-2 sm:gap-3 w-full max-w-md"
              style={{ gridTemplateColumns: '3fr 2fr', height: '420px' }}
            >
              {/* ── Main: SBAC photo ── */}
              <MosaicPhoto
                src={personalInfo.profileImage}
                alt={`${personalInfo.nameEn} – IT Instructor at SBAC`}
                labelEn="IT Instructor"
                labelTh="@ SBAC"
                emoji="👨‍🏫"
                delay={0.2}
                className="row-span-2"
                imgPosition="object-top"
              />

              {/* ── Top-right: Honor guard ── */}
              {leftCard && (
                <MosaicPhoto
                  src={leftCard.image}
                  alt={leftCard.labelEn}
                  labelEn={leftCard.labelEn}
                  labelTh={leftCard.labelTh}
                  emoji={leftCard.emoji}
                  delay={0.38}
                  imgPosition="object-top"
                />
              )}

              {/* ── Bottom-right: Discharge day ── */}
              {rightCard && (
                <MosaicPhoto
                  src={rightCard.image}
                  alt={rightCard.labelEn}
                  labelEn={rightCard.labelEn}
                  labelTh={rightCard.labelTh}
                  emoji={rightCard.emoji}
                  delay={0.52}
                  imgPosition="object-center"
                />
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('resources')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 hover:text-primary-500 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
