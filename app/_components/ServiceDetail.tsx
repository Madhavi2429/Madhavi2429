import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceDetailProps {
  title: string
  description: string
  image: string
  benefits: string[]
  features: string[]
  cta: string
  ctaLink: string
}

export default function ServiceDetail({
  title,
  description,
  image,
  benefits,
  features,
  cta,
  ctaLink,
}: ServiceDetailProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href={ctaLink}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg text-lg font-medium">
            {cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
