import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
    return (
        <div className="w-full">
            <Carousel>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div
                                className="p-1 h-[33vh] flex justify-center items-center text-3xl"
                                style={{ backgroundColor: `#${Math.floor(Math.random() * 2 ** 24).toString(16)}` }}
                            >
                                画像{index + 1}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-6" />
                <CarouselNext className="right-6" />
            </Carousel>
        </div>
    );
}
