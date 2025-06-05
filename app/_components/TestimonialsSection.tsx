import Image from "next/image"

const testimonials = [
  {
    quote:
      "Steve's AI-driven approach transformed our marketing strategy and doubled our qualified leads in just 3 months. The ROI has been incredible.",
    author: "Sarah Johnson",
    role: "CMO",
    company: "Facia",
    metrics: { value: "247%", label: "Increase in qualified leads" },
    image: "/images/sarah-johnson.jpg",
  },
  {
    quote:
      "The strategic implementation of AI tools across our sales process has revolutionized how we approach B2B marketing. Highly recommend Steve's expertise.",
    author: "Michael Chen",
    role: "VP of Marketing",
    company: "TheKYB",
    metrics: { value: "68%", label: "Reduction in CAC" },
    image: "/images/michael-chen.jpg",
  },
  {
    quote:
      "Working with Steve has been a game-changer. His deep understanding of both AI and traditional marketing creates powerful synergies.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "AMLWatcher",
    metrics: { value: "3.2x", label: "ROI on marketing spend" },
  },
]

export default function TestimonialsSection() {
  return (
    <div className="bg-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI-powered strategies have transformed businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">{testimonial.metrics.value}</div>
                <div className="text-gray-600 text-sm">{testimonial.metrics.label}</div>
              </div>

              <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>

              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
