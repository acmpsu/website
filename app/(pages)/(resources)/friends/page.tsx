"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import clubPartnersData from "@/app/data/clubs.json";
import PageHeader from "@/app/components/PageHeader";

const { clubPartners } = clubPartnersData;

export default function Friends() {
  return (
    <div>
      <Navigation />
      <PageHeader
        title="Friends"
        description="We collaborate with various clubs and organizations at Penn State to create a stronger tech community."
      />
      
      <div className="max-w-6xl mx-auto text-center px-4 py-5">
        <p className="text-md text-gray-600 mt-2 mb-10">
          Here are some of our partner clubs we work with.
        </p>
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center">
            {clubPartners.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src={partner.logoPath}
                  alt={partner.name}
                  width={150}
                  height={90}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20 mb-20">
        <h2 className="text-6xl mb-12">Interested?</h2>
        <div className="flex justify-center mt-8 items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <a 
              href="mailto:president@acmpsu.org"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-colors"
            >
              Let's Collab!
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

