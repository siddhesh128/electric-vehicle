"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RotateCw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import Image from "next/image"
import CustomTransportModel from "./custom-transport-model"

function ModelViewer() {
  const controlsRef = useRef<any>(null)
  const [zoom, setZoom] = useState(5)

  const handleZoomIn = () => {
    if (zoom > 2) setZoom(zoom - 1)
  }

  const handleZoomOut = () => {
    if (zoom < 10) setZoom(zoom + 1)
  }

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
    setZoom(5)
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden border">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, zoom]} />
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <CustomTransportModel />

        <Environment preset="city" />
        <OrbitControls ref={controlsRef} enableZoom={true} enablePan={true} minDistance={2} maxDistance={10} />
      </Canvas>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button variant="secondary" size="icon" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={handleReset}>
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default function Gallery() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Transport vehicle front view",
      caption: "Front view of the transport vehicle with pantograph",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Overhead powerlink system",
      caption: "Overhead powerlink system installation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Battery pack",
      caption: "Rechargeable battery pack for off-grid operation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Control system",
      caption: "Advanced control system with AI capabilities",
    },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery & 3D Model</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Explore our Industrial Transport System through images and an interactive 3D model.
          </p>
        </motion.div>

        <Tabs defaultValue="model" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="model" className="flex items-center gap-2">
              <Maximize2 className="h-4 w-4" />
              <span>3D Model Viewer</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ZoomIn className="h-4 w-4" />
              <span>Image Gallery</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="model">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">Interactive 3D Model</h3>
                    <p className="text-muted-foreground">
                      Rotate, zoom, and explore our transport system model from all angles
                    </p>
                  </div>
                  <ModelViewer />
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="images">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-center">{image.caption}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
