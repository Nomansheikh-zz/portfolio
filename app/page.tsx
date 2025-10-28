'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Code2, Database, Globe, Laptop, Server, Cloud, GitBranch, Shield, CreditCard, Search, Bot } from 'lucide-react'

const techStack = [
  { name: 'Laravel (PHP)', icon: Code2 },
  { name: 'React.js', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'REST APIs', icon: Globe },
  { name: 'Microservices', icon: Server },
  { name: 'MySQL & MS SQL', icon: Database },
  { name: 'AWS & DigitalOcean', icon: Cloud },
  { name: 'Docker & Kubernetes', icon: Laptop },
  { name: 'Payment Gateways', icon: CreditCard },
  { name: 'Algolia Search', icon: Search },
  { name: 'OpenAI Automation', icon: Bot },
  { name: 'Git & CI/CD', icon: GitBranch },
  { name: 'Security (JWT/OAuth)', icon: Shield },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-container min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Noman Dildar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Passionate about building modern web applications with cutting-edge technologies.
              Specializing in React, Node.js, and Laravel development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg">View Projects</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Me</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image
                src="/profile.jpg"
                alt="Noman Dildar"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-gray-50 dark:bg-dark-light">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            I'm a passionate Full-Stack Developer with extensive experience in building scalable web applications.
            My expertise spans across modern frontend frameworks like React and Next.js, backend technologies
            including Node.js and Laravel, and database management systems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding,
            you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge
            with the developer community.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn More About Me</Button>
          </Link>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-light rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <tech.icon className="w-12 h-12 text-primary mb-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
