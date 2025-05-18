import Image from "next/image"
import { data } from "@/data"

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={data.about.image || "/placeholder.svg"}
                alt="About our company"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.about.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{data.about.description}</p>

            <div className="space-y-4">
              {data.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-cyan-600 mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-6">
              {data.about.certifications.map((cert, index) => (
                <div key={index} className="rounded-lg flex items-center justify-center">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={100}
                    height={60}
                    className="h-[80px] w-auto rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
