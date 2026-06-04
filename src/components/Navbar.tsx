export default function Navbar() {

    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    };
  
    return (
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-black/30 backdrop-blur-md text-white">
  
        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-3xl font-bold cursor-pointer"
        >
          Laithy 🐎
        </h1>
  
        {/* LINKS */}
        <div className="flex gap-6 text-gray-300">
  
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-white transition"
          >
            Home
          </button>
  
          <button
            onClick={() => scrollToSection("horses")}
            className="hover:text-white transition"
          >
            Horses
          </button>
  
          <button
            onClick={() => scrollToSection("booking")}
            className="hover:text-white transition"
          >
            Booking
          </button>
  
        </div>
  
      </nav>
    );
  }