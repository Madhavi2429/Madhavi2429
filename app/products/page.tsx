"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Stethoscope, BarChart3, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleExternalNavigation = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const scrollToCalendar = () => {
    try {
      setIsNavigating(true)

      // Navigate to the services page calendar section
      console.log("Navigating to calendar section")
      router.push("/services#schedule")

      // Reset navigation state after a delay
      setTimeout(() => setIsNavigating(false), 1500)
    } catch (error) {
      console.error("Error navigating to calendar section:", error)
      // Fallback - direct navigation
      window.location.href = "/services#schedule"
      setIsNavigating(false)
    }
  }

  return (
    <div className="w-full flex flex-col justify-start items-start pt-6 md:py-14 gap-8">
      {/* Hero Section */}
      <div className="w-full px-3 md:px-24 flex flex-col gap-4">
        <div className="text-3xl md:text-6xl font-bold md:w-[80%] text-start">
          Custom Software Products for <span className="text-[#1570ef]">Client Success</span>
        </div>
        <div className="w-full md:w-[60%] text-gray-700 text-start font-medium md:text-lg">
          Explore examples of custom software products and AI-powered platforms I've developed for clients. From
          healthcare SaaS platforms to AI detection tools, each solution is tailored to drive specific business outcomes
          and accelerate growth.
        </div>
      </div>

      {/* Current Projects Section */}
      <div className="w-full bg-gray-50 py-12 md:py-20 px-3 md:px-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Client Product Portfolio</h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            Custom software solutions developed for clients across various industries, showcasing the range of
            AI-powered tools and platforms that drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* GTMVP */}
          <Card
            onClick={() => handleExternalNavigation("https://www.gtmvp.com")}
            className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#1570ef]"
          >
            <CardHeader>
              <div className="w-full h-[200px] md:h-[250px] bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center rounded-lg relative overflow-hidden">
                <Image
                  alt="GTMVP Platform"
                  className="object-contain"
                  src={"/images/gtmvp.svg"}
                  width={180}
                  height={80}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900">GTMVP</h3>
                  <p className="text-[#1570ef] font-medium">AI-Powered Healthcare SaaS</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#1570ef]" />
              </div>
              <p className="text-gray-600">
                Revolutionizing patient outcomes, streamlining operations, and maintaining regulatory excellence with
                state-of-the-art AI SaaS platforms tailored specifically for healthcare systems and providers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Healthcare AI</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Patient Outcomes</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Regulatory Excellence
                </span>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm font-medium">🏥 Healthcare Innovation Platform</p>
              </div>
            </CardContent>
          </Card>

          {/* DocDoctor */}
          <Card
            onClick={() => handleExternalNavigation("https://www.docdoctor.ai")}
            className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#1570ef]"
          >
            <CardHeader>
              <div className="w-full h-[200px] md:h-[250px] bg-gradient-to-br from-green-50 to-emerald-100 flex justify-center items-center rounded-lg relative overflow-hidden">
                <Image
                  alt="DocDoctor AI"
                  className="object-contain"
                  src={"/images/docdoctor.svg"}
                  width={180}
                  height={80}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900">DocDoctor</h3>
                  <p className="text-[#1570ef] font-medium">AI Healthcare Assistant</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#1570ef]" />
              </div>
              <p className="text-gray-600">
                AI-powered healthcare platform designed to assist doctors with clinical decision-making, patient care
                optimization, and medical workflow automation. Enhancing healthcare delivery through intelligent
                technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Healthcare AI</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Clinical Support</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Doctor Assistant</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">🩺 Healthcare Innovation</p>
              </div>
            </CardContent>
          </Card>

          {/* Patientsat.AI */}
          <Card
            onClick={() => handleExternalNavigation("https://www.patientsat.ai")}
            className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#1570ef]"
          >
            <CardHeader>
              <div className="w-full h-[200px] md:h-[250px] bg-gradient-to-br from-blue-50 to-cyan-100 flex justify-center items-center rounded-lg relative overflow-hidden">
                <Image
                  alt="PatientSAT.AI"
                  className="object-contain"
                  src={"/images/patientsat.png"}
                  width={240}
                  height={120}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900">PatientSAT.AI</h3>
                  <p className="text-[#1570ef] font-medium">Patient Satisfaction Analytics</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#1570ef]" />
              </div>
              <p className="text-gray-600">
                AI-powered patient satisfaction analytics platform that helps healthcare providers improve patient
                experiences through real-time feedback analysis and actionable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Healthcare AI</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Patient Analytics</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Real-time Insights</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">🏥 Healthcare Focused</p>
              </div>
            </CardContent>
          </Card>

          {/* StudentAIDetector */}
          <Card
            onClick={() => handleExternalNavigation("https://www.studentaidetector.com")}
            className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#1570ef]"
          >
            <CardHeader>
              <div className="w-full h-[200px] md:h-[250px] bg-gradient-to-br from-purple-50 to-violet-100 flex justify-center items-center rounded-lg relative overflow-hidden">
                <Image
                  alt="StudentAIDetector"
                  className="object-contain"
                  src={"/images/studentaidetector.png"}
                  width={240}
                  height={120}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900">StudentAIDetector</h3>
                  <p className="text-[#1570ef] font-medium">AI Content Detection</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#1570ef]" />
              </div>
              <p className="text-gray-600">
                Industry-leading AI detection technology with 99% accuracy. Identify AI-generated content from ChatGPT,
                GPT-4, Claude, and other AI models. Perfect for educators and content professionals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI Detection</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">99% Accuracy</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Education</span>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm font-medium">🎯 Live Demo Available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* GTMVP Healthcare Focus Section */}
      <div className="w-full px-3 md:px-24 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <Image
                alt="GTMVP Healthcare SaaS Platform"
                className="object-contain"
                src={"/images/gtmvp.svg"}
                width={360}
                height={180}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transforming Healthcare with AI-Powered SaaS Platforms
              </h2>
              <p className="text-gray-600 md:text-lg">
                Our healthcare-focused AI solutions are specifically designed for healthcare systems, providers, and
                organizations, helping revolutionize patient outcomes while maintaining regulatory excellence and
                operational efficiency.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Outcome Optimization</h4>
                  <p className="text-gray-600">AI-driven insights to improve patient care and treatment outcomes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Operational Streamlining</h4>
                  <p className="text-gray-600">
                    Automate workflows and reduce administrative burden for healthcare teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Regulatory Excellence</h4>
                  <p className="text-gray-600">
                    Maintain compliance and regulatory standards with built-in safeguards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">
                🏥 Trusted by major healthcare partners including Novartis, Stryker, Hologic, and Access Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DocDoctor Clinical Assistant Section */}
      <div className="w-full bg-green-50 px-3 md:px-24 py-12 md:py-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
              <Image
                alt="DocDoctor AI Clinical Assistant"
                className="object-contain"
                src={"/images/docdoctor.svg"}
                width={360}
                height={180}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Empowering Doctors with AI Clinical Decision Support
              </h2>
              <p className="text-gray-600 md:text-lg">
                DocDoctor revolutionizes clinical workflows by providing intelligent assistance for medical
                professionals, enhancing diagnostic accuracy, and streamlining patient care processes through advanced
                AI technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Clinical Decision Support</h4>
                  <p className="text-gray-600">
                    AI-powered diagnostic assistance and treatment recommendations based on latest medical research.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Medical Workflow Automation</h4>
                  <p className="text-gray-600">
                    Streamline documentation, scheduling, and administrative tasks to focus more on patient care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Care Optimization</h4>
                  <p className="text-gray-600">
                    Personalized treatment plans and care protocols tailored to individual patient needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                🩺 Designed by healthcare professionals for healthcare professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Patientsat.AI Analytics Section */}
      <div className="w-full px-3 md:px-24 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
              <Image
                alt="PatientSAT.AI Analytics Platform"
                className="object-contain"
                src={"/images/patientsat.png"}
                width={360}
                height={180}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real-Time Patient Satisfaction Analytics</h2>
              <p className="text-gray-600 md:text-lg">
                PatientSAT.AI transforms patient feedback into actionable insights, helping healthcare providers
                continuously improve patient experiences through advanced analytics and real-time monitoring.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Real-Time Feedback Analysis</h4>
                  <p className="text-gray-600">
                    Instant processing and analysis of patient feedback across all touchpoints.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Actionable Insights Dashboard</h4>
                  <p className="text-gray-600">
                    Comprehensive analytics dashboard with predictive insights and improvement recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Experience Optimization</h4>
                  <p className="text-gray-600">
                    Data-driven strategies to enhance patient satisfaction and improve care delivery quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <p className="text-cyan-800 font-medium">
                📊 Helping healthcare providers achieve 95%+ patient satisfaction scores
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* StudentAIDetector Education Section */}
      <div className="w-full bg-purple-50 px-3 md:px-24 py-12 md:py-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-violet-200 flex items-center justify-center">
              <Image
                alt="StudentAIDetector Education Platform"
                className="object-contain"
                src={"/images/studentaidetector.png"}
                width={360}
                height={180}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industry-Leading AI Content Detection</h2>
              <p className="text-gray-600 md:text-lg">
                StudentAIDetector provides educators and content professionals with the most accurate AI detection
                technology available, ensuring academic integrity and authentic content creation with 99% accuracy
                rates.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">99% Detection Accuracy</h4>
                  <p className="text-gray-600">
                    Advanced algorithms detect content from ChatGPT, GPT-4, Claude, and other AI models.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Educational Institution Support</h4>
                  <p className="text-gray-600">
                    Specialized tools and features designed specifically for educators and academic institutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Real-Time Analysis</h4>
                  <p className="text-gray-600">
                    Instant content analysis with detailed reports and confidence scores for each detection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
              <p className="text-purple-800 font-medium">
                🎓 Trusted by educators worldwide to maintain academic integrity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section with Background */}
      <div className="w-full relative py-16 md:py-24">
        <Image src={"/images/background.svg"} fill className="object-cover -z-10 absolute" alt="" />
        <div className="relative z-10 px-3 md:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
                From concept to deployment, we follow a proven methodology that ensures your AI solutions deliver real
                business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1570ef] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Discovery & Strategy</h3>
                  </div>
                  <p className="text-gray-300">
                    We start by understanding your business goals, challenges, and opportunities to create a tailored AI
                    strategy.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1570ef] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Development & Testing</h3>
                  </div>
                  <p className="text-gray-300">
                    Our team builds and rigorously tests AI solutions using cutting-edge technology and best practices.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1570ef] rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Deployment & Support</h3>
                  </div>
                  <p className="text-gray-300">
                    We ensure smooth deployment and provide ongoing support to maximize your AI investment.
                  </p>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/30 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <p className="text-center text-sm font-medium">Discovery</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <p className="text-center text-sm font-medium">Development</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <p className="text-center text-sm font-medium">Deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#1570ef] py-16 md:py-24 px-3 md:px-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a consultation to discuss how our AI solutions can drive growth and efficiency for your company.
          </p>
          <button
            onClick={scrollToCalendar}
            disabled={isNavigating}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#1570ef] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-70"
            aria-label="Schedule a consultation"
          >
            {isNavigating ? (
              <>
                <span className="mr-2 inline-block w-5 h-5 border-t-2 border-r-2 border-[#1570ef] rounded-full animate-spin"></span>
                Navigating...
              </>
            ) : (
              <>
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
