export default function Footer() {
  return (

    <footer className="border-t border-zinc-800 mt-20 py-8 text-center text-gray-400">

      <p className="mb-2">
        © 2026 Laithy. All rights reserved.
      </p>

      <p>
        Designed & Developed by{" "}
        <span className="text-white font-semibold">
          Joy
        </span>
      </p>

      <div className="flex justify-center gap-6 mt-4">

        <a
          href="https://www.instagram.com/yousefsaaad_?igsh=NHRuNWVueDNuc3c0&utm_source=qr"
          target="_blank"
          className="hover:text-white transition"
        >
          Instagram
        </a>

        <a
          href="https://wa.me/201147120315"
          target="_blank"
          className="hover:text-white transition"
        >
          WhatsApp
        </a>

      </div>

    </footer>

  );
}