"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export function PrincipalMessage() {
  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Principal's <span className="text-primary">Message</span>
            </h2>
          </div>

          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 p-8 md:p-12">
              {/* Principal Image */}
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-xl overflow-hidden border-2 border-primary/30">
                  <Image
                    src="https://jpvdavps.ac.in/File/287/Message_97ab55a4-1b5e-45f5-8785-ec4c52666d96_Principal.jpg"
                    alt="Principal of JPV DAV Public School"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Message Content */}
              <div className="flex flex-col justify-center space-y-6">
                <Quote className="h-12 w-12 text-primary/30" />

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    An educational institution is just not about bricks, mortar and concrete but about building
                    character, enriching minds and about enriching experiences that last a lifetime.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We recognize that parents are the first educators and we work in partnership with them to ensure the
                    best possible outcomes for every child. Our dedicated team of educators is committed to fostering a
                    love of learning and helping each student reach their full potential.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Together, we create an environment where students feel valued, supported, and inspired to excel in
                    all aspects of their lives.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground text-lg">Principal</div>
                  <div className="text-sm text-muted-foreground">JPV DAV Public School, Katni</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
