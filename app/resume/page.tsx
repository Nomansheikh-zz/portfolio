'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { Download, FileText } from 'lucide-react'

export default function ResumePage() {
  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a')
    link.href = '/Noman_Dildar_FullStack_Developer.pdf'
    link.download = 'Noman_Dildar_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="section-container">
      <SectionTitle
        title="Resume / CV"
        subtitle="Download my professional resume"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Download Section */}
        <div className="bg-white dark:bg-dark-light rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Professional Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Updated 2025 • PDF Format
                </p>
              </div>
            </div>
            <Button onClick={handleDownload} size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Browser Preview */}
        <div className="bg-white dark:bg-dark-light rounded-2xl shadow-xl p-4 md:p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            CV Preview
          </h3>
          <div className="w-full h-[75vh] md:h-[900px] border border-white/20 rounded-lg overflow-hidden">
            <iframe
              title="Noman Dildar CV"
              src="/Noman_Dildar_FullStack_Developer.pdf#toolbar=1&navpanes=0&view=FitH"
              className="w-full h-full"
            />
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            If the preview doesn’t load, <a href="/Noman_Dildar_FullStack_Developer.pdf" target="_blank" rel="noreferrer" className="text-primary dark:text-primary-light underline">open the PDF in a new tab</a>.
          </p>
        </div>

        {/* Preview Section */}
        <div className="bg-white dark:bg-dark-light rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Resume Highlights
          </h3>
          
          <div className="space-y-8">
            {/* Experience */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Work Experience</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                    Senior Full Stack Developer
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Abdulaziz Al Raqtan Company (KSA) • Jan 2021 - Present
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Built React.js applications with Laravel 9 and Inertia.js, improving UI responsiveness by 30%</li>
                    <li>Developed RESTful APIs and microservices using Laravel and Node.js, reducing latency by 25%</li>
                    <li>Integrated payment gateways (Stripe, Checkout, Apple Pay) for KSA and UAE transactions</li>
                    <li>Implemented AI-driven automation using OpenAI API, reducing manual data entry by 40%</li>
                    <li>Mentored junior developers and facilitated Agile sprints via JIRA and Monday.com</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                    Senior PHP Developer
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Abdulaziz Al Raqtan Company (KSA) • Oct 2018 - Dec 2020
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Developed and maintained Laravel web applications and internal enterprise tools</li>
                    <li>Managed deployments on Linux servers using Git-based CI workflows</li>
                    <li>Delivered responsive and accessible UIs across multiple devices and browsers</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                    PHP Developer
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Cygnis • Jul 2016 - Sep 2018
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Built scalable Laravel apps and integrated Google APIs for location-based services</li>
                    <li>Designed secure RESTful APIs for document sharing and user access control</li>
                    <li>Participated in Agile Scrum sprints, ensuring continuous integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Technical Skills</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Frontend
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    React, Next.js, Vue.js, Angular, TypeScript, JavaScript ES6+, HTML, Inertia.js
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Backend
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    PHP, Laravel, Node.js, Core PHP, CodeIgniter, C#, ASP.NET, REST APIs, Microservices
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Database & Cloud
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    MySQL, MS SQL Server, RDBMS, AWS, DigitalOcean, Docker, Kubernetes
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    AI & Tools
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    OpenAI, Prompt Engineering, Claude, Perplexity AI, GitHub Copilot, Git, JIRA, Monday.com
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Education</h4>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                  Bachelor of Computer Science
                </h5>
                <p className="text-gray-600 dark:text-gray-400">
                  IQRA University, Karachi, Pakistan • 2008 - 2012
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
