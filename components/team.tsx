"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Team() {
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

  const teamMembers = [
    {
      name: "Siddhesh Jadhav",
      role: "Project Member",
      image: "/placeholder.svg?height=300&width=300",
      bio: "E&TC Engineering student specializing in embedded systems and IoT integration for industrial applications",
      social: {
        github: "#",
        linkedin: "#",
        email: "siddheshj039@gmail.com",
      },
    },
    {
      name: "Shantanu Agarkar",
      role: "Project Member",
      image: "/placeholder.svg?height=300&width=300",
      bio: "E&TC Engineering student focused on power electronics and electrical systems for overhead powerlink technology",
      social: {
        github: "#",
        linkedin: "#",
        email: "shantanu.agarkar@example.com",
      },
    },
    {
      name: "Sourabh Vishwakarma",
      role: "Project Member",
      image: "/placeholder.svg?height=300&width=300",
      bio: "E&TC Engineering student with interests in automation, control systems, and machine learning applications",
      social: {
        github: "#",
        linkedin: "#",
        email: "sourabh.vishwakarma@example.com",
      },
    },
    {
      name: "Prof. A.V. Nimkar",
      role: "Project Guide",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Provided invaluable guidance in project planning, technical direction, and helped us navigate challenges throughout the development process",
      social: {
        github: "#",
        linkedin: "#",
        email: "av.nimkar@jspm.edu.in",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Meet the talented individuals behind the Industrial Transport System project.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-square">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 p-4 pt-0">
                  <Link
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={`mailto:${member.social.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 rounded-lg border bg-card text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-xl font-semibold mb-4">Institute</h3>
          <p className="text-lg font-medium">JSPM's Imperial College of Engineering & Research</p>
          <p className="text-muted-foreground">A leading institution for engineering innovation and research</p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Acknowledgments</h3>
          <p className="text-muted-foreground">
            We extend our sincere gratitude to our faculty advisors, industry partners, and all those who provided
            guidance and support throughout the development of this project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
