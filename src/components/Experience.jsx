import React from "react";
import html from "../assets/portfolio/html.png";
import css from "../assets/portfolio/css.png";
import javascript from "../assets/portfolio/Javascript.png";
import react from "../assets/portfolio/react.png";
import tailwind from "../assets/portfolio/tailwind.png";
import bootstrap from "../assets/portfolio/bootstrap.png";
import github from "../assets/portfolio/github.png";
import typescript from "../assets/portfolio/typescript.png";
import nextjs from "../assets/portfolio/nextjs.svg";
import nodejs from "../assets/portfolio/nodejs.svg";
import expressjs from "../assets/portfolio/expressjs.svg";
import mongodb from "../assets/portfolio/mongodb.svg";
import mysql from "../assets/portfolio/mysql.svg";
import postman from "../assets/portfolio/postman.svg";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-400",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-300",
    },
    {
      id: 10,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: expressjs,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 13,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-500",
    },
    {
      id: 14,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-slate-900 to-black py-16"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-6 text-white">
        <div>
          <p className="inline border-b-4 border-cyan-500 p-2 text-4xl font-bold">
            Experience
          </p>
          <p className="py-6 text-slate-300">
            There are technologies I have worked with
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 py-8 text-center sm:grid-cols-3 md:grid-cols-4">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`h-40 rounded-xl border border-white/10 bg-white/5 py-3 shadow-md transition duration-300 hover:-translate-y-1 hover:scale-105 ${style}`}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={src}
                    alt={title}
                    className="h-20 w-20 object-contain"
                  />
                  <p className="flex h-12 flex-grow items-center justify-center font-medium">
                    {title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
