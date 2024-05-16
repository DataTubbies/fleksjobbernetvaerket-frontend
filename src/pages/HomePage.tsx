import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";
import CountdownGrid from "@/components/CountdownGrid";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/wp-rest";

export interface Slide {
  acf: {
    overskrift: string;
    link: string;
    tekst: string;
  };
}

export default function HomePage() {
  const [slides, setSlides] = useState<Slide[]>([]);
  useEffect(() => {
    async function getSlides() {
      const slidesData = await fetchData("karruselindlaeg?_fields=acf");
      setSlides(slidesData);
    }
    getSlides();
  }, []);

  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <CountdownGrid />
    </>
  );
}
