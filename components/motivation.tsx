"use client"

import { motion } from "framer-motion"
import { Leaf, Gauge, Factory, BarChart3 } from "lucide-react"

export default function Motivation() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const motivations = [
    {
      icon: <Leaf className="h-12 w-12 text-green-500" />,
      title: "Reducing Fossil Fuel Dependency",
      description:
        "Decreasing reliance on diesel and other fossil fuels in industrial transport, significantly reducing carbon emissions and air pollution.",
    },
    {
      icon: <Gauge className="h-12 w-12 text-primary" />,
      title: "Improving Efficiency",
      description:
        "Enhancing industrial transport efficiency through continuous power supply, eliminating downtime for recharging and extending operational hours.",
    },
    {
      icon: <Factory className="h-12 w-12 text-orange-500" />,
      title: "Industrial Sustainability",
      description:
        "Providing industries with a sustainable logistics solution that aligns with modern environmental standards and corporate responsibility goals.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-500" />,
      title: "Supporting Climate Goals",
      description:
        "Contributing to national and global climate objectives by offering a practical path to decarbonize the industrial transport sector.",
    },
  ]

  return (
    <section id="motivation" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Motivation</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            The development of this Overhead Powerlink Technology is driven by several key motivations that address
            current challenges in industrial transportation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {motivations.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-lg border bg-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 },
                },
              }}
            >
              <div className="flex-shrink-0 p-2 rounded-full bg-muted">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-6 rounded-lg border bg-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="text-center">
            By addressing these motivations, our project aims to create a paradigm shift in how industrial
            transportation is powered, making it more sustainable, efficient, and aligned with global climate
            objectives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
