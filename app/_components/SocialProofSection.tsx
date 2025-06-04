import Image from "next/image"

export default function SocialProofSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by B2B SaaS Leaders</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Helping ambitious companies achieve measurable growth through AI-powered strategies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/facia.png" alt="Facia" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/thekyb.png" alt="TheKYB" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/schapira.png" alt="Schapira" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/amlwatcher.png" alt="AMLWatcher" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/home.svg" alt="Home" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/alliance.svg" alt="Alliance" fill className="object-contain" />
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/facia.png" alt="Facia" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/thekyb.png" alt="TheKYB" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/schapira.png" alt="Schapira" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/amlwatcher.png" alt="AMLWatcher" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/home.svg" alt="Home" fill className="object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center min-w-[200px] mx-8">
              <div className="w-40 h-20 relative">
                <Image src="/images/alliance.svg" alt="Alliance" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                "Steve's AI-driven approach transformed our marketing strategy and doubled our qualified leads in just 3
                months."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                  <Image
                    src="/images/sarah-johnson.jpg"
                    alt="Sarah Johnson, CMO at Facia"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">CMO, Facia</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">247%</p>
                <p className="text-gray-600">Increase in qualified leads</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">68%</p>
                <p className="text-gray-600">Reduction in CAC</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">3.2x</p>
                <p className="text-gray-600">ROI on marketing spend</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">12</p>
                <p className="text-gray-600">Enterprise deals closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
