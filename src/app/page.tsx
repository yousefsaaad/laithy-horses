"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import HorseCard from "@/components/HorseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const horses = [
  { name: "Arabian Horse", price: "$120 / ride", image: "/horses/arabian.jpg" },
  { name: "Black Stallion", price: "$180 / ride", image: "/horses/black.jpg" },
  { name: "Royal Horse", price: "$250 / ride", image: "/horses/royal.jpg" },
  { name: "Desert King", price: "$300 / ride", image: "/horses/desert.jpg" }
];

export default function Home() {
  const [selectedHorse, setSelectedHorse] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = userName.length > 2 && phone.length > 7;

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/bg-horse.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10">

        <Hero
          title="Where Legends Ride 🐎🔥"
          subtitle="Premium Horse Riding Experience in Egypt"
        />

        {/* LOCATIONS */}
        <section className="text-center mt-12 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Available Riding Locations 📍
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Pyramids of Giza", "Saqqara", "Dahab"].map((place) => (
              <button
                key={place}
                onClick={() => setSelectedLocation(place)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                  selectedLocation === place
                    ? "bg-green-500 text-black shadow-lg"
                    : "bg-zinc-900/60 border-zinc-700 hover:border-green-500"
                }`}
              >
                {place}
              </button>
            ))}
          </div>
        </section>

        {/* HORSES */}
        <section className="p-6 sm:p-12 flex gap-8 justify-center flex-wrap">
          {horses.map((horse) => (
            <div
              key={horse.name}
              className="transform hover:scale-105 transition duration-300"
              onClick={() => {
                setSelectedHorse(horse.name);
                setIsOpen(true);
              }}
            >
              <HorseCard
                name={horse.name}
                price={horse.price}
                image={horse.image}
              />
            </div>
          ))}
        </section>

        {/* MODAL */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl w-[420px] animate-[fadeIn_0.3s_ease]">

              <h2 className="text-2xl font-bold mb-4">
                Booking Request 🐎
              </h2>

              <div className="mb-5 space-y-2 text-sm">

                <div className="bg-zinc-800 p-3 rounded-xl">
                  🐎 Horse: {selectedHorse}
                </div>

                <div className="bg-zinc-800 p-3 rounded-xl">
                  📍 Location: {selectedLocation || "Not selected"}
                </div>

              </div>

              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 rounded-xl bg-zinc-800 mb-3 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-xl bg-zinc-800 mb-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="date"
                className="w-full p-3 rounded-xl bg-zinc-800 mb-3"
              />

              <input
                type="time"
                className="w-full p-3 rounded-xl bg-zinc-800 mb-6"
              />

              <button
                disabled={!isValid}
                onClick={() => {
                  const message =
                    `🐎 Booking%0A` +
                    `Horse: ${selectedHorse}%0A` +
                    `Location: ${selectedLocation}%0A` +
                    `Name: ${userName}%0A` +
                    `Phone: ${phone}`;

                  window.open(
                    `https://wa.me/201147120315?text=${message}`,
                    "_blank"
                  );
                }}
                className={`w-full py-3 rounded-full font-semibold transition ${
                  isValid
                    ? "bg-green-500 hover:scale-105"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                Send Booking
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 py-3 rounded-full bg-white text-black"
              >
                Close
              </button>

            </div>
          </div>
        )}

        {/* WHATSAPP */}
        <a
          href="https://wa.me/201147120315"
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
        >
          <FaWhatsapp size={28} />
        </a>

        <Footer />

      </div>
    </main>
  );
}