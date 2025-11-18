import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const accent = '#FF5722'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-widest text-slate-300 uppercase">Richard Gitau</p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            Multi-Disciplinary Creative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-lg text-slate-300"
          >
            Crafting experiences at the intersection of design and code. I bridge UX thinking, striking brand visuals, and performant front-end engineering to deliver work that moves people and brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-transform" style={{ backgroundColor: accent }}>View Work</a>
            <a href="#contact" className="px-6 py-3 rounded-full font-medium text-white/90 border border-white/20 hover:border-white/40 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-transform">Get In Touch</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
