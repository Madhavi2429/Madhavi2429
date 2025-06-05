"use client"
import HeroSection from "./_components/HeroSection"
import SocialProofSection from "./_components/SocialProofSection"
import ServicesHighlight from "./_components/ServicesHighlight"
import ContactSection from "./_components/ContactSection"
import Image from "next/image"
import { ArrowRight, ChevronRight, CheckCircle, Users, BarChart2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import VideoPlayerComponent from "./_components/VideoPlayerComponent"

export default function Home() {
  const router = useRouter()

  const handleExternalNavigation = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback: try to find any contact form
      const contactForm = document.querySelector('[id*="contact"]')
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="w-full flex flex-col">
      <HeroSection />

      {/* Service Segments Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Two Specialized Service Offerings</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed for different business needs and growth stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* B2B Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Services</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive AI-powered growth strategies for B2B companies, health tech firms, and growing businesses
                ready to implement advanced marketing and sales systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">AI-powered marketing strategy & implementation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Account-based marketing (ABM) campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Growth team integration & training</span>
                </li>
              </ul>
              <Link href="/services/omnichannel-marketing-abm">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Explore B2B Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* SaaS Leaders */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Leaders</h3>
              <p className="text-gray-700 mb-6">
                Sophisticated growth blueprints and metrics frameworks for SaaS founders, CEOs, and growth leaders
                focused on optimizing unit economics and scaling predictably.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive SaaS metrics audit & optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Custom growth blueprint development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Churn prediction & prevention systems</span>
                </li>
              </ul>
              <Link href="/services/b2b-saas-growth-blueprint">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Get Growth Blueprint
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SocialProofSection />

      <ServicesHighlight />

      {/* About Steve Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center h-[400px] md:h-[500px]">
              <VideoPlayerComponent size="xl" />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                AI Growth Expert
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Dual Expertise: <span className="text-blue-600">B2B Growth Strategy & SaaS Leadership</span>
              </h2>

              <p className="text-lg text-gray-600">
                I serve two distinct client segments with specialized expertise: B2B companies seeking comprehensive
                AI-powered growth strategies and implementation support, and SaaS leaders who need sophisticated
                frameworks to optimize unit economics, predict churn, and build predictable revenue engines.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">50+</p>
                  <p className="text-gray-600">B2B Clients</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">300%</p>
                  <p className="text-gray-600">Avg. ROI</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">24/7</p>
                  <p className="text-gray-600">AI Support</p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <Image src="/images/back.svg" fill className="object-cover opacity-20" alt="" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="relative h-[400px] md:h-[500px]">
                <Image src="/images/book.svg" alt="AI Marketing Book" fill className="object-contain" />
              </div>
            </div>

            <div className="space-y-6 md:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
                Featured Book
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">Marketing, Sales, and Service with AI</h2>

              <p className="text-xl text-gray-300">
                Driving massive growth with good data, proven strategies and incredible user experiences for the
                cookieless future
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 w-5 h-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-300">AI-powered marketing strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 w-5 h-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-300">Data-driven decision making</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 w-5 h-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-300">Future-proof growth tactics</span>
                </li>
              </ul>

              <button
                onClick={() => handleExternalNavigation("https://a.co/d/4HcVErv")}
                className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Get the Book
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Product Development Showcase</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Examples of custom software products and platforms I've built for clients — from AI-powered analytics
              tools to comprehensive go-to-market platforms that solve real-world business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleExternalNavigation("https://www.gtmvp.com")}
            >
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <Image src="/images/gtmvp.svg" alt="GTMVP" width={120} height={60} className="object-contain" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">GTMVP</h3>
                    <p className="text-gray-600 text-sm">Go-to-Market Platform</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleExternalNavigation("https://www.docdoctor.ai")}
            >
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <Image src="/images/docdoctor.svg" alt="Docdoctor" width={120} height={60} className="object-contain" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Docdoctor</h3>
                    <p className="text-gray-600 text-sm">AI Healthcare Assistant</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleExternalNavigation("https://www.patientsat.ai")}
            >
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/images/patientsat.png"
                  alt="Patientsat.AI"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Patientsat.AI</h3>
                    <p className="text-gray-600 text-sm">Patient Satisfaction Analytics</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleExternalNavigation("https://www.studentaidetector.com")}
            >
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/images/studentaidetector.png"
                  alt="StudentAIDetector"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">StudentAIDetector</h3>
                    <p className="text-gray-600 text-sm">AI Content Detection</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}
