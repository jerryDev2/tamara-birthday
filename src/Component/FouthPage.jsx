import React, { useState, useRef, useEffect } from "react";
import video1 from "../assets/images/video2.mp4";
import video2 from "../assets/images/video9.mp4";
import video3 from "../assets/images/video5.mp4";
import video4 from "../assets/images/video7.mp4";
import video5 from "../assets/images/video3.mp4";
import video6 from "../assets/images/video10.mp4";
import { Link } from "react-router-dom";

const memoryVideos = [video1, video2, video3, video4, video5, video6];

function FouthPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && selectedVideo) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [selectedVideo]);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center gap-4 overflow-hidden bg-[url(/images/image3.jpg)] bg-cover bg-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.18))]" />
      <div className="absolute left-8 top-12 h-32 w-32 rounded-full bg-[#ffbfd7]/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-8 right-10 h-36 w-36 rounded-full bg-[#ffd8a7]/25 blur-3xl animate-pulse" />

      <div className="relative z-10 pt-10 text-center">
        <h1
          className="text-4xl font-semibold text-[#2c0e55] sm:text-5xl"
          style={{ fontFamily: "Pacifico" }}
        >
          Our Memories
        </h1>
        <p
          className="mt-3 text-sm sm:text-base"
          style={{ fontFamily: "Montserrat" }}
        >
          Some of my favorite memories with you 💖
        </p>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {memoryVideos.map((video, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedVideo(video)}
            className="h-28 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] sm:h-32 md:h-40"
          >
            <video
              autoPlay
              muted
              loop
              preload="metadata"
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </button>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-2 flex w-full max-w-5xl items-center justify-between">
        <Link to={"/third-page"}>
          <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff7ed8] bg-transparent text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff7ed8] hover:border-white">
            <i className="fa-solid fa-arrow-left text-xl text-white"></i>
          </button>
        </Link>

        <Link to={"/fifth-page"}>
          <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ffffff] bg-[#ff7ed8] text-white transition-all duration-300 hover:scale-105 hover:border-[#ff7ed8] hover:bg-transparent">
            <i className="fa-solid fa-arrow-right text-xl text-white"></i>
          </button>
        </Link>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c0e55]/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-black shadow-2xl">
            <button
              type="button"
              onClick={closeVideo}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-xl font-bold text-[#2c0e55]"
            >
              ×
            </button>

            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              className="h-[60vh] w-full object-cover"
              onEnded={closeVideo}
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default FouthPage;
