"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TruckIcon, Boxes, Timer, LineChart, Factory, Globe } from "lucide-react"

export default function Importance() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const points = [
    {
      icon: <TruckIcon className="h-6 w-6 text-primary" />,
      title: "Supply Chain Backbone",
      description:
        "Reliable goods transportation forms the backbone of modern supply chains, connecting production facilities with distribution centers and end consumers.",
    },
    {
      icon: <Boxes className="h-6 w-6 text-primary" />,
      title: "Production Continuity",
      description:
        "Efficient logistics ensures continuous production by delivering raw materials on time and removing finished goods, preventing bottlenecks.",
    },
    {
      icon: <Timer className="h-6 w-6 text-primary" />,
      title: "Just-in-Time Manufacturing",
      description:
        "Modern manufacturing relies on just-in-time delivery, requiring precise and dependable transportation systems.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Economic Impact",
      description: "Transportation costs significantly impact product pricing and competitiveness in the market.",
    },
    {
      icon: <Factory className="h-6 w-6 text-primary" />,
      title: "Industrial Efficiency",
      description:
        "Optimized transportation systems reduce waste, improve resource utilization, and enhance overall industrial efficiency.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Environmental Responsibility",
      description:
        "Eco-friendly logistics solutions are essential for reducing the environmental footprint of industrial operations.",
    },
  ]

  return (
    <section id="importance" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Importance of Goods Transportation</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Reliable and eco-friendly logistics are essential in industrial sectors, forming the foundation of efficient
            production and distribution systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">{point.icon}</div>
                      <div>
                        <h3 className="font-medium mb-1">{point.title}</h3>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <Image
                src="/rover1.jpeg?height=500&width=500"
                alt="Industrial transportation"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="max-w-3xl mx-auto">
            By revolutionizing how industrial transportation is powered, our Overhead Powerlink Technology addresses
            these critical aspects of logistics, offering a solution that is both reliable and environmentally
            responsible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
