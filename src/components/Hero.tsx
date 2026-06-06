"use client";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {

  return (

    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        text-center
        px-4
        sm:px-6
        pt-24
        pb-16
        overflow-hidden
      "
    >

{/* GRADIENT OVERLAY */}
{/* GRADIENT OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-0" />      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full z-0 animate-pulse" />

      {/* CONTENT */}
      <div className="relative z-20 animate-[fadeIn_1.2s_ease] w-full max-w-5xl">

        {/* SMALL TOP TEXT */}
        <p className="
          uppercase
          tracking-[5px]
          sm:tracking-[8px]
          text-green-400
          text-[11px]
          sm:text-sm
          mb-5
        ">
          Luxury Horse Riding Experience
        </p>

        {/* TITLE */}
        <h1
          className="
            text-5xl
            sm:text-7xl
            lg:text-8xl
            font-black
            leading-[1]
            mb-6
            px-2
            text-white
            drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]
          "
        >
          {title}
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            text-gray-300
            text-base
            sm:text-xl
            lg:text-2xl
            mb-10
            leading-relaxed
            max-w-3xl
            mx-auto
            px-2
          "
        >
          {subtitle}
        </p>

        {/* BUTTONS */}
        <div className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          w-full
          max-w-2xl
          mx-auto
        ">

          {/* MAIN BUTTON */}
          <button
            onClick={() => {
              document
                .getElementById("locations")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="
              group
              relative
              overflow-hidden
              w-full
              sm:w-auto
              bg-green-500
              text-black
              px-10
              py-4
              rounded-2xl
              font-bold
              text-base
              sm:text-lg
              hover:scale-105
              hover:bg-green-400
              transition-all
              duration-300
              shadow-[0_0_40px_rgba(34,197,94,0.45)]
            "
          >

            <span className="relative z-10">
              Explore Locations 📍
            </span>

            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />

          </button>

          {/* SECOND BUTTON */}
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="
              w-full
              sm:w-auto
              border
              border-white/20
              bg-white/5
              backdrop-blur-xl
              px-10
              py-4
              rounded-2xl
              font-semibold
              text-base
              sm:text-lg
              hover:bg-white/10
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact Us
          </button>

        </div>

        {/* PREMIUM INFO */}
        <div className="
          mt-12
          flex
          flex-col
          sm:flex-row
          flex-wrap
          justify-center
          gap-4
          text-sm
          text-gray-300
        ">

          <div
            className="
              bg-white/5
              border
              border-white/10
              px-6
              py-4
              rounded-[24px]
              backdrop-blur-xl
              hover:border-green-400
              hover:scale-105
              transition-all
              duration-300
            "
          >
            🐎 Private Desert Rides
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              px-6
              py-4
              rounded-[24px]
              backdrop-blur-xl
              hover:border-green-400
              hover:scale-105
              transition-all
              duration-300
            "
          >
            🌅 Sunset Experiences
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              px-6
              py-4
              rounded-[24px]
              backdrop-blur-xl
              hover:border-green-400
              hover:scale-105
              transition-all
              duration-300
            "
          >
            📍 Pyramids • Saqqara • Dahab
          </div>

        </div>

      </div>

    </section>
  );
}