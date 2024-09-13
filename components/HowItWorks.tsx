"use client"

import { UserPlus, MessageSquare, BookOpen } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-blue-400" />,
      title: "Sign Up",
      description: "Create an account with your college email."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-green-400" />,
      title: "Start a Chat",
      description: "Talk to our AI chatbot for instant support."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-400" />,
      title: "Explore Resources",
      description: "Access our mental health guide for helpful tips."
    }
  ]

  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}