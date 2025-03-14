import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 border border-gray-200 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
        {/* Product Column */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Product</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Webinar+
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Media+
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Generate Interest ++
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                Capture Intent <span className="ml-1 text-yellow-500">🔆</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Prove Impact 🔍
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                Repurpose Content <span className="ml-1 text-green-500">📊</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Who are you Column */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Who are you</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Demand Gen Marketer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Content Marketer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Event Marketer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Field Marketer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Marketing Op
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                CMO
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                People who love us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                People who hate us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Our Webinars
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Our Thoughts
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Help!
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Join the team!
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us Column */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">About Us</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Mission + Values
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                The Head Honchos
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                The Gossip
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Our Contact Deets
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact us Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-medium text-gray-900 mb-4">Contact us</h3>
          <p className="text-gray-600 mb-4">
            to see what Webinar+ can do
            <br />
            for your business.
          </p>

          <div className="flex items-center max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button className="bg-gray-900 text-white p-2 rounded-r-md flex-shrink-0">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Find our memes on G2.com</p>
            <div className="h-8 w-24 bg-red-100 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="border-t border-gray-200 pt-8 pb-6">
        <div className="flex flex-wrap gap-4 md:gap-6 mb-6 justify-between md:justify-start">
          {/* <div className="flex flex-wrap gap-4 md:gap-6">
            <Image
              src="/placeholder.svg?height=40&width=80"
              height={40}
              width={80}
              alt="Certification badge"
              className="grayscale"
            />
            <Image
              src="/placeholder.svg?height=40&width=80"
              height={40}
              width={80}
              alt="Certification badge"
              className="grayscale"
            />
            <Image
              src="/placeholder.svg?height=40&width=80"
              height={40}
              width={80}
              alt="Certification badge"
              className="grayscale"
            />
          </div> */}

          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-500">GDPR</span>
              </div>
              <span className="text-xs text-gray-500">READY</span>
            </div>

            <div className="flex items-center gap-1">
              <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-500">CCPA</span>
              </div>
              <span className="text-xs text-gray-500">READY</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-3 md:gap-4">
          <Link
            href="#"
            className="h-8 w-8 md:h-10 md:w-10 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link
            href="#"
            className="h-8 w-8 md:h-10 md:w-10 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link
            href="#"
            className="h-8 w-8 md:h-10 md:w-10 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link
            href="#"
            className="h-8 w-8 md:h-10 md:w-10 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <p className="text-sm text-gray-600">© 2022 Hubilo. All rights reserved</p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Terms of Use
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Security and Compliance
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

