"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { sponsors } from "@/app/data/sponsors";
import { useState, useEffect } from 'react';
import ContactForm from '@/app/components/ContactForm';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/components/ui/accordion"

export default function Sponsors() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isContactFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isContactFormOpen]);

  return (
    <div>
        <Navigation />
        <div className="relative w-full h-[300px] ">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
            <div className="flex items-center gap-4 mb-4">
                <Image 
                src="/acm-logo.png"
                alt="ACM Logo"
                width={100}
                height={100}
                className="object-contain"
                />
                <span className="text-6xl">Sponsors</span>
            </div>
            <p className="text-lg text-center max-w-2xl px-4">
                Our Sponsors help us grow the company and allow us to continue what we love most.
            </p>
            </div>
        </div>
      
        <div className="max-w-6xl mx-auto text-center px-4 py-5">
            <p className="text-md text-gray-600 mt-2">
                Here are some of our sponsors we have worked with.
            </p>
            <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center">
              {sponsors.map((sponsor) => (
                <a 
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src={sponsor.logoPath}
                    alt={sponsor.name}
                    width={180}
                    height={90}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
            </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">FAQ</h2>
            <div className="flex justify-center w-full">
                <Accordion className="w-3/4" type="single" collapsible>
                <AccordionItem value="item-1" className="bg-white rounded-t-lg">
                    <AccordionTrigger className="ml-4 mr-4">How many members are in the club?</AccordionTrigger>
                    <AccordionContent className="ml-4 mr-4">
                    Currently, we have over 300 members.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white">
                    <AccordionTrigger className="ml-4 mr-4">How can sponsors connect with ACM members?</AccordionTrigger>
                    <AccordionContent className="ml-4 mr-4">
                        Sponsors can connect through our dedicated resume book access, sponsored events, and direct recruitment opportunities. We also facilitate one-on-one meetings with interested students and can help coordinate technical interviews.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white">
                    <AccordionTrigger className="ml-4 mr-4">What types of events can sponsors participate in?</AccordionTrigger>
                    <AccordionContent className="ml-4 mr-4">
                    Sponsors can participate in various events including tech talks, workshops, hackathons, networking sessions, and our annual career fair. We also welcome custom event proposals that align with your company's goals.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white">
                    <AccordionTrigger className="ml-4 mr-4">What is the academic background of your members?</AccordionTrigger>
                    <AccordionContent className="ml-4 mr-4">
                    Our members come from diverse academic backgrounds, primarily in Computer Science, Computer Engineering, Data Science, and related STEM fields. We have students from freshman to graduate level, maintaining a strong pipeline of talent.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white">
                    <AccordionTrigger className="ml-4 mr-4">What makes ACM different from other student organizations?</AccordionTrigger>
                    <AccordionContent className="ml-4 mr-4">
                    ACM is the world's largest computing society, and our chapter is one of the most active technical organizations at Penn State. We focus on practical skills development, professional networking, and creating meaningful connections between industry and students.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-b-lg">
                    <AccordionTrigger className="ml-4 mr-4">Can sponsors customize their involvement?</AccordionTrigger>
                    <AccordionContent className="ml-4 mr-4">
                    Yes! While we have standard sponsorship tiers, we're always open to discussing custom partnerships that align with your company's goals and our members' interests. This could include specialized workshops, ongoing mentorship programs, or targeted recruitment initiatives.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
            </div>
        </div>

        <div className="text-center mt-20 mb-20">
            <h2 className="text-6xl mb-12">Your Support Starts Here.</h2>
            <div className="flex justify-center mt-8 items-center">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
                <a 
                  href="/sponsorship-handbook.pdf"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Handbook →
                </a>
              </div>
            </div>
        </div>
        <Footer />

        <ContactForm 
          isOpen={isContactFormOpen}
          onClose={() => setIsContactFormOpen(false)}
        />
    </div>
  );
}
