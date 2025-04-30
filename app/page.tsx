"use client";

import Navigation from "./components/Navigation";
import Announcement from "./components/Announcements";
import Footer from "./components/Footer";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import AnimatedStat from "./components/AnimatedStat";
import Sponsors from "./components/Sponsors";
import ResponsiveHexagon from "./components/ResponsiveHexagons";
import Image from "next/image";
import { EventCards } from "./components/EventCards";

const sponsorImages = [
  {
    src: "https://aqe6lvxoos.ufs.sh/f/xPAt5BMGMRyqM272SCoA2H6tNowsWISfXK8y04Yckh7jUlFP",
    alt: "Capital One Logo",
    width: 200,
    height: 100,
  },
  {
    src: "https://aqe6lvxoos.ufs.sh/f/xPAt5BMGMRyqYBMCtx45CsUzvAwLeG3a649nPhqfuctXEjOT",
    alt: "Lockheed Martin Logo",
    width: 200,
    height: 100,
  },
  {
    src: "https://aqe6lvxoos.ufs.sh/f/xPAt5BMGMRyqXoMUXAGxxJ0aTsvkt5HpWQCwbNgVflA3hPm7",
    alt: "Boeing Logo",
    width: 200,
    height: 100,
  },
  {
    src: "https://aqe6lvxoos.ufs.sh/f/xPAt5BMGMRyqejLPB7Te5O3vpwGiZ4xbKElygnhDd0ofC9tA",
    alt: "Nittany AI Advance Logo",
    width: 200,
    height: 100,
  },
  {
    src: "https://aqe6lvxoos.ufs.sh/f/xPAt5BMGMRyqvwATR2aAqJm5Tbaud7BlSGMOPFKjR6I2hkHX",
    alt: "Textron Logo",
    width: 200,
    height: 100,
  },
];

export default function Home() {
  return (
    <div>
      {/* Header Components */}
      <Announcement />
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-[500px] pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 mt-10 w-full">
          {/* Left Side - Hero Content */}
          <div className="flex flex-col font-roboto justify-center items-center lg:items-start h-[500px] w-full lg:w-[450px]">
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl sm:text-5xl font-bold text-black w-[300px] md:w-[400px]">
                Welcome to Penn State ACM.
              </h1>

              <p className="text-md w-[300px] md:w-[400px]  text-[#575757]">
                Penn State ACM is the largest computer science student
                organization on campus. We welcome you to learn, grow, and make
                an impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                <a href="/join">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-gradient-to-r from-blue-600 to-[#004ab0] text-white flex items-center space-x-2 dark:bg-black dark:text-white"
                  >
                    <span>Join Us</span>
                  </HoverBorderGradient>
                </a>

                <a href="/events">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-white text-black flex items-center space-x-2 dark:bg-black dark:text-white"
                  >
                    <span>View Events</span>
                  </HoverBorderGradient>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Hexagon Pattern */}
          <div className="flex justify-end items-center w-full">
            <ResponsiveHexagon />
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <Sponsors
        sponsors={sponsorImages}
        linkPath="/sponsors"
        mainTitle="Penn State ACM is backed by the world's best companies."
        linkText="View all sponsors"
      />

      {/* Impact Section */}
      <div className="w-full bg-[#1e407c] relative overflow-hidden">
        {/* Background Hexagons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
          <svg
            width="600"
            height="600"
            viewBox="0 0 1562.98 1749.08"
            className="w-[600px] h-[600px]"
          >
            <path
              fill="#1e40af"
              d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
            />
          </svg>
        </div>
        <div className="absolute -left-32 top-0 opacity-10">
          <svg
            width="400"
            height="400"
            viewBox="0 0 1562.98 1749.08"
            className="w-[400px] h-[400px]"
          >
            <path
              fill="#1e40af"
              d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
            />
          </svg>
        </div>
        <div className="absolute right-32 -bottom-32 opacity-10">
          <svg
            width="300"
            height="300"
            viewBox="0 0 1562.98 1749.08"
            className="w-[300px] h-[300px]"
          >
            <path
              fill="#1e40af"
              d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
            />
          </svg>
        </div>
        <div className="absolute left-1/2 top-0 opacity-10 transform -translate-x-1/2">
          <svg
            width="200"
            height="200"
            viewBox="0 0 1562.98 1749.08"
            className="w-[200px] h-[200px]"
          >
            <path
              fill="#1e40af"
              d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
            />
          </svg>
        </div>
        <div className="absolute -left-16 bottom-0 opacity-10 transform rotate-45">
          <svg
            width="250"
            height="250"
            viewBox="0 0 1562.98 1749.08"
            className="w-[250px] h-[250px]"
          >
            <path
              fill="#1e40af"
              d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
            />
          </svg>
        </div>

        <div className="py-16 font-roboto mx-4 sm:mx-6 md:mx-8 rounded-lg relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Turn passion into real-world impact.
              </h2>

              <p className="text-lg text-gray-200 mb-16">
                Penn State ACM empowers students to grow through hands-on
                experience, industry connections, and a vibrant tech community.
                Join us to transform your learning into lasting achievements.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <AnimatedStat
                end={100}
                suffix="+"
                title="Members"
                subtitle="and growing each semester"
              />
              <AnimatedStat
                end={25}
                suffix="+"
                title="Annual Events"
                subtitle="from GBMs, presentations & workshops"
              />
              <AnimatedStat
                end={100}
                suffix="%"
                title="Success Rate"
                subtitle="in member project completion"
              />
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-12">
              <a href="/join">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white text-[#004ab0] flex items-center space-x-2 hover:bg-gray-100"
                >
                  <span>Join Us</span>
                </HoverBorderGradient>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 font-roboto mx-4 sm:mx-6 md:mx-0 rounded-lg my-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004ab0] mb-4">
              Upcoming Events
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Join us for workshops, tech talks, and networking opportunities.
              Stay connected with the latest in computer science.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <EventCards maxCards={3} textColor="text-black" />
          </div>

          {/* View All Events Button */}
          <div className="flex justify-center mt-10">
            <a href="/events">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white text-black flex items-center space-x-2 dark:bg-black dark:text-white"
              >
                <span>View All Events</span>
              </HoverBorderGradient>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full px-9 py-16 mb-20">
        <div className="max-w-6xl mx-auto">
          {/* acm.explore Section */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/acm.explore.svg"
                alt="acm.explore"
                width={250}
                height={250}
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4 mb-6">
                acm.explore is a platform for students to explore the world of
                computer science. Through hands-on workshops, coding challenges,
                and collaborative projects, members gain practical experience in
                various programming languages, software development tools, and
                emerging technologies. Join us to discover new areas of
                computing and build your technical foundation.
              </p>
              <a href="/explore">
                <HoverBorderGradient
                  primaryColor="#00873E"
                  secondaryColor="#34D399"
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white text-black flex items-center space-x-2 dark:bg-black dark:text-white"
                >
                  <span>Learn More</span>
                </HoverBorderGradient>
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 h-48">
                <img
                  src="/explore-icon.svg"
                  alt="explore Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* acm.ai Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
            <div className="md:w-1/2 md:order-2">
              <Image src="/acm.ai.svg" alt="acm.ai" width={150} height={150} />
              <p className="text-gray-700 text-lg leading-relaxed mt-4 mb-6">
                acm.ai is a platform for students to learn about artificial
                intelligence. Through workshops, projects, and hands-on
                experience with machine learning models, students explore
                cutting-edge AI technologies, neural networks, and data science.
                Join us to develop skills in AI/ML and contribute to innovative
                projects that shape the future of technology.
              </p>
              <a href="/ai">
                <HoverBorderGradient
                  primaryColor="#004ab0"
                  secondaryColor="#60a5fa"
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white text-black flex items-center space-x-2 dark:bg-black dark:text-white"
                >
                  <span>Learn More</span>
                </HoverBorderGradient>
              </a>
            </div>
            <div className="md:w-1/2 md:order-1 flex justify-center">
              <div className="w-48 h-48">
                <img
                  src="/ai-icon.svg"
                  alt="AI Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* acm.web Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
            <div className="md:w-1/2">
              <Image
                src="/acm.web.svg"
                alt="acm.web"
                width={200}
                height={200}
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4 mb-6">
                acm.web is a platform for students to learn about web
                development. From front-end frameworks to back-end architecture,
                members gain experience with modern web technologies, responsive
                design, and full-stack development. Through collaborative
                projects and mentorship, students build production-ready
                applications while learning industry best practices and tools.
              </p>
              <div
                className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 text-gray-500 rounded-full border-2 border-gray-300 shadow-sm"
                aria-disabled="true"
                title="Feature coming soon"
              >
                <span>Coming Soon</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 h-48">
                <img
                  src="/web-icon.svg"
                  alt="Web Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-6xl mx-auto py-16 rounded-lg mb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-medium text-black mb-4">
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

      {/* Hexagon Border Pattern */}
      <div className="relative w-full h-[80px] overflow-hidden bg-white">
        <div
          className="absolute w-full"
          style={{ transform: "translateX(-30px) translateY(10px)" }}
        >
          {[...Array(2)].map((_, row) => {
            const hexSize = 60;
            const verticalGap = 8;
            const numberOfHexagons =
              Math.ceil(
                (typeof window !== "undefined" ? window.innerWidth : 1920) /
                  hexSize
              ) + 4;

            const blueShades = ["#1e3a8a", "#2563eb", "#3b82f6", "#60a5fa"];

            return (
              <div
                key={row}
                className="flex"
                style={{
                  transform: row % 2 ? "translateX(30px)" : "none",
                  marginTop: row ? `-${hexSize / 3 - verticalGap}px` : "0",
                  width: "100vw",
                }}
              >
                {[...Array(numberOfHexagons)].map((_, col) => {
                  const randomShade =
                    blueShades[Math.floor(Math.random() * blueShades.length)];

                  return (
                    <div
                      key={`${row}-${col}`}
                      style={{
                        width: hexSize,
                        height: hexSize,
                        flexShrink: 0,
                        opacity: Math.random() < 0.1 ? "0" : "1",
                      }}
                    >
                      <svg
                        viewBox="0 0 1562.98 1749.08"
                        className="w-full h-full"
                      >
                        <path
                          fill={randomShade}
                          d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
