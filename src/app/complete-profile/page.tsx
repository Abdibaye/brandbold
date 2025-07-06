'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUserProfileStore } from '@/store/userProfileStore';
import { Database } from '@/libs/database.types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Phone, Sparkles } from "lucide-react";

type Profile = Database['public']['Tables']['profiles']['Row'];

export default function CompleteProfilePage() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const { profile, loading, error, fetchProfile, updateProfile } = useUserProfileStore();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // Add more state variables for other profile fields

  useEffect(() => {
    async function initializeProfile() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login');
        return;
      }

      await fetchProfile(user.id);
    }

    initializeProfile();
  }, [supabase, router, fetchProfile]);

  useEffect(() => {
    if (profile) {
      setUsername(profile.username || '');
      setFullName(profile.full_name || '');
      setPhoneNumber(profile.phone_number || '');
    }
  }, [profile]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!profile) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    try {
      await updateProfile(user.id, {
        username: username,
        full_name: fullName,
        phone_number: phoneNumber,
      });
      router.push('/dashboard');
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Could not load profile.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
       {/* Background Elements - Assuming these are in a layout or higher level component */}
       {/* You might want to remove or keep if this page has a different background */}
       {/* 
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      */}

      <Card className="w-full max-w-md bg-slate-800/80 backdrop-blur-sm border-slate-700/50 relative z-10">
        <CardHeader className="space-y-2 pb-4 text-center">
           <div className="flex items-center justify-center mb-1">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
            Complete Your Profile
          </CardTitle>
           <p className="text-slate-400 text-sm">
            Welcome, {profile.username || 'New User'}! Please provide the remaining details.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Card - Distinct appearance */}
            <Card className="bg-slate-700/50 border border-slate-600 p-4">
                <div className="space-y-1.5">
                  <Label htmlFor="username" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Username
                  </Label>
                   {/* You can add brandbold/ prefix here if desired, or handle display in backend/frontend when fetching */}
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-emerald-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Enter your username"
                  />
                </div>
            </Card>
            
            {/* Full Name and Phone Number fields */}
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                 <User className="w-4 h-4" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                 <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                 className="w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>
            {/* Add more fields as needed */}
            <Button type="submit" disabled={loading} 
                 className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white py-5 text-lg rounded-xl shadow-lg shadow-emerald-600/20 border border-emerald-500/20 transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving Profile...' : 'Save Profile'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 