import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavBarItems from "./NavBar";

const MobileNav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="text-fleks-blue-dark w-full font-medium text-xl">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center align-middle gap-5 xl:gap-24 py-4">
        <NavBarItems />
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={nav ? "fixed z-50 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-white ease-in-out duration-500" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}>
        {/* Close button */}
        <div onClick={handleNav} className="block md:hidden float-right">
          {nav && <AiOutlineClose size={40} />}
        </div>
        {/* Mobile Logo */}
        <h1 className="w-full text-xl font-bold text-fleks-blue m-4">{"FLEKSJOBBER-\nNETVÆRKET"}</h1>

        {/* Mobile Navigation Items */}
        <div className="pl-4">
          <NavBarItems />
        </div>
      </ul>
    </nav>
  );
};

export default MobileNav;
