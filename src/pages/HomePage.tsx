import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";
import CountdownGrid from "@/components/CountdownGrid";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/wp-rest";
import PartnerGrid from "@/components/PartnerGrid";
import ReklamePrimary from "@/components/ReklamePrimary";

export interface Slide {
  acf: {
    overskrift: string;
    link: string;
    tekst: string;
  };
}

export interface ReklamePrimaryProps {
  acf: {
    primaryName: string;
    primaryImage: string;
    primaryText: string;
  };
}

export default function HomePage() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [ads, setAds] = useState<ReklamePrimaryProps>({}); // [1
  useEffect(() => {
    async function getContent() {
      const slidesData = await fetchData("karruselindlaeg?_fields=acf");
      const reklameData = await fetchData("reklamer?_fields=acf"); // [2
      setSlides(slidesData);
      setAds(reklameData); // [3
      console.log(slides);
      console.log(ads);
    }
    getContent();
  }, []);

  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <CountdownGrid />
      <PartnerGrid />
    </>
  );
}

// <ReklamePrimary primaryName={ads.acf.primaryName} primaryImage={ads.acf.primaryImage} primaryText={ads.acf.primaryText} />
