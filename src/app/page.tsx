import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./components/mobile-menu"
import MediaPlusSection from "./components/media-plus-section"
import TestimonialSection from "./components/testimonial-section"
import OttPlatformSection from "./components/ott-platform-section"
import FeaturesSection from "./components/features-section"
import MediaLibrary from "./components/media-library"
import { FAQSection } from "./components/faq-section"
import { DemoSection } from "./components/demo-section"
import Footer from "./components/footer"

export default function Home() {
  const faqData = [
    {
      question: "How is Media+ beneficial for Marketers?",
      answer:
        "Media+ provides marketers with powerful tools to create, manage, and analyze video content. It helps streamline your marketing workflow, increase engagement, and provide valuable insights into viewer behavior.",
    },
    {
      question: "How does Media+ improve user retention, engagement & help in generating more leads?",
      answer:
        "Media+ offers interactive video features, personalized content recommendations, and detailed analytics that help keep users engaged. The platform's lead capture forms and CTA overlays help convert viewers into leads, while its retention tools encourage repeat visits.",
    },
    {
      question: "How does Media+ result in better brand visibility?",
      answer:
        "Media+ enhances brand visibility through SEO-optimized video hosting, social sharing capabilities, and customizable embedding options. Your videos are also indexed properly, making them more discoverable across the web.",
    },
    {
      question: "How does Media+ simplify video content management?",
      answer:
        "Media+ provides a centralized dashboard for uploading, organizing, and managing all your video content. Features like batch uploading, tagging, and categorization make it easy to maintain a large video library efficiently.",
    },
    {
      question: "How does Media+ use AI to improve content discovery?",
      answer:
        "Media+ leverages AI to analyze viewer behavior and content characteristics to provide personalized recommendations. The AI also helps with automatic tagging, transcription, and content categorization to improve searchability.",
    },
    {
      question: "What kind of analytics does Media+ provide?",
      answer:
        "Media+ offers comprehensive analytics including view counts, engagement metrics, drop-off points, demographic information, and conversion tracking. These insights help you understand your audience and optimize your content strategy.",
    },
    {
      question: "Can Media+ integrate with my existing MAP tools like Hubspot?",
      answer:
        "Yes, Media+ seamlessly integrates with popular marketing automation platforms including Hubspot, Marketo, Salesforce, and more. This allows you to incorporate video data into your existing marketing workflows.",
    },
    {
      question: "How many videos can I host in one Media+ site?",
      answer:
        "The number of videos you can host depends on your subscription plan. Basic plans start with 25 videos, while enterprise plans offer unlimited video hosting. You can always upgrade your plan as your needs grow.",
    },
  ]
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between sticky top-0 bg-white z-50">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div className="h-8 w-8 bg-gray-800 flex items-center justify-center text-white">
              <span className="font-bold">⋮⋮</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              Product <span className="ml-1">▼</span>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              Customers <span className="ml-1">▼</span>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              Resources <span className="ml-1">▼</span>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              About us <span className="ml-1">▼</span>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Plans
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 border border-gray-200 rounded-full px-4 sm:px-6 py-1.5"
            >
              Login
            </Link>
            <Link
              href="#"
              className="ml-2 sm:ml-4 bg-[#e97c52] text-white rounded-full px-3 sm:px-4 py-1.5 hover:bg-[#d86c42]"
            >
              Request a Demo
            </Link>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 pt-12 pb-20">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
              Unlock video's full potential;
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-[#e97c52]">half of marketers</span> haven't yet!
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <div className="hidden md:block h-2 w-2 bg-gray-300 rounded-full"></div>
              <div className="hidden md:block h-0.5 w-16 bg-gray-300"></div>
              <div className="bg-[#ffeee8] text-[#e97c52] px-4 py-1 rounded-full">Media+</div>
              <span className="my-2 md:my-0 md:mx-3 text-gray-500">=</span>
              <div className="flex items-center">
                <span className="font-medium">Engage</span>
                <span className="ml-2 text-xl">🤩</span>
              </div>
              <div className="hidden md:block h-0.5 w-16 bg-gray-300 ml-4"></div>
              <div className="hidden md:block h-2 w-2 bg-gray-300 rounded-full"></div>
            </div>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Netflix-style video discovery for your prospects that turns viewers into customers
            </p>

            <Link
              href="#"
              className="inline-block bg-[#e97c52] text-white rounded-full px-6 py-3 font-medium hover:bg-[#d86c42]"
            >
              Request a Demo
            </Link>
          </div>

          {/* Platform Preview */}
          <div className="relative max-w-5xl mx-auto mt-8 md:mt-16">
            <div className="absolute -left-4 top-1/4 hidden md:block">
              <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
              <div className="h-24 w-0.5 bg-blue-300 ml-0.5"></div>
              <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=1000"
                  width={1000}
                  height={600}
                  alt="Platform Preview"
                  className="w-full"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent">
                  <div className="p-4 sm:p-8 md:p-12 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex space-x-3 sm:space-x-6 mb-4 sm:mb-8 text-sm sm:text-base">
                        <div className="text-teal-400 font-medium border-b-2 border-teal-400 pb-1">Home</div>
                        <div className="text-gray-400">Upcoming</div>
                        <div className="text-gray-400">On-Demand</div>
                        <div className="ml-auto text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-6 md:mt-12 lg:mt-24">
                        <p className="text-white text-xs sm:text-sm mb-2">Welcome to webinar hub!</p>
                        <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                          AI in Marketing: Revolutionizing
                          <br className="hidden sm:block" />
                          Customer Engagement
                        </h2>
                        <p className="text-gray-300 text-xs sm:text-sm max-w-md mt-2 sm:mt-4">
                          Discover how AI is transforming the way businesses interact with customers, offering
                          personalized experiences at scale. Learn about the latest AI-driven tools and techniques that
                          marketers use to understand customer behavior, predict needs, and deliver targeted content in
                          real time.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <button className="bg-teal-400 text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium hover:bg-teal-300 transition-colors">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfected by Section */}
        <section className="bg-[#e97c52] py-8 md:py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-white text-center text-base md:text-lg mb-6 md:mb-8">Perfected by</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-center justify-items-center">
              <div className="w-32 md:w-36">
                <Image
                  src="/assignment-image-one.png?height=40&width=120"
                  width={120}
                  height={40}
                  alt="gen NEXT"
                  className="w-full"
                />
              </div>
              <div className="w-32 md:w-36">
                <Image
                  src="/assignement-image-two.png?height=40&width=120"
                  width={120}
                  height={40}
                  alt="aqora"
                  className="w-full"
                />
              </div>
              <div className="w-32 md:w-36">
                <Image
                  src="/assignment-image-three.png?height=40&width=120"
                  width={120}
                  height={40}
                  alt="azuga"
                  className="w-full"
                />
              </div>
              <div className="w-32 md:w-36">
                <Image
                  src="/assignement-image-two.png?height=40&width=120"
                  width={120}
                  height={40}
                  alt="ignition+"
                  className="w-full"
                />
              </div>
              <div className="w-32 md:w-36 col-span-2 md:col-span-1">
                <Image
                  src="/assignment-image-three.png?height=40&width=120"
                  width={120}
                  height={40}
                  alt="EQS"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Video Management Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <p className="text-[#e97c52] mb-2">Elevate your video strategy</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Seamless Video Management
              </h2>
              <p className="text-gray-600">Transform how you engage with your audience using Media+</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {/* Feature Box 1 */}
              <div className="bg-[#fff5f2] p-6 md:p-8 rounded-lg text-center">
                <h3 className="text-[#e97c52] text-3xl md:text-4xl font-bold mb-2">2.5X</h3>
                <h4 className="text-gray-800 text-lg md:text-xl font-medium mb-4">Lead Generation</h4>
                <p className="text-gray-600 text-sm md:text-base">Boost watch time and drive more leads</p>
              </div>

              {/* Feature Box 2 */}
              <div className="bg-[#fff5f2] p-6 md:p-8 rounded-lg text-center">
                <h3 className="text-[#e97c52] text-3xl md:text-4xl font-bold mb-2">3X</h3>
                <h4 className="text-gray-800 text-lg md:text-xl font-medium mb-4">Publish Content Faster with AI</h4>
                <p className="text-gray-600 text-sm md:text-base">Tailor made to get more views</p>
              </div>

              {/* Feature Box 3 */}
              <div className="bg-[#fff5f2] p-6 md:p-8 rounded-lg text-center">
                <h3 className="text-[#e97c52] text-3xl md:text-4xl font-bold mb-2">30min</h3>
                <h4 className="text-gray-800 text-lg md:text-xl font-medium mb-4">Setup</h4>
                <p className="text-gray-600 text-sm md:text-base">Set up your video CMS in less than 30 minutes</p>
              </div>
            </div>
          </div>
        </section>
        <MediaPlusSection />
        <TestimonialSection />
        <OttPlatformSection />
        <FeaturesSection />
        <MediaLibrary />
        <FAQSection faqs={faqData} />
        <DemoSection />
        <Footer />
      </main>
    </div>
  )
}

