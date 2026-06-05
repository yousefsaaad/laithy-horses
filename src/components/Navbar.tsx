"use client";

export default function Navbar() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (

    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-5 sm:px-8 py-4 text-white shadow-[0_0_30px_rgba(0,0,0,0.4)]">

        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl sm:text-3xl font-black cursor-pointer whitespace-nowrap hover:scale-105 transition"
        >
          Laithy 🐎
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-base text-gray-300">

          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-white transition px-2 sm:px-0"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("horses")}
            className="hover:text-white transition px-2 sm:px-0"
          >
            Horses
          </button>

          <button
            onClick={() => scrollToSection("booking")}
            className="hover:text-white transition px-2 sm:px-0"
          >
            Booking
          </button>

        </div>

      </div>

    </nav>

  );
}