'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { Award, Star, Target, Trophy, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  {
    title: 'Employee of the Year 2023',
    description: 'Recognized for exceptional performance and leadership in delivering critical projects ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&h=300&fit=crop',
    icon: Trophy,
    date: 'December 2023',
  },
  {
    title: '10+ Production Apps Deployed',
    description: 'Successfully built, deployed, and maintained over 10 production-grade applications serving thousands of users.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    icon: Target,
    date: '2019 - Present',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to major open-source projects including React, Next.js, and various npm packages.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop',
    icon: Star,
    date: '2020 - Present',
  },
  {
    title: 'Tech Conference Speaker',
    description: 'Speaker at multiple tech conferences and meetups, sharing knowledge on modern web development practices.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=300&fit=crop',
    icon: Users,
    date: '2021 - 2023',
  },
  {
    title: 'Innovation Award',
    description: 'Awarded for implementing AI-driven features that increased user engagement by 150%.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
    icon: Zap,
    date: 'June 2023',
  },
  {
    title: 'Best Team Player',
    description: 'Recognized for exceptional collaboration, mentorship, and fostering a positive team culture.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
    icon: Award,
    date: 'March 2022',
  },
]

export default function AchievementsPage() {
  return (
    <div className="section-container">
      <SectionTitle
        title="Achievements"
        subtitle="Milestones and recognitions throughout my career"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-light rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-full">
                <achievement.icon className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-primary font-semibold mb-2">
                {achievement.date}
              </p>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
