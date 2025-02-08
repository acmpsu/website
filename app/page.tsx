import Image from "next/image";
import Navigation from "./components/navigation";
import Announcement from "./components/announcements";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "./components/footer";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Sponsors from "./components/sponsors";
import { BackgroundBeams } from "./components/ui/background-beams";
 

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navigation />

      <div className="relative ml-5 mr-5">
        <BackgroundBeams />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          {/* Left side content */}
          <div className="flex flex-col font-roboto justify-center space-y-6 w-[400px]">
            <h1 className="text-4xl text-[#004ab0] sm:text-5xl font-bold">
              Welcome to Penn State ACM.
            </h1>
            <p className="text-md text-[#004ab0]">
              Penn State ACM allows you to connect with other students who share your passion for technology through workshops, events, and collaborative projects.
            </p>
            <div className="flex gap-4">
              <a href="/join"><HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-gradient-to-r from-blue-300 to-[#004ab0] text-white dark:text-white flex items-center space-x-2"
              >
                  <span>Join Us</span>
              </HoverBorderGradient></a>
              <a href="/join"><HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                  <span>View Events</span>
              </HoverBorderGradient></a>
            </div>
          </div>

          {/* Right side carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-[2/1] items-center justify-center p-2 sm:p-4 md:p-6">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>

      <Sponsors />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#004ab0] mb-4">
              Turn passion into real-world impact.
            </h2>
            <p className="text-lg text-gray-600 mb-16">
              Penn State ACM empowers students to grow through hands-on experience, industry connections, and a vibrant tech community. Join us to transform your learning into lasting achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center flex flex-col items-center">
              <div className="text-6xl font-bold text-[#004ab0] mb-3">200+</div>
              <div className="text-xl text-gray-600">Active Members</div>
              <div className="mt-2 text-sm text-gray-500">and growing each semester</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-6xl font-bold text-[#004ab0] mb-3">50+</div>
              <div className="text-xl text-gray-600">Annual Events</div>
              <div className="mt-2 text-sm text-gray-500">workshops & hackathons</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-6xl font-bold text-[#004ab0] mb-3">100%</div>
              <div className="text-xl text-gray-600">Success Rate</div>
              <div className="mt-2 text-sm text-gray-500">in member project completion</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
