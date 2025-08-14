import React, { useState } from 'react'
import { PlayIcon, EyeIcon, HeartIcon, ShareIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import VideoPlayer from './VideoPlayer'
import { videoData } from '../utils/videoData'

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])

  const handleVideoPlay = (video: any) => {
    // Check if user has access code
    const accessCode = prompt('Enter your one-time access code (received via email after $5 payment):')
    if (accessCode) {
      // Validate code (in real implementation, this would be server-side)
      if (accessCode.length >= 6) {
        setSelectedVideo(video)
        setIsPlayerOpen(true)
        alert('Access granted! This code can only be used once.')
      } else {
        alert('Invalid access code. Please check your email for the correct code.')
      }
    } else {
      alert('Access code required. Pay $5 to get your one-time access code via email.')
    }
  }

  const handleShare = async (video: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${video.title} - Stop The Doxxing`,
          text: `${video.description} #StopTheDoxxing #CyberbullyingAwareness`,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.href} - Stop The Doxxing: ${video.title}`)
      alert('Link copied! Share this important message about cyberbullying.')
    }
  }

  return (
    <section id="videos" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-400 mr-2" />
            <span className="text-red-300 font-medium">URGENT DOCUMENTARY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Educational Stories
            <span className="block text-blue-400 font-['Playfair_Display']">
              That Transform Lives
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            These powerful educational films teach essential social skills and digital empathy. 
            Watch, learn, and share these transformative messages that are healing our global community.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-12">
          <div 
            className="video-container group cursor-pointer mb-6 border-4 border-red-500/50 hover:border-red-400 transition-all duration-300"
            onClick={() => handleVideoPlay(videoData[activeVideo])}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <img 
              src={videoData[activeVideo].poster}
              alt={videoData[activeVideo].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-28 h-28 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-white/20">
                <PlayIcon className="w-14 h-14 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-20">
              <span className="bg-red-600/80 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2 mb-3">
                <ClockIcon className="w-4 h-4" />
                <span>{videoData[activeVideo].duration}</span>
              </span>
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                <p className="text-red-300 text-sm font-semibold mb-1">{videoData[activeVideo].impact}</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 z-20">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                {videoData[activeVideo].category}
              </span>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-red-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              {videoData[activeVideo].title}
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {videoData[activeVideo].description}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <EyeIcon className="w-5 h-5" />
                  <span className="font-medium">{videoData[activeVideo].views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeartIcon className="w-5 h-5" />
                  <span className="font-medium">{videoData[activeVideo].likes} likes</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleVideoPlay(videoData[activeVideo])}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                >
                  <PlayIcon className="w-5 h-5" />
                  <span>Watch Now</span>
                </button>
                <button 
                  onClick={() => handleShare(videoData[activeVideo])}
                  className="flex items-center space-x-2 text-red-400 hover:text-red-300 font-medium bg-red-900/30 hover:bg-red-900/50 px-6 py-3 rounded-full transition-all duration-300 border border-red-500/30"
                >
                  <ShareIcon className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {videoData.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(index)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                activeVideo === index 
                  ? 'ring-4 ring-red-500 shadow-2xl scale-105' 
                  : 'hover:shadow-xl hover:scale-102 ring-2 ring-gray-700 hover:ring-red-400'
              }`}
            >
              <div className="relative aspect-video">
                <img 
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <PlayIcon className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-800">
                <h4 className="font-bold text-white mb-2 line-clamp-2 text-sm">
                  {video.title}
                </h4>
                <p className="text-red-300 text-xs mb-2">{video.impact}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{video.views} views</span>
                  <span>{video.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Voice Matters
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Every view, every share, every conversation brings us closer to ending cyberbullying. 
            Together, we can create a safer digital world for everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Share This Message
            </button>
            <button className="bg-red-800 text-white font-bold py-4 px-8 rounded-full hover:bg-red-900 transition-all duration-300 border-2 border-white/20">
              Support The Cause
            </button>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayer
        videoSrc={selectedVideo.videoSrc}
        title={selectedVideo.title}
        poster={selectedVideo.poster}
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />
    </section>
  )
}

export default VideoShowcase