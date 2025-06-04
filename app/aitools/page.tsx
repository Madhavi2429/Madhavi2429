"use client"

import Image from "next/image"

const tools = [
  {
    name: "Hubspot",
    description: "CRM platform for marketing, sales, and service automation.",
    logo: "/images/hubspot.svg",
  },
  {
    name: "ChatGPT",
    description: "AI chatbot for text-based interactions and content generation.",
    logo: "/images/chatgpt.svg",
  },
  {
    name: "Claude",
    description: "AI assistant focused on safe and ethical conversations.",
    logo: "/images/claude.svg",
  },
  {
    name: "V0.dev",
    description: "Tool for building and deploying web apps with AI assistance.",
    logo: "/images/v0.svg",
  },
  {
    name: "Lovable.dev",
    description: "Platform for creating user-friendly digital experiences.",
    logo: "/images/lovable.svg",
  },
  {
    name: "Gamma.app",
    description: "Tool for creating interactive and visual presentations.",
    logo: "/images/gamma.svg",
  },
  {
    name: "Notion.so",
    description: "Workspace combining notes, tasks, and collaboration.",
    logo: "/images/notion.svg",
  },
  {
    name: "Elevenlabs",
    description: "AI-driven text-to-speech platform.",
    logo: "/images/eleven.svg",
  },
  {
    name: "syndle.io",
    description: "Content syndication and distribution platform.",
    logo: "/images/syndie.svg",
  },
]

const Page = () => {
  return (
    <div className="w-full flex flex-col  justify-start items-center py-8 md:py-14 gap-2">
      <div className="text-3xl md:text-6xl font-bold md:w-[50%] text-center">
        AI Tools to Streamline Work &<span className="text-[#1570ef] md:leading-18"> Engage Your Audience</span>
      </div>
      <div className=" md:mx-32 md:px-32 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`
              border-gray-200
              ${index % 3 !== 2 ? "lg:border-r" : ""} 
              ${index % 2 !== 1 ? "md:border-r lg:md:border-r" : ""} 
              ${index < tools.length - (tools.length % 3 || 3) ? "border-b" : ""}
              p-6 hover:bg-gray-50 transition-colors
            `}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 border rounded-md p-2 flex items-center justify-center">
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={`${tool.name} logo`}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold md:text-lg">{tool.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-1">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
