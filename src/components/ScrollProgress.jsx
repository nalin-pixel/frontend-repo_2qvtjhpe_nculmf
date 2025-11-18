import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left"
      style={{ scaleX, background: 'linear-gradient(90deg, rgba(255,87,34,0.2), rgba(255,87,34,1))' }}
    />
  )
}
