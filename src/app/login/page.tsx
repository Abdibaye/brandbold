"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.user) {
        router.push('/dashboard')
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Back Button */}
      <div className="relative z-10 pt-6 px-4">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <Card className="w-full max-w-md bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
          <CardHeader className="space-y-2 pb-4">
            <div className="flex items-center justify-center mb-1">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
              Welcome Back
            </CardTitle>
            <p className="text-slate-400 text-center text-sm">
              Sign in to access your Brandbold profile
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-400">
                  {error}
                </div>
              )}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-end">
                <Link href="/forgot-password" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white py-5 text-lg rounded-xl shadow-lg shadow-emerald-600/20 border border-emerald-500/20 transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-slate-400 text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Create one
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
