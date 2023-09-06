import React from "react";
import watchstore from "../assets/portfolio/watch-store.png";
import portfolio from "../assets/portfolio/portfolio.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: watchstore,
      href1:'https://watch-store-dvh.vercel.app/',
      href2:'https://github.com/HoangDVH/Watch-Shop'
    },
    {
      id: 2,
      src: portfolio,
      href1:'https://portfolio-fawn-alpha-57.vercel.app/',
      href2:'https://github.com/HoangDVH/Portfolio',
    },

  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href1,href2 }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex justify-center items-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={href1} alt='hinhanh'>Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   <a href="href2" alt='hinhanh'>Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
