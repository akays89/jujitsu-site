import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { GiBlackBelt, GiTrophy, GiBrain } from "react-icons/gi";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      {/* TICKER */}
      <div className="overflow-hidden bg-[#1a56db] py-4 border-y border-white/20">
        <div
          style={{
            animation: "ticker 20s linear infinite",
            display: "flex",
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "0 2rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "white",
              }}
            >
              <span>Private Lessons Available</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>All Levels Welcome</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>Online & In Person</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>Seminars Available</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>Competition Coaching</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>Flexible Scheduling</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>Book Today</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span>Results Driven Training</span>
              <span style={{ opacity: 0.4 }}>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative flex flex-col sm:flex-row items-center justify-center px-6 sm:px-16 gap-2 sm:gap-16 border-b border-white/10 overflow-hidden py-12">
        {/* BACKGROUND GRID TEXTURE */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26, 86, 219, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 86, 219, 0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* BACKGROUND GLOW */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 40% 50%, rgba(26, 86, 219, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* TEXT */}
        <div className="flex flex-col items-start justify-center gap-6 max-w-lg w-full z-10 py-12 sm:py-0">
          <p className="text-[#1a56db] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Learn from Experience. Train with Purpose.
          </p>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
            style={{
              textShadow:
                "0 0 20px rgba(26, 86, 219, 1), 0 0 60px rgba(26, 86, 219, 0.8), 0 0 100px rgba(26, 86, 219, 0.5)",
            }}
          >
            Cesar Gonzalez Zamora
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-8">
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
          </div>
        </div>

        {/* PHOTO */}
        <div
          className="relative w-full sm:w-[420px] h-[350px] sm:h-[580px] rounded-2xl overflow-hidden flex-shrink-0 z-10"
          style={{
            boxShadow:
              "0 0 30px rgba(26, 86, 219, 0.5), 0 0 60px rgba(26, 86, 219, 0.2)",
            border: "1px solid rgba(26, 86, 219, 0.4)",
          }}
        >
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
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border-b border-white/10">
        {[
          { stat: "Ranked #1", label: "IBJJF Gi & No-Gi" },
          { stat: "Multiple x", label: "IBJJF Open Champion" },
          { stat: "Vice-Champion", label: "Pan Ams Gi 2026" },
          { stat: "Bronze", label: "Pan Ams Gi & No-Gi 2024" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#080808] flex flex-col items-center justify-center py-10 sm:py-16 px-4 text-center"
          >
            <span className="text-2xl sm:text-3xl font-bold text-[#1a56db] mb-2">
              {item.stat}
            </span>
            <span className="text-white/60 text-xs uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </section>

      {/* ICON CARDS */}
      <section className="px-6 sm:px-16 py-16 sm:py-24 border-b border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          What You Will Learn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <GiBlackBelt className="text-4xl text-[#1a56db]" />,
              title: "Technique",
              desc: "Learn precise, proven techniques that work at every level — from beginner to competitor.",
            },
            {
              icon: <GiBrain className="text-4xl text-[#1a56db]" />,
              title: "Strategy",
              desc: "Develop smart game plans and positional awareness to outthink your opponent.",
            },
            {
              icon: <GiTrophy className="text-4xl text-[#1a56db]" />,
              title: "Confidence",
              desc: "Build the mindset and resilience to perform your best when it matters most.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 bg-white/5 border border-[#1a56db]/30 rounded-2xl p-8 transition-colors"
            >
              {card.icon}
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-white/60 leading-7">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="px-6 sm:px-16 py-16 border-b border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          On The Mat
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="relative h-[300px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/Cesar_5.jpg"
              alt="Cesar competing on the mat"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "20% center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs font-medium text-white/80 uppercase tracking-widest">
              In Action
            </p>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/Cesar_4.jpg"
              alt="Cesar hand raised at competition"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs font-medium text-white/80 uppercase tracking-widest">
              Victory
            </p>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/Cesar_3.jpg"
              alt="Cesar on the podium at Dallas World League"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "center 60%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs font-medium text-white/80 uppercase tracking-widest">
              JJ World League Dallas
            </p>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/Cesar_1.jpg"
              alt="Cesar at Pan Jiu-Jitsu Championship 2026"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs font-medium text-white/80 uppercase tracking-widest">
              Pan Jiu-Jitsu 2026
            </p>
          </div>
        </div>
      </section>

      {/* SPONSOR STRIP */}
      <section className="flex flex-col items-center px-6 py-12 border-b border-white/10 gap-8">
        <p className="text-white/40 uppercase tracking-widest text-xs">
          Partners & Affiliations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <a
            href="https://gameness.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-12 w-40 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/gameness.png"
              alt="Gameness Sports"
              fill
              className="object-contain invert"
            />
          </a>
          <a
            href="https://rodrigopinheirobjj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-24 w-24 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/RPBJJ.png"
              alt="RP BJJ Boerne"
              fill
              className="object-contain"
            />
          </a>
          <a
            href="https://1stphorm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-28 w-28 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/1stphorm.png"
              alt="1st Phorm"
              fill
              className="object-contain"
            />
          </a>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="relative px-6 sm:px-16 py-16 sm:py-24 border-b border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-white/70 text-lg">
              All levels welcome. Flexible scheduling. Results driven.
            </p>
          </div>
          <a
            href="/book"
            className="flex-shrink-0 bg-white text-[#1a56db] hover:bg-white/90 px-10 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
