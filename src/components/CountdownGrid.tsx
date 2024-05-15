export default function CountdownGrid() {
  return (
    <article className="grid grid-cols-3 border-b-8 border-fleks-yellow">
      <section className="col-span-2 px-32 text-fleks-blue-dark">
        <h2 className="p-8 text-2xl font-semibold ">FIND MERE INFO</h2>
        <ul className="">
          <li>Artikler</li>
          <li>Ordbogen</li>
          <li>Links og henvisninger</li>
          <li>Mangfoldighedsklubben</li>
        </ul>
      </section>
      <section className="bg-fleks-blue-dark text-white">
        <h2 className="p-8 text-2xl font-semibold">FLEKSJOBBERDAGEN</h2>
        <div className="p-8 text-2xl font-semibold bg-fleks-blue text-fleks-blue-dark">
          <p>06 : 00 : 05 : 17 : 25 : 04</p>
          <p>M : U : D : T : M : S</p>
          <p className="text-xl">Dage til næste omgang!</p>
        </div>
        <div className="p-8 text-xl font semibold">
          <p>Kampdag for diversitet og lighed.</p>
          <p>Anden tirsdag i november - hvert år!</p>
        </div>
        <div className="bg-fleks-yellow">
          <p className="text-center py-6 text-fleks-blue-dark text-xl font-semibold">Læs mere</p>
        </div>
      </section>
    </article>
  );
}
