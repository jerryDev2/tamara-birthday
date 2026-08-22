import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import tamaraDay from "../assets/TamaraDay.mp3";

function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();
  const isDarkBackground = ["/third-page", "/sixth-page"].includes(
    location.pathname,
  );

  const tooglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

    return (
      <div className="w-full fixed top-0 z-50  ">
        <header className="flex items-center justify-between max-w-225 mx-auto  w-full p-5 ">
          <div className={isDarkBackground ? "text-white" : "text-black"}>
            <h1 className="font-semibold text-xl"> 💖 For My Amazing Sister</h1>
          </div>
          <div
            onClick={tooglePlay}
            className={`bg-white shadow-md rounded-4xl cursor-pointer hover:bg-[#fff3fd] p-2 text-[#F3529A] text-[17px] ${isPlaying ? "scale-105 animate-pulse" : "scale-100"}`}
          >
            <audio src={tamaraDay} ref={audioRef}></audio>
            Play Music🎶
          </div>
        </header>
      </div>
    );
}

export default Header;
