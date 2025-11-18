import { useEffect } from 'react'
import Header from './components/Header'
import BackgroundFX from './components/BackgroundFX'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import CoreExpertise from './components/CoreExpertise'
import FeaturedWork from './components/FeaturedWork'
import CTA from './components/CTA'
import Contact from './components/Contact'
import ParallaxDivider from './components/ParallaxDivider'

export default function App() {
  // Smooth scrolling for in-page nav links with fixed header offset
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

  // Glow cursor for cards & images (sets CSS vars on hover targets)
  useEffect(() => {
    const onMove = (e) => {
      const node = e.target.closest('[data-glow]') || e.target.closest('article')
      if (!node) return
      const rect = node.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      node.style.setProperty('--x', `${x}%`)
      node.style.setProperty('--y', `${y}%`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="min-h-screen text-slate-200 selection:bg-orange-500/30 selection:text-white">
      <BackgroundFX />
      <ScrollProgress />
      <Header />
      <main className="pt-16">
        <Hero />
        <ParallaxDivider />
        <CoreExpertise />
        <ParallaxDivider />
        <FeaturedWork />
        <ParallaxDivider />
        <CTA />
        <Contact />
      </main>
    </div>
  )
}
