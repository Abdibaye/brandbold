'use client'

import { useState } from 'react'

interface BioSectionProps {
  isDarkMode: boolean
  bio: string
}

export const BioSection = ({ isDarkMode, bio }: BioSectionProps) => {
  const [showFullBio, setShowFullBio] = useState(false)

  return (
    <section className={`rounded-2xl border p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">About</h2>
      <div className="space-y-6">
        {/* Bio Header with Stats */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-700 hover:bg-[#10b981] text-gray-200' 
              : 'bg-gray-50 hover:bg-[#10b981] hover:text-white'
          }`}>
            <span className="text-[#10b981] group-hover:text-white">🚀</span>
            <span className="text-sm font-medium">8+ Years Experience</span>
          </div>
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-700 hover:bg-[#10b981] text-gray-200' 
              : 'bg-gray-50 hover:bg-[#10b981] hover:text-white'
          }`}>
            <span className="text-[#10b981] group-hover:text-white">💼</span>
            <span className="text-sm font-medium">2 Successful Startups</span>
          </div>
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-700 hover:bg-[#10b981] text-gray-200' 
              : 'bg-gray-50 hover:bg-[#10b981] hover:text-white'
          }`}>
            <span className="text-[#10b981] group-hover:text-white">👥</span>
            <span className="text-sm font-medium">30+ Team Members</span>
          </div>
        </div>

        {/* Main Bio Content */}
        <div className="space-y-4">
          <p className={`text-base leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {showFullBio ? (
              <>
                <span className={`block mb-4 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>I'm an entrepreneur and engineer with 8+ years of experience building and scaling tech startups from the ground up. I've co-founded two successful companies, raising over $20M in funding and reaching 1M+ users globally.</span>
                
                <span className="block mb-4">Currently, I serve as CTO at An-Tropic, where I lead a 30+ person engineering team building transformative platforms that help businesses boost efficiency by 40% and cut costs by 25%.</span>
                
                <span className="block mb-4">My journey started with a Computer Science degree from MIT, followed by impactful roles at Google and Amazon — where I learned what it takes to build scalable systems and high-performing teams.</span>
                
                <span className="block">Beyond work, I'm passionate about mentoring young founders, sharing insights at tech conferences, and exploring the future of innovation. Outside of tech, I enjoy hiking, sci-fi novels, and trying new cooking experiments.</span>
              </>
            ) : (
              <>
                <span className={`block mb-4 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>I'm an entrepreneur and engineer with 8+ years of experience building and scaling tech startups from the ground up. I've co-founded two successful companies, raising over $20M in funding and reaching 1M+ users globally.</span>
                
                <span className="block">Currently, I serve as CTO at An-Tropic, where I lead a 30+ person engineering team building transformative platforms that help businesses boost efficiency by 40% and cut costs by 25%.</span>
              </>
            )}
          </p>
          
          <button
            onClick={() => setShowFullBio(!showFullBio)}
            className={`inline-flex items-center space-x-2 text-[#10b981] hover:text-[#059669] font-medium transition-colors duration-200 ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            } px-4 py-2 rounded-lg`}
          >
            <span>{showFullBio ? 'Show Less' : 'Show More'}</span>
            <svg 
              className={`w-4 h-4 transform transition-transform duration-200 ${showFullBio ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 