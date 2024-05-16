import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarouselBox from "./CarouselBox";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 6000 })]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <CarouselBox
                title="En karrusel med overskrift"
                link="https://google.com"
                description="Tekst du kan ændre. Dette vil være HTML baseret så det skalerer korrekt, og du kan linke til hvad du vil samme sted."
                reversed={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} onClick={() => onDotButtonClick(index)} className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
