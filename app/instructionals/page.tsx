import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Instructionals() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link
          href="/"
          className="text-sm sm:text-xl font-bold tracking-tight text-white"
        >
          Cesar Gonzalez Zamora
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/instructionals" className="text-white font-semibold">
            Instructionals
          </Link>
          <Link href="/book" className="hover:text-white transition-colors">
            Book a Session
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
      <section className="relative px-6 sm:px-16 py-16 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26, 86, 219, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 86, 219, 0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(26, 86, 219, 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#1a56db] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-4">
            Learn From a Champion
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{
              textShadow:
                "0 0 20px rgba(26, 86, 219, 1), 0 0 60px rgba(26, 86, 219, 0.8)",
            }}
          >
            Instructionals
          </h1>
          <p className="text-white/60 text-lg leading-8">
            Study the techniques and strategies that have taken Cesar to the top
            of the podium. Available for all levels.
          </p>
        </div>
      </section>
      <section className="px-6 sm:px-16 py-16 border-b border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Available Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Guard Retention Masterclass",
              desc: "Learn the guard retention system that has kept Cesar on top in IBJJF competition. Covers frames, hip movement, and recovery.",
              price: "$47",
              level: "All Levels",
              duration: "2.5 hours",
            },
            {
              title: "Back Take System",
              desc: "A complete system for taking and finishing from the back. Covers entries, body lock, and finishing sequences.",
              price: "$47",
              level: "Intermediate",
              duration: "2 hours",
            },
            {
              title: "Competition Game Plan",
              desc: "How to build a competition game plan from scratch. Covers bracket strategy, energy management, and mental preparation.",
              price: "$37",
              level: "All Levels",
              duration: "1.5 hours",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 bg-white/5 border border-[#1a56db]/30 rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/Cesar_5.jpg"
                  alt="Instructional preview"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "20% center" }}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[#1a56db]/20 text-[#1a56db] px-3 py-1 rounded-full">
                    {item.level}
                  </span>
                  <span className="text-xs text-white/40">{item.duration}</span>
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-white/60 text-sm leading-6">{item.desc}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#1a56db] text-2xl font-bold">
                    {item.price}
                  </span>
                  <a
                    href="#"
                    className="bg-[#1a56db] hover:bg-[#1e40af] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="relative px-6 sm:px-16 py-16 border-b border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%)",
        }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Want Personalized Coaching?
            </h2>
            <p className="text-white/70 text-lg">
              Book a private session and get direct feedback from Cesar himself.
            </p>
          </div>
          <Link
            href="/book"
            className="flex-shrink-0 bg-white text-[#1a56db] hover:bg-white/90 px-10 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </section>
      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-6 text-white/40 text-sm gap-4">
        <span>2026 Cesar Gonzalez Zamora</span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/acai_bolo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/cesar.i.zamora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/user/drizzlybadboy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/rpbjj_boerne"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            RP BJJ Boerne
          </a>
          <a
            href="https://www.instagram.com/gameness_sports"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Gameness Sports
          </a>
        </div>
      </footer>
    </main>
  );
}
