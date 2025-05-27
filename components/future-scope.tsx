"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketIcon, Brain, BatteryCharging, BarChart3 } from "lucide-react"

export default function FutureScope() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const futureEnhancements = [
    {
      icon: <RocketIcon className="h-10 w-10 text-primary" />,
      title: "Automatic Vehicle Operation",
      description:
        "Full autonomous operation of vehicles within industrial complexes, eliminating the need for human operators and increasing safety and efficiency.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI/ML for Battery Management",
      description:
        "Advanced artificial intelligence algorithms to optimize battery charging cycles, predict maintenance needs, and extend battery life.",
    },
    {
      icon: <BatteryCharging className="h-10 w-10 text-primary" />,
      title: "Enhanced Energy Storage",
      description:
        "Next-generation battery technologies with higher energy density, faster charging capabilities, and longer operational lifespans.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Smart Logistics Integration",
      description:
        "Seamless integration with enterprise resource planning systems for optimized scheduling, routing, and inventory management.",
    },
  ]

  return (
    <section id="future-scope" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Scope</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Our vision extends beyond the current implementation, with several planned enhancements to further improve
            the system's capabilities and efficiency.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {futureEnhancements.map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 rounded-lg border bg-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Research & Development Roadmap</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-24 flex-shrink-0 font-medium">Short-term</div>
              <div className="flex-grow">
                <p>Optimization of pantograph design for improved contact reliability and reduced maintenance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 flex-shrink-0 font-medium">Mid-term</div>
              <div className="flex-grow">
                <p>Integration of machine learning algorithms for predictive maintenance and route optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 flex-shrink-0 font-medium">Long-term</div>
              <div className="flex-grow">
                <p>
                  Development of a fully autonomous fleet management system with real-time coordination and optimization
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
