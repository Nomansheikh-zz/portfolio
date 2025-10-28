'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'

const projects = [
  {
    title: 'Ekuep Ecommerce Platform',
    description: 'Migrated PrestaShop to Laravel 5.8 with Livewire; built cart, orders, and checkout integrating multiple payment gateways; integrated Microsoft D365 for invoicing and logistics (Naqal, SMSA); optimized Algolia indexing for search.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    stack: ['Laravel 5.8', 'Livewire', 'PrestaShop', 'Payment APIs', 'Algolia', 'D365'],
    liveUrl: 'https://ekuep.com',
  },
  {
    title: 'SphereY – After‑Sales & Service Platform',
    description: 'Built modules in Laravel 5.3 (quotations, roles, D365 invoicing, job creation/assignment, settlements); exposed REST APIs for iOS/Android; implemented Checkout.com; Vue.js (Super Admin) & AngularJS (Admin).',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    stack: ['Laravel 5.3', 'Vue.js', 'AngularJS', 'REST', 'Checkout.com', 'D365'],
    liveUrl: 'https://raqtan.techplanner.com',
  },
  {
    title: 'Production Planner Web App',
    description: 'Production planning & scheduling system (May 2024 – Aug 2025): schedule/PWO upload, auto-assign operations to technicians, dashboards with React + Inertia.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    stack: ['React.js', 'Laravel 9', 'Inertia.js'],
    liveUrl: 'https://production-planner.spherey.com',
  },
  {
    title: 'SphereY – Customer Web Portal',
    description: 'Laravel 9 with Sanctum authentication; Checkout.com iframe payments; workflows for jobs, warranty claims, and after‑sales; organization member management (Jan 2025 – Apr 2025).',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
    stack: ['Laravel 9', 'Sanctum', 'Checkout.com', 'Inertia.js'],
    liveUrl: 'https://customer.spherey.com',
  },
  {
    title: 'Liveguard – Geo‑secure Document Sharing',
    description: 'Laravel 5.3 APIs for secure document sharing restricted by geofence; Google Maps/Places integration with radius filtering (Feb 2017 – Apr 2017).',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764ce7?w=500&h=300&fit=crop',
    stack: ['Laravel 5.3', 'Google Maps API', 'Geofencing', 'REST'],
    liveUrl: 'https://liveguard.com',
  },
]

export default function ProjectsPage() {
  return (
    <div className="section-container">
      <SectionTitle
        title="Projects"
        subtitle="Explore my portfolio of web applications and software projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}
