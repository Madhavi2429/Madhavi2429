"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"
import Image from "next/image"

interface VideoPlayerComponentProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export default function VideoPlayerComponent({ className = "", size = "lg" }: VideoPlayerComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sizeClasses = {
    sm: "w-40 h-40",
    md: "w-56 h-56",
    lg: "w-80 h-80",
    xl: "w-96 h-96",
  }

  const playIconSizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  }

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    // Preload video when component mounts
    if (typeof window !== "undefined") {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = "https://www.loom.com/embed/4d9ccdb76a9240bb9747d15c430ef2ca"
      link.as = "document"
      document.head.appendChild(link)
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  return (
    <>
      {/* Profile Image with Play Button */}
      <div className={`relative ${sizeClasses[size]} ${className} group cursor-pointer`} onClick={handlePlayClick}>
        {/* Profile Image */}
        <div className="relative w-full h-full overflow-hidden rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/steve.svg"
            alt="Steve Kaplan Profile"
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-90"
            priority={true}
            loading="eager"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Animated Wave Rings */}
            <div className="absolute inset-0 rounded-full">
              {/* First wave ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"
                style={{ animationDuration: "2s", animationDelay: "0s" }}
              />
              {/* Second wave ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"
                style={{ animationDuration: "2s", animationDelay: "0.5s" }}
              />
              {/* Third wave ring */}
              <div
                className="absolute inset-0 rounded-full border border-white/15 animate-ping"
                style={{ animationDuration: "2s", animationDelay: "1s" }}
              />
            </div>

            {/* Play Button - more subtle and elegant */}
            <div
              className={`relative ${playIconSizes[size]} bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-black/60 group-hover:scale-105 border border-white/20`}
            >
              <Play
                className={`${playIconSizes[size]} text-white/80 fill-current ml-1 transition-colors duration-300 group-hover:text-white`}
              />
            </div>
          </div>
        </div>

        {/* Hover Text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
            Watch Introduction
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900" />
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={handleCloseModal} />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl mx-4 animate-modal-in">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.loom.com/embed/4d9ccdb76a9240bb9747d15c430ef2ca?sid=fe52238c-f775-447c-b97c-0b3f815ddaf5&hideEmbedTopBar=true&autoplay=1&preload=metadata"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                  className="w-full h-full"
                  title="Steve Kaplan Introduction Video"
                  loading="eager"
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-semibold mb-2">Meet Steve Kaplan</h3>
              <p className="text-gray-300 text-sm">
                Learn about my approach to AI-powered growth strategies for B2B companies and SaaS leaders
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
