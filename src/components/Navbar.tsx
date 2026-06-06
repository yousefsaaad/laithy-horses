"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (

    <nav className="fixed top-3 left-0 w-full z-50 px-3">

      <div
        className={`
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          rounded-2xl
          px-4
          sm:px-6
          py-2.5
          border
          border-white/10
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-black/70 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              : "bg-black/30"
          }
        `}
      >

        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="
            text-lg
            sm:text-2xl
            font-black
            cursor-pointer
            whitespace-nowrap
            hover:text-green-400
            transition
          "
        >
          Ravano 🐎
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-1 sm:gap-4">

          <button
            onClick={() => scrollToSection("home")}
            className="
              text-xs
              sm:text-sm
              text-gray-300
              hover:text-white
              transition
              px-2
              py-2
            "
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("horses")}
            className="
              text-xs
              sm:text-sm
              text-gray-300
              hover:text-white
              transition
              px-2
              py-2
            "
          >
            Horses
          </button>

          <button
            onClick={() => scrollToSection("locations")}
            className="
              text-xs
              sm:text-sm
              bg-green-500
              text-black
              font-semibold
              px-3
              py-2
              rounded-xl
              hover:bg-green-400
              transition
              shadow-[0_0_15px_rgba(34,197,94,0.35)]
            "
          >
            Book
          </button>

        </div>

      </div>

    </nav>

  );
}