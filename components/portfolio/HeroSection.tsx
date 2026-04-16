"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Hero-only section.
 * This file should NOT manage the global side nav state.
 * It only renders:
 * - background particles
 * - top nav
 * - moving light sweep
 * - hero text
 * - orb card
 */
export default function HeroSection() {
  const topNavItems = [
    { label: "Intro", id: "hero" },
    { label: "Journey", id: "journey" },
    { label: "Impact", id: "impact" },
    { label: "Work", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  /** Smooth scroll helper for hero top nav */
  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#040b16] text-white"
    >
      {/* Ambient hero glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(80,160,255,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(180,100,255,0.2),transparent_40%)]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Floating star particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
            initial={{
              opacity: 0.15 + (i % 5) * 0.1,
              y: 0,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2.5 + (i % 7),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
            style={{
              top: `${(i * 13) % 100}%`,
              left: `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Top nav */}
      <header className="fixed left-1/2 top-5 z-50 w-[95%] max-w-6xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-white/50">
              FUTURISTIC PORTFOLIO
            </p>
            <p className="text-sm font-semibold">Rajesh Sah</p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            {topNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="rounded-full bg-white/10 px-4 py-2 text-sm">
            Menu
          </button>
        </div>
      </header>

      {/* Cinematic light sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[-20%] z-[1] w-[40%] bg-gradient-to-r from-transparent via-white/6 to-transparent blur-3xl"
        animate={{ x: ["0%", "220%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-40 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.4em] text-cyan-300/70">
            FUTURE-READY PORTFOLIO
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl xl:text-[6rem]"
          >
            A futuristic <br />
            story experience <br />
            built around <br />
            leadership
          </motion.h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Adaptable and results-driven operations and team leadership
            professional with experience across customer service, supervision,
            scheduling, inventory, and high-volume execution.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => scrollToSection("journey")}
              className="rounded-full bg-white px-6 py-3 font-medium text-black"
            >
              Start Experience
            </button>

            <button className="rounded-full border border-white/20 px-6 py-3">
              Resume
            </button>
          </div>
        </div>

        {/* Orb card */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.12),transparent_55%)]" />

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.04, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative mx-auto aspect-square w-full max-w-[360px]"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(145,220,255,0.9),rgba(52,122,255,0.22)_32%,transparent_62%)] blur-[2px]" />
              <div className="absolute inset-[12%] rounded-full border border-cyan-200/25" />
              <div className="absolute inset-[22%] rounded-full border border-fuchsia-300/15" />
              <div className="absolute inset-[30%] rounded-full border border-cyan-100/20" />
              <div className="absolute inset-[37%] rounded-full bg-cyan-200/70 blur-xl" />
              <div className="absolute inset-[42%] rounded-full border border-cyan-100/35 bg-[#071120] shadow-[0_0_50px_rgba(130,220,255,0.18)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


