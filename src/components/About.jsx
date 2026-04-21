import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-slate-900 to-black py-16 text-white"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-6">
        <div className="pb-8">
          <p className="inline border-b-4 border-cyan-500 text-4xl font-bold">
            About
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-lg leading-relaxed text-slate-200 shadow-xl shadow-black/20 md:p-8 md:text-xl">
          <p>
            I am a Front-End Developer with a deep love for technology and
            creativity in the field of Information Technology. I studied at
            Information Technology university where I gained extensive knowledge
            in various languages and technologies related to Front-End
            Development.
          </p>
          <p className="mt-6">
            I have programming experience through school projects and personal
            projects. I look forward to meeting and collaborating with
            like-minded individuals to explore innovative solutions. Feel free
            to reach out to me for further insights into my work and projects.
            Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
