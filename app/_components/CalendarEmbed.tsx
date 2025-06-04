"use client"

import { useState } from "react"
import { Calendar, ExternalLink, Clock, Video } from "lucide-react"

export default function CalendarEmbed() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Calendar Temporarily Unavailable</h3>
          <p className="text-gray-600 mb-6">
            We're experiencing technical difficulties with the embedded calendar. Please use one of the options below to
            schedule your consultation.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://cal.com/stevekaplanai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Open Calendar in New Tab
            </a>

            <a
              href="mailto:steve@stevekaplan.ai?subject=Schedule Consultation&body=Hi Steve, I'd like to schedule a consultation. Please let me know your availability."
              className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Email to Schedule
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Cal.com embed container */}
      <div className="relative w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Loading calendar...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </div>
          </div>
        )}

        {/* Simple iframe embed */}
        <iframe
          src="https://cal.com/stevekaplanai"
          width="100%"
          height="700"
          frameBorder="0"
          title="Schedule a meeting with Steve Kaplan"
          className="w-full min-h-[600px] md:min-h-[700px] rounded-2xl"
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="camera; microphone; fullscreen; display-capture"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>

      {/* Meeting options for mobile users */}
      <div className="mt-8 md:hidden">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Quick Meeting Options
          </h3>
          <div className="space-y-3">
            <a
              href="https://cal.com/stevekaplanai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">15-Minute Discovery Call</div>
                  <div className="text-sm text-gray-600">Quick consultation and next steps</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </a>

            <a
              href="https://cal.com/stevekaplanai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">30-Minute Strategy Session</div>
                  <div className="text-sm text-gray-600">In-depth discussion and recommendations</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Additional information */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p className="flex items-center justify-center gap-2">
          <Video className="w-4 h-4" />
          All meetings are conducted via video call
        </p>
      </div>
    </div>
  )
}
