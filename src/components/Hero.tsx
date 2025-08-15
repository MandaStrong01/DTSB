import React from 'react'
import { PlayIcon, ExclamationTriangleIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('/public/20241202_180430.jpeg')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-400 mr-2" />
            <span className="text-red-300 font-medium text-lg">URGENT: Global Crisis</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovate. Educate.
            <span className="block text-red-400 font-['Playfair_Display']">
              Transform Humanity.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Through innovative education and human connection, we're transforming how the world 
            understands digital empathy. This powerful documentary teaches essential social skills 
            and spreads hope internationally—because every human deserves dignity online.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => {
                const videosSection = document.getElementById('videos')
                if (videosSection) {
                  videosSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 text-lg"
            >
              <PlayIcon className="w-6 h-6" />
              <span>Watch Documentary</span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 flex items-center space-x-2 text-lg">
              <GlobeAltIcon className="w-6 h-6" />
              <span>Share Globally</span>
            </button>
          </div>

          {/* Video preview */}
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="video-container group cursor-pointer" onClick={() => {
              const videosSection = document.getElementById('videos')
              if (videosSection) {
                videosSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src="/public/IMG_0988.jpeg" 
                alt="Stop The Doxxing Documentary Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <PlayIcon className="w-12 h-12 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-white text-xl font-bold mb-2">MOVIE JULY 26</h3>
                <p className="text-white/80 text-sm">Lip-synced Precision - A Story of Digital Harassment</p>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  DOCUMENTARY
                </span>
              </div>
            </div>
            <p className="text-white/60 mt-4 text-sm">
              Click to watch the powerful story that's changing minds worldwide
            </p>
          </div>

          {/* Crisis Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">37%</div>
              <div className="text-white/80">of young people bullied online</div>
            </div>
            <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">15%</div>
              <div className="text-white/80">admit to bullying others online</div>
            </div>
            <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">GLOBAL</div>
              <div className="text-white/80">crisis affecting millions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero