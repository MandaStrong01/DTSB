import React, { useState } from 'react'
import { PlayIcon, EyeIcon, HeartIcon, ShareIcon, ClockIcon } from '@heroicons/react/24/outline'
import VideoPlayer from './VideoPlayer'
import { videoData } from '../utils/videoData'

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])

  const handleVideoPlay = (video: any) => {
    setSelectedVideo(video)
    setIsPlayerOpen(true)
  }

  const handleShare = async (video: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Page URL copied to clipboard!')
    }
  }

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Videos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of premium video content, 
            each crafted with attention to detail and professional quality.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-12">
          <div 
            className="video-container group cursor-pointer mb-6"
            onClick={() => handleVideoPlay(videoData[activeVideo])}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src={videoData[activeVideo].poster}
              alt={videoData[activeVideo].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <PlayIcon className="w-12 h-12 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <ClockIcon className="w-4 h-4" />
                <span>{videoData[activeVideo].duration}</span>
              </span>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {videoData[activeVideo].category}
              </span>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              {videoData[activeVideo].title}
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {videoData[activeVideo].description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8 text-gray-500">
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
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center space-x-2"
                >
                  <PlayIcon className="w-5 h-5" />
                  <span>Watch Now</span>
                </button>
                <button 
                  onClick={() => handleShare(videoData[activeVideo])}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-full transition-colors duration-300"
                >
                  <ShareIcon className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(index)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                activeVideo === index 
                  ? 'ring-4 ring-red-500 shadow-2xl scale-105' 
                  : 'hover:shadow-xl hover:scale-102'
              }`}
            >
              <div className="relative aspect-video">
                <img 
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <PlayIcon className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                  {video.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{video.views} views</span>
                  <span>{video.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video File Instructions */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <PlayIcon className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-900">
              🎬 Your Video Files Are Ready!
            </h4>
          </div>
          <p className="text-blue-800 mb-6 text-lg">
            I've set up native HTML5 video players. Your video "MOVIE JULY 26" is already configured!
          </p>
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h5 className="font-semibold text-gray-900 mb-3">Current video setup:</h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>MOVIE JULY 26 - Lip-synced Precision</strong> → Ready to play!
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                3 placeholder slots ready for your additional videos
              </li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">To add more videos:</p>
              <ol className="text-xs text-gray-500 space-y-1 list-decimal list-inside">
                <li>Place your video files in the <code className="bg-gray-200 px-1 rounded">public/</code> folder</li>
                <li>Update the <code className="bg-gray-200 px-1 rounded">videoSrc</code> paths in <code className="bg-gray-200 px-1 rounded">src/utils/videoData.ts</code></li>
                <li>Update titles and descriptions to match your content</li>
              </ol>
            </div>
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