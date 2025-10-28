'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Nomansheikh-zz', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/noman-sheikh-56a37071/', label: 'LinkedIn' },
  //{ icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: Mail, href: 'mailto:nomi.sheikh2010@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/20 dark:border-white/10 bg-white/60 dark:bg-[#0b1220]/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Noman Dildar. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
