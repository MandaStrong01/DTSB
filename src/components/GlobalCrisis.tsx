import React from 'react'
import { GlobeAltIcon, ExclamationTriangleIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const GlobalCrisis = () => {
  const globalStats = [
    {
      country: "United States",
      percentage: "37%",
      description: "of young people bullied online",
      population: "15.3 million affected"
    },
    {
      country: "United Kingdom", 
      percentage: "42%",
      description: "experience cyberbullying",
      population: "2.8 million victims"
    },
    {
      country: "Australia",
      percentage: "39%",
      description: "report online harassment",
      population: "1.2 million affected"
    },
    {
      country: "Canada",
      percentage: "35%",
      description: "face digital bullying",
      population: "980,000 victims"
    },
    {
      country: "Germany",
      percentage: "33%",
      description: "experience cyber harassment",
      population: "2.1 million affected"
    },
    {
      country: "Japan",
      percentage: "28%",
      description: "report online bullying",
      population: "1.8 million victims"
    }
  ]

  const crisisTypes = [
    {
      icon: "🎯",
      title: "Targeted Harassment",
      description: "Coordinated attacks on individuals through multiple platforms",
      severity: "Critical"
    },
    {
      icon: "📍",
      title: "Doxxing & Location Sharing",
      description: "Publishing private addresses and personal information",
      severity: "Extreme"
    },
    {
      icon: "👥",
      title: "Group Mobbing",
      description: "Large groups targeting single individuals online",
      severity: "Severe"
    },
    {
      icon: "💼",
      title: "Professional Sabotage",
      description: "Attacking careers, businesses, and professional reputation",
      severity: "High"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Targeting",
      description: "Extending harassment to family members and children",
      severity: "Critical"
    },
    {
      icon: "🏫",
      title: "Educational Disruption",
      description: "Preventing access to education through online harassment",
      severity: "Severe"
    }
  ]

  return (
    <section id="global-crisis" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GlobeAltIcon className="w-10 h-10 text-red-400 mr-3" />
            <span className="text-red-300 font-bold text-xl">WORLDWIDE EMERGENCY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Global
            <span className="block text-red-400 font-['Playfair_Display']">
              Cyberbullying Crisis
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cyberbullying and doxxing have become a worldwide epidemic affecting millions across every continent. 
            This isn't just an "internet problem" - it's a human rights crisis demanding immediate global action.
          </p>
        </div>

        {/* Global Statistics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Crisis by the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">{stat.country}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.percentage}</div>
                <div className="text-gray-300 mb-2">{stat.description}</div>
                <div className="text-sm text-red-300">{stat.population}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Types of Digital Violence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crisisTypes.map((type, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="text-4xl mb-4 text-center">{type.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 text-center">{type.title}</h4>
                <p className="text-gray-300 mb-4 text-center">{type.description}</p>
                <div className="text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    type.severity === 'Critical' ? 'bg-red-600 text-white' :
                    type.severity === 'Extreme' ? 'bg-red-800 text-white' :
                    type.severity === 'Severe' ? 'bg-orange-600 text-white' :
                    'bg-yellow-600 text-black'
                  }`}>
                    {type.severity} Risk
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Impact Stories */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-800/30 to-gray-800/30 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">Real Stories from Around the World</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <span className="text-red-300 font-semibold">Sarah, UK</span>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "They found my address and posted it with death threats. I had to move countries. 
                  My children still have nightmares. This destroyed our entire family."
                </blockquote>
              </div>
              <div className="bg-black/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <span className="text-red-300 font-semibold">Michael, Australia</span>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "They called my workplace 200 times a day demanding I be fired. 
                  They sent fake reports to police. I lost everything because I spoke up online."
                </blockquote>
              </div>
              <div className="bg-black/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <span className="text-red-300 font-semibold">Maria, Brazil</span>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "My teenage daughter attempted suicide after they shared her private photos. 
                  The harassment followed her everywhere - school, home, even to therapy."
                </blockquote>
              </div>
              <div className="bg-black/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <span className="text-red-300 font-semibold">David, Canada</span>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "They created fake profiles of me on dating sites with my real address. 
                  Strangers showed up at my door. I haven't felt safe in my own home for years."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* The Urgent Need */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-white mr-2" />
              <span className="text-white font-bold text-xl">URGENT ACTION NEEDED</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This Crisis Demands Global Response
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">1 BILLION+</div>
                <div className="text-red-100 text-sm">People affected worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-red-100 text-sm">Constant harassment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">195</div>
                <div className="text-red-100 text-sm">Countries affected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">NOW</div>
                <div className="text-red-100 text-sm">Time to act</div>
              </div>
            </div>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Every day we wait, more lives are destroyed. Every hour of inaction means more victims. 
              The time for half-measures and empty promises is over. We need global action NOW.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Join The Global Movement
              </button>
              <button className="bg-red-800 text-white font-bold py-4 px-8 rounded-full hover:bg-red-900 transition-all duration-300 border-2 border-white/20">
                Share This Crisis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalCrisis