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

    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">

      <div
        className={`
          flex
          items-center
          justify-between
          rounded-[28px]
          px-5
          sm:px-8
          py-4
          border
          border-white/10
          backdrop-blur-2xl
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.55)]"
              : "bg-black/30"
          }
        `}
      >

        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="
            text-2xl
            sm:text-3xl
            font-black
            cursor-pointer
            whitespace-nowrap
            hover:text-green-400
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Ravano 🐎
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-2 sm:gap-6">

          <button
            onClick={() => scrollToSection("home")}
            className="
              text-sm
              sm:text-base
              text-gray-300
              hover:text-green-400
              transition-all
              duration-300
              px-3
              py-2
              rounded-xl
              hover:bg-white/5
            "
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("horses")}
            className="
              text-sm
              sm:text-base
              text-gray-300
              hover:text-green-400
              transition-all
              duration-300
              px-3
              py-2
              rounded-xl
              hover:bg-white/5
            "
          >
            Horses
          </button>

          <button
            onClick={() => scrollToSection("locations")}
            className="
              text-sm
              sm:text-base
              bg-green-500
              text-black
              font-semibold
              px-4
              py-2
              rounded-xl
              hover:scale-105
              hover:bg-green-400
              transition-all
              duration-300
              shadow-[0_0_20px_rgba(34,197,94,0.45)]
            "
          >
            Book Now
          </button>

        </div>

      </div>

    </nav>

  );
}