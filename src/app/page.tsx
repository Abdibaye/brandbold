'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          BrandBold
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Your brand's journey to success starts here. We're building something amazing.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => router.push('/login')}
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-12 text-white/80">
          <p className="text-sm">Coming Soon</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
