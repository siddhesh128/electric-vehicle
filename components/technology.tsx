"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Battery, Truck, Cpu } from "lucide-react"
import Image from "next/image"

export default function Technology() {
  const [activeTab, setActiveTab] = useState("overhead")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const technologies = [
    {
      id: "overhead",
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Overhead Powerlink Mechanism",
      description: "The core technology that enables continuous power supply to vehicles through overhead lines.",
      details: [
        "Continuous power delivery system using overhead catenary lines",
        "High-efficiency power transmission with minimal losses",
        "Weather-resistant design for reliable operation in various conditions",
        "Intelligent power management system to optimize energy usage",
        "Seamless integration with existing industrial infrastructure",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "pantograph",
      icon: <Battery className="h-8 w-8 text-primary" />,
      title: "Pantograph Design",
      description: "Advanced pantograph system that connects vehicles to the overhead power lines.",
      details: [
        "Articulated pantograph design for consistent contact with overhead lines",
        "Automatic height adjustment system to accommodate variations in line height",
        "Pressure control mechanism ensuring optimal contact force",
        "Quick-disconnect safety features for emergency situations",
        "Wear-resistant contact materials for extended operational life",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "vehicle",
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Electric Vehicle Concept",
      description: "Purpose-built electric vehicles designed for industrial transport applications.",
      details: [
        "High-torque electric motors optimized for industrial loads",
        "Modular chassis design adaptable to various transport needs",
        "Regenerative braking system to recover energy during deceleration",
        "Advanced thermal management for optimal battery and motor performance",
        "Ergonomic cabin design with enhanced visibility and operator comfort",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ai",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "AI/ML Integration",
      description: "Artificial intelligence and machine learning capabilities for enhanced system performance.",
      details: [
        "Predictive maintenance algorithms to prevent system failures",
        "Route optimization based on real-time traffic and operational data",
        "Energy consumption optimization through machine learning",
        "Autonomous driving capabilities with obstacle detection and avoidance",
        "Fleet management system for coordinated operation of multiple vehicles",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="technology" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Used</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Our Industrial Transport System integrates several cutting-edge technologies to create a comprehensive
            solution for sustainable industrial logistics.
          </p>
        </motion.div>

        <Tabs defaultValue="overhead" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            {technologies.map((tech) => (
              <TabsTrigger key={tech.id} value={tech.id} className="flex items-center gap-2">
                {tech.icon}
                <span className="hidden md:inline">{tech.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {technologies.map((tech) => (
            <TabsContent key={tech.id} value={tech.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {tech.icon}
                      <CardTitle>{tech.title}</CardTitle>
                    </div>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image src={tech.image || "/placeholder.svg"} alt={tech.title} fill className="object-cover" />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
