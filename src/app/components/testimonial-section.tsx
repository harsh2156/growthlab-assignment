"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  id: number
  quote: string
  highlightQuote: string
  author: string
  position: string
  avatar: string
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      highlightQuote: "Beautifully showcases our best videos...",
      quote:
        "\"Media+ has helped our own LIVE FILM. It's exactly the OTT platform I've been looking for: a beautiful, lightweight solution that's professionally supported by real dev, design, UI, animations, and more—all at a fraction of the cost. Plus, I can embed the solution I want for our audience.\"",
      author: "Brian C. Behike",
      position: "Founder & CEO, Lean Next Education, Inc.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    // Add more testimonials as needed
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full bg-orange-300 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <h3 className="text-white text-sm md:text-base font-medium">Hear it from a Customer</h3>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
            &quot;{currentTestimonial.highlightQuote}&quot;
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            </button>

            <div className="flex flex-col items-center px-10 md:px-16">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-6 relative">
                <Image
                  src="/profile.png"
                  alt={currentTestimonial.author}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-2 border-white"
                  style={{ objectPosition: "25% 25%" }}
                />
              </div>

              <div className="text-white text-center mb-6">
                <p className="text-sm md:text-base mb-6">{currentTestimonial.quote}</p>
                <p className="font-semibold">{currentTestimonial.author}</p>
                <p className="text-sm">{currentTestimonial.position}</p>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button className="mt-8 bg-white text-gray-700 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            People&apos;s Choice
          </button>
        </div>
      </div>
    </section>
  )
}
