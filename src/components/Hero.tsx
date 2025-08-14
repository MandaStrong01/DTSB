import React from 'react'
import { PlayIcon, SparklesIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <SparklesIcon className="w-8 h-8 text-accent-400 mr-2" />
            <span className="text-accent-300 font-medium text-lg">Premium Video Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Amazing
            <span className="block gradient-text font-['Playfair_Display']">
              Video Content
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium video content like never before. Our curated collection 
            brings you the most engaging and professional videos in stunning quality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="btn-primary flex items-center space-x-2 text-lg">
              <PlayIcon className="w-6 h-6" />
              <span>Watch Now</span>
            </button>
            <button className="btn-secondary text-lg">
              Learn More
            </button>
          </div>

          {/* Video preview placeholder */}
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="video-container group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg" 
                alt="Video Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>
            <p className="text-white/60 mt-4 text-sm">
              Click to replace with your YouTube video URL
            </p>
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