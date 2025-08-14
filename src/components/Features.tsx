import React from 'react'
import { 
  PlayIcon, 
  SparklesIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const Features = () => {
  const features = [
    {
      icon: PlayIcon,
      title: "Premium Video Quality",
      description: "Experience videos in stunning HD and 4K quality with crystal-clear audio and professional production values."
    },
    {
      icon: SparklesIcon,
      title: "Curated Content",
      description: "Hand-picked videos that showcase the best in creativity, storytelling, and visual excellence."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Optimized",
      description: "Seamless viewing experience across all devices - desktop, tablet, and mobile with responsive design."
    },
    {
      icon: CloudIcon,
      title: "Cloud Streaming",
      description: "Fast, reliable streaming powered by advanced cloud infrastructure for uninterrupted viewing."
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Platform",
      description: "Your data and viewing experience are protected with enterprise-grade security measures."
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description: "Optimized performance ensures quick loading times and smooth playback without buffering."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">VideoHub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the ultimate video viewing experience with cutting-edge technology 
            and carefully curated content that exceeds expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Video Production
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Every video in our collection meets the highest standards of professional production, 
              ensuring you get content that's not just entertaining, but truly exceptional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4K</div>
                <div className="text-white/80">Ultra HD Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features