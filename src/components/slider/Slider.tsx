import slider1 from "@/assets/img/slider1.png";
import slider2 from "@/assets/img/slider2.png";
import slider3 from "@/assets/img/slider3.png";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1200px] py-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="h-[300px]">
                <img src={slider1} alt="" className="size-full object-cover" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[300px]">
                <img src={slider2} alt="" className="size-full object-cover" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[300px]">
                <img src={slider3} alt="" className="size-full object-cover" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
export default Slider;
