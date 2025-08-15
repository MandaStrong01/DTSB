import React from 'react'
import { GlobeAltIcon, ShareIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
  const handleGlobalShare = async () => {
    const shareData = {
      title: 'Stop The Doxxing - Stop The Hate | Transform Humanity Through Education',
      text: 'Join the global movement to end cyberbullying through innovative education and digital empathy. Learn essential social skills for the internet age. #StopTheDoxxing #DigitalEmpathy #CyberbullyingAwareness #HumanityOnline',
      url: window.location.href
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      const shareText = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
      navigator.clipboard.writeText(shareText)
      alert('Message copied! Share this globally to transform humanity online.')
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <GlobeAltIcon className="w-12 h-12 text-white mr-3" />
            <span className="text-2xl font-bold text-white">SHARE GLOBALLY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Humanity
            <span className="block font-['Playfair_Display'] text-yellow-200">
              One Share at a Time
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Every share spreads hope. Every view teaches empathy. Every person who learns 
            these social skills transforms their entire digital community. Together, we're 
            healing humanity online—one heart, one mind, one share at a time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <AcademicCapIcon className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Educate</h3>
              <p className="text-white/80">Share innovative education that teaches digital empathy and social skills</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <HeartIcon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
              <p className="text-white/80">Build bridges of understanding across cultures and communities worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <GlobeAltIcon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Transform</h3>
              <p className="text-white/80">Create ripples of positive change that heal our global digital community</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={handleGlobalShare}
              className="bg-white text-purple-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 text-lg"
            >
              <ShareIcon className="w-6 h-6" />
              <span>Share This Message Globally</span>
            </button>
            <button 
              onClick={() => window.open('https://vimeo.com/ondemand/stoptheDoxxing', '_blank')}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 flex items-center space-x-2 text-lg"
            >
              <AcademicCapIcon className="w-6 h-6" />
              <span>Watch on Vimeo</span>
            </button>
          </div>

          {/* Global Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-white/80 text-sm">People Educated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-white/80 text-sm">Countries Reached</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-sm">Report Better Empathy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-white/80 text-sm">Ripples of Change</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction