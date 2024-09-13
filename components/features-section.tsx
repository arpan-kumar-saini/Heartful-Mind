'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Book, UserCircle, Brain } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 mb-2 text-blue-400" />,
      title: "AI Chatbot",
      description: "Chat with our empathetic AI for stress management.",
    },
    {
      icon: <Book className="h-8 w-8 mb-2 text-purple-400" />,
      title: "Mental Health Guide",
      description: "Explore expert-curated guides for emotional well-being.",
    },
    {
      icon: <UserCircle className="h-8 w-8 mb-2 text-green-400" />,
      title: "Personalized Support",
      description: "Receive tailored advice based on your mood and needs.",
    },
    {
      icon: <Brain className="h-8 w-8 mb-2 text-pink-400" />,
      title: "Mindfulness Exercises",
      description: "Access a library of guided meditations and breathing exercises.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col justify-between group hover:shadow-lg hover:shadow-blue-500/20">
                <CardHeader>
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-center text-white mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-400">{feature.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Link href="/features">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}