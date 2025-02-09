import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CodeBlockWithCode } from "@/app/components/codeblock";

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
                    <h1 className="text-6xl font-bold">Data Engine</h1>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                    Collect, curate, and annotate data.<br/>
                    Train models and evaluate. Repeat.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 w-fit">
                    View Schedule
                </Button>
            </div>

            <div className="flex justify-center lg:justify-end items-center">
                <CodeBlockWithCode />
            </div>
        </div>


        {/* Main Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Presentations & Workshops */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Presentations & Workshops</h2>
            <p className="text-gray-600 mb-4">
              Regular technical presentations and hands-on workshops covering various development topics.
              From web development to system design, we've got you covered.
            </p>
            <Link href="/schedule">
                <Button variant="outline">View Schedule</Button>
            </Link>
          </div>

          {/* Projects & Collaborations */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Projects & Collaborations</h2>
            <p className="text-gray-600 mb-4">
              Work on real-world projects with fellow students. Build your portfolio
              and gain practical experience in software development.
            </p>
            <Button variant="outline">Explore Projects</Button>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold mb-2">Learning Materials</h3>
              <p className="text-gray-600">Access presentation slides and workshop recordings</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Code Repository</h3>
              <p className="text-gray-600">Browse our GitHub for project code and examples</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-gray-600">Connect with other developers on Discord</p>
            </div>
          </div>
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
}
