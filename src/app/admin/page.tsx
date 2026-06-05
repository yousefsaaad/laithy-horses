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
    <main className="min-h-screen bg-black text-white p-6 sm:p-12">

      <h1 className="text-5xl font-black mb-10">
        Admin Dashboard 🐎
      </h1>

      <div className="grid gap-6">

        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div className="space-y-2">

                <h2 className="text-2xl font-bold text-green-400">
                  {booking.name}
                </h2>

                <p>📞 {booking.phone}</p>

                <p>🐎 {booking.horse}</p>

                <p>📅 {booking.date}</p>

                <p>⏰ {booking.time}</p>

              </div>

              <button
                onClick={() => deleteBooking(booking.id)}
                className="bg-red-500 hover:bg-red-400 px-5 py-3 rounded-full font-bold transition"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}