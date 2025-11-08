import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import carousel1 from "@/assets/Carousel/Carousel_1.PNG";
import carousel2 from "@/assets/Carousel/Carousel_2.PNG";
import carousel3 from "@/assets/Carousel/Carousel_3.PNG";
import carousel4 from "@/assets/Carousel/Carousel_4.PNG";
import carousel5 from "@/assets/Carousel/Carousel_5.PNG";
import carousel6 from "@/assets/Carousel/Carousel_6.PNG";
import carousel7 from "@/assets/Carousel/Carousel_7.PNG";

const AppGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateButtons();
    api.on("select", updateButtons);
    api.on("reInit", updateButtons);

    return () => {
      api.off("select", updateButtons);
      api.off("reInit", updateButtons);
    };
  }, [api]);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            App Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the key screens and features of Viraa, designed to give you insights into your health patterns
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative px-12 lg:px-20">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:shadow-glow transition-all duration-300 h-full">
                      <div className="relative aspect-[9/16] overflow-hidden rounded-lg flex items-center justify-center bg-muted/20">
                        <img
                          src={image}
                          alt={`Viraa app screenshot ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {canScrollPrev && (
              <CarouselPrevious className="left-0 lg:-left-12 h-10 w-10" />
            )}
            {canScrollNext && (
              <CarouselNext className="right-0 lg:-right-12 h-10 w-10" />
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AppGallery;
