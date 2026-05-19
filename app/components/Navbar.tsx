"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
      <Link
        href="/"
        className="text-sm sm:text-xl font-bold tracking-tight text-white"
      >
        Cesar Gonzalez Zamora
      </Link>
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
      <Link
        href="/book"
        className="sm:hidden bg-[#1a56db] text-white px-4 py-2 rounded-full text-sm font-medium"
      >
        Book Now
      </Link>
    </nav>
  );
}
