import Image from "next/image"
import { Library, Cpu, Palette } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Library className="w-6 h-6 text-green-600" />,
      title: "Media Library",
      items: [
        "25 video uploads included, 1 Media site with options to add more",
        "Upload videos directly from your computer",
        "Import past event recordings in a few clicks",
        "Effortlessly set up new events or import details",
      ],
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-600" />,
      title: "Automated process",
      items: [
        "AI-generated metadata",
        "AI-generated thumbnails, transcripts & speaker bios",
        "AI-generated tags by category & audience",
        "Auto-transfer videos from HubSpot and digital events to Media+",
      ],
    },
    {
      icon: <Palette className="w-6 h-6 text-green-600" />,
      title: "Branding & Personalization",
      items: [
        "Use your logo and accent color, choose light or dark themes",
        "Create a unique media site URL with your own domain",
        "Use preference forms to deliver tailored content to your audience",
      ],
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#c2d730]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d7e44d] rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#d7e44d] rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">Media+ Features</h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative order-2 lg:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assignment-feautre-section-cL7kA7Zpo8Yl0ZHCYYYekcfoxA8SQV.png"
              alt="Person pointing at Media+ interface"
              width={600}
              height={400}
              className="rounded-lg"
              style={{ objectPosition: "0 0", objectFit: "contain" }}
            />
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-6">
              <Image
                src="/assignment-image-one.png"
                alt="Media+ interface"
                width={600}
                height={400}
                className="rounded-lg"
                style={{ objectPosition: "0 100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

