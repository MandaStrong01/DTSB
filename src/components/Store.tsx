import React from 'react'
import { PlayIcon, ShoppingBagIcon, GiftIcon, HeartIcon } from '@heroicons/react/24/outline'

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Stop The Doxxing - Complete Documentary",
      description: "The full-length documentary that's changing minds worldwide. Includes bonus content, director's commentary, and exclusive survivor interviews.",
      price: "$19.99",
      originalPrice: "$29.99",
      image: "/public/IMG_0988.jpeg",
      type: "Digital Download",
      features: ["HD Quality", "Bonus Content", "Director's Commentary", "Lifetime Access"],
      bestseller: true
    },
    {
      id: 2,
      name: "Survivor Stories Collection",
      description: "Powerful testimonials from cyberbullying survivors around the world. Raw, honest, and inspiring stories of resilience.",
      price: "$14.99",
      originalPrice: "$19.99",
      image: "/public/IMG_0989.webp",
      type: "Video Series",
      features: ["10 Episodes", "Subtitles", "Study Guide", "Discussion Questions"]
    },
    {
      id: 3,
      name: "Educational Package",
      description: "Perfect for schools, organizations, and community groups. Includes screening rights and educational materials.",
      price: "$99.99",
      originalPrice: "$149.99",
      image: "/public/20241202_180430.jpeg",
      type: "Educational License",
      features: ["Public Screening Rights", "Teacher's Guide", "Student Worksheets", "Discussion Materials"]
    },
    {
      id: 4,
      name: "Awareness Merchandise Bundle",
      description: "Spread the message with our awareness merchandise. T-shirts, stickers, and posters to start conversations.",
      price: "$24.99",
      originalPrice: "$34.99",
      image: "/public/IMG_0981.png",
      type: "Physical Products",
      features: ["T-Shirt", "Sticker Pack", "Awareness Poster", "Digital Wallpapers"]
    }
  ]

  return (
    <section id="store" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBagIcon className="w-8 h-8 text-red-600 mr-2" />
            <span className="text-red-600 font-bold text-lg">SUPPORT THE MOVEMENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get The
            <span className="block text-red-600 font-['Playfair_Display']">
              Documentary
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every purchase directly supports our mission to end cyberbullying and helps us create more 
            awareness content. Choose the package that's right for you and join the movement.
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center mb-2">
            <GiftIcon className="w-6 h-6 mr-2" />
            <span className="font-bold">LIMITED TIME OFFER</span>
          </div>
          <p className="text-lg">
            Save 33% on all digital content! Use code <strong className="bg-white/20 px-2 py-1 rounded">STOPBULLYING</strong>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BESTSELLER
                  </span>
                </div>
              )}
              
              <div className="relative h-64">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.type}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-red-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Save {Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <ShoppingBagIcon className="w-5 h-5" />
                    <span>Buy Now</span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-full transition-all duration-300">
                    <PlayIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white rounded-3xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <HeartIcon className="w-8 h-8 text-red-400 mr-2" />
            <span className="text-red-300 font-bold">YOUR IMPACT</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Every Purchase Makes a Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-red-400 mb-2">50%</div>
              <div className="text-gray-300">goes directly to survivor support programs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400 mb-2">30%</div>
              <div className="text-gray-300">funds new awareness content creation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400 mb-2">20%</div>
              <div className="text-gray-300">supports platform maintenance and growth</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When you purchase our content, you're not just getting a documentary—you're joining a movement 
            that's creating real change in the fight against cyberbullying.
          </p>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h4>
            <p className="text-gray-600">
              We're confident our content will make an impact. If you're not completely satisfied, 
              we'll refund your purchase within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Store