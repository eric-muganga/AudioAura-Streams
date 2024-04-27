import { useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../assets/pexels-splitshire-1539.jpg";
import { Button } from "@material-tailwind/react";

import continents from "../config/continents";

export default function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            AudioAura Streams
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Your Gateway to Global Grooves. Listen to your favourite Radio
            Station anywhere you are at.
          </p>
          <Button
            variant="filled"
            size="sm"
            color="indigo"
            className="hover:bg-indigo-800"
            onClick={toggleMenu} // Toggle menu on button click
          >
            Start Listening
          </Button>
          {showMenu && (
            <div className="mt-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 absolute w-full lg:w-1/4 transform -translate-x-1/2 lg:translate-x-0 left-1/2 lg:left-auto">
              {continents.map((continent) => (
                <NavLink
                  key={continent}
                  to={`continents/${continent.replace(/\s+/g, "-")}`} // Replace spaces with hyphens for URL
                  className="block px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-500 hover:text-white rounded-md transition-colors duration-150"
                >
                  {continent}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Banner} alt="radio image" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
