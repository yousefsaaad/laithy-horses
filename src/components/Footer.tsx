import {
    FaInstagram,
    FaWhatsapp,
    FaHeart,
  } from "react-icons/fa";
  
  export default function Footer() {
  
    return (
  
      <footer className="relative mt-24 border-t border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
  
        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-green-500/10 blur-[120px] rounded-full" />
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-12">
  
          {/* TOP */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
  
            {/* BRAND */}
            <div className="text-center md:text-left">
  
              <h2 className="text-3xl sm:text-4xl font-black mb-3">
                Laithy 🐎
              </h2>
  
              <p className="text-gray-400 max-w-md leading-relaxed">
                Luxury horseback riding experiences through Egypt’s most iconic destinations.
              </p>
  
            </div>
  
            {/* SOCIALS */}
            <div className="flex items-center gap-5">
  
              <a
                href="https://www.instagram.com/yousefsaaad_"
                target="_blank"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
  
              <a
                href="https://wa.me/201147120315"
                target="_blank"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:scale-110 transition duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
  
            </div>
  
          </div>
  
          {/* DIVIDER */}
          <div className="h-px bg-white/10 my-10" />
  
          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
  
            <p>
              © 2026 Laithy. All rights reserved.
            </p>
  
            <p className="flex items-center gap-2">
              Designed & Developed with
              <FaHeart className="text-red-500 animate-pulse" />
              by <span className="text-white font-semibold">Joy</span>
            </p>
  
          </div>
  
        </div>
  
      </footer>
  
    );
  }