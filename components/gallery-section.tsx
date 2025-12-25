"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function GallerySection() {
  const photos = [
    {
      src: "https://jpvdavps.ac.in/File/287/Slider_861023b8-219b-4a91-90dd-e28bd391c0ed_DSC_0874.JPG",
      alt: "School Building Night View",
      span: "md:col-span-2",
    },
    {
      src: "https://jpvdavps.ac.in/File/287/Slider_9f642610-9f48-4f9a-8cb9-ddbfbd8cbfd1_DSC_0863.JPG",
      alt: "School Campus",
    },
    {
      src: "https://jpvdavps.ac.in/File/287/Slider_aea571ee-c713-4963-b1c7-ff7e8f8f6e5b_DSC_8312.JPG",
      alt: "Annual Function 2019",
    },
    {
      src: "https://jpvdavps.ac.in/File/287/Slider_b5debb0b-a256-4445-8edc-0f7d53f8f145_DSC_9265.JPG",
      alt: "Silver Jubilee Celebration",
    },
    {
      src: "https://jpvdavps.ac.in/File/287/Slider_6a62bb59-e117-4272-a40e-03e8d17b3f05_DSC_9241.JPG",
      alt: "Silver Jubilee Celebration Stage",
      span: "md:col-span-2",
    },
  ]

  return (
    <section id="gallery" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Capturing moments of joy, learning, and celebration
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-border/50 hover:border-primary/50 transition-all group ${photo.span || ""}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button variant="outline" className="border-primary/30 hover:border-primary bg-transparent">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
