import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import TeamSection from "../../components/TeamSection";
import { executiveBoard, captains } from "@/app/data/team.json";

export default function MeetUs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-medium font-geistSans text-center mb-4">Meet Us</h1>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium font-geistSans mb-4">Association for Computing Machinery at Penn State University</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are the Association for Computing Machinery student chapter at Penn State University. 
            Our mission is to foster growth in computer science and technology through 
            workshops, events, and collaborative projects.
          </p>

        </div>

        <TeamSection title="Executive Board" members={executiveBoard} />
        <TeamSection title="Captains" members={captains} />
      </main>
      <Footer />
    </div>
  );
}
