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
      href: "www.linkedin.com/in/đấu-vũ-hoàng-5a2929212",
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
    <div className="hidden md:flex flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] 
          hover:rounded-md duration-300 bg-gray-500`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
