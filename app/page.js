import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Stats from "@/components/Stats"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
    </div>
  )
}
