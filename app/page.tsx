"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/portfolio/HeroSection";

/**
 * Global section registry.
 * Used by the full-page right-side nav and active-section tracking.
 */
const sections = [
  { label: "Intro", id: "hero" },
  { label: "Journey", id: "journey" },
  { label: "Impact", id: "impact" },
  { label: "Work", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

function JourneySection() {
  return (
    <section
      id="journey"
      className="relative min-h-screen bg-[#06101d] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-cyan-300/70">JOURNEY</p>

        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          A story-driven path from
          <br />
          first experience to leadership.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          This section tells your experience like a cinematic timeline —
          starting from early work, moving through growth, and arriving at
          management and leadership.
        </p>
                {/* Cinematic journey line */}
        <div className="relative mt-14 min-h-[220px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="absolute left-8 right-8 top-24 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />

          <div className="absolute left-8 right-8 top-24 flex justify-between">
            {["Start", "Growth", "Leadership"].map((label) => (
              <div key={label} className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <motion.div
            className="absolute left-0 top-[58px] h-10 w-10 rounded-full bg-cyan-300/80 blur-md"
            animate={{ x: ["10%", "80%", "10%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute left-[10%] top-[42px] h-12 w-12 rounded-full bg-cyan-300/15 blur-2xl" />
          <div className="absolute right-[12%] top-[50px] h-16 w-16 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <div className="relative z-10 mt-24 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-cyan-300">Start</p>
              <p className="mt-3 leading-7 text-white/70">
                Learning how to work fast, stay calm, and serve people well.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-cyan-300">Growth</p>
              <p className="mt-3 leading-7 text-white/70">
                Taking on more operations responsibility, support, and structure.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-cyan-300">Leadership</p>
              <p className="mt-3 leading-7 text-white/70">
                Running teams, driving execution, and owning real business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const stats = [
    { value: "$216K+", label: "Monthly Revenue Supported" },
    { value: "15", label: "Team Led" },
    { value: "4.6/5", label: "Customer Rating" },
    { value: "20%", label: "Operating Margin" },
  ];

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#081321] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_26%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-cyan-300/70">IMPACT</p>

        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          Real signals of
          <br />
          performance and growth.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          These metrics act as proof of consistency, leadership, and business
          impact — helping the portfolio feel more credible and premium.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <p className="text-4xl font-bold tracking-tight md:text-5xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/45">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/10 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">
            Highlighted impact
          </p>
          <p className="mt-4 max-w-3xl text-2xl leading-10 text-cyan-50">
            Opened and operationalized a brand new location within 2 months
            while supporting team performance, customer experience, and business
            targets.
          </p>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const items = [
    {
      tag: "OPERATIONS",
      title: "Launching a new location fast",
      text: "Helped operationalize a brand new location within 2 months by supporting setup, coordination, execution, and day-to-day problem solving.",
    },
    {
      tag: "LEADERSHIP",
      title: "Driving stable business performance",
      text: "Supported revenue, team discipline, customer service quality, and cost awareness in a fast-paced environment.",
    },
    {
      tag: "CUSTOMER EXPERIENCE",
      title: "Building consistency through people",
      text: "Helped strengthen service quality through training, team support, and a community-first approach to operations.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07111e] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.12),transparent_25%),radial-gradient(circle_at_85%_65%,rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-cyan-300/70">WORK</p>

        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          Experience turned into
          <br />
          strong portfolio stories.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          Instead of filler projects, this section transforms real work
          experience into high-value story blocks.
        </p>

        <div className="mt-16 grid gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                {item.tag}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-5 max-w-3xl leading-8 text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "Operations Management",
    "Team Leadership",
    "Inventory Control",
    "Staff Scheduling",
    "Customer Experience",
    "Training & Coaching",
    "Problem Solving",
    "Adaptability",
    "Execution",
    "Workflow Coordination",
    "Cost Awareness",
    "Growth Support",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#08111b] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(192,132,252,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-cyan-300/70">SKILLS</p>

        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          The transferable strengths
          <br />
          behind the journey.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          These are the capabilities that make the portfolio feel broad enough
          for many roles while still grounded in real work.
        </p>

        <div className="mt-16 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-xl"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
              Education
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Diploma — Computer Programming
            </h3>
            <p className="mt-3 text-white/70">Seneca College</p>
            <p className="mt-1 text-sm text-white/45">2022 – 2025</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
              Certifications
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {["First Aid", "CPR", "AED"].map((cert) => (
                <div
                  key={cert}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050c15] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(89,177,255,0.12),transparent_26%),radial-gradient(circle_at_82%_15%,rgba(155,98,255,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-cyan-300/70">CONTACT</p>

        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          Let’s build the
          <br />
          next chapter together.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          Open to operations, leadership, retail, management, and
          customer-facing opportunities.
        </p>

        <div className="mt-12 grid gap-4 md:max-w-xl">
          <a
            href="mailto:rajeshas11111@gmail.com"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white backdrop-blur-xl transition hover:bg-white/10"
          >
            Email: rajeshas11111@gmail.com
          </a>

          <a
            href="tel:6476209243"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white backdrop-blur-xl transition hover:bg-white/10"
          >
            Phone: 647-620-9243
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
  };

  return (
  <main className="relative min-h-screen overflow-hidden bg-[#040b16] text-white">
      {/* Global right-side nav that stays visible across the full page */}
            {/* Global cinematic world background that changes with the active section */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            activeSection === "hero"
  ? "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.18),transparent_35%)]"
  : activeSection === "journey"
  ? "bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_85%_22%,rgba(96,165,250,0.18),transparent_28%),radial-gradient(circle_at_55%_80%,rgba(14,165,233,0.14),transparent_34%)]"
  : activeSection === "impact"
  ? "bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.24),transparent_28%),radial-gradient(circle_at_82%_60%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.14),transparent_34%)]"
  : activeSection === "projects"
  ? "bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.22),transparent_28%),radial-gradient(circle_at_88%_58%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_60%_88%,rgba(99,102,241,0.14),transparent_34%)]"
  : activeSection === "skills"
  ? "bg-[radial-gradient(circle_at_12%_40%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(192,132,252,0.2),transparent_28%),radial-gradient(circle_at_55%_82%,rgba(59,130,246,0.14),transparent_34%)]"
  : "bg-[radial-gradient(circle_at_20%_30%,rgba(89,177,255,0.22),transparent_28%),radial-gradient(circle_at_82%_15%,rgba(155,98,255,0.22),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(34,211,238,0.14),transparent_34%)]"
         }`}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px] opacity-20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(1,4,10,0.45)_100%)]" />
      </div>
      <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        {sections.map((item) => {
          const active = activeSection === item.id;

          return (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center justify-end gap-3"
            >
              <span
                className={`text-[10px] tracking-[0.28em] transition ${
                  active ? "text-cyan-300" : "text-white/45"
                }`}
              >
                {item.label.toUpperCase()}
              </span>

              <span
                className={`h-2.5 w-2.5 rounded-full border transition ${
                  active
                    ? "border-cyan-300 bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                    : "border-white/35"
                }`}
              />
            </button>
          );
        })}
      </div>

            <div className="relative z-10">
        <HeroSection />
        <JourneySection />
        <ImpactSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
