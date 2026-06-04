"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import HorseCard from "@/components/HorseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

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
  },
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

      {/* 🎬 BACKGROUND VIDEO */}
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

      {/* 🧭 NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* 🐎 HERO */}
        <Hero
          title="Where Legends Ride 🐎"
          subtitle="Luxury horseback experiences through Egypt’s most iconic landscapes."
        />

        {/* 📍 LOCATIONS */}
        <section className="text-center mt-16 mb-14 px-6">

          <p className="uppercase tracking-[6px] text-green-400 text-sm mb-3">
            Explore Egypt
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Choose Your Riding Destination
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Discover breathtaking horseback experiences across Egypt’s most iconic landscapes.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            {[
              { name: "Pyramids of Giza", icon: "🏜️" },
              { name: "Saqqara", icon: "🏺" },
              { name: "Dahab", icon: "🌅" },
            ].map((place) => (
              <button
                key={place.name}
                onClick={() => setSelectedLocation(place.name)}
                className={`group px-8 py-5 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:scale-105 min-w-[220px] ${
                  selectedLocation === place.name
                    ? "bg-green-500 text-black border-green-400 shadow-2xl"
                    : "bg-white/5 border-white/10 hover:border-green-400"
                }`}
              >

                <div className="text-4xl mb-3">
                  {place.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {place.name}
                </h3>

                <p className="text-sm mt-2 opacity-70">
                  Premium riding experience
                </p>

              </button>
            ))}

          </div>

        </section>

        {/* 🐎 BOOKING SECTION */}
        <section
          id="booking"
          className="text-center pt-10 px-6"
        >

          <p className="uppercase tracking-[6px] text-green-400 text-sm mb-3">
            Booking
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Book Your Experience 🐎
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Choose your perfect horse and enjoy a premium riding experience across Egypt’s most iconic destinations.
          </p>

        </section>

        {/* 🐎 HORSES */}
        <section
          id="horses"
          className="p-6 sm:p-12 flex gap-8 justify-center flex-wrap"
        >

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

        {/* 🐎 BOOKING MODAL */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl w-full max-w-[420px] animate-[fadeIn_0.3s_ease]">

              <h2 className="text-2xl font-bold mb-4">
                Booking Request 🐎
              </h2>

              {/* INFO */}
              <div className="mb-5 space-y-2 text-sm">

                <div className="bg-zinc-800 p-3 rounded-xl">
                  🐎 Horse: {selectedHorse}
                </div>

                <div className="bg-zinc-800 p-3 rounded-xl">
                  📍 Location: {selectedLocation || "Not selected"}
                </div>

              </div>

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 rounded-xl bg-zinc-800 mb-3 outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-xl bg-zinc-800 mb-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* DATE */}
              <label className="block mb-2 text-sm text-gray-400">
                Select Date 📅
              </label>

              <input
                type="date"
                className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
              />

              {/* TIME */}
              <label className="block mb-2 text-sm text-gray-400">
                Select Time ⏰
              </label>

              <input
                type="time"
                className="w-full p-3 rounded-xl bg-zinc-800 mb-6"
              />

              {/* SEND */}
              <button
                disabled={!isValid}
                onClick={() => {
                  const message =
                    `🐎 Booking Request%0A%0A` +
                    `Horse: ${selectedHorse}%0A` +
                    `Location: ${selectedLocation}%0A` +
                    `Name: ${userName}%0A` +
                    `Phone: ${phone}`;

                  window.open(
                    `https://wa.me/201147120315?text=${message}`,
                    "_blank"
                  );
                }}
                className={`w-full py-3 rounded-full font-semibold transition duration-300 ${
                  isValid
                    ? "bg-green-500 hover:scale-105 hover:bg-green-400"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                Send Booking
              </button>

              {/* CLOSE */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 py-3 rounded-full bg-white text-black hover:scale-105 transition"
              >
                Close
              </button>

            </div>

          </div>
        )}

        {/* 📞 CONTACT */}
        <section
          id="contact"
          className="text-center py-20 px-6"
        >

          <p className="uppercase tracking-[6px] text-green-400 text-sm mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Let’s Plan Your Next Adventure 🐎
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Ready to experience Egypt on horseback? Reach out anytime and we’ll help you book the perfect ride.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/201147120315"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 rounded-3xl hover:scale-105 transition duration-300 min-w-[260px]"
            >
              <div className="text-4xl mb-3">📱</div>

              <h3 className="text-2xl font-semibold mb-2">
                WhatsApp
              </h3>

              <p className="text-gray-400">
                +20 11 47120315
              </p>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/yousefsaaad_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 rounded-3xl hover:scale-105 transition duration-300 min-w-[260px]"
            >
              <div className="text-4xl mb-3">📸</div>

              <h3 className="text-2xl font-semibold mb-2">
                Instagram
              </h3>

              <p className="text-gray-400">
                @yousefsaaad_
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:joooy1199@gmail.com"
              className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 rounded-3xl hover:scale-105 transition duration-300 min-w-[260px]"
            >
              <div className="text-4xl mb-3">✉️</div>

              <h3 className="text-2xl font-semibold mb-2">
                Email
              </h3>

              <p className="text-gray-400 break-all">
                joooy1199@gmail.com
              </p>
            </a>

          </div>

        </section>

        {/* 💬 WHATSAPP FLOAT */}
        <a
          href="https://wa.me/201147120315"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50 hover:scale-110 transition duration-300"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* FOOTER */}
        <Footer />

      </div>
    </main>
  );
}