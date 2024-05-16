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

  useEffect(() => {
    async function getOrdbog() {
      const ordData = await fetchData("ord?_fields=acf");
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

      <div className="flex items-center justify-between px-32">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold">ORD/BEGREB</h3>
          </div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold flex">BETYDNING/FORKLARING</h3>
          </div>
        </div>
        <input
          type="text"
          placeholder="Søg efter begreb...🔎"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border rounded"
        />
      </div>

      <br />
      <br />

      {filteredOrdbog.map((ord, index) => (
        <div className="px-32" key={index}>
          <div className="flex justify-between items-start">
            {" "}
            <div className="w-1/2 pr-4">
              {" "}
              <h2 className="font-semibold">{ord.acf.ord}</h2>
            </div>
            <div className="w-1/2">
              {" "}
              <p>{ord.acf.betydning}</p>
            </div>
          </div>
          <div className="bg-fleks-blue h-px w-full my-4"></div>{" "}
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
