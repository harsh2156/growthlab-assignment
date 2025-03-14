"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

export default function MediaPlusSection() {
  const [expandedItem, setExpandedItem] = useState(1)

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  const features = [
    {
      id: 0,
      title: "Curate your video media collection with an AI powered library",
      content: "",
    },
    {
      id: 1,
      title: "Build, Brand & Publish your Media+",
      content:
        "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of choice.",
    },
    {
      id: 2,
      title: "Gate your media, capture leads & connect your CRM - it's easy",
      content: "",
    },
    {
      id: 3,
      title: "Track your views - with detailed analytics.",
      content: "",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-medium mb-2">Why choose Media+?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-2xl mx-auto">
          Media+ turns video engagement
          <br />
          into customer conversions
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleItem(feature.id)}
                className="flex justify-between items-center w-full text-left py-2"
              >
                <span className="font-medium text-gray-700">{feature.title}</span>
                {expandedItem === feature.id ? (
                  <Minus className="h-5 w-5 text-gray-400" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {expandedItem === feature.id && feature.content && (
                <div className="mt-2 text-gray-600">{feature.content}</div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-100 rounded-lg p-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assignment-media-engagement-section-5TyHzxZp38VQQYJ4nAI2bzNKPi1B0H.png"
            alt="Media+ dashboard interface"
            width={600}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

