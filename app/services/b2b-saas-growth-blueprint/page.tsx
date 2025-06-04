"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Users, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    company: "Schapira",
    logo: "/images/schapira.png",
    industry: "Legal Technology",
    challenge:
      "Schapira's SaaS platform was experiencing high churn rates (35% annually) and struggled to identify which metrics truly drove growth. Their pricing model wasn't optimized, and they lacked clear visibility into customer success indicators.",
    solution:
      "We implemented a comprehensive SaaS metrics framework, redesigned their pricing strategy, and established predictive churn models. We also created customer success playbooks and implemented usage-based health scoring.",
    results: [
      {
        metric: "Churn Reduction",
        value: "-58%",
        description: "Annual churn rate decreased",
      },
      {
        metric: "LTV Increase",
        value: "+240%",
        description: "Customer lifetime value growth",
      },
      {
        metric: "Revenue Growth",
        value: "+185%",
        description: "Year-over-year ARR increase",
      },
    ],
    testimonial: {
      quote:
        "Steve's framework completely transformed how we think about our business. We now have clear visibility into what drives growth and can predict churn before it happens. Our unit economics have never been stronger.",
      author: "David Schapira",
      role: "CEO, Schapira",
    },
    timeline: "5-month engagement",
  },
  {
    company: "TechFlow SaaS",
    logo: "/placeholder.svg?height=40&width=40&text=TF",
    industry: "Workflow Automation",
    challenge:
      "A mid-market SaaS company struggling with product-market fit and unclear growth metrics. They had decent user acquisition but poor retention and couldn't identify their ideal customer profile or optimize their funnel.",
    solution:
      "We conducted a complete SaaS audit, implemented cohort analysis, redesigned their onboarding flow, and established clear success metrics. We also helped them identify their highest-value customer segments and optimize pricing.",
    results: [
      {
        metric: "Retention Rate",
        value: "+75%",
        description: "12-month retention improvement",
      },
      {
        metric: "ARPU Growth",
        value: "+120%",
        description: "Average revenue per user",
      },
      {
        metric: "Time to Value",
        value: "-65%",
        description: "Faster user activation",
      },
    ],
    testimonial: {
      quote:
        "The growth blueprint Steve created gave us the roadmap we desperately needed. We finally understand our unit economics and have a clear path to sustainable growth.",
      author: "Jennifer Martinez",
      role: "VP of Growth, TechFlow SaaS",
    },
    timeline: "4-month engagement",
  },
  {
    company: "DataSync Pro",
    logo: "/placeholder.svg?height=40&width=40&text=DS",
    industry: "Data Integration",
    challenge:
      "DataSync Pro had strong technical capabilities but struggled with expansion revenue. Their customers loved the product but weren't upgrading or expanding usage. They needed to optimize their growth loops and expansion strategies.",
    solution:
      "We analyzed their customer journey, identified expansion opportunities, and implemented usage-based pricing tiers. We also created automated expansion campaigns and established customer success metrics tied to business outcomes.",
    results: [
      {
        metric: "Expansion Revenue",
        value: "+310%",
        description: "Net revenue retention increase",
      },
      {
        metric: "Upsell Rate",
        value: "+145%",
        description: "Customer upgrade conversion",
      },
      {
        metric: "Customer Health",
        value: "+90%",
        description: "Improvement in health scores",
      },
    ],
    testimonial: {
      quote:
        "Steve helped us unlock the expansion revenue we knew was there but couldn't capture. Our net revenue retention is now best-in-class, and our customers are growing with us.",
      author: "Robert Kim",
      role: "Founder, DataSync Pro",
    },
    timeline: "6-month engagement",
  },
]

const frameworkComponents = [
  {
    icon: BarChart3,
    title: "SaaS Metrics Audit",
    description:
      "Comprehensive analysis of your current metrics, KPIs, and data infrastructure to identify gaps and opportunities.",
    details: [
      "Revenue metrics analysis (ARR, MRR, churn)",
      "Customer metrics review (CAC, LTV, payback period)",
      "Product metrics assessment (activation, engagement)",
      "Unit economics evaluation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Blueprint Development",
    description: "Custom growth strategy and roadmap tailored to your specific business model and market position.",
    details: [
      "Growth model design and optimization",
      "Customer segmentation and ICP refinement",
      "Pricing strategy optimization",
      "Expansion revenue opportunities",
    ],
  },
  {
    icon: Users,
    title: "Customer Success Framework",
    description:
      "Implement systems and processes to reduce churn, increase expansion, and maximize customer lifetime value.",
    details: [
      "Customer health scoring models",
      "Churn prediction and prevention",
      "Onboarding optimization",
      "Expansion playbooks",
    ],
  },
  {
    icon: Zap,
    title: "Performance Monitoring",
    description:
      "Ongoing tracking, analysis, and optimization of key metrics with regular strategic reviews and adjustments.",
    details: [
      "Real-time dashboard setup",
      "Cohort analysis and reporting",
      "A/B testing frameworks",
      "Monthly strategy reviews",
    ],
  },
]

const Page = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
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
            <span className="text-gray-600">B2B SaaS Growth Blueprint</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                For SaaS Leaders & Executives
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                SaaS Growth Blueprint for <span className="text-blue-600">Scaling Leaders</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Designed specifically for SaaS founders, CEOs, and growth leaders who need proven frameworks to optimize
                unit economics, reduce churn, and build sustainable revenue engines. Get the strategic insights and
                measurement systems that drive predictable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-colors"
                >
                  Get Your Growth Blueprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <button
                  onClick={scrollToCaseStudies}
                  className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-lg text-lg font-medium transition-colors"
                >
                  View Success Stories
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">58%</div>
                  <div className="text-gray-600 text-sm">Avg. Churn Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">240%</div>
                  <div className="text-gray-600 text-sm">LTV Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">185%</div>
                  <div className="text-gray-600 text-sm">Revenue Growth</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image src="/images/b2b.svg" alt="B2B SaaS Growth" fill className="object-cover object-left" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Segments */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Two Distinct Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different business needs and growth stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* B2B Services */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 relative">
              <div className="absolute -top-4 left-8">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">B2B Services</span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Consulting & Implementation</h3>
                <p className="text-gray-600 mb-6">
                  For B2B companies seeking expert guidance to implement AI-powered growth strategies, optimize
                  marketing operations, and accelerate revenue growth through proven methodologies.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI-powered marketing strategy development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Account-based marketing (ABM) implementation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Growth team integration and training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performance optimization and scaling</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-medium text-sm">
                    Perfect for: B2B companies, health tech firms, and growing businesses ready to implement advanced
                    growth strategies
                  </p>
                </div>
              </div>
            </div>

            {/* SaaS Leaders */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-8">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">SaaS Leaders</span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Blueprint & Metrics Mastery</h3>
                <p className="text-gray-600 mb-6">
                  For SaaS founders, CEOs, and growth leaders who need sophisticated frameworks to optimize unit
                  economics, predict churn, and build predictable revenue engines at scale.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive SaaS metrics audit and optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom growth blueprint development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Churn prediction and prevention systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Executive-level strategic guidance</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 font-medium text-sm">
                    Perfect for: SaaS founders, CEOs, VPs of Growth, and executive teams focused on sustainable scaling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Framework Components */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SaaS Growth Framework Components</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Executive-level framework designed specifically for SaaS leaders who need sophisticated growth systems and
              predictable scaling methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkComponents.map((component, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <component.icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>

                <ul className="space-y-2">
                  {component.details.map((detail, detailIndex) => (
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

      {/* Key Metrics Section */}
      <div className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key SaaS Metrics We Optimize</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focus on the metrics that truly drive sustainable SaaS growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Revenue Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monthly Recurring Revenue (MRR)</li>
                <li>• Annual Recurring Revenue (ARR)</li>
                <li>• Net Revenue Retention (NRR)</li>
                <li>• Average Revenue Per User (ARPU)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Customer Acquisition Cost (CAC)</li>
                <li>• Customer Lifetime Value (LTV)</li>
                <li>• Churn Rate & Retention</li>
                <li>• Payback Period</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Product Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• User Activation Rate</li>
                <li>• Feature Adoption</li>
                <li>• Time to Value</li>
                <li>• Product Qualified Leads (PQLs)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Growth Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Growth Rate</li>
                <li>• Expansion Revenue</li>
                <li>• Viral Coefficient</li>
                <li>• Market Penetration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Operational Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Burn Rate</li>
                <li>• Runway</li>
                <li>• Unit Economics</li>
                <li>• Cash Flow</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Engagement Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily/Monthly Active Users</li>
                <li>• Session Duration</li>
                <li>• Feature Usage</li>
                <li>• Customer Health Score</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Growth Framework */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SaaS Growth Visualization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive representation of how our framework transforms SaaS metrics and drives sustainable growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Growth Metrics Visualization */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Growth Trajectory</h3>

                {/* Simulated Growth Chart */}
                <div className="relative h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg p-6">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between h-32">
                      <div className="bg-red-400 w-8 h-8 rounded-t opacity-60"></div>
                      <div className="bg-orange-400 w-8 h-12 rounded-t opacity-70"></div>
                      <div className="bg-yellow-400 w-8 h-16 rounded-t opacity-80"></div>
                      <div className="bg-green-400 w-8 h-24 rounded-t opacity-90"></div>
                      <div className="bg-blue-500 w-8 h-32 rounded-t"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Month 1</span>
                      <span>Month 3</span>
                      <span>Month 6</span>
                      <span>Month 9</span>
                      <span>Month 12</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-sm text-gray-600">
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <div className="text-green-600 font-semibold">↗ 185% Revenue Growth</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics Dashboard */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">35%</div>
                  <div className="text-gray-600 text-sm mb-2">Initial Churn Rate</div>
                  <div className="text-2xl font-bold text-green-500">↓ 15%</div>
                  <div className="text-gray-600 text-sm">After Optimization</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">$2.5K</div>
                  <div className="text-gray-600 text-sm mb-2">Initial LTV</div>
                  <div className="text-2xl font-bold text-green-500">↑ $8.5K</div>
                  <div className="text-gray-600 text-sm">Optimized LTV</div>
                </div>
              </div>
            </div>

            {/* Framework Process Flow */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Framework Implementation</h3>

                <div className="space-y-4">
                  {[
                    { step: 1, title: "Metrics Audit", desc: "Analyze current performance", color: "bg-blue-500" },
                    {
                      step: 2,
                      title: "Blueprint Design",
                      desc: "Create custom growth strategy",
                      color: "bg-indigo-500",
                    },
                    { step: 3, title: "Implementation", desc: "Deploy optimization systems", color: "bg-purple-500" },
                    { step: 4, title: "Monitoring", desc: "Track and optimize results", color: "bg-green-500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}
                      >
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
                      </div>
                      {index < 3 && (
                        <div className="ml-auto">
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Indicators */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Typical Results Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>30 days: Metrics framework implemented</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>60 days: Churn reduction visible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>90 days: Revenue growth acceleration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>6 months: Sustainable growth achieved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
            <p className="text-xl text-gray-600">Choose the engagement model that fits your growth stage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Audit + Blueprint</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                $2,500
                <span className="text-lg text-gray-600 font-normal">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive SaaS metrics audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Custom growth blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Unit economics optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Churn analysis and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>90-day implementation roadmap</span>
                </li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/#contact")}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-lg text-lg font-medium"
              >
                Get Your Blueprint
              </Button>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 border-2 border-blue-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">Best Value</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth Partnership</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $2,500
                <span className="text-lg text-blue-200 font-normal">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Everything in Audit + Blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Ongoing growth optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Monthly strategy sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Real-time performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Customer success optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Quarterly business reviews</span>
                </li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/#contact")}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 py-6 rounded-lg text-lg font-medium"
              >
                Start Partnership
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Master Your SaaS Growth Metrics?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of successful SaaS leaders who have transformed their businesses with our proven growth
            blueprint. Schedule a strategic consultation designed specifically for SaaS executives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-colors"
            >
              Schedule Executive Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Executive-level strategic assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>SaaS-specific recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Confidential consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
