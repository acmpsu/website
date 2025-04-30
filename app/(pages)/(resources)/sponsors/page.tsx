"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import Image from "next/image";
import sponsorsData from "@/app/data/sponsors.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const { sponsors } = sponsorsData;

export default function Sponsors() {
  return (
    <div>
      <Navigation />
      <PageHeader
        title="Sponsors"
        description="Our sponsors play a vital role in helping us grow as a student-led tech community. Their support enables us to host events, run workshops, and create opportunities for students to learn, build, and connect."
      />

      <div className="max-w-6xl mx-auto text-center px-4 py-5">
        <p className="text-md text-gray-600 mt-2 mb-10">
          We’re grateful to these sponsors for their support and collaboration.
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

      <div className="w-full bg-gray-100 p-8 mx-auto px-4 py-12">
        <h2 className="text-3xl font-medium font-poppins text-black mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className=" max-w-6xl mx-auto flex justify-center w-full">
          <Accordion className="w-3/4" type="single" collapsible>
            <AccordionItem value="item-2" className="bg-white">
              <AccordionTrigger className="pl-4 pr-4 bg-[#193668]">
                How can sponsors connect with ACM members?
              </AccordionTrigger>
              <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                Sponsors can connect through our dedicated resume book access,
                sponsored events, and direct recruitment opportunities. We also
                facilitate one-on-one meetings with interested students and can
                help coordinate technical interviews.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white">
              <AccordionTrigger className="pl-4 pr-4 bg-[#193668]">
                What types of events can sponsors participate in?
              </AccordionTrigger>
              <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                Sponsors can participate in various events including tech talks,
                workshops, hackathons, networking sessions, and our annual
                career fair. We also welcome custom event proposals that align
                with your company's goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white">
              <AccordionTrigger className="pl-4 pr-4 bg-[#193668]">
                What is the academic background of your members?
              </AccordionTrigger>
              <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                Our members come from diverse academic backgrounds, primarily in
                Computer Science, Computer Engineering, Data Science, and
                related STEM fields. We have students from freshman to graduate
                level, maintaining a strong pipeline of talent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="">
              <AccordionTrigger className="pl-4 pr-4 bg-[#193668]">
                What makes ACM different from other student organizations?
              </AccordionTrigger>
              <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                ACM is the world's largest computing society, and our Penn State
                chapter, founded in 1991, is one of the oldest and most active
                technical organizations at Penn State. We focus on practical
                skills development, professional networking, and creating
                meaningful connections between industry and students.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-b-lg [&[data-state=open]]:rounded-b-none"
            >
              <AccordionTrigger className="pl-4 pr-4 rounded-b-lg bg-[#193668] [&[data-state=open]]:rounded-b-none">
                Can sponsors customize their involvement?
              </AccordionTrigger>
              <AccordionContent className="pl-4 pr-4 text-white bg-[#193668]">
                Yes! While we have standard sponsorship tiers, we're always open
                to discussing custom partnerships that align with your company's
                goals and our members' interests. This could include specialized
                workshops, ongoing mentorship programs, or targeted recruitment
                initiatives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="text-center mt-32 mb-32">
        <h2 className="text-6xl font-poppins mb-12">
          Your Support Starts Here.
        </h2>
        <div className="flex justify-center mt-8 items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <a
              href="mailto:corporaterelations@acm.psu.edu"
              className="bg-blue-600 hover:bg-blue-700 text-white font-poppins py-4 px-10 rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/corp.pdf"
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
    </div>
  );
}
