"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {

    const saved = sessionStorage.getItem("admin-auth");

    if (saved === "true") {
      setAuthorized(true);
    }

  }, []);

  function handleLogin() {

    if (password === "laithy123") {

      sessionStorage.setItem("admin-auth", "true");

      setAuthorized(true);

    } else {

      alert("Wrong password ❌");

      router.push("/");

    }
  }

  if (!authorized) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">

        {/* GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full" />

        <div className="relative z-10 w-full max-w-md bg-zinc-900/90 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

          <p className="uppercase tracking-[6px] text-green-400 text-xs mb-3 text-center">
            Protected Area
          </p>

          <h1 className="text-4xl font-black text-center mb-3">
            Admin Login 🔐
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Enter the admin password to access the dashboard.
          </p>

          {/* INPUT */}
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-green-400 mb-5"
          />

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-2xl transition duration-300 hover:scale-[1.02]"
          >
            Access Dashboard
          </button>

        </div>

      </div>

    );
  }

  return (
    <>
      {children}
    </>
  );
}