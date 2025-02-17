'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  features: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  gradient: string
  icon?: React.ReactNode
  link: string
  isHovered?: boolean
  anyCardHovered?: boolean
  onHover?: () => void
  onLeave?: () => void
}

const Card = ({ 
  title, 
  description, 
  features, 
  gradient, 
  icon, 
  link,
  isHovered,
  anyCardHovered,
  onHover,
  onLeave 
}: CardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className={`relative rounded-2xl p-4 ${gradient} transition-all duration-300 ${
        isHovered ? 'flex-[2]' : 'flex-1'
      } min-w-[300px]`}
      animate={{
        height: isMobile ? 'auto' : '500px',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-white h-full w-full flex flex-col"
      >
        <div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-lg mb-4">
            {icon}
            <h2 className="text-3xl font-medium font-poppins text-black">{title}</h2>
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: anyCardHovered ? (isHovered ? 1 : 0) : 1 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mb-3">{description}</p>
            <div className="space-y-4 mb-3">
              {features.map((feature, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <h3 className="font-medium">{feature.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: anyCardHovered ? (isHovered ? 1 : 0) : 1 }}
          transition={{ duration: 0.2 }}
          className="mt-auto"
        >
          <a href={link}>
            <button className="w-full md:w-auto bg-white text-black px-4 md:px-6 py-3 md:py-2 rounded-full flex items-center justify-center md:justify-start gap-2 hover:bg-gray-100 transition-colors">
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function ExpandingCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cards: CardProps[] = [
    {
      title: "acm.ai",
      description: "Dive into the world of artificial intelligence and machine learning with hands-on projects and workshops.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-800",
      link: "/ai",
      icon: (
        <Image src="/ai-icon.svg" alt="AI" width={50} height={50} />
      ),
      features: [
        {
          title: "Machine Learning",
          description: "Learn fundamental ML concepts and implement real-world applications using popular frameworks like TensorFlow and PyTorch.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "AI Projects",
          description: "Work on exciting projects from computer vision to natural language processing, gaining practical experience in AI development.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "acm.web",
      description: "Master modern web technologies and build responsive, dynamic applications.",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-900",
      link: "/web",
      icon: (
        <Image src="/web-icon.svg" alt="Web" width={50} height={50} />
      ),
      features: [
        {
          title: "Frontend Development",
          description: "Create beautiful user interfaces using React, Next.js, and modern CSS frameworks while learning best practices in UI/UX design.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          title: "Backend Systems",
          description: "Build robust server-side applications with Node.js, databases, and API development for scalable web solutions.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          )
        }
      ]
    },
    {
      title: "acm.explore",
      description: "Discover emerging technologies and expand your technical horizons.",
      gradient: "bg-gradient-to-br from-green-500 to-green-800",
      link: "/explore",
      icon: (
        <Image src="/explore-icon.svg" alt="Explore" width={50} height={50} />
      ),
      features: [
        {
          title: "Workshops & Events",
          description: "Participate in hands-on workshops, hackathons, and tech talks led by industry professionals and experienced peers.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: "Career Growth",
          description: "Get guidance on internships, resume building, and interview preparation from successful alumni and industry partners.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 xl:flex gap-7 w-full max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          {...card} 
          isHovered={hoveredIndex === index}
          anyCardHovered={hoveredIndex !== null}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  )
}
