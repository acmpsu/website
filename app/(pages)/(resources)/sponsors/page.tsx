import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div>
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Our Sponsors</h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Our Sponsors help us grow the company and allow us to continue what we love most.
        </p>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Current Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Sponsor Card */}
            <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Image 
                src="/placeholder-sponsor.png"
                alt="Sponsor Name"
                width={200}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Company Name</h3>
              <p className="text-gray-600 mb-4">Brief description of the company and their support.</p>
              <a 
                href="https://company-website.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Past Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Add Gold sponsor cards here */}
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Interested in Sponsoring?</h2>
          <p className="mb-6 text-gray-600">
            Support the next generation of tech leaders. Partner with Penn State ACM.
          </p>
          <a 
            href="mailto:sponsorship@acmpsu.org"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
