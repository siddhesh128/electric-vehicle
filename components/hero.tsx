"use client"

import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import CustomTransportModel from "./custom-transport-model"

function LoadingFallback() {
  return (
    <mesh position={[0, -1, 0]}>
      <boxGeometry args={[4, 0.8, 2]} />
      <meshStandardMaterial color="#94a3b8" />
    </mesh>
  )
}

function HeroScene() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        setRotation((prev) => prev + 0.005)
      }, 16)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Suspense fallback={<LoadingFallback />}>
        <CustomTransportModel rotation={rotation} />
      </Suspense>

      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
    </>
  )
}

export default function Hero() {
  const scrollToAbout = () => {
    if (typeof window !== "undefined" && document !== null) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Canvas className="absolute inset-0">
        <HeroScene />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-background/0 via-background/20 to-background/80">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 drop-shadow-2xl">Industrial Transport System</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8 text-blue-800 drop-shadow-lg">
          Revolutionizing Industrial Transport with Clean Energy
        </h2>
        <p className="max-w-2xl text-gray-700 mb-8 drop-shadow-md">
          A sustainable approach to industrial logistics using Overhead Powerlink Technology
        </p>
        <Button onClick={scrollToAbout} className="animate-bounce mt-8" variant="outline" size="lg">
          Learn More <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
