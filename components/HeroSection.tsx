"use client";

import { ChevronRight, Shield, Users, Sparkles } from "lucide-react";
import ArpanImg from ".././public/images/arpan.jpg"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#1a1b1e] via-[#16171a] to-[#1a1b1e] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight lg:text-6xl">
                Elevate Your <span className="text-blue-600">Mental Wellbeing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Discover a new paradigm in mental health support, tailored for the modern collegiate experience. Embrace clarity, balance, and growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center"
              >
                Begin Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button
                className="rounded-md bg-transparent border-2 border-gray-600 px-6 py-3 text-lg font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:text-white"
              >
                Explore Services
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center gap-3 bg-[#1a1b1e] rounded-lg p-3 transition-all duration-300 hover:bg-[#28292d]">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium">Confidential Support</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1a1b1e] rounded-lg p-3 transition-all duration-300 hover:bg-[#28292d]">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium">Expert Counselors</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1a1b1e] rounded-lg p-3 transition-all duration-300 hover:bg-[#28292d]">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium">Innovative Techniques</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b1e] to-[#16171a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-2xl"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2cc8aa" />
                    <stop offset="100%" stopColor="#1ABC9C" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M39.5,-65.3C50.2,-56.7,57.1,-44.3,63.3,-31.3C69.4,-18.3,74.8,-4.7,73.8,8.6C72.8,21.9,65.4,34.9,55.6,45.6C45.8,56.3,33.7,64.7,20.1,69.9C6.6,75,-8.3,76.8,-22.2,73.5C-36.1,70.2,-49,61.8,-58.9,50.4C-68.8,39,-75.8,24.7,-77.8,9.5C-79.8,-5.7,-76.9,-21.8,-69.7,-35.5C-62.4,-49.2,-50.9,-60.5,-37.8,-67.7C-24.6,-74.9,-9.8,-78.1,2.7,-82.4C15.3,-86.7,28.7,-74,39.5,-65.3Z"
                  transform="translate(100 100)"
                />
              </svg>
              <img
                src={ArpanImg}
                alt="Empowering Mental Health"
                className="absolute inset-0 object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
