import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";

export default function Contact() {
  return (
    <div>
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">General Inquiries</h2>
            <p className="text-lg">acm@psu.edu</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Officers</h2>
            <p className="text-lg">President: president@acmpsu.org</p>
            <p className="text-lg">Vice President: vp@acmpsu.org</p>
          </div>

        <div>
            <h2 className="text-2xl font-semibold mb-2">Corporate</h2>
            <p className="text-lg">Corporate Relations: blahblah@blah.org </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
