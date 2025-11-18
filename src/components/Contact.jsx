import { Linkedin, Github, Dribbble } from 'lucide-react'

const accent = '#FF5722'

export default function Contact() {
  return (
    <footer id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-white text-2xl font-semibold">Let’s Connect</h3>
          <p className="mt-3 text-slate-300">Tell me about your project or just say hello. I usually reply within 1–2 business days.</p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Github size={18} /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Dribbble size={18} /> Dribbble
            </a>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" style={{ outlineColor: accent }} placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" style={{ outlineColor: accent }} placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" style={{ outlineColor: accent }} placeholder="How can I help?" />
          </div>
          <button type="button" className="justify-self-start px-5 py-2 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition" style={{ backgroundColor: accent }}>
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-xs text-slate-500">© {new Date().getFullYear()} Rickcrafted Brands — All rights reserved.</div>
    </footer>
  )
}
