"use client";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16"
    >

      {/* CONTENT */}
      <div className="relative z-20 animate-[fadeIn_1s_ease] w-full max-w-5xl">

        {/* SMALL TOP TEXT */}
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-green-400 text-[11px] sm:text-sm mb-4">
          Luxury Horse Riding Experience
        </p>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] px-2">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto px-2">
          {subtitle}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl mx-auto">

          {/* MAIN BUTTON */}
          <button
            onClick={() => {
              document
                .getElementById("horses")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 hover:bg-green-400 transition duration-300 shadow-2xl"
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
            className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition duration-300"
          >
            Contact Us
          </button>

        </div>

        {/* PREMIUM INFO */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm text-gray-300">

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