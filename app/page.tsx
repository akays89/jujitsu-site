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

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-32 border-b border-white/10">
        <p className="text-[#1a56db] uppercase tracking-widest text-sm font-semibold mb-4">
          Black Belt | IBJJF Champion
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          Cesar Gonzalez <br /> Zamora
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-10">
          USAF Jiu-Jitsu Ambassador. Multiple IBJJF Open Champion. Pan Ams Gi
          Vice-Champion 2026. Training out of RP BJJ Boerne.
        </p>
        <div className="flex gap-4">
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
      </section>

      {/* ACHIEVEMENTS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border-b border-white/10">
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-4xl font-bold text-[#1a56db] mb-2">
            Multiple x
          </span>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            IBJJF Open Champion
          </span>
        </div>
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-4xl font-bold text-[#1a56db] mb-2">
            Vice-Champion
          </span>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            Pan Ams Gi 2026
          </span>
        </div>
        <div className="bg-black flex flex-col items-center justify-center py-16 px-8 text-center">
          <span className="text-4xl font-bold text-[#1a56db] mb-2">Bronze</span>
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
          insight to every session.
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
        <span>2025 Cesar Gonzalez Zamora</span>
        <div className="flex gap-6">
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
