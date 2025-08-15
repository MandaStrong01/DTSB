// Video data for cyberbullying awareness documentary
export const videoData = [
  {
    id: 1,
    title: "MOVIE JULY 26 - Lip-synced Precision: The Doxxing Story",
    description: "A powerful documentary exposing the devastating reality of cyberbullying and doxxing. This film reveals the human cost of digital harassment and the urgent need for global action against online violence.",
    videoSrc: "/MOVIE JULY 26 _Lip-synced_precision.mp4",
    poster: "/public/IMG_0988.jpeg",
    duration: "45:30",
    views: "125K",
    likes: "12.8K",
    category: "Documentary",
    featured: true,
    impact: "Life-changing stories of survivors"
  },
  {
    id: 2,
    title: "Survivor Stories: Breaking the Silence",
    description: "Hear directly from cyberbullying survivors as they share their experiences and the long-lasting impact of digital harassment. These brave individuals are speaking out to prevent others from suffering the same fate.",
    videoSrc: "/public/Amanda Strong's MandaStrong1 - A Global Anthem of Hope.html",
    poster: "/public/IMG_0989.webp",
    duration: "28:15",
    views: "87K",
    likes: "9.2K",
    category: "Testimonials",
    featured: true,
    impact: "Real voices, real experiences"
  },
  {
    id: 3,
    title: "The Global Impact: International Crisis",
    description: "Cyberbullying knows no borders. This segment explores how doxxing and online harassment affect communities worldwide, from teenagers in schools to professionals in the workplace.",
    videoSrc: "/DF836715-9B8C-414A-A527-65A38A3BE463.JPG",
    poster: "/public/IMG_0981.png",
    duration: "35:45",
    views: "156K",
    likes: "18.3K",
    category: "Global Crisis",
    featured: false,
    impact: "Worldwide perspective on digital violence"
  },
  {
    id: 4,
    title: "Taking Action: How You Can Help",
    description: "Learn practical steps you can take to combat cyberbullying in your community. From reporting mechanisms to supporting survivors, discover how everyone can be part of the solution.",
    videoSrc: "/public/StopThe Doxing Stop The Hate_20240831-1651.pdf",
    poster: "/public/20241202_180430.jpeg",
    duration: "22:30",
    views: "92K",
    likes: "11.5K",
    category: "Action Guide",
    featured: false,
    impact: "Empowering viewers to make a difference"
  }
]

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}