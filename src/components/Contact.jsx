import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-slate-900 px-4 py-16 text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-cyan-500 text-4xl font-bold">
            Contact
          </p>
          <p className="py-6 text-slate-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/8c9a71f3-d546-4d30-9345-54c5ae2fa462"
            method="POST"
            className="flex w-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/25 md:w-2/3 lg:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-lg border border-white/20 bg-black/20 p-3 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-lg border border-white/20 bg-black/20 p-3 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="rounded-lg border border-white/20 bg-black/20 p-3 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="mx-auto my-8 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-900/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-700/60"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
