"use client"

import HeroSection from "../components/HeroSection";
import { ProblemStatement } from "../components/problem-statement";
import Features from "../components/features-section"; // Named import
import Working from "../components/HowItWorks"; // Named import
import Testimonials from "../components/testimonial-slider"; // Named import
import Teamembers from "../components/TeamMembersSection"; // Named import
import ActionSection from "../components/ActionSection"; // Named import

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemStatement />
      <Features/>
      <Working />
      <Testimonials />
      <Teamembers/>
      <ActionSection/>
    </>
  );
}
