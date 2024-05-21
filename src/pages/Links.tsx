import React, { useEffect, useState } from "react";
import { fetchData } from "../api/wp-rest";

interface LinkType {
  acf: {
    linknavn: string;
    linkadresse: string;
    linkkategori: string;
  };
}

interface FilteredListType {
  "Virksomheder der arbejder med fleksjobbere": LinkType[];
  "Tal og statistik": LinkType[];
  "Offentlige sider med rådgivning": LinkType[];
  Lovstof: LinkType[];
  "Offentlige jobportaler": LinkType[];
  "Offentlige jobcentre": LinkType[];
  Diverse: LinkType[];
  "Diverse (fagspecfikt og emnebasserede) links": LinkType[];
  "Andre aktører": LinkType[];
  "Andre jobportaler": LinkType[];
  "Grupper og Foreninger": LinkType[];
  "Fleksjobber Netværkets egne links": LinkType[];
  Handicapforeninger: LinkType[];
}

export default function Links() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [filteredList, setFilteredList] = useState<FilteredListType>({
    "Virksomheder der arbejder med fleksjobbere": [],
    "Tal og statistik": [],
    "Offentlige sider med rådgivning": [],
    Lovstof: [],
    "Offentlige jobportaler": [],
    "Offentlige jobcentre": [],
    Diverse: [],
    "Diverse (fagspecfikt og emnebasserede) links": [],
    "Andre aktører": [],
    "Andre jobportaler": [],
    "Grupper og Foreninger": [],
    "Fleksjobber Netværkets egne links": [],
    Handicapforeninger: [],
  });

  useEffect(() => {
    async function getLinks() {
      try {
        const linkData: LinkType[] = await fetchData(
          "henvisning?_fields=acf&per_page=100"
        );
        setLinks(linkData);
      } catch (err) {
        setError("Failed to fetch links");
        console.error(err);
      }
    }

    getLinks();
  }, []);

  useEffect(() => {
    const filteredLinks = links.filter((link) =>
      link.acf.linknavn.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const newList: FilteredListType = {
      "Virksomheder der arbejder med fleksjobbere": [],
      "Tal og statistik": [],
      "Offentlige sider med rådgivning": [],
      Lovstof: [],
      "Offentlige jobportaler": [],
      "Offentlige jobcentre": [],
      Diverse: [],
      "Diverse (fagspecfikt og emnebasserede) links": [],
      "Andre aktører": [],
      "Andre jobportaler": [],
      "Grupper og Foreninger": [],
      "Fleksjobber Netværkets egne links": [],
      Handicapforeninger: [],
    };

    filteredLinks.forEach((link) => {
      switch (link.acf.linkkategori) {
        case "Virksomheder der arbejder med fleksjobbere":
          newList["Virksomheder der arbejder med fleksjobbere"].push(link);
          break;
        case "Tal og statistik":
          newList["Tal og statistik"].push(link);
          break;
        case "Offentlige sider med rådgivning":
          newList["Offentlige sider med rådgivning"].push(link);
          break;
        case "Lovstof":
          newList.Lovstof.push(link);
          break;
        case "Offentlige jobportaler":
          newList["Offentlige jobportaler"].push(link);
          break;
        case "Offentlige jobcentre":
          newList["Offentlige jobcentre"].push(link);
          break;
        case "Diverse":
          newList.Diverse.push(link);
          break;
        case "Diverse (fagspecfikt og emnebasserede) links":
          newList["Diverse (fagspecfikt og emnebasserede) links"].push(link);
          break;
        case "Andre aktører":
          newList["Andre aktører"].push(link);
          break;
        case "Andre jobportaler":
          newList["Andre jobportaler"].push(link);
          break;
        case "Grupper og Foreninger":
          newList["Grupper og Foreninger"].push(link);
          break;
        case "Fleksjobber Netværkets egne links":
          newList["Fleksjobber Netværkets egne links"].push(link);
          break;
        case "Handicapforeninger":
          newList.Handicapforeninger.push(link);
          break;
        default:
          break;
      }
    });

    setFilteredList(newList);
  }, [links, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="bg-fleks-yellow h-64 float-right w-64 rounded-bl-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-32">
        <div className="flex">
          <h3 className="text-fleks-blue-dark pt-10 text-3xl font-semibold">
            LINKS & HENVISNINGER
          </h3>
        </div>
        <br />
        <br />
        <input
          type="text"
          placeholder="Søg..."
          value={searchQuery}
          onChange={handleSearch}
          className="border rounded px-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none w-full h-8"
        />
      </div>

      <div className="px-32">
        {Object.entries(filteredList).map(([category, links]) => (
          <div key={category}>
            <h2 className="font-semibold text-xl">{category}</h2>
            {links.map((link) => (
              <React.Fragment key={link.acf.linkadresse}>
                <a href={link.acf.linkadresse} target="_blank" rel="noreferrer">
                  {link.acf.linknavn}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-fleks-blue h-64 w-64 rounded-tr-full"></div>
    </div>
  );
}
