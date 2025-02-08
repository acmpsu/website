import Image from "next/image";

export default function SponsorsPreview() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 md:px-8 mb-[100px]">
      <div className="text-center ">
        <h2 className="text-md mb-1 text-gray-600">Penn State ACM is backed by the world's best companies.</h2>
        <a 
          href="/sponsors" 
          className="text-gray-500 text-sm hover:text-blue-800 inline-flex items-center"
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

      <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-items-center">
        <Image
          src="/company-logos/capital-one.png"
          alt="Sponsor 1"
          width={150}
          height={80}
          className="transition-all"
        />
        <Image
          src="/company-logos/lockheed-martin.png"
          alt="Sponsor 2"
          width={150}
          height={80}
          className="transition-all"
        />
        <Image
          src="/company-logos/boeing.png"
          alt="Sponsor 3"
          width={150}
          height={80}
          className="transition-all"
        />
        <Image
          src="/company-logos/nittany-ai-advance.png"
          alt="Sponsor 4"
          width={150}
          height={80}
          className="transition-all"
        />
        <Image
          src="/company-logos/textron.png"
          alt="Sponsor 5"
          width={150}
          height={80}
          className="transition-all col-span-2 md:col-span-1"
        />
      </div>
    </div>
  );
}