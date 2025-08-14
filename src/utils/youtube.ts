// YouTube utility functions
export const extractVideoId = (url: string): string => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : ''
}

export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'maxres'): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`
}

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

// Video data with YouTube integration
export const videoData = [
  {
    id: 1,
    title: "MOVIE JULY 26 - Lip-synced Precision",
    description: "Experience the art of perfect lip-sync timing and precision in this captivating video showcase. Professional cinematography meets creative storytelling.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube URL
    videoId: "dQw4w9WgXcQ", // This will be extracted automatically
    duration: "3:45",
    views: "12.5K",
    likes: "1.2K",
    category: "Creative",
    featured: true
  },
  {
    id: 2,
    title: "Professional Video Production Showcase",
    description: "High-quality video production showcasing professional techniques, lighting, and post-production excellence.",
    youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0", // Replace with your actual YouTube URL
    videoId: "9bZkp7q19f0",
    duration: "5:20",
    views: "8.7K",
    likes: "892",
    category: "Professional",
    featured: true
  },
  {
    id: 3,
    title: "Creative Visual Experience",
    description: "Immerse yourself in creative visuals and innovative video production techniques that push creative boundaries.",
    youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk", // Replace with your actual YouTube URL
    videoId: "kJQP7kiw5Fk",
    duration: "4:15",
    views: "15.3K",
    likes: "1.8K",
    category: "Creative",
    featured: false
  },
  {
    id: 4,
    title: "Behind the Scenes Content",
    description: "Get an exclusive look behind the scenes of professional video production and creative processes.",
    youtubeUrl: "https://www.youtube.com/watch?v=LDU_Txk06tM", // Replace with your actual YouTube URL
    videoId: "LDU_Txk06tM",
    duration: "6:30",
    views: "9.2K",
    likes: "1.1K",
    category: "Behind the Scenes",
    featured: false
  }
]