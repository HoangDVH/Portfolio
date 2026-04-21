import React from "react";
import managementApp from "../assets/portfolio/managementapp.png";
import ecommerceApp from "../assets/portfolio/ecommerce.png";
import portfolio from "../assets/portfolio/portfolio.png";
import watchstore from "../assets/portfolio/watch-store.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Management App",
      src: managementApp,
      href1: "https://management-frontend-alpha-two.vercel.app/",
      href2: "https://github.com/HoangDVH/Management-Project",
    },
    {
      id: 2,
      title: "Ecommerce App",
      src: ecommerceApp,
      href1: "https://e-comerce-shopp.vercel.app/",
      href2: "https://github.com/HoangDVH/E-comerce-Project",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      src: portfolio,
      href1: "https://portfolio-fawn-alpha-57.vercel.app/",
      href2: "https://github.com/HoangDVH/Portfolio",
    },
    {
      id: 4,
      title: "Watch Store",
      src: watchstore,
      href1: "https://watch-store-dvh.vercel.app/",
      href2: "https://github.com/HoangDVH/Watch-Shop",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-slate-900 py-16 text-white"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-6">
        <div className="pb-8">
          <p className="inline border-b-4 border-cyan-500 text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6 text-slate-300">Check out some work right here</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, title, src, href1, href2 }) => {
            return (
              <div
                key={id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <img
                  src={src}
                  alt={title}
                  className="h-52 w-full object-cover duration-300 hover:scale-105"
                />
                <h3 className="px-4 pt-4 text-center text-lg font-semibold text-white">
                  {title}
                </h3>
                <div className="flex items-center justify-center gap-3 p-4">
                  <a
                    href={href1}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 rounded-lg bg-cyan-500/90 px-6 py-2 text-center font-semibold text-white transition duration-200 hover:bg-cyan-400"
                  >
                    Demo
                  </a>
                  <a
                    href={href2}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 rounded-lg border border-white/20 bg-white/5 px-6 py-2 text-center font-semibold text-slate-100 transition duration-200 hover:bg-white/15"
                  >
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
