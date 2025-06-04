"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Target, Users, BarChart3, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    company: "Facia",
    logo: "/images/facia.png",
    industry: "Biometric Authentication",
    challenge:
      "Facia struggled to reach enterprise decision-makers in the cybersecurity space. Their traditional marketing efforts were generating low-quality leads with poor conversion rates, and their sales cycle was averaging 12+ months.",
    solution:
      "We implemented a comprehensive ABM strategy targeting Fortune 500 CISOs and IT directors. Using AI-powered account scoring, we identified 200 high-value prospects and created personalized omnichannel campaigns across LinkedIn, email, and targeted advertising.",
    results: [
      {
        metric: "Qualified Leads",
        value: "+247%",
        description: "Increase in MQLs within 90 days",
      },
      {
        metric: "Sales Cycle",
        value: "-45%",
        description: "Reduction in average deal time",
      },
      {
        metric: "Deal Size",
        value: "+180%",
        description: "Average contract value increase",
      },
    ],
    testimonial: {
      quote:
        "Steve's ABM approach completely transformed our pipeline. We went from struggling to get meetings to having enterprise prospects reach out to us. The quality of leads improved dramatically.",
      author: "Sarah Johnson",
      role: "CMO, Facia",
    },
    timeline: "3-month engagement",
  },
  {
    company: "TheKYB",
    logo: "/images/thekyb.png",
    industry: "RegTech & Compliance",
    challenge:
      "TheKYB needed to penetrate the highly regulated financial services market. Their generic marketing approach wasn't resonating with compliance officers and risk managers who required highly specialized messaging.",
    solution:
      "We developed industry-specific ABM campaigns for different financial verticals (banking, fintech, crypto). Each campaign featured compliance-focused content, regulatory use cases, and personalized outreach sequences tailored to specific pain points.",
    results: [
      {
        metric: "Pipeline Value",
        value: "+320%",
        description: "Increase in qualified pipeline",
      },
      {
        metric: "Conversion Rate",
        value: "+85%",
        description: "Lead-to-opportunity improvement",
      },
      {
        metric: "CAC Reduction",
        value: "-68%",
        description: "Lower customer acquisition cost",
      },
    ],
    testimonial: {
      quote:
        "The targeted approach Steve implemented helped us speak directly to our prospects' compliance challenges. Our conversion rates skyrocketed, and we're now seen as the go-to solution in RegTech.",
      author: "Michael Chen",
      role: "VP of Marketing, TheKYB",
    },
    timeline: "6-month engagement",
  },
  {
    company: "AMLWatcher",
    logo: "/images/amlwatcher.png",
    industry: "Financial Crime Prevention",
    challenge:
      "AMLWatcher faced intense competition in the AML software space. They needed to differentiate themselves and reach decision-makers at mid-market financial institutions who were overwhelmed with vendor options.",
    solution:
      "We created a multi-touch ABM campaign focusing on mid-market banks and credit unions. The strategy included executive briefings, personalized video messages, and industry-specific case studies delivered through coordinated email, social, and direct mail campaigns.",
    results: [
      {
        metric: "Enterprise Deals",
        value: "12",
        description: "New enterprise contracts signed",
      },
      {
        metric: "Revenue Growth",
        value: "+290%",
        description: "Year-over-year increase",
      },
      {
        metric: "Market Share",
        value: "+15%",
        description: "Gain in target segment",
      },
    ],
    testimonial: {
      quote:
        "Steve's strategic approach helped us break through the noise in a crowded market. The personalized campaigns resonated with our prospects and led to our best year ever.",
      author: "Emily Rodriguez",
      role: "Founder, AMLWatcher",
    },
    timeline: "4-month engagement",
  },
]

const processSteps = [
  {
    icon: Target,
    title: "Account Intelligence & Scoring",
    description:
      "AI-powered identification of high-value accounts with detailed buyer persona mapping and intent data analysis.",
    details: [
      "Technographic and firmographic analysis",
      "Intent signal monitoring",
      "Competitive landscape mapping",
      "Decision-maker identification",
    ],
  },
  {
    icon: Users,
    title: "Personalized Campaign Development",
    description:
      "Create highly targeted, multi-channel campaigns tailored to specific accounts and buying committee members.",
    details: [
      "Account-specific messaging frameworks",
      "Personalized content creation",
      "Multi-channel sequence design",
      "Sales enablement materials",
    ],
  },
  {
    icon: BarChart3,
    title: "Omnichannel Execution",
    description:
      "Coordinated campaign deployment across email, social media, advertising, and direct outreach channels.",
    details: [
      "LinkedIn and email sequences",
      "Targeted advertising campaigns",
      "Direct mail and gifting",
      "Event-based marketing",
    ],
  },
  {
    icon: Zap,
    title: "Optimization & Attribution",
    description: "Continuous monitoring, testing, and optimization with full attribution tracking and ROI measurement.",
    details: [
      "Real-time performance monitoring",
      "A/B testing and optimization",
      "Full-funnel attribution",
      "ROI reporting and insights",
    ],
  },
]

const Page = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If contact section doesn't exist on this page, navigate to home page contact
      window.location.href = "/#contact"
    }
  }

  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById("case-studies")
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/services" className="text-blue-600 hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Omnichannel Marketing + ABM</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                ABM Strategy
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Omnichannel Marketing + <span className="text-blue-600">ABM Sales Strategies</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Transform your B2B marketing with precision-targeted account-based strategies that combine personalized
                outreach with seamless omnichannel campaigns to drive qualified pipeline growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-colors"
                >
                  Start Your ABM Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">247%</div>
                  <div className="text-gray-600 text-sm">Avg. Lead Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">68%</div>
                  <div className="text-gray-600 text-sm">CAC Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-gray-600 text-sm">Faster Sales Cycles</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                <Image
                  src="/images/omnichannel.svg"
                  alt="Omnichannel Marketing"
                  fill
                  className="object-cover object-left"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ABM strategy and execution designed to drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABM Strategy Visualization */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ABM Strategy in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual representation of how our omnichannel ABM approach transforms your pipeline and accelerates growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ABM Funnel Visualization */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ABM Pipeline Transformation</h3>

                {/* Funnel Visualization */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-16 rounded-lg flex items-center justify-between px-6 text-white">
                      <span className="font-semibold">Target Accounts</span>
                      <span className="text-2xl font-bold">1,000</span>
                    </div>
                  </div>
                  <div className="relative ml-8">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-14 rounded-lg flex items-center justify-between px-6 text-white"
                      style={{ width: "85%" }}
                    >
                      <span className="font-semibold">Engaged Accounts</span>
                      <span className="text-xl font-bold">850</span>
                    </div>
                  </div>
                  <div className="relative ml-16">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-12 rounded-lg flex items-center justify-between px-6 text-white"
                      style={{ width: "70%" }}
                    >
                      <span className="font-semibold">Qualified Leads</span>
                      <span className="text-lg font-bold">420</span>
                    </div>
                  </div>
                  <div className="relative ml-24">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-10 rounded-lg flex items-center justify-between px-6 text-white"
                      style={{ width: "55%" }}
                    >
                      <span className="font-semibold">Opportunities</span>
                      <span className="font-bold">180</span>
                    </div>
                  </div>
                  <div className="relative ml-32">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-8 rounded-lg flex items-center justify-between px-4 text-white"
                      style={{ width: "40%" }}
                    >
                      <span className="font-semibold text-sm">Closed Won</span>
                      <span className="font-bold">72</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">7.2% Conversion Rate</div>
                    <div className="text-green-700">vs. 2.1% industry average</div>
                  </div>
                </div>
              </div>

              {/* Channel Performance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Channel Impact</h3>
                <div className="space-y-3">
                  {[
                    { channel: "LinkedIn Outreach", performance: "85%", color: "bg-blue-500" },
                    { channel: "Email Sequences", performance: "72%", color: "bg-indigo-500" },
                    { channel: "Targeted Ads", performance: "68%", color: "bg-purple-500" },
                    { channel: "Direct Mail", performance: "91%", color: "bg-green-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-600">{item.channel}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: item.performance }}
                        ></div>
                      </div>
                      <div className="w-12 text-sm font-semibold text-gray-900">{item.performance}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ABM Process Flow */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ABM Implementation Journey</h3>

                <div className="space-y-6">
                  {[
                    {
                      phase: "Account Intelligence",
                      desc: "AI-powered account scoring and buyer persona mapping",
                      icon: Target,
                      color: "bg-blue-500",
                    },
                    {
                      phase: "Campaign Development",
                      desc: "Personalized multi-channel campaign creation",
                      icon: Users,
                      color: "bg-indigo-500",
                    },
                    {
                      phase: "Omnichannel Execution",
                      desc: "Coordinated deployment across all touchpoints",
                      icon: BarChart3,
                      color: "bg-purple-500",
                    },
                    {
                      phase: "Optimization",
                      desc: "Continuous monitoring and performance enhancement",
                      icon: Zap,
                      color: "bg-green-500",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow">
                        <div
                          className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white`}
                        >
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">{item.phase}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                      {index < 3 && <div className="absolute left-6 top-16 w-0.5 h-6 bg-gray-300"></div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Timeline */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Typical Results Timeline</h3>
                <div className="space-y-4">
                  {[
                    { time: "Week 1-2", result: "Account intelligence & strategy development" },
                    { time: "Week 3-4", result: "Campaign creation & initial deployment" },
                    { time: "Month 2", result: "First qualified leads generated" },
                    { time: "Month 3", result: "Pipeline acceleration visible" },
                    { time: "Month 6", result: "247% average lead increase achieved" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-semibold bg-white/20 rounded-lg px-3 py-1">{item.time}</div>
                      <div className="flex-1 text-sm">{item.result}</div>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
            <p className="text-xl text-gray-600">Choose the engagement model that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy + Setup</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                $2,500
                <span className="text-lg text-gray-600 font-normal">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Complete ABM strategy development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Account identification and scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Campaign framework and messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Sales enablement materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Implementation roadmap</span>
                </li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/#contact")}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-lg text-lg font-medium"
              >
                Get Started
              </Button>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 border-2 border-blue-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Full-Service ABM</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $2,500
                <span className="text-lg text-blue-200 font-normal">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Everything in Strategy + Setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Complete campaign execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Real-time optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Monthly strategy reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Performance reporting</span>
                </li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/#contact")}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 py-6 rounded-lg text-lg font-medium"
              >
                Start Full Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your ABM Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our proven ABM approach can accelerate your pipeline growth. Schedule a free consultation
            to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-colors"
            >
              Start Your ABM Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free 30-minute strategy call</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Custom ABM roadmap</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No commitment required</span>
            </div>
          </div>
        </div>
      </div>
      {/* Alternative Contact Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prefer Email?</h2>
          <p className="text-lg text-gray-600 mb-6">Send us an email directly to schedule your consultation.</p>
          <Link
            href="mailto:steve@gtmvp.com?subject=Growth Strategy Consultation&body=Hi Steve, I'm interested in learning more about your AI-powered growth strategies. Please let me know when we can schedule a consultation."
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Email Steve Directly
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
