"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";
import HorseCard from "@/components/HorseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { FaWhatsapp } from "react-icons/fa";

import {
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [loading, setLoading] = useState(true);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const isValid =
    userName.length > 2 &&
    email.includes("@") &&
    phone.length > 7 &&
    selectedLocation &&
    selectedDate &&
    selectedTime;

  /* LOADER */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  /* MOUSE GLOW */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* LOADING SCREEN */}
      {loading && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">

          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[180px] rounded-full animate-pulse" />

          <div className="text-center relative z-10">

            <h1 className="text-6xl sm:text-8xl font-black tracking-widest animate-pulse">
              LAITHY 🐎
            </h1>

            <p className="text-gray-400 mt-6 tracking-[8px] uppercase text-sm">
              Luxury Horse Riding
            </p>

          </div>

        </div>
      )}

      <main
        id="home"
        className="relative min-h-screen text-white overflow-x-hidden"
      >

        {/* MOUSE GLOW */}
        <div
          className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[120px] opacity-20 bg-green-400 transition duration-300"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />

        {/* BACKGROUND VIDEO */}
        <div className="fixed inset-0 -z-10 overflow-hidden">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110"
          >
            <source src="/bg-horse.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-500/20 blur-[200px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/20 blur-[180px] rounded-full" />

        </div>

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* HERO */}
          <Hero
            title="Where Legends Ride 🐎"
            subtitle="Luxury horseback experiences through Egypt’s most iconic landscapes."
          />

          {/* STATS */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 sm:px-12 mb-24">

            {[
              { number: "500+", label: "Happy Riders" },
              { number: "4.9★", label: "Luxury Rating" },
              { number: "24/7", label: "Premium Support" },
              { number: "100%", label: "Luxury Experience" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center hover:scale-105 hover:border-green-400 transition duration-500"
              >

                <h3 className="text-3xl font-black text-green-400 mb-2">
                  {item.number}
                </h3>

                <p className="text-gray-300 text-sm tracking-wide">
                  {item.label}
                </p>

              </div>
            ))}

          </section>

          {/* LOCATIONS */}
          <section
            id="locations"
            className="text-center mt-10 mb-24 px-6"
          >

            <p className="uppercase tracking-[8px] text-green-400 text-sm mb-3">
              Explore Egypt
            </p>

            <h2 className="text-4xl sm:text-6xl font-black mb-5">
              Choose Your Destination
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
              Ride across Egypt’s most breathtaking landscapes with elegance and adventure.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              {[
                {
                  name: "Pyramids of Giza",
                  icon: "🏜️",
                },
                {
                  name: "Saqqara",
                  icon: "🏺",
                },
                {
                  name: "Dahab",
                  icon: "🌅",
                },
              ].map((place) => (
                <button
                  key={place.name}
                  onClick={() => setSelectedLocation(place.name)}
                  className={`group w-full sm:w-auto sm:min-w-[260px] px-8 py-7 rounded-[32px] border backdrop-blur-xl transition-all duration-500 hover:scale-105 ${
                    selectedLocation === place.name
                      ? "bg-green-500 text-black border-green-400 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                      : "bg-white/5 border-white/10 hover:border-green-400"
                  }`}
                >

                  <div className="text-6xl mb-5 group-hover:scale-110 transition">
                    {place.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {place.name}
                  </h3>

                  <p className="text-sm mt-2 opacity-70">
                    Premium Horseback Adventure
                  </p>

                </button>
              ))}

            </div>

          </section>

          {/* HORSES */}
          <section
            id="horses"
            className="px-6 sm:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >

            {horses.map((horse) => (
              <div
                key={horse.name}
                onClick={() => {
                  setSelectedHorse(horse.name);
                  setIsOpen(true);
                }}
                className="group cursor-pointer relative overflow-hidden rounded-[32px] hover:-translate-y-3 transition duration-500"
              >

                <div className="relative overflow-hidden rounded-[32px]">

                  <div className="group-hover:scale-110 transition duration-700">

                    <HorseCard
                      name={horse.name}
                      price={horse.price}
                      image={horse.image}
                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                  <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-green-400 transition duration-500" />

                </div>

              </div>
            ))}

          </section>

          {/* BOOKING MODAL */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">

              <div className="bg-zinc-900/95 border border-zinc-700 p-5 sm:p-8 rounded-[32px] w-full max-w-[430px] shadow-[0_0_60px_rgba(0,0,0,0.6)]">

                <h2 className="text-2xl font-black mb-5">
                  Booking Request 🐎
                </h2>

                <div className="space-y-3 mb-5">

                  <div className="bg-zinc-800 p-3 rounded-xl text-sm">
                    🐎 Horse: {selectedHorse}
                  </div>

                  <div className="bg-zinc-800 p-3 rounded-xl text-sm">
                    📍 Location: {selectedLocation}
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

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 mb-3 outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* PHONE */}
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 mb-3 outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* DATE */}
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 mb-3"
                />

                {/* TIME */}
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 mb-5"
                />

                {/* SEND */}
                <button
                  disabled={!isValid}
                  onClick={async () => {

                    try {

                      const { error } = await supabase
                        .from("bookings")
                        .insert([
                          {
                            name: userName,
                            email: email,
                            phone: phone,
                            horse: selectedHorse,
                            location: selectedLocation,
                            date: selectedDate,
                            time: selectedTime,
                          },
                        ]);

                      if (error) {
                        console.error(error);
                        alert(`Booking failed ❌: ${error.message}`);
                        return;
                      }

                      alert("Booking confirmed 🐎🔥");

                      const message =
                        `🐎 Booking Request%0A%0A` +
                        `Horse: ${selectedHorse}%0A` +
                        `Location: ${selectedLocation}%0A` +
                        `Date: ${selectedDate}%0A` +
                        `Time: ${selectedTime}%0A` +
                        `Name: ${userName}%0A` +
                        `Email: ${email}%0A` +
                        `Phone: ${phone}`;

                      window.open(
                        `https://wa.me/201147120315?text=${message}`,
                        "_blank"
                      );

                      setIsOpen(false);

                    } catch (err) {
                      console.error(err);
                      alert("Something went wrong ❌");
                    }

                  }}
                  className={`w-full py-3 rounded-full font-bold transition duration-300 ${
                    isValid
                      ? "bg-green-500 hover:bg-green-400 hover:scale-105"
                      : "bg-gray-600 cursor-not-allowed"
                  }`}
                >
                  Confirm Booking
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

          {/* CONTACT */}
          <section
            id="contact"
            className="px-6 sm:px-12 pb-24"
          >

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 sm:p-16 text-center">

              <p className="uppercase tracking-[8px] text-green-400 text-sm mb-3">
                Contact
              </p>

              <h2 className="text-4xl sm:text-6xl font-black mb-5">
                Let’s Ride Together 🐎
              </h2>

            </div>

          </section>

          {/* FLOATING WHATSAPP */}
          <a
            href="https://wa.me/201147120315"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.6)] z-50 hover:scale-110 transition duration-300"
          >
            <FaWhatsapp size={28} />
          </a>

          {/* FOOTER */}
          <Footer />

        </div>

      </main>
    </>
  );
}