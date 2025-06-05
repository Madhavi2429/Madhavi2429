"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  const router = useRouter()

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Try to open email client
    const mailtoLink =
      "mailto:steve@gtmvp.com?subject=Growth Strategy Consultation&body=Hi Steve, I'm interested in learning more about your AI-powered growth strategies. Please let me know when we can schedule a consultation."

    // Create a temporary link and click it
    const tempLink = document.createElement("a")
    tempLink.href = mailtoLink
    tempLink.style.display = "none"
    document.body.appendChild(tempLink)

    try {
      tempLink.click()
      document.body.removeChild(tempLink)
    } catch (error) {
      // If mailto fails, show fallback options
      document.body.removeChild(tempLink)
      showEmailFallback()
    }
  }

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Use Next.js router to navigate with hash
    router.push("/services#schedule")
  }

  const showEmailFallback = () => {
    const email = "steve@gtmvp.com"
    const subject = "Growth Strategy Consultation"
    const body =
      "Hi Steve, I'm interested in learning more about your AI-powered growth strategies. Please let me know when we can schedule a consultation."

    // Show alert with email details
    alert(`Email client not available. Please copy this information:

Email: ${email}
Subject: ${subject}

Message: ${body}

Or try opening your email client manually and compose a new message.`)
  }

  return (
    <div id="contact" className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              Let's Connect
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Transform Your Growth Strategy?</h2>

            <p className="text-lg text-gray-600">
              Get in touch to discuss how AI-powered strategies can help you achieve your business goals. I'll respond
              within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    className="text-blue-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <button onClick={handleEmailClick} className="text-blue-600 hover:underline cursor-pointer">
                    steve@gtmvp.com
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    className="text-blue-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Schedule a Call</h3>
                  <button onClick={handleScheduleClick} className="text-blue-600 hover:underline cursor-pointer">
                    Book a 15-minute discovery call
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    className="text-blue-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Connect on LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/stevekaplanai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/stevekaplanai
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
