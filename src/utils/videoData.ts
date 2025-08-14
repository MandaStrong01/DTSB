// Video data with local video files
export const videoData = [
  {
    id: 1,
    title: "MOVIE JULY 26 - Lip-synced Precision",
    description: "Experience the art of perfect lip-sync timing and precision in this captivating video showcase. Professional cinematography meets creative storytelling.",
    videoSrc: "/MOVIE JULY 26 _Lip-synced_precision.mp4", // Your actual video file
    poster: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
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
    videoSrc: "/placeholder-video-2.mp4", // Replace with your video file
    poster: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
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
    videoSrc: "/placeholder-video-3.mp4", // Replace with your video file
    poster: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
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
    videoSrc: "/placeholder-video-4.mp4", // Replace with your video file
    poster: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    duration: "6:30",
    views: "9.2K",
    likes: "1.1K",
    category: "Behind the Scenes",
    featured: false
  }
]

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}