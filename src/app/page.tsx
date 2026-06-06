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
    }, 2000);

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
          <div className="absolute w-[250px] h-[250px] bg-green-500/20 blur-[90px] rounded-full animate-pulse" /> 
          <div className="text-center relative z-10">
            <h1 className="text-6xl sm:text-8xl font-black tracking-widest animate-pulse">
              Ravano 🐎
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
          className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[120px] opacity-20 bg-green-400 transition duration-300 hidden md:block"
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
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/bg-horse.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-120px] right-[-60px] w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full" />
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
                className="bg-black/30 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 text-center hover:scale-105 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] transition-all duration-500"
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
          <section id="locations" className="text-center mt-10 mb-24 px-6">
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
                { name: "Pyramids of Giza", icon: "🏜️" },
                { name: "Saqqara", icon: "🏺" },
                { name: "Dahab", icon: "🌅" },
              ].map((place) => (
                <button
                  key={place.name}
                  onClick={() => setSelectedLocation(place.name)}
                  className={`group relative overflow-hidden w-full sm:w-auto sm:min-w-[280px] px-8 py-8 rounded-[36px] border backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
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
          <section id="horses" className="px-6 sm:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {horses.map((horse) => (
              <div
                key={horse.name}
                onClick={() => {
                  if (!selectedLocation) {
                    alert("Please select a location first 📍");
                    document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
                    return;
                  }
                  setSelectedHorse(horse.name);
                  setIsOpen(true);
                }}
                className="group cursor-pointer relative overflow-hidden rounded-[32px] hover:-translate-y-3 transition duration-500"
              >
                <div className="relative overflow-hidden rounded-[32px]">
                  <div className="group-hover:scale-110 transition duration-700">
                    <HorseCard name={horse.name} price={horse.price} image={horse.image} />
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
              <div className="bg-zinc-900/95 border border-zinc-700 p-6 sm:p-8 rounded-[32px] w-full max-w-[400px] shadow-[0_0_60px_rgba(0,0,0,0.6)] box-border">

                <h2 className="text-2xl font-black mb-5 text-white">
                  Booking Request 🐎
                </h2>

                {/* INFO */}
                <div className="space-y-3 mb-5">
                  <div className="bg-zinc-800 p-3 rounded-xl text-sm border border-zinc-700/30">
                    🐎 Horse: {selectedHorse}
                  </div>
                  <div className="bg-zinc-800 p-3 rounded-xl text-sm border border-zinc-700/30">
                    📍 Location: {selectedLocation}
                  </div>
                </div>

                {/* INPUTS CONTAINER */}
                <div className="w-full flex flex-col gap-3 mb-5 box-border">
                  
                  {/* NAME */}
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full h-[52px] px-4 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700/50 focus:ring-2 focus:ring-green-500 box-border"
                  />

                  {/* EMAIL */}
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[52px] px-4 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700/50 focus:ring-2 focus:ring-green-500 box-border"
                  />

                  {/* PHONE */}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-[52px] px-4 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700/50 focus:ring-2 focus:ring-green-500 box-border"
                  />

                  {/* DATE */}
                  <div className="w-full flex flex-col box-border">
                    <input
                      type="text"
                      placeholder="Select Date"
                      value={selectedDate}
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => !selectedDate && (e.target.type = "text")}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl bg-zinc-800 text-white placeholder-gray-400 outline-none border border-zinc-700/50 focus:ring-2 focus:ring-green-500 scheme-dark box-border transition-all"
                    />
                  </div>

                  {/* TIME */}
                  <div className="w-full flex flex-col box-border">
                    <input
                      type="text"
                      placeholder="Select Time"
                      value={selectedTime}
                      onFocus={(e) => (e.target.type = "time")}
                      onBlur={(e) => !selectedTime && (e.target.type = "text")}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl bg-zinc-800 text-white placeholder-gray-400 outline-none border border-zinc-700/50 focus:ring-2 focus:ring-green-500 scheme-dark box-border transition-all"
                    />
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="w-full flex flex-col gap-3">
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

                        window.open(`https://wa.me/201147120315?text=${message}`, "_blank");

                        setUserName("");
                        setEmail("");
                        setPhone("");
                        setSelectedDate("");
                        setSelectedTime("");
                        setIsOpen(false);

                      } catch (err) {
                        console.error(err);
                        alert("Something went wrong ❌");
                      }
                    }}
                    className={`w-full py-3.5 rounded-full font-bold transition duration-300 ${
                      isValid
                        ? "bg-green-500 text-black hover:bg-green-400 hover:scale-[1.02]"
                        : "bg-gray-600 cursor-not-allowed text-gray-400"
                    }`}
                  >
                    Confirm Booking
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-1 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* CONTACT */}
          <section id="contact" className="px-6 sm:px-12 pb-24">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 sm:p-16 text-center">
              <p className="uppercase tracking-[8px] text-green-400 text-sm mb-3">
                Contact
              </p>
              <h2 className="text-4xl sm:text-6xl font-black mb-5">
                Let’s Ride Together 🐎
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                Reach out anytime and let’s create unforgettable memories together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://wa.me/201147120315"
                  target="_blank"
                  className="bg-black/20 rounded-[32px] p-8 hover:scale-105 transition duration-500"
                >
                  <FaPhone size={34} className="mx-auto mb-4 text-green-400" />
                  <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-gray-400">+20 11 47120315</p>
                </a>

                <a
                  href="https://instagram.com/yousefsaaad_"
                  target="_blank"
                  className="bg-black/20 rounded-[32px] p-8 hover:scale-105 transition duration-500"
                >
                  <FaInstagram size={34} className="mx-auto mb-4 text-pink-400" />
                  <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                  <p className="text-gray-400">@yousefsaaad_</p>
                </a>

                <div className="bg-black/20 rounded-[32px] p-8 hover:scale-105 transition duration-500">
                  <FaLocationDot size={34} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-2">Location</h3>
                  <p className="text-gray-400">Egypt 🇪🇬</p>
                </div>
              </div>
            </div>
          </section>

          {/* FLOATING WHATSAPP */}
          <a
            href="https://wa.me/201147120315"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500/90 backdrop-blur-xl p-3 rounded-full border border-green-400/40 shadow-[0_0_40px_rgba(34,197,94,0.5)] z-50 hover:scale-110 hover:rotate-6 transition-all duration-300"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* FOOTER */}
          <Footer />

        </div>
      </main>
    </>
  );
}