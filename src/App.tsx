
import Header from './components/Header'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import SurvivorStories from './components/SurvivorStories'
import GlobalCrisis from './components/GlobalCrisis'
import Mission from './components/Mission'
import DoxxingStory from './components/DoxxingStory'
import Stats from './components/Stats'
import StripeCheckout from './components/StripeCheckout'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import SocialMediaKit from './components/SocialMediaKit'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoShowcase />
      <SurvivorStories />
      <GlobalCrisis />
      <Mission />
      <DoxxingStory />
      <Stats />
      <StripeCheckout />
      <CallToAction />
      <SocialMediaKit />
      <Contact />
      <Footer />
    </div>
  )
}

export default App