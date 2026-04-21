import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="fixed top-0 z-50 flex h-20 w-full items-center border-b border-white/10 bg-black/70 px-4 text-white backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <div>
          <h1 className="ml-2 text-3xl font-signature sm:text-4xl">Portfolio</h1>
        </div>

        <ul className="hidden md:flex md:items-center md:gap-2">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="cursor-pointer rounded-full px-4 py-2 capitalize font-medium text-gray-200 transition duration-200 hover:bg-white/10 hover:text-cyan-300"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="z-10 cursor-pointer pr-4 text-gray-300 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-slate-950/95 backdrop-blur-lg">
            {links.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className="cursor-pointer px-4 py-5 text-3xl capitalize text-slate-200 transition duration-200 hover:text-cyan-300"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
