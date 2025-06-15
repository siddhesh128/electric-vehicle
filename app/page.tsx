"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Motivation from "@/components/motivation"
import Importance from "@/components/importance"
import Technology from "@/components/technology"
import FutureScope from "@/components/future-scope"
import Gallery from "@/components/gallery"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function Home() {
  // Add state to track if the component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true when the component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render the components when mounted (client-side)
  if (!isMounted) {
    return null // or a loading indicator
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Motivation />
      <Importance />
      <Technology />
      <FutureScope />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
