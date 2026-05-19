import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link
          href="/"
          className="text-sm sm:text-xl font-bold tracking-tight text-white"
        >
          Cesar Gonzalez Zamora
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="/about" className="text-white font-semibold">
            About
          </Link>
          <Link
            href="/instructionals"
            className="hover:text-white transition-colors"
          >
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

      {/* HERO */}
      <section className="relative px-6 sm:px-16 py-20 border-b border-white/10 overflow-hidden">
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
              "radial-gradient(ellipse at 30% 50%, rgba(26, 86, 219, 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div
            className="relative w-full sm:w-[340px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
            style={{
              boxShadow:
                "0 0 30px rgba(26, 86, 219, 0.5), 0 0 60px rgba(26, 86, 219, 0.2)",
              border: "1px solid rgba(26, 86, 219, 0.4)",
            }}
          >
            <Image
              src="/images/Cesar_2.jpg"
              alt="Cesar Gonzalez Zamora"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-[#1a56db] uppercase tracking-widest text-xs sm:text-sm font-semibold">
              About Cesar
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
              style={{
                textShadow:
                  "0 0 20px rgba(26, 86, 219, 1), 0 0 60px rgba(26, 86, 219, 0.8)",
              }}
            >
              Cesar Gonzalez Zamora
            </h1>
            <p className="text-white/60 text-lg leading-8">
              Cesar Gonzalez Zamora is a dedicated Brazilian Jiu-Jitsu
              competitor and instructor based in San Antonio, Texas. With years
              of hard work on the mats, Cesar has built a reputation as one of
              the most technically sharp and mentally resilient competitors in
              his division.
            </p>
            <p className="text-white/60 text-lg leading-8">
              Training out of RP BJJ Boerne under the guidance of Rodrigo
              Pinheiro, Cesar has developed a well-rounded game that combines
              technical precision with strategic awareness. His passion for the
              gentle art drives him to compete at the highest levels while also
              giving back through private instruction and seminars.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 sm:px-16 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl font-bold">The Journey</h2>
          <p className="text-white/60 text-lg leading-8">
            Cesar's journey in Brazilian Jiu-Jitsu began over a decade ago when
            he first stepped onto the mats looking for a challenge. What started
            as curiosity quickly became a lifelong passion. Through countless
            hours of drilling, sparring, and competing, Cesar transformed
            himself into one of the most decorated brown belts in his region.
          </p>
          <p className="text-white/60 text-lg leading-8">
            His competitive career has taken him across the country, competing
            in some of the most prestigious tournaments in the sport including
            the IBJJF Pan American Championships, IBJJF Opens, and the Jiu Jitsu
            World League. Each competition has sharpened his skills and deepened
            his love for the sport.
          </p>
          <p className="text-white/60 text-lg leading-8">
            Off the mats, Cesar is committed to growing the BJJ community in San
            Antonio. As a USAF Jiu-Jitsu Ambassador, he works to promote the
            sport and its values of discipline, respect, and continuous
            improvement to athletes of all levels.
          </p>
        </div>
      </section>

      {/* COMPETITION RECORD */}
      <section className="px-6 sm:px-16 py-16 sm:py-24 border-b border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Competition Highlights
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {[
            {
              year: "2026",
              event: "IBJJF Pan American Championship",
              result: "Gi Vice-Champion",
            },
            {
              year: "2024",
              event: "IBJJF Pan American Championship",
              result: "Gi & No-Gi Bronze",
            },
            {
              year: "2024",
              event: "JJ World League Dallas XIV",
              result: "Gold Medal",
            },
            {
              year: "2023",
              event: "IBJJF Open Championship",
              result: "Gold Medal",
            },
            {
              year: "2023",
              event: "IBJJF Open Championship",
              result: "Gold Medal",
            },
            {
              year: "2022",
              event: "IBJJF Open Championship",
              result: "Gold Medal",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-xl"
            >
              <div className="flex items-center gap-6">
                <span className="text-[#1a56db] font-bold text-sm w-12">
                  {item.year}
                </span>
                <span className="text-white/80">{item.event}</span>
              </div>
              <span className="text-[#1a56db] font-semibold text-sm">
                {item.result}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section className="px-6 sm:px-16 py-16 border-b border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Affiliations & Sponsors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              name: "RP BJJ Boerne",
              desc: "Home academy under Rodrigo Pinheiro Brazilian Jiu-Jitsu",
              href: "https://rodrigopinheirobjj.com",
            },
            {
              name: "Gameness Sports",
              desc: "Official gi and gear sponsor",
              href: "https://gameness.com",
            },
            {
              name: "1st Phorm",
              desc: "Official nutrition and supplement sponsor",
              href: "https://1stphorm.com",
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 bg-white/5 border border-[#1a56db]/30 rounded-2xl p-6 hover:border-[#1a56db] transition-colors"
            >
              <h3 className="text-lg font-bold text-white">{item.name}</h3>
              <p className="text-white/60 text-sm leading-6">{item.desc}</p>
            </a>
          ))}
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
