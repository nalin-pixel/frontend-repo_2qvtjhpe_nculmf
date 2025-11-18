const accent = '#FF5722'

const projects = [
  {
    title: 'E-Commerce Flow Optimization',
    tag: 'UX Case Study',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS Branding Identity',
    tag: 'Graphic Design',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Interactive Data Dashboard',
    tag: 'Web Development',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 w-[40vw] h-[40vw] blur-3xl rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(255,87,34,0.12), transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
          <p className="mt-3 text-slate-300">Selected projects across UX, branding, and front‑end development.</p>
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]
                        [&>article:not(:first-child)]:mt-6">
          {projects.map((p) => (
            <article key={p.title} className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-white/5 hover:border-white/10 transition">
              <div className="aspect-[4/3] bg-slate-800">
                <img src={p.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center text-[11px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: accent }}>{p.tag}</span>
                <h3 className="mt-3 text-white font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
