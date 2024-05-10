import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="text-fleks-blue-dark w-full font-medium text-xl">
      <ul className="flex justify-center align-middle gap-5 md:gap-24 py-4">
        <li>
          <NavLink to="/">Hjem</NavLink>
        </li>
        <li>
          <NavLink to="/vidensportalen">Vidensportalen</NavLink>
        </li>
        <li>
          <NavLink to="/fleksjobberdagen">Fleksjobberdagen</NavLink>
        </li>
        <li>
          <NavLink to="/jobmuligheder">Jobmuligheder</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/om">Om</NavLink>
        </li>
      </ul>
    </nav>
  );
}
