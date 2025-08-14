import React from 'react'
import { GlobeAltIcon, ShieldCheckIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline'

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Educational Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              To innovate education about digital empathy, teach essential social skills for the internet age, 
              and share transformative messages of humanity that heal our global digital community.
            </p>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-lg">
              <p className="text-lg text-gray-800 italic">
                "Education is the most powerful weapon we can use to change the world. Through innovative 
                storytelling and human connection, we're teaching the social skills that will transform 
                how humanity interacts in digital spaces—one heart, one mind, one share at a time."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
            <p className="text-gray-600">
              Our educational content reaches across continents, teaching digital empathy and social skills to create a more humane internet for all humanity.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Protection</h3>
            <p className="text-gray-600">
              Through innovative education, we teach people how to protect themselves and others, building stronger, more empathetic digital communities.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Human Connection</h3>
            <p className="text-gray-600">
              We create platforms for authentic human connection, where stories of resilience inspire others and teach valuable social skills for digital interaction.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Community</h3>
            <p className="text-gray-600">
              Building a global learning community where educators, students, families, and advocates share knowledge and social skills for a better digital world.
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Crisis We're Fighting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">1 in 3</div>
                <div className="text-gray-300">young people experience cyberbullying</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">harassment follows victims everywhere</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">GLOBAL</div>
                <div className="text-gray-300">problem requiring worldwide action</div>
              </div>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Doxxing, harassment, and digital violence aren't just "online problems"—they destroy real lives, 
              break apart families, and silence voices that need to be heard. This ends now.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How We're Making Change
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-6xl mb-4">🎬</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Powerful Storytelling</h4>
              <p className="text-gray-600">
                Through compelling documentaries and survivor testimonies, we make the invisible visible and give voice to the voiceless.
              </p>
            </div>
            <div className="p-6">
              <div className="text-6xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Awareness</h4>
              <p className="text-gray-600">
                Spreading awareness across continents, cultures, and communities to build a worldwide movement against digital violence.
              </p>
            </div>
            <div className="p-6">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Direct Action</h4>
              <p className="text-gray-600">
                Converting awareness into action through advocacy, policy change, and support systems for survivors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission