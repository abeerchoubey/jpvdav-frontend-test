"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CreditCard, ClipboardList, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AdmissionsSection() {
  const quickLinks = [
    {
      icon: FileText,
      title: "Admission Form",
      description: "Fill out the online admission form for 2025-26",
      href: "/admission-form",
      color: "primary",
    },
    {
      icon: CreditCard,
      title: "Pay Online Fee",
      description: "Secure online fee payment portal",
      href: "/pay-fee",
      color: "secondary",
    },
    {
      icon: ClipboardList,
      title: "Fee Structure",
      description: "View detailed fee structure for 2025-26",
      href: "/fee-structure",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Book List",
      description: "Download the book list for all classes",
      href: "/book-list",
      color: "secondary",
    },
  ]

  return (
    <section id="admissions" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.75_0.18_195_/_0.03)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm text-secondary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Now Accepting Applications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Admissions <span className="text-primary">2025-26</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Join the JPV DAV family and embark on a journey of excellence
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border/50 hover:border-primary/50 transition-all group bg-card/50 backdrop-blur cursor-pointer"
                >
                  <Link href={link.href}>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${link.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}
                      >
                        <Icon className={`h-7 w-7 ${link.color === "primary" ? "text-primary" : "text-secondary"}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center justify-between">
                          {link.title}
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                  </Link>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ready to Join Us?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards a bright future. Our admissions team is here to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="neon-glow">
                <Link href="/admission-form">
                  Start Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary bg-transparent"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
