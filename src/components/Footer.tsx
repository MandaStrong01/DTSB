import React from 'react'
import { PlayIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Education', href: '#education' },
      { name: 'Videos', href: '#videos' },
      { name: 'Store', href: '#stripe-store' },
      { name: 'Mission', href: '#mission' }
    ],
    company: [
      { name: 'About', href: '#mission' },
      { name: 'Global Crisis', href: '#global-crisis' },
      { name: 'Survivors', href: '#survivor-stories' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Crisis Help', href: '#contact' },
      { name: 'Report Bullying', href: '#contact' },
      { name: 'Educational Resources', href: '#education' },
      { name: 'Global Support', href: 'https://cyberbullying.sim.com/google.com' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'YouTube', href: '#', icon: '▶️' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Stop The Doxxing</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Innovating education about digital empathy and teaching essential social skills 
              for the internet age. Sharing transformative messages of humanity globally.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Follow Our Movement</h3>
            <p className="text-gray-400 mb-4">
              Connect with us on social media for updates and support.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://vimeo.com/ondemand/stoptheDoxxing" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full transition-colors duration-300 text-white font-bold">
                🎬 Watch Documentary on Vimeo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Stop The Doxxing. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ to transform humanity online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer