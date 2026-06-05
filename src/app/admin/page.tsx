"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Booking = {
  id: number;
  name: string;
  phone: string;
  horse: string;
  date: string;
  time: string;
};

export default function AdminPage() {

  const [bookings, setBookings] = useState<Booking[]>([]);

  async function fetchBookings() {

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setBookings(data);
  }

  async function deleteBooking(id: number) {

    await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    fetchBookings();
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (

    <main className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-12 py-10 overflow-hidden">

      {/* TOP GLOW */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 mb-12 text-center sm:text-left">

        <p className="uppercase tracking-[6px] text-green-400 text-xs sm:text-sm mb-3">
          Admin Panel
        </p>

        <h1 className="text-4xl sm:text-6xl font-black mb-4">
          Dashboard 🐎
        </h1>

        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl">
          Manage all luxury horse riding bookings in one cinematic dashboard.
        </p>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <p className="text-gray-400 mb-2">
            Total Bookings
          </p>

          <h2 className="text-4xl font-black text-green-400">
            {bookings.length}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <p className="text-gray-400 mb-2">
            Premium Riders
          </p>

          <h2 className="text-4xl font-black text-white">
            VIP
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <p className="text-gray-400 mb-2">
            Status
          </p>

          <h2 className="text-4xl font-black text-green-400">
            Active
          </h2>
        </div>

      </div>

      {/* BOOKINGS */}
      <div className="grid gap-6">

        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="bg-zinc-900/90 border border-zinc-800 hover:border-green-400/30 rounded-[32px] p-5 sm:p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]"
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              {/* INFO */}
              <div className="space-y-3">

                <h2 className="text-2xl sm:text-3xl font-black text-green-400">
                  {booking.name}
                </h2>

                <div className="flex flex-wrap gap-3 text-sm sm:text-base">

                  <div className="bg-black/30 border border-white/10 px-4 py-2 rounded-full">
                    📞 {booking.phone}
                  </div>

                  <div className="bg-black/30 border border-white/10 px-4 py-2 rounded-full">
                    🐎 {booking.horse}
                  </div>

                  <div className="bg-black/30 border border-white/10 px-4 py-2 rounded-full">
                    📅 {booking.date}
                  </div>

                  <div className="bg-black/30 border border-white/10 px-4 py-2 rounded-full">
                    ⏰ {booking.time}
                  </div>

                </div>

              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                <button
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 px-6 py-3 rounded-full font-bold transition duration-300"
                >
                  Confirm
                </button>

                <button
                  onClick={() => deleteBooking(booking.id)}
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-400 px-6 py-3 rounded-full font-bold transition duration-300"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>

  );
}