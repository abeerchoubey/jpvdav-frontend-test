"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.75_0.18_195_/_0.05)_0%,_transparent_50%)]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Admissions Open for 2025-26
          </div>

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight text-balance animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Shaping Future <span className="text-primary">Leaders</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            JPV DAV Public School, Katni — Delivering excellence in education since 1998. A place where young minds
            flourish and dreams take flight.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild size="lg" className="neon-glow text-base">
              <Link href="#admissions">
                Apply for Admission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-primary/30 hover:border-primary bg-transparent"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>

          {/* Statistics */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">27+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Academic Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
