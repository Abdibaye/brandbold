'use client'

import Image from 'next/image'

interface Project {
  id: number
  title: string
  thumbnailUrl: string
  description: string
}

interface PortfolioSectionProps {
  isDarkMode: boolean
  projects: Project[]
}

export const PortfolioSection = ({ isDarkMode, projects }: PortfolioSectionProps) => {
  return (
    <section className={`rounded-2xl border p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`relative group rounded-xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-[1.02] ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 hover:border-[#10b981]' 
                : 'bg-gray-50 border-gray-200 hover:border-[#10b981]'
            }`}
          >
            <Image
              src={proj.thumbnailUrl}
              alt={proj.title}
              width={400}
              height={240}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10b981]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-sm text-white/90">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 