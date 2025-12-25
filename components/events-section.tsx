"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function EventsSection() {
  const events = [
    {
      title: "Independence Day",
      description:
        "The Independence Day of India, celebrated religiously throughout the country on the 15th of August every year, holds tremendous significance.",
      image: "https://jpvdavps.ac.in/File/287/Event_01a942a9-ac29-44e1-b68f-ae773f57778d_1.%20Independence%20Day.png",
      date: "August 15",
    },
    {
      title: "International Yoga Day",
      description:
        "The International Day of Yoga is marked annually on June 21. An invaluable gift of ancient Indian tradition.",
      image: "https://jpvdavps.ac.in/File/287/Event_65d54b30-c734-476b-977b-d9858b555f0b_2.%20Yoga%20Day.png",
      date: "June 21",
    },
    {
      title: "Republic Day",
      description:
        "Republic Day is celebrated to commemorate the day when the country's constitution came into effect, establishing it as a republic.",
      image: "https://jpvdavps.ac.in/File/287/Event_ff345503-50e3-41b2-98be-2b1fb5805d45_3.%20Republic%20Day.jpg",
      date: "January 26",
    },
  ]

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              School <span className="text-primary">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Celebrating our rich cultural heritage and fostering community spirit
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-all group bg-card/50 backdrop-blur"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button variant="outline" className="border-primary/30 hover:border-primary bg-transparent">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
