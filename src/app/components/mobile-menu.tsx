"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700" aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-700" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-8">
            <Link href="#" className="text-xl font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              Product
            </Link>
            <Link href="#" className="text-xl font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              Customers
            </Link>
            <Link href="#" className="text-xl font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link href="#" className="text-xl font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <Link href="#" className="text-xl font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              Plans
            </Link>
            <div className="pt-6 space-y-4 w-full flex flex-col items-center">
              <Link
                href="#"
                className="w-full max-w-xs text-center border border-gray-200 rounded-full px-6 py-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#"
                className="w-full max-w-xs text-center bg-[#e97c52] text-white rounded-full px-6 py-2"
                onClick={() => setIsOpen(false)}
              >
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

