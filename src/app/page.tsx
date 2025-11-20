"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mic, BarChart3, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              New: Early Sounds Collection
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Empowering Your Child's <span className="text-primary">Voice</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Professional-grade speech practice tools designed for home use.
              Bridge the gap between therapy sessions with engaging, evidence-based exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
                <Link href="/child">
                  Start Practice Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white">
                <Link href="/parent">
                  Parent Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Therapists Recommend Us</h2>
            <p className="mt-4 text-lg text-slate-600">Built with clinical best practices in mind.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mic className="h-8 w-8 text-blue-500" />}
              title="Voice Recognition"
              description="Instant feedback on pronunciation using advanced speech recognition technology tailored for children."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-green-500" />}
              title="Progress Tracking"
              description="Detailed analytics to monitor improvement over time and identify areas needing focus."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-pink-500" />}
              title="Engaging Content"
              description="Fun, colorful, and age-appropriate exercises that keep children motivated to practice."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Structured for Success</h2>
              <ul className="space-y-4">
                <ListItem>Curriculum based on MacArthur-Bates CDI</ListItem>
                <ListItem>Customizable word lists for individual needs</ListItem>
                <ListItem>Visual and auditory modeling</ListItem>
                <ListItem>Secure and private data handling</ListItem>
              </ul>
            </div>
            <div className="relative h-96 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-slate-900">#1 Home Practice App</h3>
                <p className="text-slate-500 mt-2">Trusted by over 1,000 families</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
      <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center text-lg text-slate-700">
      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
      {children}
    </li>
  );
}
