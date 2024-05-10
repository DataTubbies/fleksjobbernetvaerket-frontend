export default function ColorBox() {
  return (
    <div className="w-full h-72 bg-fleks-blue-light relative">
      <div className="w-80 h-72 bg-fleks-yellow rounded-br-full absolute z-10"></div>
      <div className="absolute px-32 z-30">
        <h2 className="text-fleks-blue-dark pt-10 text-3xl font-semibold">VIDENSPORTAL</h2>
        <p className=" w-full pt-8 text-xl">
          <span className="font-semibold">Vidensportalen</span> på Fleksjobber Netværket samler relevant viden om og for fleksjobbere, virksomheder, jobcenter og andre aktører. Vi har delt vidensportalen op i følgende
          områder, og disse vil med tiden blive udvidet til flere kategorier. Brug menuen til at finde det du vil læse, eller linkene herunder.{" "}
        </p>
      </div>
    </div>
  );
}
