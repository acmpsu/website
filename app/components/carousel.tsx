import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const carouselItems = Array.from({ length: 5 }, (_, i) => ({
    src: `/carousel-pictures/${i + 1}.jpg`,
    alt: `ACM Event ${i + 1}`
}));

export default function CarouselComponent() {
    return (
        <Carousel className="w-full max-w-[800px]">
            <CarouselContent className="h-[500px]">
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} className="h-[500px]">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                className="object-cover rounded-lg w-full h-full"
                                width={800}
                                height={500}
                                priority={index === 0}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    )
}
