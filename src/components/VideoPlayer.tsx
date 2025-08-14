import React, { useRef, useEffect } from 'react'
import { XMarkIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline'

interface VideoPlayerProps {
  videoSrc: string
  title: string
  poster: string
  isOpen: boolean
  onClose: () => void
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, title, poster, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>
        
        <div className="aspect-video">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls
            className="w-full h-full"
            onEnded={() => setIsPlayerOpen(false)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="p-4 bg-gray-900 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer