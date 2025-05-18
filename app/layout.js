import "@/app/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Elite Home Remodeling | Transform Your Living Space",
  description:
    "Professional home remodeling services for kitchens, bathrooms, basements, and whole-home renovations. Transform your space with our expert team.",
  keywords: "home remodeling, renovation, kitchen remodel, bathroom renovation, construction, home improvement",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}