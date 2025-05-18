import { data } from "@/data"

export default function Contact() {
  return (
    <section className="py-20 bg-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.contact.title}</h2>
            <p className="mb-8 text-cyan-100 leading-relaxed max-w-md">{data.contact.description}</p>

            <div className="space-y-4">
              {data.contact.methods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-cyan-200 mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={method.icon}></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{method.title}</p>
                    <p className="text-primary-100">{method.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Consultation</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="project" className="block text-gray-700 mb-2 text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  {data.contact.projectTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-700 transition-colors"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
