import Image from "next/image";

type HorseCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function HorseCard({
  name,
  price,
  image,
}: HorseCardProps) {

  return (

    <div className="group relative bg-zinc-900/90 border border-zinc-800 hover:border-green-400/40 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] w-full">

      {/* IMAGE */}
      <div className="relative h-[240px] sm:h-[260px] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        {/* TOP BADGE */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs px-4 py-2 rounded-full">
          Luxury Ride
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">

        <h2 className="text-2xl sm:text-3xl font-black mb-2">
          {name}
        </h2>

        <p className="text-green-400 text-lg font-semibold mb-5">
          {price}
        </p>

        {/* BUTTON */}
        <button
          className="w-full bg-white text-black py-3 rounded-full font-bold text-sm sm:text-base hover:bg-green-400 hover:scale-[1.02] transition duration-300"
        >
          Book Now
        </button>

      </div>

    </div>

  );
}