import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MediaLibrary() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* Left side with gradient background */}
          <div className="bg-gradient-to-r from-[#e88e65] to-[#f5a676] p-8 md:p-12 flex flex-col justify-center md:w-1/2">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Get your media library up and running</h1>
            <p className="text-white mb-6">
              Kickstart your media library with up to 25 high-quality videos. Upgrade anytime with our flexible add-on
              plans to upload additional videos.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-white mr-2" />
                <span className="text-white">25 media upload credits & add-ons</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-white mr-2" />
                <span className="text-white">1 media site credits & add-ons for more</span>
              </div>
            </div>
            <div>
              <Button className="bg-white text-gray-700 hover:bg-gray-100 font-medium px-6">Get Pricing</Button>
            </div>
          </div>

          {/* Right side with dashboard mockup */}
          <div className="bg-white p-8 md:p-12 flex items-center justify-center md:w-1/2">
            <div className="w-full max-w-md">
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                {/* Dashboard header */}
                <div className="bg-purple-600 p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-4 w-4 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">Welcome to webinar hub!</div>
                  <h3 className="text-sm font-bold mb-1">
                    The Future of Cybersecurity: Trends and Predictions for 2023
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    In this webinar, experts discuss the future of cybersecurity and the emerging trends that will shape
                    the industry in 2023 and beyond. Learn about the latest threats, defensive strategies, and
                    innovations in security technology.
                  </p>

                  <div className="bg-purple-600 text-white text-xs py-1 px-3 rounded-full inline-block mb-6">
                    Watch now
                  </div>

                  <div className="mb-2">
                    <div className="text-sm font-medium mb-2">Picks for you</div>
                    <div className="grid grid-cols-3 gap-2">
                      {/* Media thumbnails */}
                      <div className="rounded-lg overflow-hidden border border-gray-100">
                        <div className="aspect-video bg-gray-100 relative">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assignment-media-library-zrtkPE148RQbUESTErWx432y6d3qSu.png"
                            alt="Media thumbnail"
                            fill
                            className="object-cover opacity-0"
                          />
                        </div>
                        <div className="p-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full mb-1"></div>
                          <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>

                      <div className="rounded-lg overflow-hidden border border-gray-100">
                        <div className="aspect-video bg-gray-100"></div>
                        <div className="p-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full mb-1"></div>
                          <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>

                      <div className="rounded-lg overflow-hidden border border-gray-100">
                        <div className="aspect-video bg-gray-100"></div>
                        <div className="p-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full mb-1"></div>
                          <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

