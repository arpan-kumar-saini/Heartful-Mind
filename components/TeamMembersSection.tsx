"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Arpan",
    role: "Lead Developer",
    image: "/placeholder.svg?height=100&width=100",
    note: "Passionate about creating technology that improves mental well-being.",
  },
  {
    name: "Ritu",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=100&width=100",
    note: "Combines her love for design with a deep commitment to mental health awareness.",
  },
  {
    name: "Shilpa",
    role: "AI Specialist",
    image: "/placeholder.svg?height=100&width=100",
    note: "Dedicated to leveraging AI to provide personalized mental health support.",
  },
  {
    name: "Akhilesh",
    role: "Mental Health Expert",
    image: "/placeholder.svg?height=100&width=100",
    note: "Brings years of experience in psychology to ensure our app&apos;s effectiveness.",
  },
]

export default function MeetTheTeamComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Meet the Minds Behind Heartful Mind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-purple-400 mb-4">{member.role}</p>
                <p className="text-sm text-gray-400">{member.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}