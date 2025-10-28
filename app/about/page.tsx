'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { Award, BookOpen, Code, GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Computer Science',
    university: 'IQRA University',
    year: '2008 - 2012',
    description: 'Karachi, Pakistan',
  },
]

const achievements = [
  {
    title: 'Improved UI Efficiency',
    description: 'Increased UI responsiveness by 30% through React.js and Inertia.js integration',
    year: '2023',
    icon: Award,
  },
  {
    title: 'Enhanced API Performance',
    description: 'Reduced API latency by 25% using Laravel and Node.js for robust API development',
    year: '2022',
    icon: Code,
  },
  {
    title: 'Optimized Deployment Time',
    description: 'Decreased deployment time from 3 days to 1 day with CI/CD pipelines',
    year: '2022',
    icon: BookOpen,
  },
  {
    title: 'Boosted Search Accuracy',
    description: 'Improved search accuracy by 35% through refined Algolia search rules',
    year: '2023',
    icon: Award,
  },
]

export default function AboutPage() {
  return (
    <div className="section-container">
      <SectionTitle
        title="About Me"
        subtitle="Learn more about my journey, education, and achievements"
      />

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-light rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
              <Code className="w-8 h-8" />
              My Story
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a results-driven Full Stack Developer with 8+ years of experience in architecting and 
                delivering scalable web applications and APIs using Laravel, React.js, and Node.js. Based in 
                Karachi, Pakistan, I specialize in microservices, RESTful architecture, and cloud deployment 
                on AWS and DigitalOcean.
              </p>
              <p>
                Throughout my career, I've worked with leading companies including Abdulaziz Al Raqtan Company 
                in Saudi Arabia (remote collaboration), where I've built React.js applications integrated with 
                Laravel 9 and Inertia.js, developed RESTful APIs and microservices, and integrated payment 
                gateways like Stripe, Apple Pay, and Checkout for KSA and UAE transactions.
              </p>
              <p>
                I'm skilled in integrating payment gateways, automating CI/CD pipelines, and implementing 
                AI-driven automation using OpenAI API and Prompt Engineering. I'm experienced in Agile/Scrum 
                environments, team leadership, and cross-functional collaboration. Open to relocation and 
                full-time opportunities in KSA and UAE.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8" />
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-light rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <span className="text-primary font-semibold">{edu.year}</span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                {edu.university}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Key Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-dark-light rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">{achievement.year}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
