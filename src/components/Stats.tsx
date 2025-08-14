import React, { useEffect, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      number: "1M+",
      label: "Video Views",
      description: "Across all our premium content"
    },
    {
      number: "50K+",
      label: "Happy Users",
      description: "Worldwide community"
    },
    {
      number: "500+",
      label: "Premium Videos",
      description: "Curated collection"
    },
    {
      number: "99.9%",
      label: "Satisfaction Rate",
      description: "User approval rating"
    }
  ]

  return (
    <section id="stats" className="py-20 bg-white">
      <div id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing community of video enthusiasts who trust us 
            for premium content and exceptional viewing experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in video curation</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Optimized for speed and performance</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Safe</h3>
            <p className="text-gray-600">Your privacy and security are our priority</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats