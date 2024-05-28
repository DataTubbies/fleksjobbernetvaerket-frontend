import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";
import CountdownGrid from "@/components/CountdownGrid";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/wp-rest";
import PartnerGrid from "@/components/PartnerGrid";
import AdPrimary from "@/components/AdPrimary";

export interface Slide {
  acf: {
    overskrift: string;
    link: string;
    tekst: string;
  };
}

export interface AdProps {
  acf: {
    primaryName: string | undefined;
    primaryImage: string | undefined;
    primaryText: string | undefined;
    partners: Partner[];
    [key: string]: string | Partner[] | undefined;
  };
}

export interface Partner {
  name: string;
  logo: string;
  link: string;
}

export default function HomePage() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [ads, setAds] = useState<AdProps | null>(null);

  useEffect(() => {
    async function getContent() {
      try {
        const slidesData = await fetchData("karruselindlaeg?_fields=acf");
        const adsData = await fetchData("reklamer?_fields=acf");
        setSlides(slidesData);
        createPartnerArray(adsData[0].acf);
        if (adsData && adsData.length > 0) {
          setAds(adsData[0]); // Assuming reklameData is an array and taking the first item
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
      <AdPrimary primaryName={ads?.acf.primaryName} primaryImage={ads?.acf.primaryImage} primaryText={ads?.acf.primaryText} />
      <div className=" px-16 lg:px-32" id="partners">
        <h2 className="py-14 text-xl lg:text-5xl font-semibold text-fleks-blue-dark">VI TAKKER VORES SAMARBEJDSPARTNERE</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 py-10">{ads?.acf.partners && ads?.acf.partners.map((partner: Partner) => <PartnerGrid name={partner.name} logo={partner.logo} link={partner.link} />)}</div>
        </div>
      </div>
    </div>
  );
}

function createPartnerArray(data: AdProps["acf"]): AdProps["acf"] {
  const array: Partner[] = [];
  for (let i = 1; i < 20; i++) {
    const nameKey = `partnerName${i}`;
    const logoKey = `partnerLogo${i}`;
    const linkKey = `partnerLink${i}`;
    const partnerObj: Partner = {
      logo: (data[logoKey] as string) || "",
      name: (data[nameKey] as string) || "",
      link: (data[linkKey] as string) || "",
    };
    if (partnerObj.name !== "") {
      array.push(partnerObj);
    }
    delete data[logoKey];
    delete data[nameKey];
    delete data[linkKey];
  }

  console.log(array);
  data.partners = array;
  return data;
}
