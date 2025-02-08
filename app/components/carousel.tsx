import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function CarouselComponent() {
    return (
<Carousel className="w-full max-w-[800px]">
              <CarouselContent className="h-[500px]">
                <CarouselItem className="h-[500px]">

                  <div className="relative w-full h-full">
                    <Image
                      src="/carousel-pictures/1.jpg"
                      alt="ACM Event 1"
                      className="object-cover rounded-lg w-full h-full"
                      width={800}
                      height={500}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-[500px]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/carousel-pictures/2.jpg"
                      alt="ACM Event 2"
                      className="object-cover rounded-lg w-full h-full"
                      width={800}
                      height={500}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-[500px]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/carousel-pictures/3.jpg"
                      alt="ACM Event 3"
                      className="object-cover rounded-lg w-full h-full"
                      width={800}
                      height={500}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-[500px]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/carousel-pictures/4.jpg"
                      alt="ACM Event 4"
                      className="object-cover rounded-lg w-full h-full"
                      width={800}
                      height={500}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-[500px]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/carousel-pictures/5.jpg"
                      alt="ACM Event 5"
                      className="object-cover rounded-lg w-full h-full"
                      width={800}
                      height={500}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
    )
}
