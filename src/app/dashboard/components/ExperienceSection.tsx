'use client'

interface Experience {
  id: number
  role: string
  period: string
  description: string
}

interface ExperienceSectionProps {
  isDarkMode: boolean
  experience: Experience[]
}

export const ExperienceSection = ({ isDarkMode, experience }: ExperienceSectionProps) => {
  return (
    <section className={`rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Experience</h2>
      <ul className={`relative border-l-2 pl-6 space-y-8 ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        {experience.map((exp) => (
          <li key={exp.id} className="ml-4 relative">
            <span className="absolute w-4 h-4 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full -left-2 top-1 shadow-lg"></span>
            <div className={`space-y-2 p-4 rounded-xl transition-colors duration-300 ${
              isDarkMode 
                ? 'hover:bg-gray-700' 
                : 'hover:bg-gray-50'
            }`}>
              <h3 className={`text-lg font-semibold ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>{exp.role}</h3>
              <time className={`block text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{exp.period}</time>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
} 