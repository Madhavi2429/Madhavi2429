"use client"
import { ArrowRight, Users, UserCircle, Package2, FileText, CheckCircle, Calendar, Clock, Video } from "lucide-react"
import ServiceDetail from "../_components/ServiceDetail"
import ProcessSection from "../_components/ProcessSection"
import TestimonialsSection from "../_components/TestimonialsSection"
import CalendarEmbed from "../_components/CalendarEmbed"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const services = [
  {
    title: "Omnichannel Marketing + ABM Sales Strategies",
    description:
      "Combine personalized account-based marketing with seamless omnichannel campaigns to target high-value accounts effectively and drive qualified pipeline growth.",
    image: "/images/omnichannel.svg",
    benefits: [
      "Increase qualified leads by 200-400%",
      "Reduce customer acquisition cost by 50-70%",
      "Improve sales cycle velocity by 60%",
      "Enhance account engagement rates by 300%",
    ],
    features: [
      "AI-powered account identification and scoring",
      "Personalized multi-channel campaign development",
      "Advanced attribution and ROI tracking",
      "Sales and marketing alignment optimization",
      "Real-time performance dashboards",
      "Ongoing strategy refinement and optimization",
    ],
    cta: "Learn More About ABM",
    ctaLink: "/services/omnichannel-marketing-abm",
  },
  {
    title: "B2B SaaS Success Metrics & Growth Blueprint",
    description:
      "Master SaaS success with proven measurement frameworks and growth blueprints that drive sustainable revenue expansion and operational excellence.",
    image: "/images/b2b.svg",
    benefits: [
      "Establish clear growth metrics and KPIs",
      "Optimize customer lifetime value (CLV)",
      "Reduce churn by 40-60%",
      "Accelerate revenue growth by 150-300%",
    ],
    features: [
      "Comprehensive SaaS metrics audit",
      "Custom growth blueprint development",
      "Churn prediction and prevention strategies",
      "Revenue optimization frameworks",
      "Customer success program design",
      "Ongoing performance monitoring",
    ],
    cta: "Get Your Growth Blueprint",
    ctaLink: "/services/b2b-saas-growth-blueprint",
  },
]

const growthTypes = [
  {
    icon: UserCircle,
    title: "People-Led Growth",
    description:
      "Complete team integration with SDRs, Account Execs, Engineers, Data Analysts, and Marketing Coordinators. We become your extended team, building and executing systems within your existing infrastructure for trackable revenue growth.",
  },
  {
    icon: Users,
    title: "Community-Led Growth",
    description:
      "Build a brand that attracts rather than chases prospects. Engage your entire buyer committee and create thought leadership that provides massive value, establishing you as the go-to expert in your space.",
  },
  {
    icon: Package2,
    title: "Product-Led Growth",
    description:
      "Align Sales, Marketing, Service, and Product teams to identify growth opportunities and track the key moments that drive product adoption and expansion.",
  },
  {
    icon: FileText,
    title: "Content-Led Growth",
    description:
      "Create targeted, beautifully designed content including white papers, case studies, guest posts, and social media. Complete content strategy, creation, distribution, and performance tracking.",
  },
]

const meetingTypes = [
  {
    icon: Clock,
    title: "15-Minute Discovery Call",
    description: "Quick consultation to understand your challenges and explore how we can help.",
    features: ["Initial needs assessment", "High-level strategy discussion", "Next steps planning"],
  },
  {
    icon: Video,
    title: "30-Minute Strategy Session",
    description: "In-depth discussion about your growth goals and potential solutions.",
    features: ["Detailed business analysis", "Custom recommendations", "Implementation roadmap"],
  },
  {
    icon: Calendar,
    title: "Custom Consultation",
    description: "Tailored meeting based on your specific requirements and timeline.",
    features: ["Flexible scheduling", "Agenda customization", "Follow-up materials"],
  },
]

const Page = () => {
  const router = useRouter()

  // Handle hash fragment scrolling when page loads
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from the hash
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        if (element) {
          // Use setTimeout to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 300) // Increased timeout for better reliability
        }
      }
    }

    // Handle initial load
    handleHashScroll()

    // Handle hash changes (for navigation within the same page)
    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("schedule")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/#contact")
    }
  }

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              AI-Powered Services
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Strategic Services & <span className="text-blue-600">Custom Software Development</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform your business with comprehensive solutions: expert consulting services for AI-powered growth
              strategies, plus custom software development to build the tools and platforms your business needs to
              scale.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">B2B Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-gray-600">Faster Execution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Offerings Section */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Consulting Services</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance and implementation of AI-powered growth strategies, account-based marketing, and
                operational optimization for B2B SaaS and Health Tech companies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Growth strategy development and execution</li>
                <li>• AI-powered marketing and sales optimization</li>
                <li>• Account-based marketing (ABM) campaigns</li>
                <li>• Performance analytics and optimization</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Package2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Software Development</h3>
              <p className="text-gray-600 mb-6">
                End-to-end development of custom software products, AI-powered tools, and platforms tailored to your
                specific business needs and growth objectives.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• AI-powered analytics and automation tools</li>
                <li>• Custom SaaS platforms and applications</li>
                <li>• Market research and data intelligence systems</li>
                <li>• Integration and workflow optimization tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div id="services" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to accelerate your B2B growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ServiceDetail key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      <TestimonialsSection />

      {/* Growth Strategies */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World AI Use Cases for <span className="text-blue-600">SaaS Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the growth strategy that aligns with your business model and objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {growthTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProcessSection />

      {/* Meeting Types Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the meeting format that best fits your needs and schedule
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {meetingTypes.map((meeting, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <meeting.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{meeting.title}</h3>
                <p className="text-gray-600 mb-6">{meeting.description}</p>
                <ul className="space-y-2">
                  {meeting.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Scheduling Section */}
      <div id="schedule" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Your Consultation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your <span className="text-blue-600">Strategy Session</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose a time that works for you. All consultations are conducted via video call and include a follow-up
              summary with actionable recommendations.
            </p>

            {/* Benefits of booking */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Free consultation</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Custom strategy recommendations</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">No commitment required</span>
              </div>
            </div>
          </div>

          {/* Calendar Embed */}
          <div className="max-w-4xl mx-auto">
            <CalendarEmbed />
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Before the Call:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• You'll receive a calendar invite with video call details</li>
                    <li>• Optional: Complete a brief questionnaire about your goals</li>
                    <li>• Prepare any specific questions or challenges to discuss</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">During the Call:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Discuss your current challenges and objectives</li>
                    <li>• Explore potential AI-powered solutions</li>
                    <li>• Receive initial strategic recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Contact Section */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prefer to Connect Differently?</h2>
          <p className="text-xl text-blue-100 mb-8">
            If scheduling online isn't convenient, feel free to reach out directly via email or LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:steve@stevekaplan.ai?subject=Growth Strategy Consultation&body=Hi Steve, I'm interested in learning more about your AI-powered growth strategies. Please let me know when we can schedule a consultation."
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg font-medium transition-colors"
            >
              Email Steve Directly
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/stevekaplanai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            <p>Response time: Within 24 hours | All consultations are confidential</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
