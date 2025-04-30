import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  showLogo?: boolean;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
}

export default function PageHeader({
  title,
  description,
  showLogo = true,
  logoSrc = "https://aqe6lvxoos.ufs.sh/f/xPAt5BMGMRyqbHSGKW884S57TOCYvamZlLntqfxXHNU2dPcM",
  logoAlt = "ACM Logo",
  logoWidth = 100,
  logoHeight = 100,
}: PageHeaderProps) {
  return (
    <div className="relative w-full min-h-[300px] h-auto py-12">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
        <div className="flex flex-col items-center justify-center mt-12">
          {showLogo && (
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="hidden md:block object-contain"
            />
          )}
          <div className="text-5xl sm:text-6xl font-medium mb-8">{title}</div>
        </div>
        <p className="text-lg text-center sm:text-justify font-geistSans max-w-2xl px-4 mt-6">
          {description}
        </p>
      </div>
    </div>
  );
}