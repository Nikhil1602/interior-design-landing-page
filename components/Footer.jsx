import Link from "next/link"
import Image from "next/image"
import { data } from "@/data"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              {/* <Image
                src={data.company.logoWhite || data.company.logo}
                alt={data.company.name}
                width={180}
                height={50}
                className="h-10 w-auto"
              /> */}
              <div>{data.company.name}</div>
            </Link>
            <p className="text-gray-400 mb-6">{data.company.tagline}</p>
            <div className="flex space-x-4">
              {data.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon}></path>
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {data.footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {data.footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              {data.contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={info.icon}></path>
                    </svg>
                  </div>
                  <div>{info.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {data.company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {data.legalLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
