"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black z-50">
      <Link
        href="/"
        className="text-sm sm:text-xl font-bold tracking-tight text-white"
      >
        Cesar Gonzalez Zamora
      </Link>

      {/* DESKTOP NAV */}
      <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link
          href="/"
          className={`hover:text-white transition-colors ${pathname === "/" ? "text-white font-semibold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-white transition-colors ${pathname === "/about" ? "text-white font-semibold" : ""}`}
        >
          About
        </Link>
        <Link
          href="/instructionals"
          className={`hover:text-white transition-colors ${pathname === "/instructionals" ? "text-white font-semibold" : ""}`}
        >
          Instructionals
        </Link>
        <Link
          href="/book"
          className="bg-[#1a56db] hover:bg-[#1e40af] text-white px-5 py-2 rounded-full transition-colors"
        >
          Book Now
        </Link>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="sm:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 flex flex-col px-6 py-4 gap-4 sm:hidden z-50">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium py-2 border-b border-white/10 ${pathname === "/" ? "text-white font-semibold" : "text-white/70"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium py-2 border-b border-white/10 ${pathname === "/about" ? "text-white font-semibold" : "text-white/70"}`}
          >
            About
          </Link>
          <Link
            href="/instructionals"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium py-2 border-b border-white/10 ${pathname === "/instructionals" ? "text-white font-semibold" : "text-white/70"}`}
          >
            Instructionals
          </Link>
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="bg-[#1a56db] hover:bg-[#1e40af] text-white px-5 py-3 rounded-full text-sm font-medium text-center transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
