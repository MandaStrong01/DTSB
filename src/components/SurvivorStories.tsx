import React, { useState } from 'react'
import { PlayIcon, HeartIcon, ShareIcon, UserIcon } from '@heroicons/react/24/outline'

const SurvivorStories = () => {
  const [activeStory, setActiveStory] = useState(0)

  const survivorStories = [
    {
      id: 1,
      name: "Sarah M.",
      age: 28,
      location: "United Kingdom",
      image: "/public/IMG_0989.webp",
      videoSrc: "/survivor-story-1.mp4", // Placeholder for your content
      title: "From Victim to Advocate",
      preview: "After being doxxed and receiving death threats, Sarah found the strength to fight back and help others.",
      fullStory: "Sarah was targeted after speaking out about workplace harassment. Within hours, her address, phone number, and family details were posted online with death threats. She had to move three times and change her identity. Today, she helps other survivors rebuild their lives.",
      impact: "Helped 200+ survivors",
      timeframe: "3 years of harassment"
    },
    {
      id: 2,
      name: "Michael C.",
      age: 34,
      location: "Australia",
      image: "/public/20241202_180430.jpeg",
      videoSrc: "/survivor-story-2.mp4", // Placeholder for your content
      title: "Fighting for Justice",
      preview: "A father's fight to protect his family from coordinated online harassment and doxxing.",
      fullStory: "Michael's family was targeted after he reported cyberbullying at his daughter's school. The harassment escalated to his workplace, his wife's business, and even his elderly parents. He spent two years fighting through the legal system to get justice.",
      impact: "Changed local laws",
      timeframe: "2 years of family harassment"
    },
    {
      id: 3,
      name: "Emma R.",
      age: 19,
      location: "Canada",
      image: "/public/IMG_0981.png",
      videoSrc: "/survivor-story-3.mp4", // Placeholder for your content
      title: "Surviving Teen Cyberbullying",
      preview: "A teenager's journey through severe cyberbullying and her path to recovery and advocacy.",
      fullStory: "Emma was 16 when classmates created fake social media profiles using her photos and personal information. The harassment spread across multiple platforms and followed her to college. She attempted suicide twice before finding help and hope.",
      impact: "Speaks at schools globally",
      timeframe: "4 years of harassment"
    },
    {
      id: 4,
      name: "David L.",
      age: 42,
      location: "United States",
      image: "/public/IMG_0988.jpeg",
      videoSrc: "/MOVIE JULY 26 _Lip-synced_precision.mp4", // Your actual video
      title: "Professional Destruction",
      preview: "How cyberbullying destroyed a successful career and the fight to rebuild.",
      fullStory: "David was a successful journalist until he wrote an article that angered an online mob. They doxxed him, called his employers, and created fake evidence of misconduct. He lost his job, his reputation, and his mental health. This is his story of survival.",
      impact: "Advocates for journalist safety",
      timeframe: "5 years of career destruction"
    }
  ]

  const handleShare = async (story: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Survivor Story: ${story.title}`,
          text: `${story.preview} #SurvivorStories #StopCyberbullying`,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(`Survivor Story: ${story.title} - ${window.location.href}`)
      alert('Story link copied! Share this important survivor story.')
    }
  }

  return (
    <section id="survivor-stories" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HeartIcon className="w-8 h-8 text-red-600 mr-2" />
            <span className="text-red-600 font-bold text-lg">SURVIVOR VOICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Stories of
            <span className="block text-red-600 font-['Playfair_Display']">
              Survival & Hope
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            These brave survivors have turned their pain into purpose. Their stories show that healing is possible, 
            justice can be achieved, and together we can end the cycle of digital violence.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video/Image Side */}
              <div className="relative">
                <div className="aspect-video lg:aspect-square">
                  {survivorStories[activeStory].videoSrc.endsWith('.mp4') ? (
                    <video 
                      src={survivorStories[activeStory].videoSrc}
                      poster={survivorStories[activeStory].image}
                      className="w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <img 
                      src={survivorStories[activeStory].image}
                      alt={survivorStories[activeStory].name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    SURVIVOR STORY
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button 
                    onClick={() => handleShare(survivorStories[activeStory])}
                    className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300"
                  >
                    <ShareIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <UserIcon className="w-6 h-6 text-red-600 mr-2" />
                  <span className="text-red-600 font-semibold">
                    {survivorStories[activeStory].name}, {survivorStories[activeStory].age}
                  </span>
                  <span className="text-gray-500 ml-2">• {survivorStories[activeStory].location}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {survivorStories[activeStory].title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {survivorStories[activeStory].fullStory}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      {survivorStories[activeStory].impact}
                    </div>
                    <div className="text-sm text-gray-600">Impact Created</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {survivorStories[activeStory].timeframe}
                    </div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <PlayIcon className="w-5 h-5" />
                    <span>Watch Full Story</span>
                  </button>
                  <button 
                    onClick={() => handleShare(survivorStories[activeStory])}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center space-x-2"
                  >
                    <ShareIcon className="w-5 h-5" />
                    <span>Share Story</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {survivorStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                activeStory === index 
                  ? 'ring-4 ring-red-500 shadow-2xl scale-105' 
                  : 'hover:shadow-xl hover:scale-102 ring-2 ring-gray-200 hover:ring-red-300'
              }`}
            >
              <div className="relative aspect-square">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <PlayIcon className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold text-sm">{story.name}</div>
                  <div className="text-white/80 text-xs">{story.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hope Message */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            You Are Not Alone
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            If you're experiencing cyberbullying or doxxing, know that there is hope. 
            These survivors found their way through the darkness, and so can you. 
            Help is available, healing is possible, and your story matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Help Now
            </button>
            <button className="bg-red-800 text-white font-bold py-4 px-8 rounded-full hover:bg-red-900 transition-all duration-300 border-2 border-white/20">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SurvivorStories