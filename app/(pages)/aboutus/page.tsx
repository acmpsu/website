import Image from "next/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import TeamSection from "../../components/team-section";
import { executiveBoard, captains } from "../../data/team";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">ACM Student Chapter</h2>
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
