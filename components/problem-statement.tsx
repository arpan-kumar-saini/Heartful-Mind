"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Heart, Users } from "lucide-react"

export function ProblemStatement() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Why This Platform <span className="text-blue-400">Exists</span>
          </h2>
          <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Addressing the critical mental health challenges faced by today&apos;s college students
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Brain, color: "text-blue-400", title: "Mental Strain", description: "Students face unprecedented pressure, affecting their mental well-being." },
            { icon: Users, color: "text-green-400", title: "Social Challenges", description: "Navigating complex social dynamics adds to student stress levels." },
            { icon: Heart, color: "text-red-400", title: "Emotional Support", description: "Many students lack access to crucial emotional support systems." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-gray-700">
              <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 bg-blue-900 rounded-lg shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">The Alarming Reality</h3>
          <p className="text-3xl font-extrabold mb-6">1 in 3 College Students</p>
          <p className="text-xl mb-8">report experiencing "severe stress" that significantly impacts their academic performance and overall well-being.</p>
          <Button asChild variant="secondary" className="bg-white text-blue-900 hover:bg-gray-200">
            <Link href="/about" className="inline-flex items-center">
              Learn About Our Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}