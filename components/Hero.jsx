import Link from "next/link"
import { data } from "@/data"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video with poster image */}
        <video autoPlay muted loop playsInline className="object-cover w-full h-full" poster="/images/hero-poster.png">
          <source src="/videos/house-remodeling.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{data.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl">{data.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={data.hero.primaryCTA.href}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md font-medium text-center transition-colors"
            >
              {data.hero.primaryCTA.text}
            </Link>
            <Link
              href={data.hero.secondaryCTA.href}
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md font-medium text-center transition-colors"
            >
              {data.hero.secondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
