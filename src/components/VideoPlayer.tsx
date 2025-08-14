import React, { useState } from 'react'
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface VideoPlayerProps {
  videoId: string
  title: string
  thumbnail: string
  isOpen: boolean
  onClose: () => void
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title, thumbnail, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>
        
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer