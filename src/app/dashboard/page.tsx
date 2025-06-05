'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/libs/useAuth'
import { Brain, Zap, Shield, LogOut, Settings, User, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
                Brandbold
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-300">{user.email}</span>
              <Button
                onClick={() => signOut()}
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-emerald-400" />
                <span>Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/20">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-white">{user.email}</h3>
                  <p className="text-slate-400 text-sm">Member since {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-slate-700/50 hover:bg-slate-700 text-white">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  View Your Profile
                </Button>
                <Button className="w-full justify-start bg-slate-700/50 hover:bg-slate-700 text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>Profile Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">0</div>
                  <div className="text-sm text-slate-400">Profile Views</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">0</div>
                  <div className="text-sm text-slate-400">Connections</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message */}
        <div className="mt-8">
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200 mb-4">
                Welcome to Your Dashboard
              </h2>
              <p className="text-slate-400">
                This is your personal space to manage your Brandbold profile. Start by customizing your profile
                and sharing your unique link with the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
