import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CodeBlockWithCode } from "@/app/components/codeblock";
import Sponsors from "@/app/components/sponsors";

const sponsorImages = [
    {
      src: "/company-logos/hackpsu.png",
      alt: "HackPSU Logo",
      width: 150,
      height: 100,
    },
    {
      src: "/company-logos/ieee.png",
      alt: "IEEE Logo",
      width: 150,
      height: 100,
    }
  ];

export default function DevPSU() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-12">
            <div>
                <div className="flex items-center gap-6 mb-4">
                    <Image 
                      src="/devpsu-logo.png"
                      alt="DevPSU Logo"
                      width={120}
                      height={120}
                    />
                    <h1 className="text-6xl font-bold">DEV PSU</h1>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                    Learn how to code, build your own projects, <br />
                    and meet new people.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 w-fit">
                    View Schedule
                </Button>
            </div>

            <div className="flex justify-center lg:justify-end items-center">
                <CodeBlockWithCode />
            </div>
          </div>

          <Sponsors sponsors={sponsorImages} mainTitle="Penn State ACM is working with leading tech clubs." linkText="View our relationships" />

          {/* What We Do Section */}

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Technical Workshops Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Workshop Image
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Technical Workshops</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Dive deep into the latest technologies with our hands-on workshops.
                  From web development to scripting, our student-led sessions
                  provide practical experience and valuable skills that you can
                  immediately apply to your projects.
                </p>
              </div>
            </div>

            {/* Hackathons Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Hackathons</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Challenge yourself in our high-energy hackathons where creativity
                  meets technical skill. Work with teams, solve real problems, and
                  compete for exciting prizes while building something amazing.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Hackathon Image
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Connections Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Industry Event Image
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Industry Connections</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bridge the gap between academia and industry through our network
                  of tech professionals. Attend exclusive tech talks, networking
                  sessions, and receive mentorship from industry veterans.
                </p>
              </div>
            </div>

            {/* Project Teams Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Project Teams</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Join our project teams to gain real-world development experience.
                  Work collaboratively on meaningful projects, learn industry-standard
                  practices, and build an impressive portfolio of work.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Project Team Image
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ideas and Join Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-xl">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold mb-4">Have Ideas?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We're always looking for new workshop ideas and projects. If you have
                  something in mind, let us know!
                </p>
                <Link 
                  href="https://forms.gle/your-form-link" 
                  target="_blank"
                  className="inline-block"
                >
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Submit Your Idea
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Join our community of developers, designers, and tech enthusiasts.
                  No experience required - just bring your curiosity and willingness to learn!
                </p>
                <Link href="/join" className="inline-block">
                  <Button className="bg-green-500 hover:bg-green-600">
                    Join DEV PSU
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
