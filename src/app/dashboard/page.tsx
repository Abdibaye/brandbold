"use client"; 
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe, FiDownload, FiSettings, FiMoon, FiSun, FiShare2, FiGlobe as FiLanguage } from "react-icons/fi";
import { ProfileSidebar } from './components/ProfileSidebar'
import { BioSection } from './components/BioSection'
import { GallerySection } from './components/GallerySection'
import { PortfolioSection } from './components/PortfolioSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { AchievementsSection } from './components/AchievementsSection'

export default function Page() {
  const [showFullBio, setShowFullBio] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Check system preference and saved preference on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  // Dummy user data (replace with real data or props)
  const user = {
    name: "Alex warnner",
    username: "@alexwarnner",
    headline: "Full Stack Developer & Tech Entrepreneur",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&auto=format",
    bio: `🚀 Entrepreneur | CTO | Tech Leader

I'm an entrepreneur and engineer with 8+ years of experience building and scaling tech startups from the ground up. I've co-founded two successful companies, raising over $20M in funding and reaching 1M+ users globally.

Currently, I serve as CTO at An-Tropic, where I lead a 30+ person engineering team building transformative platforms that help businesses boost efficiency by 40% and cut costs by 25%.

My journey started with a Computer Science degree from MIT, followed by impactful roles at Google and Amazon — where I learned what it takes to build scalable systems and high-performing teams.

Beyond work, I'm passionate about mentoring young founders, sharing insights at tech conferences, and exploring the future of innovation. Outside of tech, I enjoy hiking, sci-fi novels, and trying new cooking experiments.`,
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/abdibaye", icon: FiGithub },
      { platform: "LinkedIn", url: "https://linkedin.com/in/abdibaye", icon: FiLinkedin },
      { platform: "Twitter", url: "https://twitter.com/abdibaye", icon: FiTwitter },
      { platform: "Email", url: "mailto:abdibaye@example.com", icon: FiMail },
      { platform: "Website", url: "https://abdibaye.com", icon: FiGlobe },
    ],
    skills: [
      "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes",
      "GraphQL", "MongoDB", "PostgreSQL", "Flutter", "Firebase", "Git", "CI/CD"
    ],
    resumeUrl: "/resume.pdf",
    projects: [
      { 
        id: 1, 
        title: "AI-Powered Analytics Dashboard", 
        thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format",
        description: "Enterprise analytics platform with AI-driven insights"
      },
      { 
        id: 2, 
        title: "Smart Mobile App", 
        thumbnailUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=240&fit=crop&auto=format",
        description: "Cross-platform app with machine learning features"
      },
      {
        id: 3,
        title: "Cloud Infrastructure",
        thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop&auto=format",
        description: "Scalable cloud architecture with AI optimization"
      }
    ],
    gallery: [
      { 
        id: 1, 
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&auto=format", 
        caption: "Team Innovation" 
      },
      { 
        id: 2, 
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop&auto=format", 
        caption: "AI Development" 
      },
      { 
        id: 3, 
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format", 
        caption: "Tech Leadership" 
      },
      {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop&auto=format",
        caption: "Innovation Workshop"
      }
    ],
    experience: [
      {
        id: 1,
        role: "CTO at An-Tropic", 
        period: "Jan 2022 – Present",
        description: "Leading AI-driven platform development and engineering team.",
      },
      {
        id: 2,
        role: "Co-Founder at ExampleCo",
        period: "Mar 2019 – Dec 2021",
        description: "Built AI-powered product from scratch and scaled to 50k users.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Master of Science in Computer Science",
        institution: "Massachusetts Institute of Technology",
        period: "2016 - 2018",
        location: "Cambridge, MA",
        description: "Specialized in Artificial Intelligence and Machine Learning. Conducted research in natural language processing and computer vision.",
        gpa: "3.9/4.0",
        achievements: [
          "Published 3 research papers in top-tier conferences",
          "Recipient of the MIT Graduate Fellowship",
          "Led the AI Research Student Group",
          "Developed novel algorithms for real-time object detection"
        ]
      },
      {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        institution: "Stanford University",
        period: "2012 - 2016",
        location: "Stanford, CA",
        description: "Focused on Software Engineering and Distributed Systems. Participated in various hackathons and coding competitions.",
        gpa: "3.8/4.0",
        achievements: [
          "Dean's List for Academic Excellence",
          "First Place in Stanford Hackathon 2015",
          "Teaching Assistant for Data Structures course",
          "Built and launched 2 successful web applications"
        ]
      }
    ],
    achievements: [
      {
        id: 1,
        title: "Tech Innovator Award 2023",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format",
        date: "March 2023",
        category: "Awards",
        description: "Recognized for pioneering work in AI-driven business solutions and leading innovative tech initiatives."
      },
      {
        id: 2,
        title: "Global Tech Summit Speaker",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&auto=format",
        date: "October 2022",
        category: "Speaking",
        description: "Invited as a keynote speaker at the Global Tech Summit to share insights on AI implementation in enterprise solutions."
      },
      {
        id: 3,
        title: "Startup Success Story",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format",
        date: "June 2022",
        category: "Entrepreneurship",
        description: "Featured in TechCrunch for successfully scaling our startup to 1M+ users and securing Series A funding."
      },
      {
        id: 4,
        title: "Open Source Contribution",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format",
        date: "January 2022",
        category: "Development",
        description: "Major contributor to popular open-source projects, with over 10k GitHub stars across repositories."
      },
      {
        id: 5,
        title: "AI Research Publication",
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format",
        date: "September 2021",
        category: "Research",
        description: "Published research paper on advanced machine learning algorithms in a top-tier AI conference."
      },
      {
        id: 6,
        title: "Community Impact Award",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
        date: "December 2021",
        category: "Community",
        description: "Recognized for mentoring 100+ developers and organizing tech workshops in underserved communities."
      }
    ]
  };

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-200' 
        : 'bg-gray-50 text-gray-800'
    }`}>
      <ProfileSidebar 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        user={user}
      />

      <main className={`flex-1 overflow-y-auto p-8 ${
        isDarkMode 
          ? '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-gray-800 hover:[&::-webkit-scrollbar-thumb]:bg-gray-500' 
          : '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-emerald-500/30 [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/50'
      }`}>
        <BioSection isDarkMode={isDarkMode} bio={user.bio} />
        <GallerySection isDarkMode={isDarkMode} gallery={user.gallery} />
        <PortfolioSection isDarkMode={isDarkMode} projects={user.projects} />
        <ExperienceSection isDarkMode={isDarkMode} experience={user.experience} />
        <EducationSection isDarkMode={isDarkMode} education={user.education} />
        <AchievementsSection isDarkMode={isDarkMode} achievements={user.achievements} />
      </main>
    </div>
  );
}
