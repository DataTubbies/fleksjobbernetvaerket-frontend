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
        const linkData: LinkType[] = await fetchData("henvisning?_fields=acf&per_page=100");
        setLinks(linkData);
      } catch (err) {
        setError("Failed to fetch links");
        console.error(err);
      }
    }

    getLinks();
  }, []);

  useEffect(() => {
    const filteredLinks = links.filter((link) => link.acf.linknavn.toLowerCase().includes(searchQuery.toLowerCase()));

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
    <div className="relative min-h-screen">
      <div className="bg-fleks-yellow h-64 w-64 rounded-bl-full absolute top-0 right-0"></div>
      <div className="container mx-auto py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center">
          <div className="flex flex-col">
            <h3 className="text-fleks-blue-dark text-3xl font-semibold mb-6 z-50">LINKS & HENVISNINGER</h3>
          </div>

          <div className="md:flex-1 z-50 ">
            <input
              type="text"
              placeholder="Søg..."
              value={searchQuery}
              onChange={handleSearch}
              className="border rounded-lg px-4 py-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none shadow-md transition w-full mb-6 md:w-2/3"
            />
          </div>
        </div>

        <div className="bg-fleks-yellow h-1 w-full my-8"></div>

        <div className="px-5 md:px-0">
          {Object.entries(filteredList).map(([category, links]) => (
            <div key={category} className="mb-8">
              <h2 className="font-semibold text-xl mb-4 text-fleks-blue-dark">{category}</h2>
              <div className="space-y-2">
                {links.map((link) => (
                  <React.Fragment key={link.acf.linkadresse}>
                    <a href={link.acf.linkadresse} target="_blank" rel="noreferrer" className="text-fleks-blue hover:underline">
                      {link.acf.linknavn}
                    </a>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-fleks-yellow h-1 w-full my-8"></div>
      </div>
      <div className="bg-fleks-blue h-64 w-64 rounded-tr-full"></div>{" "}
    </div>
  );
}
