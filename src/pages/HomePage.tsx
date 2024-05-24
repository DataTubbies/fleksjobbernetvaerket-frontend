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
  const [ads, setAds] = useState<ReklamePrimaryProps | null>(null);

  useEffect(() => {
    async function getContent() {
      try {
        const slidesData = await fetchData("karruselindlaeg?_fields=acf");
        const reklameData = await fetchData("reklamer?_fields=acf");
        setSlides(slidesData);
        if (reklameData && reklameData.length > 0) {
          setAds(reklameData[0]); // Assuming reklameData is an array and taking the first item
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getContent();
  }, []);

  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div className="overflow-x-hidden">
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <CountdownGrid />
      {ads && <ReklamePrimary primaryName={ads.acf.primaryName} primaryImage={ads.acf.primaryImage} primaryText={ads.acf.primaryText} />}
      <PartnerGrid />
    </div>
  );
}
