import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} className="text-blue-700" />
        </>
      ),
      href: "https://www.linkedin.com/in/%C4%91%E1%BA%A5u-v%C5%A9-ho%C3%A0ng-5a2929212/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} className="text-white" />
        </>
      ),
      href: "https://github.com/HoangDVH",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <HiOutlineMail size={30} className="text-red-600" />
        </>
      ),
      href: "mailto:dauvuhoang01@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaFacebook size={30} className="text-blue-700" />
        </>
      ),
      href: "https://www.facebook.com/vuhoangdvh/",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="fixed left-0 top-[35%] hidden flex-col md:flex">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`ml-[-112px] flex h-14 w-44 items-center justify-between bg-slate-700/90 px-4 text-slate-100 shadow-lg shadow-black/20 transition-all duration-300 hover:ml-[-10px] hover:bg-cyan-600 ${style || ""}`}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-between"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
