'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe, FiDownload, FiSettings, FiMoon, FiSun, FiShare2, FiGlobe as FiLanguage, FiEdit, FiSave, FiX } from "react-icons/fi"
import { useUserProfileStore } from '@/store/userProfileStore'; // Import the Zustand store
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/libs/database.types';
import { Card, CardContent } from "@/components/ui/card"; // Import Card components
import Link from "next/link"; // Import Link for the username link

interface ProfileSidebarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export function ProfileSidebar({ isDarkMode, toggleDarkMode }: ProfileSidebarProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState('');
  const [editUsername, setEditUsername] = useState('');

  const { profile, loading, fetchProfile, updateProfile } = useUserProfileStore();
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    if (!profile && !loading) {
      const fetchUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          fetchProfile(user.id);
        }
      };
      fetchUser();
    }
  }, [profile, loading, fetchProfile, supabase.auth]);

  useEffect(() => {
      if(profile) {
          setEditName(profile.full_name || profile.username || '');
          setEditUsername(profile.username || '');
      }
  }, [profile]);

  const toggleEditMode = () => {
    if (!profile) return;
    setEditMode(!editMode);
    if (!editMode) {
      setEditName(profile.full_name || profile.username || '');
      setEditUsername(profile.username || '');
    }
  };

    const handleSave = async () => {
        if (!profile) return;
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Add validation here if needed

        try {
            await updateProfile(user.id, {
                full_name: editName,
                username: editUsername,
            });
            setEditMode(false);
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    };

  if (loading || !profile) {
    return (
      <aside className={`w-1/4 p-8 border-r shadow-sm sticky top-0 h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gray-800 border-gray-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-gray-800 hover:[&::-webkit-scrollbar-thumb]:bg-gray-500' 
          : 'bg-white border-gray-200 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-emerald-500/30 [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/50'
      }`}>
        <div className="flex flex-col items-center space-y-8">
          <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading profile...</div>
        </div>
      </aside>
    );
  }

  const displayUser = {
    name: profile.full_name || profile.username || 'New User', // Use full_name, fallback to username
    username: profile.username || '', // Use username from profile
    headline: profile.website || '', // Using website as a placeholder for headline
    avatarUrl: profile.avatar_url || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80', // Use avatar_url, fallback to a default
    socialLinks: [
      { platform: 'GitHub', url: '#', icon: FiGithub },
      { platform: 'LinkedIn', url: '#', icon: FiLinkedin },
      { platform: 'Twitter', url: '#', icon: FiTwitter },
    ],
    resumeUrl: '#', // Placeholder
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'], // Placeholder skills
  };

  // Define the base URL for the username link (replace with your actual domain in production)
  const brandboldBaseUrl = "brandbold/";

  return (
    <aside className={`w-1/4 p-8 border-r shadow-sm overflow-y-auto sticky top-0 h-screen transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gray-800 border-gray-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-gray-800 hover:[&::-webkit-scrollbar-thumb]:bg-gray-500' 
        : 'bg-white border-gray-200 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-emerald-500/30 [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/50'
    }`}>
      <div className="flex flex-col items-center space-y-8">
        {/* Profile Picture */}
        <div className="relative w-40 h-40 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <Image
            src={displayUser.avatarUrl}
            alt="Avatar"
            fill
            className="rounded-full border-4 border-[#10b981] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Full Name - Remains in this section */}
        <div className="text-center space-y-2 w-full">
             {/* Conditional Rendering for Full Name based on editMode */}
            {editMode ? (
                 <div className="w-full">
                      <label htmlFor="editName" className={`block text-sm font-medium text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                         <input
                            id="editName"
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                             className={`w-full mt-1 px-3 py-2 border rounded-md shadow-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500' : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500'}`}
                        />
                 </div>
            ) : (
                 <h1 className="text-3xl font-bold bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent hover:from-[#34d399] hover:to-[#10b981] transition-all duration-300">{displayUser.name}</h1>
            )}
        </div>

        {/* Username Card - New Section */}
        <Card className={`w-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 relative z-10 p-4 ${
             editMode ? '' : 'hover:border-emerald-500 transition-colors duration-300'
        }`}>
            <CardContent className="p-0 text-center">
                {editMode ? (
                    <div className="w-full">
                         <label htmlFor="editUsername" className={`block text-sm font-medium text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Username</label>
                         <input
                            id="editUsername"
                            type="text"
                            value={editUsername}
                            onChange={(e) => setEditUsername(e.target.value)}
                             className={`w-full mt-1 px-3 py-2 border rounded-md shadow-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500' : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500'}`}
                        />
                    </div>
                ) : (
                    <Link href={`/${displayUser.username}`} passHref className="text-lg font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                         {brandboldBaseUrl}{displayUser.username}
                    </Link>
                )}
            </CardContent>
        </Card>

        {/* Tagline (Using website as placeholder) */}
         {!editMode && (
             <p className={`text-base text-center leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-[#10b981] transition-colors duration-200`}>{displayUser.headline}</p>
         )}

        {/* Social Links, Resume, Skills - Hide in edit mode */}
        {!editMode && (
            <>
                <div className="w-full space-y-3">
                  {displayUser.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-gradient-to-r from-[#10b981] to-[#34d399] hover:from-[#34d399] hover:to-[#10b981] px-6 py-3 rounded-xl transition-all duration-300 text-white transform hover:scale-[1.02] hover:shadow-lg"
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{link.platform}</span>
                    </a>
                  ))}
                </div>

                <a
                  href={displayUser.resumeUrl}
                  download
                  className={`w-full flex items-center justify-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <FiDownload className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Download Resume</span>
                </a>

                <div className="w-full">
                  <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {displayUser.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-700 text-gray-300 hover:bg-[#10b981] hover:text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-[#10b981] hover:text-white'
                        } ${hoveredSkill === skill ? 'scale-110 shadow-lg' : ''}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
            </>
        )}

        {/* Action Buttons - Modify for edit mode */}
        <div className={`w-full flex items-center justify-between pt-6 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          {editMode ? (
              <>
                  {/* Save and Cancel buttons in edit mode */}
                  <button
                      onClick={handleSave}
                      className={`p-2.5 transition-colors duration-200 rounded-lg ${
                          isDarkMode 
                              ? 'text-gray-400 hover:text-green-500 hover:bg-gray-700' 
                              : 'text-gray-600 hover:text-green-500 hover:bg-gray-100'
                      }`}
                  >
                      <FiSave className="h-5 w-5" />
                  </button>
                  <button
                      onClick={toggleEditMode}
                      className={`p-2.5 transition-colors duration-200 rounded-lg ${
                          isDarkMode 
                              ? 'text-gray-400 hover:text-red-500 hover:bg-gray-700' 
                              : 'text-gray-600 hover:text-red-500 hover:bg-gray-100'
                      }`}
                  >
                      <FiX className="h-5 w-5" />
                  </button>
                   {/* Spacer to push buttons to sides */}
                  <div className="flex-grow"></div>
              </>
          ) : (
              <>
                   {/* Settings button to toggle edit mode */}
                  <button
                      onClick={toggleEditMode}
                      className={`p-2.5 transition-colors duration-200 rounded-lg ${
                          isDarkMode 
                              ? 'text-gray-400 hover:text-[#10b981] hover:bg-gray-700' 
                              : 'text-gray-600 hover:text-[#10b981] hover:bg-gray-100'
                      }`}
                  >
                      <FiSettings className="h-5 w-5" />
                  </button>
                  <button
                      onClick={toggleDarkMode}
                      className={`p-2.5 transition-colors duration-200 rounded-lg ${
                          isDarkMode 
                              ? 'text-gray-400 hover:text-[#10b981] hover:bg-gray-700' 
                              : 'text-gray-600 hover:text-[#10b981] hover:bg-gray-100'
                      }`}
                  >
                      {isDarkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
                  </button>
                  <button
                      onClick={() => {/* Add language switcher handler */}}
                      className={`p-2.5 transition-colors duration-200 rounded-lg ${
                          isDarkMode 
                              ? 'text-gray-400 hover:text-[#10b981] hover:bg-gray-700' 
                              : 'text-gray-600 hover:text-[#10b981] hover:bg-gray-100'
                      }`}
                  >
                      <FiLanguage className="h-5 w-5" />
                  </button>
                  <button
                      onClick={() => {/* Add share profile handler */}}
                      className={`p-2.5 transition-colors duration-200 rounded-lg ${
                          isDarkMode 
                              ? 'text-gray-400 hover:text-[#10b981] hover:bg-gray-700' 
                              : 'text-gray-600 hover:text-[#10b981] hover:bg-gray-100'
                      }`}
                  >
                      <FiShare2 className="h-5 w-5" />
                  </button>
              </>
          )}
        </div>
      </div>
    </aside>
  )
} 