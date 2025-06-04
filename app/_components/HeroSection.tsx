"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("access_key", "07207013-810f-43b7-8722-e9b92bc421fd") // Replace with your actual key
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("company", formData.company)
      formDataToSend.append("service", formData.service)
      formDataToSend.append("subject", "New Strategy Call Request from Website")
      formDataToSend.append("to", "steve@gtmvp.com")
      formDataToSend.append("from_name", "Steve Kaplan AI Website")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", company: "", service: "" })
      } else {
        setSubmitError("Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              B2B Growth Expert & SaaS Strategist
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Specialized Growth Solutions for <span className="text-blue-600">B2B Companies & SaaS Leaders</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600">
              Two distinct service offerings: <strong>B2B Services</strong> for companies seeking AI-powered marketing
              strategies and implementation support, and <strong>SaaS Leader Solutions</strong> for executives who need
              sophisticated growth blueprints and metrics frameworks to optimize unit economics and scale predictably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/omnichannel-marketing-abm">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium w-full sm:w-auto">
                  B2B Growth Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/b2b-saas-growth-blueprint">
                <Button
                  variant="outline"
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-lg text-lg font-medium w-full sm:w-auto"
                >
                  SaaS Growth Blueprint
                </Button>
              </Link>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-6">
                <Image width={100} height={30} src="/images/facia.png" alt="Facia" className="h-8 w-auto" />
                <Image width={100} height={30} src="/images/thekyb.png" alt="TheKYB" className="h-8 w-auto" />
                <Image width={100} height={30} src="/images/schapira.png" alt="Schapira" className="h-8 w-auto" />
                <Image width={100} height={30} src="/images/amlwatcher.png" alt="AMLWatcher" className="h-8 w-auto" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70"></div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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
                      className="text-white"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Book a Strategic Consultation</h2>
                    <p className="text-gray-600">Discuss your B2B or SaaS growth challenges</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your company"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="B2B Growth Services">B2B Growth Services</option>
                      <option value="SaaS Growth Blueprint">SaaS Growth Blueprint</option>
                      <option value="Both Services">Both Services</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-6 rounded-lg text-lg font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Schedule Call"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-green-800 font-medium">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
                <button onClick={() => setIsSubmitted(false)} className="mt-3 text-green-600 text-sm hover:underline">
                  Send another message
                </button>
              </div>
            )}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-700 text-sm">{submitError}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
