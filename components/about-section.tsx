"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Target, Heart, Sparkles } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum designed to nurture young minds and build strong foundations.",
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Focus on academic excellence alongside physical, emotional, and social growth.",
    },
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "Education without gender discrimination, fostering equality and respect for all.",
    },
    {
      icon: Sparkles,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure with smart classrooms and advanced learning tools.",
    },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              About <span className="text-primary">Our School</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Established in 1998 in the historic city of Katni, Madhya Pradesh
            </p>
          </div>

          {/* School Description Card */}
          <Card className="p-8 md:p-12 mb-12 border-border/50 bg-card/50 backdrop-blur">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                The <span className="text-foreground font-semibold">JPV DAV Public School, Katni (MP)</span>,
                established in the year 1998, has been imparting education to the students of this historic city without
                any gender discrimination. Our school is situated in{" "}
                <span className="text-foreground font-semibold">Pureni near F.C.I. Godown</span>, providing a conducive
                learning environment for students.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                We believe in nurturing not just academic excellence but also character, values, and life skills that
                prepare students for success in an ever-changing world.
              </p>
            </div>
          </Card>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border/50 hover:border-primary/50 transition-all group bg-card/50 backdrop-blur"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
