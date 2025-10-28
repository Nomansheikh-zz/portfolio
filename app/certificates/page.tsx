'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { Award, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'January 2023',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    pdfUrl: '/certificates/aws-certificate.pdf',
    verifyUrl: 'https://aws.amazon.com/verification',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: 'November 2022',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    pdfUrl: '/certificates/scrum-certificate.pdf',
    verifyUrl: 'https://scrum.org/certificates',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'September 2022',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop',
    pdfUrl: '/certificates/react-certificate.pdf',
  },
  {
    title: 'Node.js Advanced Concepts',
    issuer: 'Udemy',
    date: 'July 2022',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
    pdfUrl: '/certificates/nodejs-certificate.pdf',
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'Coursera',
    date: 'March 2022',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    pdfUrl: '/certificates/fullstack-certificate.pdf',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    title: 'Database Design & Management',
    issuer: 'LinkedIn Learning',
    date: 'January 2022',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
    pdfUrl: '/certificates/database-certificate.pdf',
  },
]

export default function CertificatesPage() {
  return (
    <div className="section-container">
      <SectionTitle
        title="Certificates"
        subtitle="Professional certifications and course completions"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-light rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
              <Image
                src={cert.thumbnail}
                alt={cert.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full">
                <Award className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              
              <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {cert.date}
              </p>

              <div className="flex gap-3">
                <a
                  href={cert.pdfUrl}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Download</span>
                </a>
                
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
