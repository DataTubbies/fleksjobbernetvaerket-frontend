import { NavLink } from "react-router-dom";

interface VidensportalEntryProps {
  title: string;
  subtitle: string;
  li: string[];
  description: string;
  svg: JSX.Element;
  to: string;
}

export default function VidensportalEntry({
  title,
  subtitle,
  li,
  description,
  svg,
  to,
}: VidensportalEntryProps) {
  return (
    <NavLink to={to}>
      <div className="grid grid-cols-3 bg-fleks-blue-light relative mx-12 md:mx-32 my-10">
        <div className="col-span-3 w-full md:col-span-1 py-12 bg-fleks-blue-dark text-white font-bold text-2xl text-center">
          <h2>{title}</h2>
          <div className="flex justify-center mt-8">{svg}</div>
        </div>
        <div className="hidden col-span-2 md:grid grid-rows-4">
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
