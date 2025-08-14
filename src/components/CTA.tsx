import React from 'react'
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Experience
            <span className="block font-['Playfair_Display'] text-accent-200">
              Premium Videos?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join thousands of users who have discovered the ultimate video viewing experience. 
            Start exploring our curated collection today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 text-lg">
              <PlayIcon className="w-6 h-6" />
              <span>Start Watching</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2 text-lg">
              <span>Learn More</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
              <span>No Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA