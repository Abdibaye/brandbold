'use client'

import { useState } from 'react'
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface BioSectionProps {
  isDarkMode: boolean
  bio: string
}

export const BioSection = ({ isDarkMode, bio }: BioSectionProps) => {
  const [showFullBio, setShowFullBio] = useState(false)
  const [prompt, setPrompt] = useState("")

  return (
    <section className={`rounded-2xl border p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">About</h2>
      <div className="flex justify-end mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="default" 
              size="lg" 
              className="gap-2 shadow-lg ring-2 ring-[#10b981] ring-offset-2 animate-pulse"
            >
              <Sparkles className="w-5 h-5 text-[#10b981]" />
              <span className="font-semibold">AI Generate</span>
            </Button>
          </DialogTrigger>
          <DialogContent 
            showCloseButton
            className="bg-white dark:bg-gray-900 border-2 border-[#10b981] shadow-2xl rounded-2xl p-8 max-w-lg w-full relative"
          >
            <div className="absolute -top-2 left-0 w-full h-2 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-t-2xl" />
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-[#10b981]">
                <Sparkles className="w-6 h-6" />
                Generate Bio with AI
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                Describe yourself or what you want in your bio. This will help the AI generate a personalized summary.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="e.g. Senior developer, loves startups, 8+ years experience..."
              className="mb-2 mt-4 bg-white dark:bg-gray-800 border-2 border-[#10b981] focus-visible:ring-2 focus-visible:ring-[#10b981] text-base text-gray-800 dark:text-gray-100 placeholder:text-gray-400 rounded-lg shadow-sm min-h-[90px]"
              rows={4}
              autoFocus
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" className="font-semibold px-6 py-2 rounded-lg">Cancel</Button>
              </DialogClose>
              <Button variant="default" disabled className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-6 py-2 rounded-lg">Generate</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
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