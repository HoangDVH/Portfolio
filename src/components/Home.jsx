import React from "react";
import MySelfImg from "../assets/portfolio/myself.jpg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-slate-950 via-black to-slate-900 pt-20"
    >
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-10 px-6 py-14 md:flex-row md:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            I am a Fullstack Developer
          </h2>
          <p className="max-w-2xl py-6 text-base leading-relaxed text-slate-300 md:text-lg">
            Fullstack Developer with experience in building scalable web
            applications using ReactJS, TypeScript, Node.js, Express, and
            MongoDB. Skilled in developing RESTful APIs, implementing
            authentication and authorization, and optimizing application
            performance. Seeking a Fullstack Developer position to contribute to
            building efficient, maintainable, and user-friendly applications
            while continuously improving expertise in backend architecture,
            system design, and modern web technologies. Interested in exploring
            AI applications in web development and real-world systems such as
            healthcare platforms
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-800/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-700/60"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={18} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MySelfImg}
            alt="Portrait"
            className="w-64 rounded-3xl border border-white/10 object-cover shadow-2xl shadow-cyan-950/40 sm:w-80 md:h-[420px] md:w-96"
          />
        </div>
      </div>
    </div>
  );
};
