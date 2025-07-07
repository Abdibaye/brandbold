"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Sparkles, Zap, Eye, ArrowRight, LinkIcon, Copy, User, Briefcase, FolderOpen, Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BrandboldLanding() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-10 px-4 z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-emerald-500/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-10 h-10 border border-emerald-500/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-emerald-500/20 rounded-full"></div>

          {/* Main Value Proposition */}
          <div className="text-center mb-24 relative">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
              <LinkIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">One Link, Your Entire Brand</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              <span>Brand</span>
              <span className="text-emerald-400">bold</span>
            </h1>

            <p className="text-xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create a <span className="text-emerald-400 font-semibold">bold, customizable profile</span> with your bio,
              skills, and projects — all shareable through one clean link
            </p>

            {/* URL Example */}
            <div className="bg-gradient-to-r from-slate-800/90 to-slate-800/70 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-6 mb-12 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-slate-400 text-sm">Your link:</div>
                <div className="flex items-center gap-2 bg-slate-700/80 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-emerald-400 font-mono">brandbold.com/</span>
                  <span className="text-white font-mono">abdibaye</span>
                  <Copy className="w-4 h-4 text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-emerald-600/20 border border-emerald-500/20 transition-all duration-300"
                onClick={() => router.push('/signup')}
              >
                <Zap className="w-5 h-5 mr-3" />
                Create Your Profile
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-blue-600/20 border border-blue-500/20 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-3" />
                See Live Example
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300">Professional Bio</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-600/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Skills Showcase</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                <FolderOpen className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300">Project Portfolio</span>
              </div>
            </div>
          </div>

          {/* Live Example Section */}
          <div className="mb-24 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-emerald-500/10 rounded-full"></div>
            <div className="absolute -bottom-20 -right-10 w-60 h-60 border border-blue-500/10 rounded-full"></div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
                Live Example
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-slate-400">Visit:</span>
                <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-5 py-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-emerald-400 font-mono">brandbold.com/abdibaye</span>
                </div>
              </div>
              <p className="text-slate-400 text-lg">{"Here's what Andrew Green's Brandbold profile looks like"}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Profile Preview */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800/80 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/images/dashboard.png"
                    alt="brandbold.com/abdibaye - Andrew Green's professional profile"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/80 shadow-lg">
                      <span className="text-emerald-400 text-sm font-mono">brandbold.com/abdibaye</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Content Breakdown */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
                      What's in Alex's Profile:
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-5 p-5 bg-gradient-to-r from-blue-600/10 to-blue-600/5 backdrop-blur-sm rounded-xl border border-blue-500/20 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-2">Professional Bio</h4>
                        <p className="text-slate-300">8+ years experience, 2 successful startups, CTO at An-Tropic</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 p-5 bg-gradient-to-r from-emerald-600/10 to-emerald-600/5 backdrop-blur-sm rounded-xl border border-emerald-500/20 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-600/20">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-2">Skills & Expertise</h4>
                        <p className="text-slate-300">Full Stack Development, Tech Entrepreneurship, Team Leadership</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 p-5 bg-gradient-to-r from-purple-600/10 to-purple-600/5 backdrop-blur-sm rounded-xl border border-purple-500/20 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-600/20">
                        <FolderOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-2">Project Portfolio</h4>
                        <p className="text-slate-300">Startup projects, engineering solutions, team achievements</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 p-5 bg-gradient-to-r from-orange-600/10 to-orange-600/5 backdrop-blur-sm rounded-xl border border-orange-500/20 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-600/20">
                        <LinkIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-2">Social Links</h4>
                        <p className="text-slate-300">GitHub, LinkedIn, Twitter - all in one place</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-5 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                    <p className="text-emerald-400 font-medium flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      All of this accessible through one simple link: brandbold.com/abdibaye
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/90 to-slate-900 z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              How Brandbold Works
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Get your professional link in minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-center relative overflow-hidden h-full transform group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-600/20 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Choose Your Username</h3>
                  <p className="text-slate-300 mb-6">Pick your unique username to create your personal link</p>
                  <div className="bg-slate-700/80 backdrop-blur-sm rounded-lg px-4 py-3 text-sm shadow-inner">
                    <span className="text-emerald-400 font-mono">brandbold.com/</span>
                    <span className="text-white font-mono">yourname</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-center relative overflow-hidden h-full transform group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-600/20 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Customize Your Profile</h3>
                  <p className="text-slate-300 mb-6">
                    Add your bio, skills, projects, and social links with our easy editor
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-600/20 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-600/20 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      <FolderOpen className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-purple-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-center relative overflow-hidden h-full transform group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300"></div>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-purple-600/20 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Share Your Link</h3>
                  <p className="text-slate-300 mb-6">
                    Share your clean, professional link anywhere - email, social media, business cards
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white border-none shadow-lg shadow-purple-600/20"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              Why Choose Brandbold?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need for professional personal branding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LinkIcon className="w-6 h-6 text-white" />,
                color: "emerald",
                title: "Clean, Memorable Links",
                description: "brandbold.com/yourname - easy to remember and share",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-white" />,
                color: "blue",
                title: "Fully Customizable",
                description: "Make it yours with custom colors, layouts, and content",
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                color: "purple",
                title: "Lightning Fast",
                description: "Create and update your profile in minutes, not hours",
              },
              {
                icon: <Eye className="w-6 h-6 text-white" />,
                color: "orange",
                title: "Professional Design",
                description: "Beautiful, mobile-friendly profiles that impress",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                color: "pink",
                title: "All-in-One Platform",
                description: "Bio, skills, projects, and social links in one place",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-white" />,
                color: "teal",
                title: "Career Focused",
                description: "Built specifically for professional personal branding",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-2 bg-gradient-to-r from-${feature.color}-600/20 to-${feature.color}-600/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 relative z-10 h-full transform group-hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-700 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-${feature.color}-600/20 transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/90 to-slate-900 z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              What Our Users Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "UX Designer",
                quote:
                  "Brandbold helped me showcase my portfolio in a professional way that impressed my clients. The clean link is so easy to share!",
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                quote:
                  "I love how Brandbold combines all my projects and skills in one place. It's become my go-to professional identity online.",
              },
              {
                name: "Priya Sharma",
                role: "Marketing Consultant",
                quote:
                  "The customization options are amazing! I was able to create a profile that perfectly represents my personal brand.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-center relative overflow-hidden h-full transform group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 inline-block mx-0.5">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              Ready for Your Clean Link?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join professionals who showcase their brand with brandbold.com/yourname
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white px-12 py-7 text-lg rounded-xl shadow-lg shadow-emerald-600/20 border border-emerald-500/20 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-3" />
                Claim Your Username
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white px-12 py-7 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-3" />
                View More Examples
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-5 h-5 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-5 h-5 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-5 h-5 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span>Get your link in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-12 px-4 z-10">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-400">
            <span>Brand</span>
            <span className="text-emerald-400">bold</span>
          </div>
          <p className="text-slate-400 mb-8">Create your bold professional brand.</p>
          <div className="flex justify-center gap-6 mb-8">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800/50 hover:text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800/50 hover:text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800/50 hover:text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Button>
          </div>
          <div className="border-t border-slate-800/50 pt-8">
            <p className="text-sm text-slate-500">&copy; 2024 Brandbold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
