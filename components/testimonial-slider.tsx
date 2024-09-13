'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const testimonials = [
  {
    name: "Arpan",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "This platform has transformed my learning experience. The interactive lessons and personalized feedback have helped me improve rapidly.",
  },
  {
    name: "Ritu",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I've tried many online learning platforms, but this one stands out. The community support and expert-led courses are unparalleled.",
  },
  {
    name: "Shilpa",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "The flexibility of this platform allowed me to balance my studies with work. I've gained valuable skills that have advanced my career.",
  },
  {
    name: "Akhilesh",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "The quality of content and the intuitive interface make learning enjoyable. I've recommended this platform to all my colleagues.",
  },
]

export default function TestimonialSliderComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="w-full py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="relative">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                </Avatar>
                <blockquote className="text-lg mb-4">"{testimonials[currentIndex].content}"</blockquote>
                <cite className="font-medium text-gray-400">- {testimonials[currentIndex].name}</cite>
              </div>
            </CardContent>
          </Card>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                index === currentIndex ? 'bg-gray-300' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}