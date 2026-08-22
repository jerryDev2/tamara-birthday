import React, { useState } from "react";
import { Link } from "react-router-dom";

const gifts = [
  {
    id: "date-night",
    title: "Sunset Date",
    emoji: "🌅",
    short: "A cozy evening to remember",
    message:
      "A beautiful evening with your favorite person, good food, soft music, and a sky full of memories.",
  },
  {
    id: "treat-box",
    title: "Sweet Treat Box",
    emoji: "🍰",
    short: "A little slice of happiness",
    message:
      "A thoughtful box of all your favorite sweets, desserts, and tiny joys to make your whole week brighter.",
  },
  {
    id: "memory-box",
    title: "Memory Box",
    emoji: "📦",
    short: "A keepsake full of love",
    message:
      "A tiny treasure chest filled with your favorite memories, notes, and little reminders of how loved you are.",
  },
];

function FifthPage() {
  const [selectedGift, setSelectedGift] = useState(null);

  return (
    <section className="min-h-screen w-full bg-[url(/images/image3.jpg)] bg-cover bg-center overflow-x-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center text-[#2c0e55]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7b2d68]">
            Surprise time
          </p>
          <h1
            className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "Pacifico" }}
          >
            Pick a Gift 🎁
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
            style={{ fontFamily: "Montserrat" }}
          >
            Choose one, and I’ll reveal your little birthday surprise.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {gifts.map((gift) => {
            const isSelected = selectedGift?.id === gift.id;

            return (
              <button
                key={gift.id}
                type="button"
                onClick={() => setSelectedGift(gift)}
                className={`group relative overflow-hidden rounded-[28px] border p-5 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isSelected
                    ? "border-[#ff7ed8] bg-white/90 ring-4 ring-[#ffd7f0]"
                    : "border-white/60 bg-white/80"
                }`}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fdf0fb] text-4xl shadow-inner">
                  {gift.emoji}
                </div>

                <h2
                  className="text-2xl text-[#2c0e55]"
                  style={{ fontFamily: "Kaushan Script" }}
                >
                  {gift.title}
                </h2>

                <p
                  className="mt-3 text-sm text-[#5d3f6a]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {gift.short}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[#a4296c]">
                  <span>Open surprise</span>
                  <span aria-hidden="true">→</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <Link to="/fouth-page">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff7ed8] bg-transparent text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#ff7ed8]">
              <i className="fa-solid fa-arrow-left text-xl text-white"></i>
            </button>
          </Link>

          <Link to="/sixth-page">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#ff7ed8] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#ff7ed8] hover:bg-transparent">
              <i className="fa-solid fa-arrow-right text-xl text-white"></i>
            </button>
          </Link>
        </div>
      </div>

      {selectedGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c0e55]/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[30px] bg-white p-6 text-center shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedGift(null)}
              className="absolute right-4 top-4 text-2xl text-[#5d3f6a]"
              aria-label="Close popup"
            >
              ×
            </button>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1fa] text-5xl shadow-inner">
              {selectedGift.emoji}
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-[#a4296c]">
              Your surprise
            </p>

            <h3
              className="mt-3 text-3xl text-[#2c0e55]"
              style={{ fontFamily: "Kaushan Script" }}
            >
              {selectedGift.title}
            </h3>

            <p
              className="mt-4 text-sm leading-6 text-[#5d3f6a]"
              style={{ fontFamily: "Montserrat" }}
            >
              {selectedGift.message}
            </p>

            <button
              type="button"
              onClick={() => setSelectedGift(null)}
              className="mt-6 rounded-full bg-[#ff7ed8] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FifthPage