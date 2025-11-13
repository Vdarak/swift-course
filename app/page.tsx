/**
 * PUBLIC HOMEPAGE
 * Main landing page for Swiftcourse with course information and CTAs
 */

"use client"

import Link from "next/link"
import { PublicHeader } from "@/components/layout/public-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Brain, Target, TrendingUp, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-green/10 via-emerald-50 to-brand-orange/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Why <span className="text-brand-orange">Personality</span> Matters in{" "}
              <span className="text-brand-green">Sales</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Strengthen entrepreneurial and sales success through personality trait assessment with the Big 5 Model
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-[#e64a19] text-white text-lg px-8">
                <Link href="/demo">Try Module 0</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">About Swiftcourse</h2>
              <p className="text-xl text-muted-foreground">
                Everything we do is designed to strengthen entrepreneurial and sales success through personality trait
                assessment
              </p>
            </div>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  Our application of the Big 5 Personality Assessment identifies specific strategies entrepreneurs
                  should leverage to increase their success. Additionally, The Big 5 identifies where your personality
                  traits can hold you back.
                </p>
                <p className="text-lg leading-relaxed">
                  So, if you are the type of person who always looks for a competitive edge, then a look inside yourself
                  may be the answer.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-brand-green mb-2" />
                  <CardTitle>Science-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built on the Big 5 personality model, the most scientifically validated framework in psychology
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-brand-orange mb-2" />
                  <CardTitle>Actionable Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get specific strategies tailored to your personality traits to maximize your sales potential
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-brand-green mb-2" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn from neuroscience research and proven techniques used by top sales professionals
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-gradient-to-br from-brand-green/5 to-brand-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-center">The Problem</h2>
              <Card className="border-2 border-destructive/20">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg">
                    Most sales training programs focus on techniques and scripts, but they ignore a fundamental truth:
                  </p>
                  <p className="text-xl font-semibold text-brand-orange">
                    Your personality traits significantly influence your sales success
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Generic advice that doesn&apos;t fit your natural strengths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Blind spots that hold you back without you realizing it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Struggling to maintain consistency in your sales approach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-center">Our Solution</h2>
              <Card className="border-2 border-brand-green/20">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg">
                    Swiftcourse uses the Big 5 personality model to create a personalized action plan that works with
                    your natural traits, not against them.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Identify your strengths:</strong> Discover which personality traits naturally support
                        your sales success
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Address your challenges:</strong> Learn specific strategies to overcome personality-based
                        obstacles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Build sustainable habits:</strong> Create sales practices that align with who you are
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Neuroscience-backed approach:</strong> Apply research on goal-seeking, growth mindset,
                        and habit formation
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">What You&apos;ll Learn</h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive course covering personality assessment, neuroscience, and practical application
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green/10 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-brand-green" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Module 0: Introduction to Swiftcourse</CardTitle>
                      <CardDescription className="text-base">
                        Understanding the Big 5 personality model and how it applies to sales success
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-6">
                    <li>• The science behind personality-based sales strategies</li>
                    <li>• Introduction to the Big 5 OCEAN model</li>
                    <li>• How personality traits affect your sales approach</li>
                    <li>• Creating your personalized action plan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-orange/10 p-3 rounded-lg">
                      <Brain className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Module 1: Neurobiology & Growth Mindset</CardTitle>
                      <CardDescription className="text-base">
                        The neuroscience of goal-seeking and developing a growth mindset for sales
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-6">
                    <li>• Neural mechanisms of goal-seeking behavior</li>
                    <li>• Developing a growth mindset vs. fixed mindset</li>
                    <li>• Managing stress for peak performance</li>
                    <li>• MAD Analysis: Motivation, Ability, and Discipline</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green/10 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-brand-green" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Module 2: Learning, Habits & Measurement</CardTitle>
                      <CardDescription className="text-base">
                        Building sustainable habits and measuring your progress effectively
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-6">
                    <li>• The science of learning and neuroplasticity</li>
                    <li>• Creating context-independent habits</li>
                    <li>• The 21-day habit formation protocol</li>
                    <li>• Overcoming perfectionism and self-judgment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-8">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-8">
                <Link href="/demo">Start With Module 0</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-brand-green/5 to-brand-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Course Pricing</h2>
              <p className="text-xl text-muted-foreground">
                Invest in yourself and unlock your full sales potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Demo Option */}
              <Card className="border-2 border-border">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">Module 0</CardTitle>
                  <div className="text-5xl font-bold text-brand-green mb-4">$0</div>
                  <CardDescription className="text-base">
                    Try Module 0 to experience our approach
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Full access to Module 0: Introduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Interactive personality quiz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Introduction to Big 5 model</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>AI Help feature included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Full Course */}
              <Card className="border-2 border-brand-orange relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BEST VALUE
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">Full Course</CardTitle>
                  <div className="text-5xl font-bold text-brand-orange mb-4">$497</div>
                  <CardDescription className="text-base">
                    Complete access to all modules and features
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>All 3 comprehensive modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>Personalized Big 5 assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>Custom action plan based on your personality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>Interactive exercises and quizzes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>AI Help assistant throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>Lifetime access to course materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Transform Your Sales Approach?</h2>
            <p className="text-xl text-muted-foreground">
              Start with Module 0 to experience how personality-based training can give you a competitive edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-[#e64a19] text-white text-lg px-8">
                <Link href="/demo">Try Module 0 Now</Link>
              </Button>
              <Button
                asChild size="lg" variant="outline" className="text-lg px-8"
              >
                <Link href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-brand-green/10 to-brand-orange/10 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-3xl">
                <span className="font-serif font-light italic text-brand-orange">Swift </span>
                <span className="font-heading font-light text-brand-green">Course</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Strengthen entrepreneurial and sales success through personality trait assessment
            </p>
            <p className="text-sm text-muted-foreground pt-4">
              © {new Date().getFullYear()} Swiftcourse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
