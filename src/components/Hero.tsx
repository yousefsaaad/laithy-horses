"use client";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">

      <div className="text-center z-20">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 mb-6">{subtitle}</p>

        <button className="bg-white text-black px-6 py-3 rounded-full">
          Book Your Ride
        </button>
      </div>

    </section>
  );
}