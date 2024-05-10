import { NavLink } from "react-router-dom";

export default function VidensportalEntry() {
  const vidensEntryObj = {
    title: "Artikler",
    Subtitle: "indeholder emner som: ",
    li: ["Ansættelse", "Opsigelse", "Kontrakter", "Hjælpemidler", "Bisidderordning", "Mm."],
    description: "Hver artikel er kategoriseret med det man i online-verden kalder for tags, eller søge-ord (altså links der henleder én til artikler og lignende der indeholder disse).",
  };

  return (
    <NavLink to="/artikler">
      <div className="grid grid-cols-3 bg-fleks-blue-light relative mx-32 my-10">
        <div className="col-span-1 py-12 bg-fleks-blue-dark text-white font-bold text-2xl text-center">
          <h2>{vidensEntryObj.title}</h2>
        </div>
        <div className="col-span-2 grid grid-rows-4">
          <div className="row-span-3 p-6 bg-fleks-green text-xl font-extralight text-white border-b-8 border-b-fleks-yellow">
            <p>
              <span className="font-bold">{vidensEntryObj.title}</span> {vidensEntryObj.Subtitle}
            </p>
            <ul className="list-disc px-6">
              {vidensEntryObj.li.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="row-span-1 bg-white py-2 px-6">
            <p>{vidensEntryObj.description}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
