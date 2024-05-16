interface CarouselBoxProps {
  title: string;
  link: string;
  description: string;
  reversed: boolean;
}

export default function CarouselBox({ reversed, title, link, description }: CarouselBoxProps) {
  return (
    <a href={link}>
      <div className={reversed === false ? "w-full h-[28rem] bg-fleks-blue-light relative" : "w-full h-[28rem] bg-fleks-yellow relative"}>
        <div className={reversed === false ? "w-96 h-[28rem] z-10 rounded-br-full absolute" + "  bg-fleks-yellow" : "w-96 h-[28rem] z-10 rounded-br-full absolute" + "  bg-fleks-blue-light"}></div>
        <div className="absolute px-12 lg:px-32 z-30">
          <h2 className="text-fleks-blue-dark pt-20 text-5xl font-bold">{title.toUpperCase()}</h2>
          <p className=" w-full pt-8 text-lg sm:text-4xl">{description}</p>
        </div>
      </div>
    </a>
  );
}
