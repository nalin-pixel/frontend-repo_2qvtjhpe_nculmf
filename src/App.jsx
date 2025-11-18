import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CoreExpertise from './components/CoreExpertise'
import FeaturedWork from './components/FeaturedWork'
import CTA from './components/CTA'
import Contact from './components/Contact'

export default function App() {
  // Smooth scrolling for in-page nav links
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      const y = target.getBoundingClientRect().top + window.pageYOffset - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-orange-500/30 selection:text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <CoreExpertise />
        <FeaturedWork />
        <CTA />
        <Contact />
      </main>
    </div>
  )
}
