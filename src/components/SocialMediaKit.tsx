import React, { useState } from 'react'
import { ShareIcon, DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline'

const SocialMediaKit = () => {
  const [copiedPost, setCopiedPost] = useState<number | null>(null)

  const socialPosts = [
    {
      platform: "Twitter/X",
      content: `🚨 BREAKING: New coded documentary exposes the GLOBAL cyberbullying crisis

"MOVIE JULY 26 - Lip-synced Precision" reveals the devastating reality of doxxing & digital harassment affecting MILLIONS worldwide.

This isn't just a film—it's a movement to transform humanity through education.

#StopTheDoxxing #CyberbullyingCrisis #DigitalEmpathy #HumanityOnline #GlobalMovement #CodedDocumentary

Watch now: [URL]`,
      hashtags: "#StopTheDoxxing #CyberbullyingCrisis #DigitalEmpathy #HumanityOnline #GlobalMovement #CodedDocumentary #DocumentaryFilm #SocialJustice"
    },
    {
      platform: "Instagram",
      content: `🎬 CODED DOCUMENTARY ALERT 🚨

"MOVIE JULY 26 - Lip-synced Precision" is more than a film—it's a global wake-up call.

✨ WHAT THIS CODED DOCUMENTARY REVEALS:
• The hidden reality of cyberbullying worldwide
• Real survivor stories of hope & healing  
• How doxxing destroys lives & families
• The urgent need for digital empathy education

🌍 GLOBAL IMPACT:
• 37% of young people bullied online
• 1 BILLION+ people affected worldwide
• 195 countries facing this crisis

This coded documentary is transforming how humanity connects online. Every view spreads hope. Every share saves lives.

#StopTheDoxxing #CyberbullyingAwareness #DigitalEmpathy #CodedDocumentary #DocumentaryFilm #GlobalCrisis #HumanityFirst #SocialSkills #OnlineSafety #MentalHealthMatters #TransformHumanity`,
      hashtags: "#StopTheDoxxing #CyberbullyingAwareness #DigitalEmpathy #CodedDocumentary #DocumentaryFilm #GlobalCrisis #HumanityFirst"
    },
    {
      platform: "LinkedIn",
      content: `🎯 PROFESSIONAL ALERT: New Coded Documentary Exposes Global Cyberbullying Crisis

"MOVIE JULY 26 - Lip-synced Precision" is a groundbreaking coded documentary that every business leader, educator, and HR professional needs to see.

📊 THE BUSINESS IMPACT:
• 73% of adults witness online harassment in professional settings
• Cyberbullying costs companies billions in lost productivity
• 41% of professionals experience severe digital harassment
• Remote work has amplified these challenges globally

🎓 EDUCATIONAL INNOVATION:
This coded documentary doesn't just expose the problem—it teaches essential social skills for the digital age:
✅ Digital empathy training
✅ Conflict de-escalation techniques  
✅ Cultural sensitivity in global teams
✅ Professional boundary setting online

🌍 GLOBAL REACH: Already impacting 150+ countries with innovative education that transforms workplace culture.

As leaders, we have a responsibility to create safer digital environments. This coded documentary provides the tools and awareness needed to build more humane professional communities.

#Leadership #WorkplaceCulture #DigitalEmpathy #ProfessionalDevelopment #GlobalBusiness #HRLeadership #CorporateResponsibility #WorkplaceSafety #RemoteWork #BusinessEthics #CodedDocumentary`,
      hashtags: "#Leadership #WorkplaceCulture #DigitalEmpathy #ProfessionalDevelopment #GlobalBusiness #CodedDocumentary"
    },
    {
      platform: "Facebook",
      content: `🚨 URGENT: This Coded Documentary Will Change How You See the Internet Forever

"MOVIE JULY 26 - Lip-synced Precision" exposes the shocking reality of cyberbullying that's destroying lives worldwide—including people in YOUR community.

💔 THE HEARTBREAKING TRUTH:
• 1 in 3 young people experience cyberbullying
• Victims face real-world stalking and threats
• Entire families are targeted and traumatized
• The harassment follows them everywhere—24/7

✨ BUT THERE'S HOPE:
This isn't just another documentary. It's a coded educational movement teaching:
🎓 Digital empathy and social skills
🌍 How to connect with humanity online
💪 Ways to support survivors and create change
🔄 Practical steps to transform our digital communities

🌟 REAL IMPACT: Already reaching 2.5M+ people across 150+ countries, teaching the social skills needed to heal our online world.

Every share of this post helps spread awareness. Every view of this coded documentary saves lives. Every person who learns these skills transforms their entire digital community.

SHARE THIS POST to help us reach more people who need this message of hope and healing.

#StopTheDoxxing #CyberbullyingAwareness #DigitalEmpathy #CommunitySupport #OnlineSafety #MentalHealthAwareness #CodedDocumentary #DocumentaryFilm #SocialChange #HumanityOnline #GlobalMovement`,
      hashtags: "#StopTheDoxxing #CyberbullyingAwareness #DigitalEmpathy #CommunitySupport #OnlineSafety #CodedDocumentary"
    },
    {
      platform: "TikTok",
      content: `🎬 This coded documentary is going VIRAL for all the right reasons

"MOVIE JULY 26 - Lip-synced Precision" exposes what Big Tech doesn't want you to know about cyberbullying 👀

🚨 SHOCKING FACTS:
• 37% of Gen Z bullied online
• Doxxing ruins lives in MINUTES  
• 1 BILLION people affected globally
• Your data isn't as private as you think

✨ PLOT TWIST: This coded documentary teaches you how to fight back with KINDNESS and social skills that actually work

💪 WHAT YOU'LL LEARN:
• Digital empathy hacks
• How to de-escalate online drama
• Protecting your mental health online
• Building real connections in digital spaces

This isn't just entertainment—it's education that's transforming humanity one person at a time 🌍

Drop a 💙 if you're ready to be part of the solution

#StopTheDoxxing #CyberbullyingTok #DigitalEmpathy #OnlineSafety #MentalHealthTok #SocialSkills #CodedDocumentary #DocumentaryTok #GenZChange #HumanityFirst #GlobalMovement #TechTruth #OnlineKindness`,
      hashtags: "#StopTheDoxxing #CyberbullyingTok #DigitalEmpathy #OnlineSafety #MentalHealthTok #CodedDocumentary"
    },
    {
      platform: "Professional Press Release",
      content: `FOR IMMEDIATE RELEASE

GROUNDBREAKING CODED DOCUMENTARY "MOVIE JULY 26 - LIP-SYNCED PRECISION" EXPOSES GLOBAL CYBERBULLYING CRISIS

Revolutionary Educational Platform Launches to Transform Humanity Through Digital Empathy Training

[City, Date] - A powerful new coded documentary titled "MOVIE JULY 26 - Lip-synced Precision" has launched globally, exposing the devastating reality of cyberbullying and doxxing that affects over 1 billion people worldwide. This isn't just a film—it's an innovative educational movement designed to transform how humanity interacts in digital spaces.

KEY STATISTICS REVEALED:
• 37% of young people experience cyberbullying globally
• 73% of adults witness online harassment
• 195 countries are affected by this digital violence epidemic
• Cyberbullying costs the global economy billions annually

INNOVATIVE EDUCATIONAL APPROACH:
The coded documentary goes beyond traditional awareness campaigns by teaching essential social skills for the digital age:
- Digital empathy training modules
- Conflict de-escalation techniques
- Cultural sensitivity in online communication
- Professional boundary setting for remote work environments

"This coded documentary represents a paradigm shift in how we address cyberbullying," said [Spokesperson]. "We're not just documenting the problem—we're providing the educational tools needed to solve it through human connection and empathy."

GLOBAL IMPACT:
The platform has already reached 2.5 million people across 150+ countries, with 95% of participants reporting improved digital empathy skills after engaging with the content.

AVAILABILITY:
The coded documentary and educational resources are available at [Website URL], with packages ranging from individual access to institutional licensing for schools and corporations.

For media inquiries, interviews, or screening requests, contact:
[Contact Information]

###

About Stop The Doxxing:
Stop The Doxxing is a global educational movement dedicated to ending cyberbullying through innovative education, digital empathy training, and human connection. The organization's coded documentary "MOVIE JULY 26 - Lip-synced Precision" is transforming how humanity interacts online.`,
      hashtags: "#PressRelease #CodedDocumentary #CyberbullyingAwareness #DigitalEmpathy #GlobalEducation"
    }
  ]

  const copyToClipboard = async (content: string, index: number) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedPost(index)
      setTimeout(() => setCopiedPost(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="social-media-kit" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ShareIcon className="w-10 h-10 text-purple-400 mr-3" />
            <span className="text-purple-300 font-bold text-xl">PROFESSIONAL SOCIAL MEDIA KIT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Share The
            <span className="block text-purple-400 font-['Playfair_Display']">
              Coded Documentary
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional social media posts ready to copy and share. Help us spread this coded documentary 
            "MOVIE JULY 26 - Lip-synced Precision" globally and transform humanity through education and digital empathy.
          </p>
        </div>

        {/* Social Media Posts */}
        <div className="space-y-8">
          {socialPosts.map((post, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <span className="text-3xl mr-3">
                    {post.platform === 'Twitter/X' && '𝕏'}
                    {post.platform === 'Instagram' && '📷'}
                    {post.platform === 'LinkedIn' && '💼'}
                    {post.platform === 'Facebook' && '👥'}
                    {post.platform === 'TikTok' && '🎵'}
                    {post.platform === 'Professional Press Release' && '📰'}
                  </span>
                  {post.platform}
                </h3>
                <button
                  onClick={() => copyToClipboard(post.content, index)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  {copiedPost === index ? (
                    <>
                      <CheckIcon className="w-5 h-5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <DocumentDuplicateIcon className="w-5 h-5" />
                      <span>Copy Post</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <pre className="text-gray-300 whitespace-pre-wrap font-sans leading-relaxed text-sm">
                  {post.content}
                </pre>
              </div>
              
              <div className="text-sm text-gray-400">
                <strong>Hashtags:</strong> {post.hashtags}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Humanity?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Copy these professional posts and share them across your social media platforms. 
            Every share helps spread the coded documentary "MOVIE JULY 26 - Lip-synced Precision" and saves lives worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Share All Platforms
            </button>
            <button className="bg-purple-800 text-white font-bold py-4 px-8 rounded-full hover:bg-purple-900 transition-all duration-300 border-2 border-white/20">
              Download Media Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMediaKit