"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"

export default function Join() {
  return (
    <div>
      <Navigation />
      <div className="relative w-full h-[300px]">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/acm-logo.svg"
              alt="ACM Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <span className="text-6xl">Join ACM</span>
          </div>
          <p className="text-lg text-center max-w-2xl px-4">
            Be part of Penn State's largest computer science organization
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Membership Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Access to exclusive workshops and tech talks</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Networking opportunities with industry professionals</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Resume review and career development resources</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Participation in hackathons and coding competitions</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Leadership and project development opportunities</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">How to Join</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Attend Our Events</h4>
                  <p className="text-gray-600">Check our calendar and come to any event that interests you</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Sign Up</h4>
                  <p className="text-gray-600">Fill out our membership form and join our Discord community</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Get Involved</h4>
                  <p className="text-gray-600">Participate in our activities and become an active member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">FAQ</h2>
          <div className="flex justify-center w-full">
            <Accordion className="w-3/4" type="single" collapsible>
              <AccordionItem value="item-1" className="bg-white">
                  <AccordionTrigger className="pl-4 pr-4 rounded-t-lg bg-[#193668]">Is there a membership fee?</AccordionTrigger>
                  <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                  Our members come from diverse academic backgrounds, primarily in Computer Science, Computer Engineering, Data Science, and related STEM fields. We have students from freshman to graduate level, maintaining a strong pipeline of talent.
                  </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white">
                <AccordionTrigger className="pl-4 pr-4 bg-[#193668]">Do I need to be a Computer Science major?</AccordionTrigger>
                <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                  Not at all! We welcome students from all majors who are interested in technology and computing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white">
                <AccordionTrigger className="pl-4 pr-4 bg-[#193668]">How much time commitment is required?</AccordionTrigger>
                <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                  Participation is flexible! You can attend as many or as few events as you'd like based on your schedule and interests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-b-lg [&[data-state=open]]:rounded-b-none">
                <AccordionTrigger className="pl-4 pr-4 bg-[#193668] rounded-b-lg [&[data-state=open]]:rounded-b-none">Can freshmen join?</AccordionTrigger>
                <AccordionContent className="pl-4 pr-4 text-white bg-[#193668] rounded-b-lg">
                  Absolutely! We encourage freshmen to join early to make the most of networking and learning opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-6xl mb-12">Ready to Join?</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://groupme.com/join_group/105326747/CSj2fp99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-colors"
            >
              Join GroupMe
            </a>
            <a 
              href="https://discord.gg/4Wyja9anhZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-10 rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}