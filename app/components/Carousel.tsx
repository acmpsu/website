'use client';

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/components/ui/carousel";

const carouselItems = Array.from({ length: 5 }, (_, i) => ({
    src: `/carousel-pictures/${i + 1}.jpg`,
    alt: `ACM Event ${i + 1}`
}));

export default function CarouselComponent() {
    return (
        <div className="flex items-center justify-center h-[500px] w-full">
            <Carousel className="w-full max-w-[800px]">
                <CarouselContent className="h-[500px]">
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index} className="h-[500px]">
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className="object-cover rounded-lg"
                                    fill
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    );
}
