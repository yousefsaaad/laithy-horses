type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-gray-400 mb-6">
        {subtitle}
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-full">
        Book Your Ride
      </button>
    </section>
  );
}