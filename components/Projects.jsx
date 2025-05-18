import Image from "next/image"
import Link from "next/link"
import { data } from "@/data"

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.projects.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.items.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-80">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-3 text-gray-200 text-sm">{project.description}</p>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-medium text-white hover:text-cyan-200 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={data.projects.viewAllLink}
            className="inline-flex items-center justify-center bg-white text-cyan-600 border border-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
