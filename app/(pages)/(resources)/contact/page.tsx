import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import { Mail } from "lucide-react";

interface ContactPersonProps {
  title: string;
  email: string;
  blurb: string;
}

const ContactPerson = ({ title, email, blurb }: ContactPersonProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-center justify-center text-blue-600 mb-3">
        <Mail className="w-4 h-4 mr-1" />
        <a 
          href={`mailto:${email}`} 
          className="hover:underline"
        >
          {email}
        </a>
      </div>
      <p className="text-gray-600">{blurb}</p>
    </div>
  );
};

export default function Contact() {
  const contacts = [
    {
      title: "President",
      email: "president@acm.psu.edu",
      blurb: "Contact for general inquiries about ACM and major organizational decisions."
    },
    {
      title: "Vice President",
      email: "vicepresident@acm.psu.edu",
      blurb: "Contact for operational matters, event organization, and member engagement."
    },
    {
      title: "Secretary",
      email: "secretary@acm.psu.edu",
      blurb: "Contact for meeting minutes, records, and administrative questions."
    },
    {
      title: "Treasurer",
      email: "treasurer@acm.psu.edu",
      blurb: "Contact for budget inquiries, reimbursements, and financial matters."
    },
    {
      title: "Corporate Relations",
      email: "corporaterelations@acm.psu.edu",
      blurb: "Contact for sponsorships, industry partnerships, and recruiting opportunities."
    }
  ];

  return (
    <div>
      <Navigation />
      <PageHeader
        title="Contact Us"
        description="Have questions or want to get in touch? Reach out to our executive board members."
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Executive Board</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <ContactPerson
              key={contact.email}
              title={contact.title}
              email={contact.email}
              blurb={contact.blurb}
            />
          ))}
        </div>
        
        {/* <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">General Inquiries</h2>
          <p className="text-lg mb-2">
            For general questions, please email us at:
          </p>
          <a 
            href="mailto:acm@psu.edu" 
            className="text-xl text-blue-600 hover:underline font-medium inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            acm@psu.edu
          </a>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}
