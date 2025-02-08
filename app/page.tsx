import Image from "next/image";
import Navigation from "./components/navigation";
import Announcement from "./components/announcements";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "./components/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Sponsors from "./components/sponsors";
 

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navigation />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Left side content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to Penn State ACM.
          </h1>
          <p className="text-lg text-gray-600">
            Join us in our mission to foster growth, innovation, and community in computer science at Penn State.
          </p>
          <div className="flex gap-4">
            <a 
              href="/join" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Us
            </a>
            <a 
              href="/events" 
              className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Events
            </a>
          </div>
        </div>

        {/* Right side carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[2/1] items-center justify-center p-2 sm:p-4 md:p-6">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      <Sponsors />

      <Footer />
    </div>
  );
}
