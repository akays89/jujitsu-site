import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span className="text-xl font-bold tracking-tight text-white">
          Cesar Gonzalez Zamora
        </span>
        <div className="flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a
            href="/instructionals"
            className="hover:text-white transition-colors"
          >
            Instructionals
          </a>
          <a href="/book" className="hover:text-white transition-colors">
            Book a Session
          </a>
          <a
            href="/book"
            className="bg-[#1a56db] hover:bg-[#1e40af] text-white px-5 py-2 rounded-full transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO - SIDE BY SIDE */}
      <section className="flex flex-col-reverse sm:flex-row items-center justify-between px-8 sm:px-16 py-20 gap-12 border-b border-white/10">
        {/* LEFT - TEXT */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <p className="text-[#1a56db] uppercase tracking-widest text-sm font-semibold">
            Learn from Experience. Train with Purpose.
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Cesar Gonzalez <br /> Zamora
          </h1>
          <p className="text-white/60 text-lg leading-8">
            USAF Jiu-Jitsu Ambassador. Multiple IBJJF Open Champion. Pan Ams Gi
            Vice-Champion 2026. Training out of RP BJJ Boerne.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/book"
              className="bg-[#1a56db] hover:bg-[#1e40af] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Book a Session
            </a>
            <a
              href="/instructionals"
              className="border border-white/20 hover:border-white/50 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Instructionals
            </a>
          </div>
        </div>

        {/* RIGHT - PHOTO */}
        <div className="relative w-full sm:w-[420px] h-[500px] rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="/images/Cesar.JPG"
            alt="Cesar Gonzalez Zamora - BJJ Champion"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="grid grid-cols-1 sm:grid-cols-4 gap-px bg-white/10 border-b border-white/10">
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-3xl font-bold text-[#1a56db] mb-2">
            Ranked #1
          </span>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            IBJJF Gi & No-Gi
          </span>
        </div>
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-3xl font-bold text-[#1a56db] mb-2">
            Multiple x
          </span>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            IBJJF Open Champion
          </span>
        </div>
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-3xl font-bold text-[#1a56db] mb-2">
            Vice-Champion
          </span>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            Pan Ams Gi 2026
          </span>
        </div>
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-3xl font-bold text-[#1a56db] mb-2">Bronze</span>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            Pan Ams Gi & No-Gi 2024
          </span>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="flex flex-col items-center text-center px-8 py-24 border-b border-white/10">
        <h2 className="text-3xl font-bold mb-6">Train With a Champion</h2>
        <p className="text-white/60 max-w-2xl text-lg leading-8">
          Cesar Gonzalez Zamora is a competitive Brazilian Jiu-Jitsu athlete and
          USAF Jiu-Jitsu Ambassador competing with RP BJJ Boerne and sponsored
          by Gameness Sports. Whether you are looking to compete at the highest
          level or start your BJJ journey, Cesar brings championship-level
          insight to every session. All levels welcome.
        </p>
        <a
          href="/about"
          className="mt-8 text-[#1a56db] hover:underline font-medium"
        >
          Learn more
        </a>
      </section>

      {/* FOOTER */}
      <footer className="flex items-center justify-between px-8 py-6 text-white/40 text-sm">
        <span>2026 Cesar Gonzalez Zamora</span>
        <div className="flex gap-6">
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
