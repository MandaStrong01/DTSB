import React from 'react'
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  LightBulbIcon,
  UsersIcon,
  BookOpenIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const EducationalHub = () => {
  const educationalModules = [
    {
      icon: HeartIcon,
      title: "Digital Empathy Training",
      description: "Learn to recognize emotions and respond with compassion in digital spaces. Essential skills for the internet age.",
      lessons: 12,
      duration: "2 hours",
      level: "Beginner",
      impact: "Transforms online interactions"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Social Skills for Digital Natives",
      description: "Master the art of respectful communication, conflict resolution, and building meaningful connections online.",
      lessons: 15,
      duration: "3 hours",
      level: "Intermediate",
      impact: "Builds lasting relationships"
    },
    {
      icon: LightBulbIcon,
      title: "Innovation in Human Connection",
      description: "Discover cutting-edge approaches to fostering understanding, creativity, and collaboration in digital communities.",
      lessons: 10,
      duration: "2.5 hours",
      level: "Advanced",
      impact: "Creates positive change"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Citizenship Online",
      description: "Understand cultural differences, practice inclusive communication, and become a positive force for humanity worldwide.",
      lessons: 18,
      duration: "4 hours",
      level: "All Levels",
      impact: "Unites global communities"
    }
  ]

  const socialSkills = [
    {
      skill: "Active Digital Listening",
      description: "How to truly hear and understand others in text-based communication",
      icon: "👂"
    },
    {
      skill: "Empathetic Response Crafting",
      description: "Writing responses that show genuine care and understanding",
      icon: "💝"
    },
    {
      skill: "Conflict De-escalation",
      description: "Turning heated discussions into productive conversations",
      icon: "🕊️"
    },
    {
      skill: "Cultural Sensitivity",
      description: "Communicating respectfully across different cultures and backgrounds",
      icon: "🌍"
    },
    {
      skill: "Boundary Setting",
      description: "Protecting your mental health while staying connected",
      icon: "🛡️"
    },
    {
      skill: "Positive Leadership",
      description: "Inspiring others to create more humane digital spaces",
      icon: "⭐"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AcademicCapIcon className="w-10 h-10 text-blue-600 mr-3" />
            <span className="text-blue-600 font-bold text-xl">INNOVATIVE EDUCATION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Humanity
            <span className="block text-blue-600 font-['Playfair_Display']">
              Through Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our innovative educational platform teaches the social skills and digital empathy needed 
            to create a more humane internet. Join millions learning to connect, understand, and 
            share hope across the globe.
          </p>
        </div>

        {/* Educational Modules */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Innovative Learning Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalModules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{module.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-bold text-blue-600">{module.lessons}</div>
                    <div className="text-gray-600">Lessons</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="font-bold text-purple-600">{module.duration}</div>
                    <div className="text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-600">{module.level}</div>
                    <div className="text-gray-600">Level</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-1">Impact:</div>
                  <div className="text-blue-700 font-medium">{module.impact}</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential Social Skills for the Digital Age
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-4 text-center">{skill.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">{skill.skill}</h4>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Impact */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <GlobeAltIcon className="w-12 h-12 text-blue-200 mr-3" />
            <span className="text-2xl font-bold">GLOBAL EDUCATION IMPACT</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Sharing Hope and Humanity Worldwide
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">2.5M+</div>
              <div className="text-white/90">Students Educated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">150+</div>
              <div className="text-white/90">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">50K+</div>
              <div className="text-white/90">Educators Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">95%</div>
              <div className="text-white/90">Report Improved Empathy</div>
            </div>
          </div>
          
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Every lesson shared creates ripples of positive change. When we teach one person digital empathy, 
            they teach others. When we share social skills, communities transform. When we spread humanity 
            online, the whole world becomes more connected and compassionate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Share This Message
            </button>
            <button className="bg-blue-800 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-900 transition-all duration-300 border-2 border-white/20">
              Become an Educator
            </button>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Innovation in Human Connection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Empathy Training</h4>
              <p className="text-gray-600">
                Cutting-edge technology that helps people practice empathetic responses in safe, simulated environments.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Connection Circles</h4>
              <p className="text-gray-600">
                Virtual spaces where people from different cultures learn from each other and build lasting friendships.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Interactive Story Learning</h4>
              <p className="text-gray-600">
                Immersive narratives that teach social skills through real-world scenarios and meaningful choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationalHub