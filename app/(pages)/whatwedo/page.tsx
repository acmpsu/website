import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">What We Do</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Technical Workshops</h2>
            <p className="text-gray-700">
              We organize hands-on workshops covering various technologies, programming languages,
              and software development practices to help members build practical skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Hackathons</h2>
            <p className="text-gray-700">
              Join us for exciting hackathons where you can collaborate with peers,
              build amazing projects, and compete for prizes while learning new technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Industry Connections</h2>
            <p className="text-gray-700">
              We bring industry professionals to campus for tech talks, networking sessions,
              and career guidance to help bridge the gap between academia and industry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Project Teams</h2>
            <p className="text-gray-700">
              Work on real-world projects with other passionate developers. Gain experience
              in software development, teamwork, and project management.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
