'use client'

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  location: string
  description: string
  gpa?: string
  achievements?: string[]
}

interface EducationSectionProps {
  isDarkMode: boolean
  education: Education[]
}

export const EducationSection = ({ isDarkMode, education }: EducationSectionProps) => {
  return (
    <section className={`rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 mt-8 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Education</h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full shadow-lg"></div>
            
            {/* Content */}
            <div className={`ml-8 p-6 rounded-xl transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-700/50 hover:bg-gray-700' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>{edu.degree}</h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{edu.institution}</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <time className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{edu.period}</time>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{edu.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{edu.description}</p>

              {/* GPA and Achievements */}
              <div className="space-y-3">
                {edu.gpa && (
                  <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                    isDarkMode 
                      ? 'bg-gray-600 text-gray-200' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    GPA: {edu.gpa}
                  </div>
                )}
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className={`space-y-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="text-[#10b981] mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 