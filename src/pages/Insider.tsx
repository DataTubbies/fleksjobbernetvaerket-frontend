import { useState, useEffect } from "react";
import { fetchData } from "@/api/wp-rest";

interface InsiderType {
  acf: {
    month: string;
    tekstindhold: string;
  };
}

export default function Insider() {
  const [insiderList, setInsiderList] = useState<InsiderType[]>(
    [] as InsiderType[]
  );

  useEffect(() => {
    async function getInsiderList() {
      const insiderData = await fetchData(
        "insiderindlaeg?_fields=acf&per_page=100"
      );
      setInsiderList(insiderData);
    }
    getInsiderList();
  }, []);

  return (
    <div className="px-16 lg:px-32 py-12">
      <h3 className="text-fleks-blue-dark text-3xl font-semibold mb-6 z-50">
        INSIDER
      </h3>
      <div className="bg-fleks-blue-dark h-1 w-full my-8"></div>
      {insiderList.map((insider, index) => (
        <div className="prose py-5 overflow-x-hidden" key={index}>
          <h2 className="">{insider.acf.month}</h2>
          <p className="">{insider.acf.tekstindhold}</p>
        </div>
      ))}
      <div className="bg-fleks-blue-dark h-1 w-full my-8"></div>
    </div>
  );
}
