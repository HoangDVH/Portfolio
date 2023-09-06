import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a Front-End Developer with a deep love for technology and
          creativity in the field of Information Technology. I studied at
          Information Technology university where I gained extensive knowledge
          in various languages and technologies related to Front-End Development
        </p>

        <br />
        <p className="text-xl">
          Always eager to learn and improve, I am committed to delivering
          beautiful, optimized, and user-friendly products. I look forward to
          meeting and collaborating with like-minded individuals to explore
          innovative solutions. Feel free to reach out to me for further
          insights into my work and projects. Thank you!
        </p>
      </div>
    </div>
  );
};
