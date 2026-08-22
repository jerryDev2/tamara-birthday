import React from "react";
import { Link } from "react-router-dom";

function ThirdPage() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[url(/images/background5.jpg)] bg-cover bg-center px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-3xl pt-10">
        <h1
          style={{ fontFamily: "Montserrat" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          A Message <br /> From Your Brother
        </h1>

        <div className="mt-6 rounded-2xl border-2 border-[#ff7ed8] bg-[#2c0e55]/20 p-4 text-white backdrop-blur-md sm:p-5">
          <ul
            style={{ fontFamily: "Roboto Slab" }}
            className="flex flex-col gap-1 text-sm sm:text-[15px]"
          >
            <li className="border-b border-[#ff7ed8] pb-5">
              I don't always say it, but having you as my big sister is
              something I'm truly grateful for.
            </li>
            <li className="border-b border-[#ff7ed8] pb-5">
              You've always been someone I can look up to, and even though I may
              not say it enough, I appreciate you more than you probably
              realize.
            </li>
            <li className="border-b border-[#ff7ed8] pb-5">
              As I've grown older, I've realized how special it is to have
              someone like you ahead of me—someone I can look up to and learn
              from. ❤️
            </li>
            <li className="border-b border-[#ff7ed8] pb-5">
              I pray this new year brings you peace, lasting happiness, success
              in all you do, and people who truly appreciate you. ❤️
            </li>
            <li className="pb-3">Thank you for being my big sister. ❤️</li>
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link to={"/second-page"}>
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff7ed8] bg-transparent text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff7ed8] hover:border-white">
              <i className="fa-solid fa-arrow-left text-xl text-white"></i>
            </button>
          </Link>

          <Link to={"/fouth-page"}>
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ffffff] bg-[#ff7ed8] text-white transition-all duration-300 hover:scale-105 hover:border-[#ff7ed8] hover:bg-transparent">
              <i className="fa-solid fa-arrow-right text-xl text-white"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ThirdPage;
