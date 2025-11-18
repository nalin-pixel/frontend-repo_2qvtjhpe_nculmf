import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const accent = '#FF5722'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accent }}></div>
            <span className="text-white font-semibold tracking-wide group-hover:opacity-90 transition">Rickcrafted Brands</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition"
              style={{ backgroundColor: accent }}
            >
              Get In Touch
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center px-3 py-2 rounded-lg text-white font-medium"
                style={{ backgroundColor: accent }}
                onClick={() => setOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
