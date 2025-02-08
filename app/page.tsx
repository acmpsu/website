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
 

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navigation />

      <div className="flex justify-center w-full mt-10 px-4 sm:px-6 md:px-8">
        <Carousel className="w-full max-w-7xl">
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
      
      <Footer />
    </div>
  );
}
