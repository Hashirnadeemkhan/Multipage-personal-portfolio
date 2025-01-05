'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full px-6 py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-light">
          {'<HK>'}
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`hover:text-gray-300 transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400'}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-gray-300 transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`hover:text-gray-300 transition-colors ${isActive('/projects') ? 'text-white' : 'text-gray-400'}`}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-gray-300 transition-colors ${isActive('/contact') ? 'text-white' : 'text-gray-400'}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/Hashirnadeemkhan" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-gray-300 transition-colors" />
          </a>
          <a href="mailto:your.email@example.com">
            <Mail className="w-5 h-5 hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </nav>
    </header>
  )
}

