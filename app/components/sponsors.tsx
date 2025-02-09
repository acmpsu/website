import Image from "next/image";

interface SponsorImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function Sponsors({ 
  sponsors = [], 
  mainTitle = "Penn State ACM is backed by the world's best companies.",
  linkText = "View all sponsors"
}: { 
  sponsors?: SponsorImage[];
  mainTitle?: string;
  linkText?: string;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 md:px-8 mb-[100px]">
      <div className="text-center">
        <h2 className="text-md mb-1 text-gray-600">{mainTitle}</h2>
        <a 
          href="/sponsors" 
          className="text-gray-500 text-sm hover:text-blue-800 inline-flex items-center"
        >
          {linkText}
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

      <div className={`grid ${
        sponsors.length >= 5 
          ? 'grid-cols-2 md:grid-cols-5' 
          : `grid-cols-2 md:grid-cols-${sponsors.length}`
      } items-center justify-items-center gap-4 ${
        sponsors.length < 5 ? 'md:place-content-center' : ''
      }`}>
        {sponsors.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            width={sponsor.width || 150}
            height={sponsor.height || 80}
            className="transition-all"
          />
        ))}
      </div>
    </div>
  );
}