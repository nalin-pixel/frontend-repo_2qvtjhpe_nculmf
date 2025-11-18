const accent = '#FF5722'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build something impactful?</h2>
        <p className="mt-3 text-slate-300">Let’s turn insight and craft into outcomes. I’m open to selected collaborations and consulting.</p>
        <a href="#contact" className="inline-flex mt-8 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition" style={{ backgroundColor: accent }}>Start a conversation</a>
      </div>
    </section>
  )
}
