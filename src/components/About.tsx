import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { IMAGES } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { n: "06+", label: "YEARS EXPERIENCE" },
  { n: "120+", label: "PROJECTS SHIPPED" },
  { n: "34", label: "HAPPY CLIENTS" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="dots-light pointer-events-none absolute bottom-24 left-[8%] hidden h-28 w-44 opacity-70 lg:block" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        {/* portrait cluster */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="absolute -left-5 -top-5 h-full w-full bg-ink lg:-left-8 lg:-top-8" />
          <div className="dots-dark absolute -left-5 -top-5 h-full w-full lg:-left-8 lg:-top-8" />

          <div className="group relative overflow-hidden border-4 border-paper">
            <img
              src={IMAGES.about}
              alt="Abdulrahman holding a camera"
              className="img-mono aspect-[4/5] w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>

          {/* ring ornament */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute -right-10 -top-10 hidden md:block"
          >
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
              <circle cx="48" cy="48" r="26" stroke="#e9ff2f" strokeWidth="9" />
              <circle cx="14" cy="48" r="4" fill="#0b0b0b" />
            </svg>
          </motion.div>

          <div className="absolute -bottom-7 right-6 bg-acid px-5 py-3">
            <p className="font-display text-2xl text-ink">
              06<span className="text-sm">YRS</span>
            </p>
          </div>
        </motion.div>

        {/* copy */}
        <div className="relative">
          {/* zigzag ornament */}
          <motion.svg
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="absolute -top-10 right-0 hidden text-smoke md:block"
            width="150"
            height="36"
            viewBox="0 0 150 36"
          >
            {[0, 1, 2].map((r) => (
              <path
                key={r}
                d={`M0 ${8 + r * 10} l15 -7 15 7 15 -7 15 7 15 -7 15 7 15 -7 15 7 15 -7 15 7`}
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </motion.svg>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-xs tracking-[0.4em] text-smoke"
          >
            01 — WHO AM I
          </motion.p>

          <div className="mt-4 overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="font-display text-[18vw] leading-[0.9] text-ink md:text-8xl lg:text-9xl"
            >
              HELLO<span className="text-acid">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-ink/70 md:text-base"
          >
            <p>
              I am a <span className="bg-ink px-1.5 py-0.5 text-paper">UI developer</span> obsessed
              with the space where design meets code. For six years I've turned raw ideas into
              interfaces that feel sharp, fast and unmistakably alive.
            </p>
            <p>
              My rule is simple: black, white, and one loud color — everything else is noise.
              I build design systems, ship production React, and sweat every last transition
              until the motion feels like physics, not decoration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line"
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-4 py-6 first:pl-0 md:px-6">
                <p className="font-display text-3xl text-ink md:text-5xl">{s.n}</p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-smoke md:text-[10px]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            href="#contact"
            data-hover
            className="group mt-10 inline-flex items-center gap-3 border-2 border-ink px-7 py-4 font-mono text-xs font-bold tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-ink hover:text-acid"
          >
            <Download className="h-4 w-4" />
            DOWNLOAD CV
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
