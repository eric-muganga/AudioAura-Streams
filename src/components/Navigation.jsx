import { useState, useEffect } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import continents from "../config/continents";

export const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  });

  const closeNav = () => {
    setOpenNav(false);
  };

  const navItemClass = (isActive) =>
    `flex items-center p-1 font-normal text-sm rounded-md transition duration-150 ease-in-out 
    ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"
    }
    hover:from-indigo-500 hover:to-indigo-700 hover:gray-700`;

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      {continents.map((continent) => (
        <li
          key={continent}
          className="text-sm text-blue-gray-600 p-1 font-normal"
        >
          <NavLink
            to={`continents/${continent.replace(/\s+/g, "-")}`} // Replace spaces with hyphens for URL
            onClick={closeNav}
            className={({ isActive }) => navItemClass(isActive)}
          >
            {continent}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <Navbar className="-m-1 sticky  top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to="/" className="mr-4 py-1.5 font-medium">
          AudioAura Streams
        </NavLink>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          {/* <div className="flex items-center gap-x-1">
            <Button
              variant="text"
              size="sm"
              color="indigo"
              className="hidden lg:inline-block"
            >
              Start Listening
            </Button>
          </div> */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {/* <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" color="indigo">
            <span>Start Listening</span>
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
