import React from "react";
import html from "../assets/portfolio/html.png";
import css from "../assets/portfolio/css.png";
import javascript from "../assets/portfolio/Javascript.png";
import react from "../assets/portfolio/react.png";
import tailwind from "../assets/portfolio/tailwind.png";
import bootstrap from "../assets/portfolio/bootstrap.png";
import github from "../assets/portfolio/github.png";
import typescript from '../assets/portfolio/typescript.png'


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
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">There are technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg h-36 ${style}`}
              >
                <div className="flex flex-col justify-center items-center">
                <img src={src} alt={title} className="w-20 h-20 object-contain" />
                <p className="h-12 flex-grow flex items-center justify-center">{title}</p>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
