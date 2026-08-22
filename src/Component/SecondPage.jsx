import React from "react";
import video1 from "../assets/images/video1.mp4";
import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[url(/images/image.png)] bg-cover bg-center px-4 py-16 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
        <p
          className="mt-6 text-2xl text-[#F366A8] sm:text-3xl"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Finally...
        </p>

        <h2
          className="text-4xl text-[#A4296C] sm:text-5xl"
          style={{ fontFamily: "Kaushan Script" }}
        >
          It's Your Day!
        </h2>

        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-amber-500 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1
          style={{ fontFamily: "Kaushan Script" }}
          className="text-4xl text-[#000000] sm:text-5xl lg:text-6xl"
        >
          Happy Birthday, <span className="text-[#F3529A]">Big Sis!🎉</span>
        </h1>

        <p className="max-w-xl text-sm text-[#68316E] sm:text-[15px]">
          Wishing you a beautiful year filled with happiness, love, success and
          all the things your heart desires.
        </p>

        <Link to={"/third-page"} className="w-full max-w-md">
          <button className="group flex w-full items-center justify-center gap-4 rounded-full border-2 border-white bg-linear-to-r from-[#F366A8] to-[#A4296C] p-3 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:text-[18px]">
            <span>💌 Read Your Message</span>
            <i className="fa-solid fa-arrow-right transition-all duration-300 group-hover:translate-x-1"></i>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SecondPage;
