export default function CountdownGrid() {
  return (
    <div className="flex justify-end">
      <article className="grid grid-cols-2 border-b-8 border-fleks-yellow">
        <section className="flex justify-center align-middle items-center px-32 text-fleks-blue-dark">
          <div>
            <h2 className="px-8 py-2 text-4xl font-bold">FIND MERE INFO</h2>
            <ul className="px-8 underline text-2xl">
              <li>Artikler</li>
              <li>Ordbogen</li>
              <li>Links og henvisninger</li>
              <li>Mangfoldighedsklubben</li>
            </ul>
            <div className="px-8 mt-12 flex justify-center gap-4">
              <img className="w-14" src="../../public/images/facebook.svg" alt="" />
              <img className="w-14" src="../../public/images/instagram.svg" alt="" />
              <img className="w-14" src="../../public/images/linkedin.svg" alt="" />
              <img className="w-14" src="../../public/images/rs-feed.svg" alt="" />
              <img className="w-14" src="../../public/images/youtube.svg" alt="" />
            </div>
          </div>
        </section>
        <div className="flex justify-end">
          <section className="float-right w-[600px] bg-fleks-blue-dark text-white">
            <h2 className="p-8 text-4xl font-semibold">FLEKSJOBBERDAGEN</h2>
            <div className="p-8 text-4xl font-semibold bg-fleks-blue text-fleks-blue-dark">
              <p>06 : 00 : 05 : 17 : 25 : 04</p>
              <p>M : U : D : T : M : S</p>
              <p className="text-3xl">Dage til næste omgang!</p>
            </div>
            <div className="p-8 text-3xl font semibold">
              <p>Kampdag for diversitet og lighed.</p>
              <p>Anden tirsdag i november - hvert år!</p>
            </div>
            <div className="bg-fleks-yellow">
              <p className="text-center py-6 text-fleks-blue-dark text-xl font-semibold">Læs mere</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
