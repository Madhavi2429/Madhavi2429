"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const formData = new FormData()
      formData.append("access_key", "07207013-810f-43b7-8722-e9b92bc421fd")
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("message", values.message)
      formData.append("termsAccepted", values.termsAccepted ? "true" : "false")
      formData.append("subject", "New Contact Form Submission")
      formData.append("from_name", "Steve Kaplan AI Website Contact Form")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        form.reset()
      } else {
        setSubmitError("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setSubmitError("An error occurred while sending the message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you shortly.</p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-blue-500 hover:bg-blue-600">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Let's Talk Strategy</h3>
      <p className="text-gray-600 mb-6">Share your goals and I'll get back to you within 24 hours.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Full Name <span className="text-blue-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your name"
                    className="bg-gray-50 border-gray-200 focus:border-blue-500 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Email Address <span className="text-blue-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@company.com"
                    className="bg-gray-50 border-gray-200 focus:border-blue-500 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  How can I help? <span className="text-blue-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Tell me about your project or goals..."
                    className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none w-full">
                  <FormLabel className="text-gray-600 text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Terms of Service
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm">{submitError}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 rounded-lg flex items-center justify-center gap-2 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <ArrowRight className="w-5 h-5" />}
          </Button>
        </form>
      </Form>
    </div>
  )
}
