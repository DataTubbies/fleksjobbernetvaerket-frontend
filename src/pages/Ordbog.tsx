import React, { useEffect, useState } from "react";
import { fetchData } from "../api/wp-rest";
import ColorBox from "../components/ColorBox";

interface begreb {
  acf: {
    ord: string;
    betydning: string;
  };
}

export default function Ordbog() {
  const [ordbog, setOrdbog] = useState([] as begreb[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    async function getOrdbog() {
      const ordData = await fetchData("ord?_fields=acf&per_page=100");
      setOrdbog(ordData);
    }
    getOrdbog();
  }, []);

  const colorBoxObj = {
    title: "ORDBOGEN",
    boldText: "Ordbogen",
    description:
      "Der er mange begreber at holde styr på når du er visiteret til fleksjob og skal bevæge dig rundt i junglen af begreber, og måske hører du forskellige udlægninger af ordene – har du styr på hvad de betyder? Herunder er en liste med langt de fleste ord der anvendes samt en beskrivelse af dem.",
    reversed: true,
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    const sortedOrdbog = [...ordbog].sort((a, b) => {
      const ordA = a.acf.ord.toLowerCase();
      const ordB = b.acf.ord.toLowerCase();

      if (newDirection === "asc") {
        return ordA < ordB ? -1 : ordA > ordB ? 1 : 0;
      } else {
        return ordA > ordB ? -1 : ordA < ordB ? 1 : 0;
      }
    });

    setOrdbog(sortedOrdbog);
  };

  const filteredOrdbog = ordbog.filter((ord) =>
    ord.acf.ord.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ColorBox
        title={colorBoxObj.title}
        boldText={colorBoxObj.boldText}
        description={colorBoxObj.description}
        reversed={colorBoxObj.reversed}
      />

      <br />

      <div className="bg-fleks-blue-light h-2 w-full"></div>
      <br />

      <div className="px-32 h-8"></div>
      <div className="grid grid-cols-2 items-center justify-between px-32 py-4 ">
        <div className="flex">
          <h3 className="text-xl font-semibold">ORD/BEGREB</h3>
          <img
            src="../../public/images/sortArrows.svg"
            alt="Sort Arrows"
            onClick={handleSort}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="grid grid-cols-2 gap-32">
          <div className="flex">
            <h3 className="text-xl font-semibold">BETYDNING/FORKLARING</h3>
          </div>
          <input
            type="text"
            placeholder="Søg efter begreb..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded px-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none w-full h-8"
          />
        </div>
      </div>

      <br />
      <br />

      {filteredOrdbog.map((ord, index) => (
        <div className="px-32" key={index}>
          <div className="flex justify-between items-start">
            <div className="w-1/2 pr-4">
              <h2 className="font-semibold">{ord.acf.ord}</h2>
            </div>
            <div className="w-1/2 text-justify">
              <p>{ord.acf.betydning}</p>
            </div>
          </div>
          <div className="bg-fleks-blue h-px w-full my-4"></div>
        </div>
      ))}

      <br />
      <br />

      <div className="bg-fleks-blue-light h-2 w-full"></div>
      <br />
      <br />
    </>
  );
}
