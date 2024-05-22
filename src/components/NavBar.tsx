import { NavLink } from "react-router-dom";

export default function NavBarItems() {
  return (
    <>
      <li className="hover:text-fleks-blue rounded-xl m-2 cursor-pointer duration-300">
        <NavLink to="/">Hjem</NavLink>
      </li>
      <li className="hover:text-fleks-blue rounded-xl m-2 cursor-pointer duration-300">
        <NavLink to="/vidensportalen">Vidensportalen </NavLink>
      </li>
      <li className="hover:text-fleks-blue rounded-xl m-2 cursor-pointer duration-300">
        <NavLink to="/fleksjobberdagen">Fleksjobberdagen</NavLink>
      </li>
      <li className="hover:text-fleks-blue rounded-xl m-2 cursor-pointer duration-300">
        <NavLink to="/kontakt">Kontakt</NavLink>
      </li>
      <li className="hover:text-fleks-blue rounded-xl m-2 cursor-pointer duration-300">
        <NavLink to="/om">Om</NavLink>
      </li>
    </>
  );
}
