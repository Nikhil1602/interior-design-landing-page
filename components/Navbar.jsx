"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { data } from "@/data"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {/* <Image
              src={data.company.logo || "/placeholder.svg"}
              alt={data.company.name}
              width={180}
              height={50}
              className="h-10 w-auto"
            /> */}
            <div className={`font-bold font-sans transition-colors ${isScrolled ? "text-black" : "text-white"}`}>
                {data.company.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {data.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`font-medium text-sm transition-colors ${isScrolled ? "text-gray-800 hover:text-primary-600" : "text-white hover:text-primary-100"}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={data.primaryCTA.href}
              className="bg-cyan-600 text-white px-5 py-2.5 rounded hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              {data.primaryCTA.text}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {data.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-800 hover:text-primary-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={data.primaryCTA.href}
                className="bg-primary-600 text-white px-4 py-2 rounded text-center hover:bg-primary-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {data.primaryCTA.text}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
