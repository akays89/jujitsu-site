import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Book() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />
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
            Train With a Champion
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{
              textShadow:
                "0 0 20px rgba(26, 86, 219, 1), 0 0 60px rgba(26, 86, 219, 0.8)",
            }}
          >
            Book a Session
          </h1>
          <p className="text-white/60 text-lg leading-8">
            Whether you are just starting out or preparing for competition,
            Cesar offers personalized training to help you reach your goals. All
            levels welcome.
          </p>
        </div>
      </section>
      <section className="px-6 sm:px-16 py-16 border-b border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Session Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Private Lesson",
              price: "$120",
              duration: "1 hour",
              desc: "One on one focused training tailored to your specific goals and skill level.",
              features: [
                "Personalized curriculum",
                "Technique drilling",
                "Live sparring",
                "Game plan development",
              ],
            },
            {
              title: "Semi-Private",
              price: "$80",
              duration: "1 hour per person",
              desc: "Train with a partner or small group for a more affordable session with personalized attention.",
              features: [
                "2-3 students max",
                "Partner drilling",
                "Group sparring",
                "Competitive strategy",
              ],
            },
            {
              title: "Seminar",
              price: "Contact for pricing",
              duration: "2-3 hours",
              desc: "Book Cesar for a seminar at your academy or event. Available for all belt levels.",
              features: [
                "Custom curriculum",
                "Q&A session",
                "Open mat",
                "Certificate of completion",
              ],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 bg-white/5 border border-[#1a56db]/30 rounded-2xl p-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-[#1a56db] text-2xl font-bold">
                  {item.price}
                </p>
                <p className="text-white/40 text-sm">{item.duration}</p>
              </div>
              <p className="text-white/60 text-sm leading-6">{item.desc}</p>
              <ul className="flex flex-col gap-2 mt-2">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <span className="text-[#1a56db]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 sm:px-16 py-16 border-b border-white/10">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Pick a Time</h2>
          <p className="text-white/60 text-lg leading-8">
            Click below to view available times and book your session. Payment
            is due via Venmo{" "}
            <span className="text-[#1a56db] font-semibold">
              @CesarGonzalezBJJ
            </span>{" "}
            before your session.
          </p>
          <a
            href="https://calendly.com/amandakays89"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a56db] hover:bg-[#1e40af] text-white px-12 py-4 rounded-full font-bold text-lg transition-colors"
          >
            View Available Times
          </a>
          <p className="text-white/40 text-sm">
            You will be redirected to Calendly to complete your booking.
          </p>
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
