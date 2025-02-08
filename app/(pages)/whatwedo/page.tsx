import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";

export default function WhatWeDo() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">What We Do</h1>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700">
            ACM at our university is dedicated to fostering a vibrant tech community.
            We provide opportunities for students to learn, grow, and connect through
            various events and activities throughout the year.
          </p>
        </div>

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
                From web development to machine learning, our expert-led sessions
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
                compete for exciting prizes while building something amazing in
                just 24-48 hours.
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
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
}
