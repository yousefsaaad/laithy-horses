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

<div className="bg-zinc-900 border border-zinc-800 hover:border-white/30 rounded-3xl p-6 w-full sm:w-[300px] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">

<div className="relative h-[200px] mb-5 overflow-hidden rounded-2xl">

      <Image
  src={image}
  alt={name}
  fill
  className="object-cover rounded-2xl hover:scale-105 transition duration-500"
 />

      </div>

      <h2 className="text-2xl font-bold mb-2">
        {name}
      </h2>

      <p className="text-gray-400 mb-5">
        {price}
      </p>

      <button
        className="bg-white text-black px-5 py-3 rounded-full w-full font-semibold hover:bg-gray-200 transition"
      >
        Book Now
      </button>

    </div>

  );
}