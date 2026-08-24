import React from "react";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[url('/images/background.jpg')] bg-cover bg-center px-4 py-16 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))]" />
      <div className="absolute -left-12 top-20 h-44 w-44 rounded-full bg-[#ffb7d5]/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#ffd6a5]/30 blur-3xl animate-pulse" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1
          className="mb-5 text-5xl text-[#2c0e55] sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "Pacifico" }}
        >
          Hey Big Sis💖
        </h1>

        <p
          className="mb-6 text-base leading-relaxed text-[#2c0e55] sm:text-[17px]"
          style={{ fontFamily: "Montserrat" }}
        >
          Today is your day. <br />
          So I wanted to give you something a little different—something you can
          keep, smile at, and look back on whenever you want. 💕
        </p>

        <Link to={"/second-page"}>
          <button className="mb-5 animate-bounce rounded-full border-2 border-[#fc4590] bg-[#fc4590] p-3 px-5 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#fa3688] sm:text-base">
            Open Your Surprise Sis 🎁
          </button>
        </Link>

        <p className="text-base text-[#2c0e55] sm:text-[17px]">
          Go ahead... I promise it's worth it. 👀💕
        </p>
      </div>
    </section>
  );
}

export default Herosection;
