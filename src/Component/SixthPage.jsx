import React from "react";
import { Link } from "react-router-dom";

function SixthPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[url(/images/image5.jpg)] bg-cover bg-center px-4 py-16 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_35%),linear-gradient(180deg,rgba(44,14,85,0.40),rgba(44,14,85,0.72))]" />

      <div className="relative z-10 w-full max-w-2xl rounded-[32px] border border-white/30 bg-white/10 p-6 text-center shadow-[0_25px_80px_rgba(19,8,35,0.45)] backdrop-blur-md sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#ffe7a8]">
          Final Page
        </p>

        <h2
          className="mt-4 text-4xl font-bold text-[#ffebaa] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Happy Birthday
        </h2>

        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          SISTER!🎂💕
        </h1>

        <div className="mt-5 text-3xl sm:text-4xl">✨ 💖 🎉</div>

        <p className="mt-5 text-base font-semibold leading-relaxed text-white sm:text-[17px]">
          I hope this year brings you everything you’re wishing for and more—
          love, peace, laughter, and beautiful memories that stay with you
          forever.
        </p>

        <p className="mt-6 text-5xl sm:text-6xl">❤️</p>

        <div className="mt-8 flex items-center justify-center">
          <Link to={"/fifth-page"}>
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff7ed8] bg-transparent text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff7ed8] hover:border-white">
              <i className="fa-solid fa-arrow-left text-xl text-white"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SixthPage;
