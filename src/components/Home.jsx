import React from "react";
import MySelfImg from "../assets/portfolio/myself.jpg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a dedicated Front-End Developer with a passion for crafting
            seamless and engaging user experiences. I'm excited to contribute my
            skills to create visually stunning and highly functional web
            applications that leave a lasting impression.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
              from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <HiArrowRight size={18} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MySelfImg}
            alt=""
            className="rounded-2xl mx-2/3 w-60 md:w-full md:h-96"
          />
        </div>
      </div>
    </div>
  );
};
