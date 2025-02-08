import Image from "next/image";

export default function SponsorsPreview() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 md:px-8 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Some of Our Sponsors</h2>
        <a 
          href="/sponsors" 
          className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
        >
          View all sponsors 
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <Image
          src="/sponsor1.png"
          alt="Sponsor 1"
          width={150}
          height={80}
          className="grayscale hover:grayscale-0 transition-all"
        />
        <Image
          src="/sponsor2.png"
          alt="Sponsor 2"
          width={150}
          height={80}
          className="grayscale hover:grayscale-0 transition-all"
        />
        <Image
          src="/sponsor3.png"
          alt="Sponsor 3"
          width={150}
          height={80}
          className="grayscale hover:grayscale-0 transition-all"
        />
        <Image
          src="/sponsor4.png"
          alt="Sponsor 4"
          width={150}
          height={80}
          className="grayscale hover:grayscale-0 transition-all"
        />
      </div>
    </div>
  );
}