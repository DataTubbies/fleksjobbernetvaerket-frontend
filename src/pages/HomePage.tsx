import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";
import CountdownGrid from "@/components/CountdownGrid";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/wp-rest";
import PartnerGrid from "@/components/PartnerGrid";

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
      <div className="bg-fleks-gray h-[30rem]">
        <h2 className="px-32 py-32 text-8xl font-semibold text-white">Reklamer placeholder</h2>
      </div>
      <PartnerGrid />
    </>
  );
}
