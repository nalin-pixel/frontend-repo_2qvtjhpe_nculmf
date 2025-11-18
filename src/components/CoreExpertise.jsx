import { PenTool, Layout, Code, Figma, Paintbrush } from 'lucide-react'

const accent = '#FF5722'

const skills = [
  {
    title: 'UX/UI Design',
    icon: Layout,
    desc: 'Human-centered flows, wireframes, and polished interfaces that feel effortless.',
    tools: ['Figma', 'User Research', 'Prototyping']
  },
  {
    title: 'Graphic & Branding Design',
    icon: PenTool,
    desc: 'Identity systems, brand guidelines, and high-impact marketing visuals.',
    tools: ['Photoshop', 'Illustrator', 'Brand Strategy']
  },
  {
    title: 'Front-End Development',
    icon: Code,
    desc: 'Modern, accessible, and performant web experiences using React & Tailwind.',
    tools: ['React', 'Tailwind', 'Vite']
  }
]

export default function CoreExpertise() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[42rem] blur-3xl rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(255,87,34,0.15), transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Expertise</h2>
          <p className="mt-3 text-slate-300">A focused blend of strategy, design craft, and front-end engineering.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, desc, tools }) => (
            <div key={title} className="group rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255,87,34,0.1)', color: accent }}>
                <Icon size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-white/10 text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
