"use client"

import VideoPlayerComponent from "./VideoPlayerComponent"

export default function VideoPlayerDemo() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Steve Kaplan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch this quick introduction to learn about my approach to AI-powered growth strategies and how I help B2B
            companies and SaaS leaders achieve their goals.
          </p>
        </div>

        <div className="flex justify-center">
          <VideoPlayerComponent size="xl" className="mx-auto" />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">Click the play button to watch a personal introduction from Steve</p>
        </div>
      </div>
    </div>
  )
}
