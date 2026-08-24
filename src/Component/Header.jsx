import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import tamaraDay from "../assets/HappyBirthdayTamara.mp3";

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
    <div className="fixed top-0 z-50 w-full">
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between p-5">
        <div className={isDarkBackground ? "text-white" : "text-black"}>
          <h1 className="text-[15px] font-semibold">For My Amazing Sister</h1>
        </div>
        <div
          onClick={tooglePlay}
          className={`cursor-pointer rounded-full bg-white p-2 text-[17px] text-[#F3529A] shadow-md hover:bg-[#fff3fd] ${isPlaying ? "scale-105 animate-pulse" : "scale-100"}`}
        >
          <audio src={tamaraDay} ref={audioRef}></audio>
          Play Music🎶
        </div>
      </header>
    </div>
  );
}

export default Header;
