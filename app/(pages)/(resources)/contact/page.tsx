import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Exexctive Board</h2>
            <p className="text-lg">President: president@acm.psu.edu</p>
            <p className="text-lg">Vice President: vicepresident@acm.psu.edu</p>
            <p className="text-lg">Secretary: secretary@acm.psu.edu</p>
            <p className="text-lg">Treasurer: treasurer@acm.psu.edu</p>
            <p className="text-lg">Corporate Relations: corporaterelations@acm.psu.edu</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
