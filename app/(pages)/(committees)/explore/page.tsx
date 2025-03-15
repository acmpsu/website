import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Sponsors from "@/app/components/Sponsors";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";
import { EventCards } from "@/app/components/EventCards";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

const sponsorImages = [
    {
      src: "/club-logos/hackpsu.png",
      alt: "HackPSU Logo",
      width: 150,
      height: 100,
    },
    {
      src: "/club-logos/ieee.png",
      alt: "IEEE Logo",
      width: 150,
      height: 100,
    },
    {
      src: "/club-logos/awc.png",
      alt: "AWC Logo",
      width: 150,
      height: 100,
    },
    {
      src: "/club-logos/nittanyaistudentsociety.png",
      alt: "Nittany AI Student Society Logo",
      width: 150,
      height: 100,
    }
  ];

export default function ACMExplore() {
  return (
    <div>
      <Navigation />
        <div className="flex-grow w-full mx-auto">
          {/* Hero Section */}
          <div className="flex bg-gradient-to-b from-[#ffffff] via-[#f5f5f5] to-[#e6f0e8] justify-center flex-col overflow-hidden lg:justify-end items-center">
            <ContainerScroll
              titleComponent={
                <>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex mx-auto items-center gap-4 md:gap-6 mb-4">
                      <Image 
                        src="/explore-icon.svg"
                        alt="Explore Icon"
                        width={40}
                        height={60}
                        className="w-[40px] md:w-[80px] h-auto"
                      />
                      <Image 
                        src="/acm.explore.svg"
                        alt="Explore Words"
                        width={200}
                        height={60}
                        className="w-[200px] md:w-[400px] h-auto"
                      />
                    </div>
                    <p className="text-base font-geistSans md:text-lg text-gray-700 max-w-2xl mb-4 md:mb-8 px-4">
                      Discover new topics from robotics to game development.
                    </p>
                  </div>
                </>
              }
            >
              <Image
                src={`/carousel-pictures/4.jpg`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-left-top"
                draggable={false}
                priority
              />
            </ContainerScroll>
          </div>
          </div>

          {/* What We Do Section */}
          <div className="w-full">
            <div className="max-w-3xl mx-auto text-center pt-20 pb-20 space-y-16"> 
              <h2 className="text-5xl text-black flex items-center justify-center gap-4 font-geistSans font-medium mb-4">
                What is 
                <Image 
                  src="/acm.explore.svg" 
                  alt="Explore Words" 
                  width={300} 
                  height={100} 
                  className="w-[300px] h-auto mt-3"
                />
              </h2>
              <p className="text-gray-700 ml-4 mr-4 font-geistSans text-lg leading-relaxed">
                acm.explore is one of our committees that focus on bringing new and interesting topics to the table. 
                Nothing here is off limits and explore captains are given full range of what they want to present and work on.
                This ranges from robotics to game development and more!
              </p>
            </div>
          </div>

          <div className="w-full px-2 py-20 relative overflow-hidden">
            <div className="max-w-6xl text-center mx-auto space-y-16 relative">
              <h2 className="text-3xl  font-geistSans font-medium mb-12">
                Meet The Team
              </h2>
              
              {/* Director */}
              <div className="flex flex-col items-center mb-10">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 z-10">
                    <Image 
                      src="/explore-icon.svg"
                      alt="Director Badge"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Image
                    src="/headshots/placeholder.png"
                    alt="Explore Director"
                    width={150}
                    height={150}
                    className="rounded-lg mb-4"
                  />
                </div>
                <h3 className="text-2xl font-poppins font-medium mb-2">Dylan McDonnell</h3>
                <p className="text-green-600 font-geistSans mb-4">Explore Director</p>
              </div>
              {/* Captains Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
                {/* Captain 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 z-10">
                      <Image 
                        src="/explore-icon.svg"
                        alt="Captain Badge"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Image
                      src="/headshots/wyattpetula.jpg"
                      alt="Explore Captain"
                      width={150}
                      height={150}
                      className="rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-poppins font-medium mb-2">Wyatt Petula</h3>
                  <p className="text-green-600 font-geistSans mb-4">Explore Captain - Game Development</p>
                </div>

                {/* Captain 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 z-10">
                      <Image 
                        src="/explore-icon.svg"
                        alt="Captain Badge"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Image
                      src="/headshots/viveknayar.jpg"
                      alt="Explore Captain"
                      width={150}
                      height={150}
                      className="rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-poppins font-medium mb-2">Vivek Nayar</h3>
                  <p className="text-green-600 font-geistSans mb-4">Explore Captain - Robotics</p>
                </div>

                {/* Captain 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 z-10">
                      <Image 
                        src="/explore-icon.svg"
                        alt="Captain Badge"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  <Image
                    src="/headshots/gitikasaini.jpg"
                    alt="Explore Captain"
                    width={150}
                    height={150}
                      className="rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-poppins font-medium mb-2">Gitika Saini</h3>
                  <p className="text-green-600 font-geistSans mb-4">Explore Captain</p>
                </div>

                {/* Captain 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 z-10">
                      <Image 
                        src="/explore-icon.svg"
                        alt="Captain Badge"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Image
                      src="/headshots/placeholder.png"
                      alt="Explore Captain"
                      width={150}
                      height={150}
                      className="rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-poppins font-medium mb-2">Tife Akintan</h3>
                  <p className="text-green-600 font-geistSans mb-4">Explore Captain</p>
                </div>
              </div>
            </div>
          </div>
            
          <div className="bg-gradient-to-b from-[#ffffff] via-[#e6f0e8] to-[#ffffff] p-4 pt-20 pb-20 mb-20 space-y-16">
            <div className="flex items-center justify-center mb-10">
              <h2 className="text-3xl font-geistSans font-medium text-black">Current Events</h2>
            </div>

            <div className="w-3/4 mx-auto">
              <EventCards committee="explore" textColor="text-black"/>
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
          

          <Sponsors sponsors={sponsorImages} linkPath="/friends" mainTitle="Penn State ACM is working with leading tech clubs." linkText="View our relationships" />

          {/* What We Do Section */}

          <div className="bg-gray-100 p-4 pt-20 pb-20 mb-20 space-y-16">
            {/* Technical Workshops Section */}
            <div className="flex max-w-6xl mx-auto flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center border-2 border-green-600 rounded-lg p-2 aspect-video">
                      <Image src="/carousel-pictures/4.jpg" alt="Workshop" width={1000} height={1000} className="rounded-lg w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl text-black font-geistSans font-medium mb-4">Technical Workshops</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Dive deep into the latest technologies with our hands-on workshops.
                  From coding on the Unity Engine to working with Arduino, we have you covered.
                </p>
              </div>
            </div>

            {/* Presentations Section */}
            <div className="flex max-w-6xl mx-auto flex-col-reverse md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl text-black font-geistSans font-medium mb-4">Presentations</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  In our presentations, we present on a wide range of topics from robotics to game development. We bring in industry professionals to speak to our members about their experiences and insights.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    <div className="w-full h-full flex items-center justify-center border-2 border-green-600 rounded-lg p-2 aspect-video">
                      <Image src="/carousel-pictures/3.jpg" alt="Workshop" width={1000} height={1000} className="rounded-lg w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Teams Section */}
            <div className="flex max-w-6xl mx-auto flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="inline-block rounded-lg shadow-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center border-2 border-green-600 rounded-lg p-2 aspect-video">
                    <Image
                      src="/carousel-pictures/2.jpg"
                      alt="Project Team"
                      width={600}
                      height={400}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl text-black font-geistSans font-medium mb-4">Project Teams</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Join our project teams to gain real-world development experience.
                  Work collaboratively on meaningful projects, learn industry-standard
                  practices, and build an impressive portfolio of work.
                </p>
              </div>
            </div> 
          </div>

          <div className="flex max-w-6xl mx-auto flex-col md:flex-row mb-20 items-start gap-8 p-8">
            <div className="md:w-1/2 flex flex-col justify-between min-h-[200px]">
              <div>
                <h2 className="text-3xl font-geistSans font-medium mb-4">Have Ideas?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We're always looking for new workshop ideas and projects. If you have
                  something in mind, let us know!
                </p>
              </div>
              <Link 
                href="https://forms.office.com/r/PxnNbGimHn" 
                target="_blank"
                className="inline-block"
              >
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Submit Your Ideas
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 flex flex-col justify-between min-h-[200px]">
              <div>
                <h2 className="text-3xl font-geistSans font-medium mb-4">Ready to Join?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Join our community of developers, designers, and tech enthusiasts.
                  No experience required - just bring your curiosity and willingness to learn!
                </p>
              </div>
              <Link href="/join" className="inline-block">
                <Button className="bg-green-500 hover:bg-green-600">
                  Join acm.explore
                </Button>
              </Link>
            </div>
          </div>
        <Footer />
      </div>
  );
}
