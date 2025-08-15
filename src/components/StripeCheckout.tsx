import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CreditCardIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/outline'

// Initialize Stripe (you'll need to add your publishable key)
const stripePromise = loadStripe('pk_test_your_stripe_publishable_key_here')

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  features: string[]
}

const StripeCheckout = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const products: Product[] = [
    {
      id: 'documentary-full',
      name: 'Stop The Doxxing - Complete Documentary',
      price: 1999, // $19.99 in cents
      description: 'The full-length documentary exposing cyberbullying and doxxing worldwide',
      image: '/MOVIE JULY 26 _Lip-synced_precision.mp4',
      features: [
        'Full HD Documentary (45+ minutes)',
        'Bonus survivor interviews',
        'Director\'s commentary',
        'Educational materials',
        'Lifetime access',
        'Download rights'
      ]
    },
    {
      id: 'survivor-stories',
      name: 'Survivor Stories Collection',
      price: 1499, // $14.99 in cents
      description: 'Powerful testimonials from cyberbullying survivors worldwide',
      image: '/public/IMG_0989.webp',
      features: [
        '10 survivor testimonials',
        'International perspectives',
        'Hope and healing stories',
        'Study guide included',
        'Streaming access'
      ]
    },
    {
      id: 'educational-package',
      name: 'Educational Institution Package',
      price: 9999, // $99.99 in cents
      description: 'Complete package for schools and organizations',
      image: '/public/20241202_180430.jpeg',
      features: [
        'Public screening rights',
        'Teacher\'s guide',
        'Student worksheets',
        'Discussion materials',
        'Presentation slides',
        '1-year license'
      ]
    },
    {
      id: 'global-impact',
      name: 'Global Impact Bundle',
      price: 2999, // $29.99 in cents
      description: 'Everything you need to spread awareness globally',
      image: '/public/IMG_0981.png',
      features: [
        'Complete documentary',
        'Survivor stories',
        'Social media toolkit',
        'Awareness materials',
        'Global statistics report',
        'Action guide'
      ]
    }
  ]

  const handlePurchase = async (product: Product) => {
    // Redirect to Vimeo for actual purchase - no emails involved
    const vimeoUrl = 'https://vimeo.com/ondemand/stoptheDoxxing'
    const confirmRedirect = confirm(`You will be redirected to Vimeo to purchase "${product.name}". Continue?`)
    if (confirmRedirect) {
      window.open(vimeoUrl, '_blank')
    }
  }

  return (
    <section id="stripe-store" className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CreditCardIcon className="w-8 h-8 text-red-400 mr-2" />
            <span className="text-red-300 font-bold text-lg">SECURE PAYMENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Support The
            <span className="block text-red-400 font-['Playfair_Display']">
              Global Movement
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every purchase directly funds our mission to end cyberbullying worldwide. 
            Choose your package and join millions fighting digital harassment.
          </p>
        </div>

        {/* Security Banner */}
        <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center mb-2">
            <ShieldCheckIcon className="w-6 h-6 text-green-400 mr-2" />
            <LockClosedIcon className="w-6 h-6 text-green-400 mr-2" />
            <span className="font-bold text-green-300">100% SECURE PAYMENT</span>
          </div>
          <p className="text-green-200">
            Powered by Stripe • SSL Encrypted • Your data is completely safe
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                {product.image.endsWith('.mp4') ? (
                  <video 
                    src={product.image}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-red-600/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${(product.price / 100).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => handlePurchase(product)}
                  disabled={isLoading && selectedProduct?.id === product.id}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  {isLoading && selectedProduct?.id === product.id ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CreditCardIcon className="w-5 h-5" />
                      <span>Buy Now - ${(product.price / 100).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-red-800/30 to-gray-800/30 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Your Purchase Creates Global Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-gray-300">Direct victim support and counseling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">25%</div>
              <div className="text-gray-300">Educational content creation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">15%</div>
              <div className="text-gray-300">Platform maintenance and growth</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every dollar you spend helps us reach more victims, create more awareness content, 
            and build a safer digital world for everyone.
          </p>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-green-300 mb-4">30-Day Money-Back Guarantee</h4>
            <p className="text-green-200">
              If our content doesn't meet your expectations, we'll refund your purchase within 30 days. 
              No questions asked. Your satisfaction and our mission both matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StripeCheckout