import { NavLink } from "react-router-dom";

interface VidensportalEntryProps {
  title: string;
  subtitle: string;
  li: string[];
  description: string;
  svg: JSX.Element;
  destination: string;
}

export default function VidensportalEntry({
  title,
  subtitle,
  li,
  description,
  svg,
  destination,
}: VidensportalEntryProps) {
  return (
    <NavLink to={destination}>
      <div className="grid grid-cols-3 bg-fleks-blue-light relative mx-32 my-10">
        <div className="col-span-1 py-12 bg-fleks-blue-dark text-white font-bold text-2xl text-center">
          <h2>{title}</h2>
          <div className=" flex justify-center mt-8">{svg}</div>
        </div>
        <div className="col-span-2 grid grid-rows-4">
          <div className="row-span-3 p-6 bg-fleks-green text-xl font-extralight text-white border-b-8 border-b-fleks-yellow">
            <p>
              <span className="font-bold">{title}</span> {subtitle}
            </p>
            <ul className="list-disc px-6">
              {li.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="row-span-1 bg-white py-2 px-6">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
