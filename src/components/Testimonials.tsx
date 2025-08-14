import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      content: "The video quality and curation on this platform is absolutely outstanding. Every video feels professionally crafted and engaging.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Film Director",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "As a filmmaker, I appreciate the attention to detail in every video. The platform showcases true artistry and technical excellence.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      content: "This platform has become my go-to source for premium video content. The user experience is seamless and the quality is unmatched.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what professionals and enthusiasts 
            are saying about their experience with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by professionals worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">NETFLIX</div>
            <div className="text-2xl font-bold text-gray-400">YOUTUBE</div>
            <div className="text-2xl font-bold text-gray-400">VIMEO</div>
            <div className="text-2xl font-bold text-gray-400">ADOBE</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials