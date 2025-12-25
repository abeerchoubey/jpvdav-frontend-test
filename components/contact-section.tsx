"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Near F.C.I. Godown, Pureni\nKatni, Madhya Pradesh - 483501",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9425163445\n07622-240812, 240741",
    },
    {
      icon: Mail,
      title: "Email",
      content: "jpvdavkatni@ediffmail.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Saturday\n8:00 AM - 3:00 PM",
    },
  ]

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Have questions? We're here to help you every step of the way
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border/50 hover:border-primary/50 transition-all group bg-card/50 backdrop-blur text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                </Card>
              )
            })}
          </div>

          {/* Map */}
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.5!2d80.3942!3d23.8344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUwJzAzLjgiTiA4MMKwMjMnMzkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
