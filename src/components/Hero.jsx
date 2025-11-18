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
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-slate-300 uppercase">Richard Gitau</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Multi-Disciplinary Creative
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Crafting experiences at the intersection of design and code. I bridge UX thinking, striking brand visuals, and performant front-end engineering to deliver work that moves people and brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition" style={{ backgroundColor: accent }}>View Work</a>
            <a href="#contact" className="px-6 py-3 rounded-full font-medium text-white/90 border border-white/20 hover:border-white/40 hover:text-white transition">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
