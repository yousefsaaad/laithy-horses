export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-10 py-6 bg-black text-white">
  
        <h1 className="text-3xl font-bold">
          Laithy 🐎
        </h1>
  
        <div className="flex gap-6 text-gray-300">
  
          <a href="#" className="hover:text-white transition">
            Home
          </a>
  
          <a href="#" className="hover:text-white transition">
            Horses
          </a>
  
          <a href="#" className="hover:text-white transition">
            Booking
          </a>
  
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
  
        </div>
  
      </nav>
    );
  }