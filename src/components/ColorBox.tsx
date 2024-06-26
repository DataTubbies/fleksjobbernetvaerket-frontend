interface ColorBoxProps {
  title: string;
  boldText: string;
  description: string;
  reversed: boolean;
}

export default function ColorBox({ title, boldText, description, reversed }: ColorBoxProps) {
  return (
    <div className={reversed === false ? "w-full h-[28rem] sm:h-72 bg-fleks-blue-light relative" : "w-full h-[28rem] md:h-72 bg-fleks-yellow relative"}>
      <div className={reversed === false ? "w-80 h-[28rem]  sm:h-72 z-10 rounded-br-full absolute" + "  bg-fleks-yellow" : "w-80 h-[28rem] md:h-72 z-10 rounded-br-full absolute" + "  bg-fleks-blue-light"}></div>
      <div className="absolute px-12 lg:px-32 z-30">
        <h2 className="text-fleks-blue-dark pt-10 text-3xl font-semibold">{title}</h2>
        <p className=" w-full pt-8 text-lg sm:text-xl">
          <span className="font-semibold">{boldText}</span> {description}
        </p>
      </div>
    </div>
  );
}
