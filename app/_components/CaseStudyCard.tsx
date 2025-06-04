import { TrendingUp } from "lucide-react"
import Image from "next/image"

interface CaseStudyProps {
  company: string
  logo: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
  timeline: string
}

export default function CaseStudyCard({
  company,
  logo,
  industry,
  challenge,
  solution,
  results,
  testimonial,
  timeline,
}: CaseStudyProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-sm">
            <Image
              src={logo || "/placeholder.svg"}
              alt={company}
              width={40}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{company}</h3>
            <p className="text-blue-600 font-medium">{industry}</p>
          </div>
        </div>
        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          <TrendingUp className="w-4 h-4 mr-2" />
          {timeline}
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Results Achieved</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-gray-600 text-sm">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
