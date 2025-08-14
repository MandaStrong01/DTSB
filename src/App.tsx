import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import Mission from './components/Mission'
import DoxxingStory from './components/DoxxingStory'
import Stats from './components/Stats'
import Store from './components/Store'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoShowcase />
      <Mission />
      <DoxxingStory />
      <Stats />
      <Store />
      <Contact />
      <Footer />
    </div>
  )
}

export default App