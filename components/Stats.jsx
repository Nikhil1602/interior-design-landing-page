import { data } from "@/data"

export default function Stats() {
  return (
    <section className="py-12 bg-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-cyan-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
