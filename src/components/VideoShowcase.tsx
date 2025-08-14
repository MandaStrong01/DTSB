import React, { useState } from 'react'
import { PlayIcon, EyeIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0)

  // Placeholder video data - replace with your YouTube URLs
  const videos = [
    {
      id: 1,
      title: "MOVIE JULY 26 - Lip-synced Precision",
      description: "Experience the art of perfect lip-sync timing and precision in this captivating video showcase.",
      thumbnail: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      duration: "3:45",
      views: "12.5K",
      likes: "1.2K",
      youtubeUrl: "YOUR_YOUTUBE_URL_HERE", // Replace with actual YouTube URL
    },
    {
      id: 2,
      title: "Professional Video Content",
      description: "High-quality video production showcasing professional techniques and storytelling.",
      thumbnail: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      duration: "5:20",
      views: "8.7K",
      likes: "892",
      youtubeUrl: "YOUR_YOUTUBE_URL_HERE", // Replace with actual YouTube URL
    },
    {
      id: 3,
      title: "Creative Visual Experience",
      description: "Immerse yourself in creative visuals and innovative video production techniques.",
      thumbnail: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      duration: "4:15",
      views: "15.3K",
      likes: "1.8K",
      youtubeUrl: "YOUR_YOUTUBE_URL_HERE", // Replace with actual YouTube URL
    }
  ]

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
          <div className="video-container group cursor-pointer mb-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src={videos[activeVideo].thumbnail}
              alt={videos[activeVideo].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PlayIcon className="w-12 h-12 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-black/60 text-white px-2 py-1 rounded text-sm">
                {videos[activeVideo].duration}
              </span>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {videos[activeVideo].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {videos[activeVideo].description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-1">
                  <EyeIcon className="w-5 h-5" />
                  <span>{videos[activeVideo].views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <HeartIcon className="w-5 h-5" />
                  <span>{videos[activeVideo].likes} likes</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                <ShareIcon className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(index)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                activeVideo === index 
                  ? 'ring-4 ring-primary-500 shadow-xl scale-105' 
                  : 'hover:shadow-lg hover:scale-102'
              }`}
            >
              <div className="relative aspect-video">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="bg-black/60 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {video.title}
                </h4>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{video.views} views</span>
                  <span>{video.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube URL Instructions */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">
            🎬 Ready to Add Your YouTube Videos?
          </h4>
          <p className="text-blue-800 mb-4">
            Replace the placeholder URLs in the video data with your actual YouTube video URLs. 
            The format should be: <code className="bg-blue-100 px-2 py-1 rounded">https://www.youtube.com/watch?v=VIDEO_ID</code>
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-gray-600 mb-2">Example YouTube URLs to replace:</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• MOVIE JULY 26 _Lip-synced_precision.mp4 → Your YouTube URL</li>
              <li>• Additional video files → Your YouTube URLs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase