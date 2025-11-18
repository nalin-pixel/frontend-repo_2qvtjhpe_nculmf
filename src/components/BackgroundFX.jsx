import { motion, useScroll, useTransform } from 'framer-motion'

// Sticky background with subtle grid, vignette and parallax orange glow
export default function BackgroundFX() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -120])
  const rotate = useTransform(scrollY, [0, 1200], [0, 8])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      {/* Base vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,rgba(15,23,42,0.2)_55%,rgba(15,23,42,0.85)_100%)]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Parallax orange glow */}
      <motion.div style={{ y, rotate }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vmin] h-[120vmin] rounded-full blur-3xl opacity-60"
        aria-hidden
      >
        <div className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(255,87,34,0.18), rgba(255,87,34,0.12) 35%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* Noise layer (CSS-only trick) */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 2px)`
      }} />
    </div>
  )
}
