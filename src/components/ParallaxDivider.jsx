import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxDivider() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -40])
  const y2 = useTransform(scrollY, [0, 800], [0, -80])

  return (
    <div className="relative h-24 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      <motion.div style={{ y: y2 }} className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}
