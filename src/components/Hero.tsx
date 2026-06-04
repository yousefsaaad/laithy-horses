"use client";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6"
    >

      {/* CONTENT */}
      <div className="relative z-20 animate-[fadeIn_1s_ease] max-w-4xl">

        {/* SMALL TOP TEXT */}
        <p className="uppercase tracking-[6px] text-green-400 text-sm mb-4">
          Luxury Horse Riding Experience
        </p>

        {/* TITLE */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* MAIN BUTTON */}
          <button
            onClick={() => {
              document
                .getElementById("horses")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:bg-green-400 transition duration-300 shadow-2xl"
          >
            Reserve Your Experience
          </button>

          {/* SECOND BUTTON */}
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition duration-300"
          >
            Contact Us
          </button>

        </div>

        {/* PREMIUM INFO */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

          <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
            🐎 Private Desert Rides
          </div>

          <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
            🌅 Sunset Experiences
          </div>

          <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
            📍 Pyramids • Saqqara • Dahab
          </div>

        </div>

      </div>

    </section>
  );
}