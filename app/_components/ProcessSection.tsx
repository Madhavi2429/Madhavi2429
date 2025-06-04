import { BarChart3, Settings, Target, Repeat } from "lucide-react"

const processSteps = [
  {
    icon: Target,
    title: "Strategy & Discovery",
    description:
      "We define your niche, persona, keywords, product, market trends and forecasts, then identify optimal channels for direct response marketing and sales.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Production",
    description:
      "Execute with AI enabling 10x faster delivery than traditional teams. Our advanced AI tools accelerate every aspect of campaign development and optimization.",
  },
  {
    icon: Settings,
    title: "Optimization & Insights",
    description:
      "Align all teams with real-time data from every touchpoint. We iterate quickly based on user behavior, prospect engagement, and revenue attribution.",
  },
  {
    icon: Repeat,
    title: "Scale & Refine",
    description:
      "Continuously optimize, adapt, and grow—making your AI-driven strategy smarter and more effective with every cycle.",
  },
]

export default function ProcessSection() {
  return (
    <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">4-Step Process Powered by AI and Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology combines human strategy with AI acceleration to deliver unmatched speed and
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
