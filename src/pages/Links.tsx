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
  virksomheder: LinkType[];
  tal: LinkType[];
  rådgivning: LinkType[];
  lovstof: LinkType[];
  jobportaler: LinkType[];
  jobcentre: LinkType[];
  diverse: LinkType[];
  fagspecefikt: LinkType[];
  aktørere: LinkType[];
  andre: LinkType[];
  grupper: LinkType[];
  egne: LinkType[];
  handicap: LinkType[];
}

export default function Links() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filteredList, setFilteredList] = useState<FilteredListType>(
    {} as FilteredListType
  );

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
    const newList: FilteredListType = {} as FilteredListType;
    newList.virksomheder = links.filter(
      (link) =>
        link.acf.linkkategori === "Virksomheder der arbejder med fleksjobbere"
    );
    newList.tal = links.filter(
      (link) => link.acf.linkkategori === "Tal og statistik"
    );
    newList.rådgivning = links.filter(
      (link) => link.acf.linkkategori === "Offentlige sider med rådgivning"
    );
    newList.lovstof = links.filter(
      (link) => link.acf.linkkategori === "Lovstof"
    );
    newList.jobportaler = links.filter(
      (link) => link.acf.linkkategori === "Offentlige jobportaler"
    );
    newList.jobcentre = links.filter(
      (link) => link.acf.linkkategori === "Offentlige jobcentre"
    );
    newList.diverse = links.filter(
      (link) => link.acf.linkkategori === "Diverse"
    );
    newList.fagspecefikt = links.filter(
      (link) =>
        link.acf.linkkategori === "Diverse (fagspecfikt og emnebasserede) links"
    );
    newList.aktørere = links.filter(
      (link) => link.acf.linkkategori === "Andre aktører"
    );
    newList.andre = links.filter(
      (link) => link.acf.linkkategori === "Andre jobportaler"
    );
    newList.grupper = links.filter(
      (link) => link.acf.linkkategori === "Grupper og Foreninger"
    );
    newList.egne = links.filter(
      (link) => link.acf.linkkategori === "Fleksjobber Netværkets egne links"
    );
    newList.handicap = links.filter(
      (link) => link.acf.linkkategori === "Handicapforeninger"
    );
    setFilteredList(newList);
  }, [links]);

  //   console.log(filteredList);

  //   const categoriesSet = new Set(links.map((link) => link.acf.linkkategori));
  //   const categoriesList = Array.from(categoriesSet);

  //   console.log(categoriesList);

  return (
    <div>
      <div className="bg-fleks-yellow h-64 float-right w-64 rounded-bl-full"></div>
      <div className="px-32">
        <h2 className="font-semibold text-xl">
          Virksomheder der arbejder med fleksjobbere
        </h2>
        {filteredList.virksomheder &&
          filteredList.virksomheder.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">
          Tal og statistikTal og statistik
        </h2>
        {filteredList.tal &&
          filteredList.tal.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">
          Offentlige sider med rådgivning
        </h2>
        {filteredList.rådgivning &&
          filteredList.rådgivning.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Lovstof</h2>
        {filteredList.lovstof &&
          filteredList.lovstof.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Offentlige jobportaler</h2>
        {filteredList.jobportaler &&
          filteredList.jobportaler.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Offentlige jobcentre</h2>
        {filteredList.jobcentre &&
          filteredList.jobcentre.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Diverse</h2>
        {filteredList.diverse &&
          filteredList.diverse.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">
          Diverse (fagspecfikt og emnebasserede) links
        </h2>
        {filteredList.fagspecefikt &&
          filteredList.fagspecefikt.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Andre aktører</h2>
        {filteredList.aktørere &&
          filteredList.aktørere.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Andre jobportaler</h2>
        {filteredList.andre &&
          filteredList.andre.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Grupper og Foreninger</h2>
        {filteredList.grupper &&
          filteredList.grupper.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">
          Fleksjobber Netværkets egne links
        </h2>
        {filteredList.egne &&
          filteredList.egne.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
        <h2 className="font-semibold text-xl">Handicapforeninger</h2>
        {filteredList.handicap &&
          filteredList.handicap.map((link) => (
            <>
              <a
                key={link.acf.linkadresse}
                href={link.acf.linkadresse}
                target="_blank"
                rel="noreferrer"
              >
                {link.acf.linknavn}
              </a>
              <br />
            </>
          ))}
      </div>
      <div className="bg-fleks-blue h-64 w-64 rounded-tr-full"></div>
    </div>
  );
}
