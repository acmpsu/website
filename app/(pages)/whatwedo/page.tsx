import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function Activities() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">What We Do</h1>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700">
              At Penn State ACM, we offer a variety of activities and events designed to 
              help you grow technically, professionally, and socially. Here's what you 
              can expect when you join our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Technical Development */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Coding Workshop Image
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Technical Development</h2>
              <p className="text-gray-700 mb-4">
                Enhance your coding skills through regular workshops, coding challenges, 
                and collaborative projects. Our sessions cover various programming languages, 
                algorithms, and software development practices.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Coding workshops</p>
                <p>• Algorithm practice</p>
                <p>• Project collaborations</p>
              </div>
            </div>

            {/* Professional Growth */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Professional Event Image
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Professional Growth</h2>
              <p className="text-gray-700 mb-4">
                Connect with industry professionals through tech talks, networking events, 
                and career development sessions. Get insights into the tech industry and 
                prepare for your future career.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Industry speaker series</p>
                <p>• Resume workshops</p>
                <p>• Interview preparation</p>
              </div>
            </div>

            {/* Community Building */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Community Event Image
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Community Building</h2>
              <p className="text-gray-700 mb-4">
                Join a welcoming community of tech enthusiasts. Participate in social 
                events, game nights, and casual meetups to build lasting connections 
                with fellow members.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Social gatherings</p>
                <p>• Team building activities</p>
                <p>• Mentorship opportunities</p>
              </div>
            </div>

            {/* Innovation & Projects */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Innovation Image
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Innovation & Projects</h2>
              <p className="text-gray-700 mb-4">
                Put your skills into practice through hackathons, group projects, and 
                innovation challenges. Work on real-world problems and build impressive 
                portfolio pieces.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Hackathon participation</p>
                <p>• Group projects</p>
                <p>• Innovation challenges</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-gray-700 mb-6">
              Join our community to stay updated on upcoming events and connect with 
              fellow tech enthusiasts!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Join Our Community
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
