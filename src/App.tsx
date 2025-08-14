import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoShowcase />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App