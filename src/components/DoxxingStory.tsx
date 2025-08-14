import React from 'react'
import { ExclamationTriangleIcon, ShieldExclamationIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const DoxxingStory = () => {
  return (
    <section id="doxxing-story" className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ExclamationTriangleIcon className="w-10 h-10 text-red-400 mr-3" />
            <span className="text-red-300 font-bold text-xl">THE DOXXING CRISIS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            When Privacy
            <span className="block text-red-400 font-['Playfair_Display']">
              Becomes Weaponized
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Doxxing—the malicious publication of private information—has become a weapon of choice 
            for cyberbullies worldwide. Here's the devastating reality behind this digital violence.
          </p>
        </div>

        {/* What is Doxxing */}
        <div className="mb-16">
          <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">What is Doxxing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Doxxing is the act of researching and publishing private information about individuals 
                  without their consent. This includes addresses, phone numbers, workplace details, 
                  family information, and more.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Personal addresses and locations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Phone numbers and contact information</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Workplace and school details</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Family member information</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="/public/IMG_0981.png" 
                  alt="Digital Privacy Violation"
                  className="rounded-2xl shadow-2xl border-4 border-red-500/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Impact */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Devastating Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
              <ShieldExclamationIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Physical Safety</h4>
              <p className="text-gray-300">
                Victims face real-world stalking, harassment at home and work, and threats to their physical safety.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
              <UserGroupIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Family Impact</h4>
              <p className="text-gray-300">
                Innocent family members become targets, children are harassed, and entire families live in fear.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
              <ExclamationTriangleIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Psychological Trauma</h4>
              <p className="text-gray-300">
                Long-lasting anxiety, depression, and PTSD from the violation of privacy and ongoing harassment.
              </p>
            </div>
          </div>
        </div>

        {/* Real Stories */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-800/30 to-gray-800/30 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">Real Stories, Real Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 rounded-2xl p-6">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "They posted my address online with a message saying 'she deserves what's coming.' 
                  I had to move three times. My children couldn't go to school for weeks."
                </blockquote>
                <cite className="text-red-300 font-semibold">— Sarah, Doxxing Survivor</cite>
              </div>
              <div className="bg-black/30 rounded-2xl p-6">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "My workplace was flooded with calls demanding I be fired. My family received death threats. 
                  All because I spoke up about something I believed in."
                </blockquote>
                <cite className="text-red-300 font-semibold">— Michael, Harassment Victim</cite>
              </div>
            </div>
          </div>
        </div>

        {/* The Global Scale */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            A Global Epidemic
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-red-900/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">73%</div>
              <div className="text-gray-300 text-sm">of adults have witnessed online harassment</div>
            </div>
            <div className="bg-red-900/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">41%</div>
              <div className="text-gray-300 text-sm">have personally experienced severe harassment</div>
            </div>
            <div className="bg-red-900/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">18%</div>
              <div className="text-gray-300 text-sm">have been doxxed or had private info shared</div>
            </div>
            <div className="bg-red-900/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">EVERY</div>
              <div className="text-gray-300 text-sm">country faces this crisis</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This Must Stop
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Doxxing isn't just "internet drama"—it's a serious crime that destroys lives. 
              We need stronger laws, better enforcement, and a culture that says "enough."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Report Doxxing
              </button>
              <button className="bg-red-800 text-white font-bold py-4 px-8 rounded-full hover:bg-red-900 transition-all duration-300 border-2 border-white/20">
                Support Survivors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoxxingStory