'use client'

import Navigation from "./components/Navigation";
import Announcement from "./components/Announcements";
import Footer from "./components/Footer";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import AnimatedStat from './components/AnimatedStat';
import Carousel from "./components/Carousel";
import Sponsors from "./components/Sponsors";
import { BackgroundBeams } from "./components/ui/background-beams";

const sponsorImages = [
  {
    src: "/company-logos/capital-one.png",
    alt: "Capital One Logo",
    width: 200,
    height: 100
  },
  {
    src: "/company-logos/lockheed-martin.png",
    alt: "Lockheed Martin Logo",
    width: 200,
    height: 100
  },
  {
    src: "/company-logos/boeing.png",
    alt: "Boeing Logo",
    width: 200,
    height: 100
  },
  {
    src: "/company-logos/nittany-ai-advance.png",
    alt: "Nittany AI Advance Logo",
    width: 200,
    height: 100
  },
  {
    src: "/company-logos/textron.png",
    alt: "Textron Logo",
    width: 200,
    height: 100
  }
];

export default function Home() {
  return (
    <div>
      <Announcement />
      <div className="w-3/4 mx-auto">
        <Navigation />
        <div className="relative min-h-[500px] pb-10">
        <BackgroundBeams />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
          {/* Left side content */}
          <div className="flex flex-col font-geistSans justify-center items-center w-[450px] h-[500px]">
            <div className="flex flex-col font-geistSans space-y-6 mx-5">
              <h1 className="text-4xl text-black w-[400px] sm:text-5xl font-medium">
                Welcome to Penn State ACM.
              </h1>
              <p className="text-md text-[#575757]">
                Penn State ACM allows you to connect with other students who share your passion for technology through workshops, events, and collaborative projects.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="/join">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-gradient-to-r from-blue-600 to-[#004ab0] text-white dark:text-white flex items-center space-x-2"
                  >
                    <span>Join Us</span>
                  </HoverBorderGradient>
                </a>
                <a href="/schedule">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <span>View Events</span>
                  </HoverBorderGradient>
                </a>
              </div>
            </div>
          </div>

          {/* Right side carousel */}
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-5/6">
              <Carousel />
            </div>
          </div>
        </div>
      </div>

      <Sponsors sponsors={sponsorImages} linkPath="/sponsors" mainTitle="Penn State ACM is backed by the world's best companies" linkText="View all sponsors" />

      <div className="bg-white py-16 font-roboto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#004ab0] mb-4">
              Turn passion into real-world impact.
            </h2>
            <p className="text-lg text-gray-600 mb-16">
              Penn State ACM empowers students to grow through hands-on experience, industry connections, and a vibrant tech community. Join us to transform your learning into lasting achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <AnimatedStat 
              end={300}
              suffix="+"
              title="Active Members"
              subtitle="and growing each semester"
            />
            <AnimatedStat 
              end={50}
              suffix="+"
              title="Annual Events"
              subtitle="from presentations, workshops & hackathons"
            />
            <AnimatedStat 
              end={100}
              suffix="%"
              title="Success Rate"
              subtitle="in member project completion"
            />
          </div>
          <div className="flex justify-center mt-12">
            <a href="/join"><HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-gradient-to-r from-blue-600 to-[#004ab0] text-white dark:text-white flex items-center space-x-2"
                >
                    <span>Join Us</span>
            </HoverBorderGradient></a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 rounded-lg  to-blue-950 py-16">
        <div className="max-w-3xl mx-auto items-center text-center px-4">
          <h2 className="text-3xl font-medium text-white mb-4">
            Ready to start your journey?
          </h2>
          <div className="flex justify-center">
            <a href="/join">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white text-blue-900 dark:text-blue-900 flex items-center space-x-2 hover:bg-gray-100"
              >
                <span>Join Now</span>
              </HoverBorderGradient>
            </a>
          </div>
        </div>
      </div>
      </div>
      <Footer />

    </div>
  );
}
