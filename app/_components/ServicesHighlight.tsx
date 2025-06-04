"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Target, Users, Zap, Package2, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ServicesHighlight() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const services = [
    {
      icon: Target,
      title: "ABM Strategy",
      description:
        "Precision targeting of high-value accounts with personalized campaigns that drive engagement and conversions.",
      expandedContent:
        "Our ABM approach includes account research, persona development, multi-channel campaign orchestration, and performance tracking to ensure maximum ROI from your highest-value prospects.",
      link: "/services",
      color: "blue",
    },
    {
      icon: BarChart2,
      title: "AI Analytics",
      description:
        "Transform your data into actionable insights with AI-powered analytics that reveal hidden opportunities.",
      expandedContent:
        "Leverage machine learning algorithms to uncover patterns in customer behavior, predict churn, optimize pricing strategies, and identify growth opportunities across all touchpoints.",
      link: "/services",
      color: "purple",
    },
    {
      icon: Users,
      title: "Community Growth",
      description:
        "Build engaged communities around your brand that drive advocacy, referrals, and sustainable growth.",
      expandedContent:
        "Create thriving communities through strategic content planning, engagement automation, influencer partnerships, and community-driven product development initiatives.",
      link: "/services",
      color: "green",
    },
    {
      icon: Zap,
      title: "AI Implementation",
      description:
        "Strategic integration of AI tools into your existing workflows to boost efficiency and performance.",
      expandedContent:
        "End-to-end AI adoption including tool selection, workflow integration, team training, and performance optimization to maximize productivity and competitive advantage.",
      link: "/services",
      color: "orange",
    },
    {
      icon: Package2,
      title: "Custom Software Development",
      description:
        "Build proprietary tools, platforms, and AI-powered applications tailored to your specific business needs and growth objectives.",
      expandedContent:
        "Full-stack development services including MVP creation, platform scaling, API integrations, and ongoing maintenance to bring your vision to life.",
      link: "/products",
      color: "indigo",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        hover: "hover:bg-blue-50",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        hover: "hover:bg-purple-50",
        border: "border-purple-200",
        gradient: "from-purple-500 to-purple-600",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        hover: "hover:bg-green-50",
        border: "border-green-200",
        gradient: "from-green-500 to-green-600",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        hover: "hover:bg-orange-50",
        border: "border-orange-200",
        gradient: "from-orange-500 to-orange-600",
      },
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        hover: "hover:bg-indigo-50",
        border: "border-indigo-200",
        gradient: "from-indigo-500 to-indigo-600",
      },
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Growth Solutions</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic consulting services and custom software development that combine human expertise with AI
            capabilities to deliver measurable business outcomes
          </p>
        </div>

        {/* Enhanced Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            const Icon = service.icon
            const isExpanded = expandedCard === index

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 ease-in-out cursor-pointer
                  ${colors.border} ${colors.hover}
                  hover:shadow-xl hover:scale-105 hover:-translate-y-2
                  ${isExpanded ? "md:col-span-2 xl:col-span-2 shadow-xl scale-105 -translate-y-2" : ""}
                `}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="relative p-6 xl:p-8">
                  {/* Icon with animation */}
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${colors.text} group-hover:rotate-12 transition-transform duration-300`}
                    />
                  </div>

                  {/* Title with gradient text on hover */}
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:${colors.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {service.expandedContent}
                    </p>
                  </div>

                  {/* Action area */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={service.link}
                      className={`inline-flex items-center ${colors.text} font-medium hover:underline transition-colors duration-200`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {service.link === "/products" ? "View Portfolio" : "Learn more"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Expand/collapse indicator */}
                    <ChevronDown
                      className={`w-5 h-5 ${colors.text} transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Animated border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  style={{ padding: "2px" }}
                >
                  <div className="bg-white rounded-2xl w-full h-full" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/services">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
