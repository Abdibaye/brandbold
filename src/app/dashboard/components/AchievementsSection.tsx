'use client'

import Image from 'next/image'

interface Achievement {
  id: number
  title: string
  imageUrl: string
  date: string
  description: string
  category: string
}

interface AchievementsSectionProps {
  isDarkMode: boolean
  achievements: Achievement[]
}

export const AchievementsSection = ({ isDarkMode, achievements }: AchievementsSectionProps) => {
  return (
    <section className={`rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 mt-8 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`group relative rounded-xl overflow-hidden border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 hover:border-[#10b981]' 
                : 'bg-gray-50 border-gray-200 hover:border-[#10b981]'
            }`}
          >
            {/* Image Container */}
            <div className="relative h-48 w-full">
              <Image
                src={achievement.imageUrl}
                alt={achievement.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Category Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                isDarkMode 
                  ? 'bg-gray-600 text-gray-200' 
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {achievement.category}
              </span>

              {/* Title and Date */}
              <div className="mb-2">
                <h3 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {achievement.title}
                </h3>
                <time className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.date}
                </time>
              </div>

              {/* Description */}
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {achievement.description}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10b981]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">View Details</span>
                  <svg 
                    className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}