import { motion } from 'framer-motion'

const accent = '#FF5722'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Ready to build something impactful?
        </motion.h2>
        <motion.p
          className="mt-3 text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Let’s turn insight and craft into outcomes. I’m open to selected collaborations and consulting.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-flex mt-8 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-transform"
          style={{ backgroundColor: accent }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Start a conversation
        </motion.a>
      </div>
    </section>
  )
}
