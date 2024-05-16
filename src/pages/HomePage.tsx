import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";
import CountdownGrid from "@/components/CountdownGrid";

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <CountdownGrid />
    </>
  );
}
