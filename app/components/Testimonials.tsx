"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Training with Cesar completely changed my game. His attention to detail and ability to break down complex techniques is unmatched. I went from getting tapped constantly to placing at my first IBJJF tournament.",
    name: "Marcus T.",
    title: "Blue Belt Competitor",
  },
  {
    quote:
      "Cesar is the real deal. Not only is he an elite competitor but he genuinely cares about his students. My guard retention improved more in two sessions with him than in a year of regular training.",
    name: "Diego R.",
    title: "Purple Belt",
  },
  {
    quote:
      "I booked a seminar with Cesar for our academy and it was one of the best decisions we made. The whole team learned so much. He is professional, knowledgeable and incredibly motivating.",
    name: "Coach Mike S.",
    title: "Academy Owner",
  },
  {
    quote:
      "As a complete beginner I was nervous about private lessons but Cesar made me feel welcome from day one. He meets you where you are and builds you up. Highly recommend for any level.",
    name: "Sarah L.",
    title: "White Belt",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 sm:px-16 py-16 sm:py-24 border-b border-white/10 bg-[#050505]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        What People Are Saying
      </h2>
      <p className="text-white/40 text-center text-sm mb-12 uppercase tracking-widest">
        Student testimonials
      </p>
      <div className="max-w-3xl mx-auto">
        <div
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <p className="text-white/80 text-lg sm:text-xl leading-9 italic">
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="text-white font-bold">
              {testimonials[current].name}
            </span>
            <span className="text-[#1a56db] text-sm uppercase tracking-widest">
              {testimonials[current].title}
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setVisible(false);
                  setTimeout(() => {
                    setCurrent(i);
                    setVisible(true);
                  }, 500);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#1a56db]" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
