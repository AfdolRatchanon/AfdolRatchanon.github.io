import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

// Crafted easings — expo-out for reveals, smooth for the rest
export const EXPO = [0.16, 1, 0.3, 1] as const
export const EASE = [0.22, 1, 0.36, 1] as const

const inViewOpts = { once: true, margin: '-60px' } as const

/**
 * LineReveal — masked rise. The text slides up from behind a clip,
 * so it reads as "set in type", not faded in.
 *
 * Self-contained: driven by its own `useInView` + an explicit object
 * `animate`, so it never inherits (and never collides with) a parent's
 * propagated variant state. That collision is what previously left the
 * masked text stuck below the clip.
 */
export function LineReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, inViewOpts)
  if (reduce) return <span className={`block ${className}`}>{children}</span>

  return (
    <span ref={ref} className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '115%' }}
        animate={inView ? { y: '0%' } : { y: '115%' }}
        transition={{ duration: 0.85, ease: EXPO, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** DrawLine — a hairline rule that draws in from the left. */
export function DrawLine({ className = '', delay = 0.1 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, inViewOpts)
  if (reduce) return <span className={className} />

  return (
    <motion.span
      ref={ref}
      className={`origin-left ${className}`}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.7, ease: EXPO, delay }}
    />
  )
}

// Subtle content rise — for paragraphs, cards, list items.
// Smaller travel + expo ease so it whispers instead of "AOS-fade-up".
export const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EXPO } },
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
