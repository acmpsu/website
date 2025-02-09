"use client";

import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Image from "next/image";
import { useState } from "react";

export default function Relationships() {
  const [activeTab, setActiveTab] = useState('sponsors');

  return (
    <div>
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="border rounded-lg inline-flex">
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'sponsors'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('sponsors')}
            >
              Sponsors
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'relations'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('relations')}
            >
              Club Relations
            </button>
          </div>
        </div>

        {/* Sponsors Content */}
        {activeTab === 'sponsors' && (
          <>
            <h1 className="text-4xl font-bold text-center mb-6">Our Sponsors</h1>
            <p className="text-center text-gray-600 text-lg mb-12">
              Our Sponsors help us grow the company and allow us to continue what we love most.
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Current Sponsors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <Image 
                    src="/placeholder-sponsor.png"
                    alt="Sponsor Name"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold mb-4">Interested in Sponsoring?</h2>
              <p className="mb-6 text-gray-600">
                Support the next generation of tech leaders. Partner with Penn State ACM.
              </p>
              <div className="space-x-4">
                <a 
                  href="mailto:sponsorship@acmpsu.org"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
                >
                  Become a Sponsor
                </a>
                <a 
                  href="/sponsorship-handbook.pdf"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Handbook
                </a>
              </div>
            </div>
          </>
        )}

        {/* Club Relations Content */}
        {activeTab === 'relations' && (
          <>
            <h1 className="text-4xl font-bold text-center mb-6">Club Relations</h1>
            <p className="text-center text-gray-600 text-lg mb-12">
              We collaborate with various clubs and organizations at Penn State to create a stronger tech community.
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Partner Clubs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <Image 
                    src="/placeholder-club.png"
                    alt="Club Name"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
