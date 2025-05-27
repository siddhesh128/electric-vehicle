"use client"

import { motion } from "framer-motion"
import { Battery, Zap, Truck, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
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

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Project</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Our Industrial Transport System leverages Overhead Powerlink Technology to create a sustainable, efficient
            solution for industrial logistics and transportation needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader className="pb-2">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Overhead Powerlink</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Electric vehicles powered by overhead lines with pantograph mechanisms, eliminating the need for
                  constant battery recharging.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader className="pb-2">
                <Battery className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Rechargeable Batteries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Integrated rechargeable batteries allow vehicles to operate off-grid when necessary, providing
                  flexibility in routes.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader className="pb-2">
                <Truck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Electric Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Custom-designed electric transport vehicles optimized for industrial loads and compatible with the
                  overhead power system.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader className="pb-2">
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Autonomous Features</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Advanced autonomous driving capabilities for improved safety, efficiency, and reduced operational
                  costs.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="max-w-3xl mx-auto">
            The core concept combines the reliability of fixed overhead power lines with the flexibility of
            battery-powered vehicles, creating a hybrid system that maximizes efficiency while minimizing environmental
            impact. This approach allows for continuous operation without the limitations of battery-only systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
