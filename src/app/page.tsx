"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import HorseCard from "@/components/HorseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const horses = [
  {
    name: "Arabian Horse",
    price: "$120 / ride",
    image: "/horses/arabian.jpg",
  },

  {
    name: "Black Stallion",
    price: "$180 / ride",
    image: "/horses/black.jpg",
  },

  {
    name: "Royal Horse",
    price: "$250 / ride",
    image: "/horses/royal.jpg",
  },

  {
    name: "Desert King",
    price: "$300 / ride",
    image: "/horses/desert.jpg",
  }
];

export default function Home() {

  const [selectedHorse, setSelectedHorse] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />

      <Hero
        title="Where Legends Ride 🐎🔥 "
        subtitle="Premium Horse Riding Experience"
      />

<section className="p-5 sm:p-10 flex gap-6 justify-center flex-wrap">

      {horses.map((horse) => (

          <div
            key={horse.name}
            onClick={() => {

              setSelectedHorse(horse.name);

              setUserName("");
              setPhone("");

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

      {isOpen && (

<div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl w-[420px] shadow-2xl animate-[popup_0.3s_ease]">
            <h2 className="text-2xl font-bold mb-4">
              Booking Request 🐎
            </h2>

            <p className="text-gray-400 mb-6">
              You selected: {selectedHorse}
            </p>

            <input
  type="text"
  placeholder="Your Name"
  value={userName}
  onChange={(e) => setUserName(e.target.value)}
  className="w-full p-3 rounded-xl bg-zinc-800 mb-4 outline-none"
/>

<input
  type="text"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full p-3 rounded-xl bg-zinc-800 mb-6 outline-none"
/>

<button
  onClick={() => {

    const message =
      `Horse Booking 🐎%0A%0A` +
      `Horse: ${selectedHorse}%0A` +
      `Name: ${userName}%0A` +
      `Phone: ${phone}`;

    window.open(
      `https://wa.me/201558350504?text=${message}`,
      "_blank"
    );

  }}
  className="bg-green-500 text-white px-5 py-3 rounded-full w-full mb-4 font-semibold"
>
  Send Booking
</button>

<button
  onClick={() => setIsOpen(false)}
  className="bg-white text-black px-5 py-3 rounded-full w-full"
>
  Close
</button>

          </div>

        </div>

      )}

      <Footer />

    </main>
  );
}