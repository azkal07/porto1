import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="dots-dark pointer-events-none absolute left-[5%] top-20 h-32 w-48 opacity-50" />
      <p className="text-stroke-thin pointer-events-none absolute -right-6 top-8 select-none font-display text-[16vw] leading-none text-paper/10">
        SKILLS
      </p>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-mono text-xs tracking-[0.4em] text-smoke"
            >
              03 — WHAT I DO
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE }}
                className="mt-3 font-display text-[13vw] leading-[0.95] md:text-7xl lg:text-8xl"
              >
                SERVICES<span className="text-acid">/</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs text-sm leading-relaxed text-paper/50"
          >
            Four disciplines, one standard: sharp enough to cut through the noise of the feed.
          </motion.p>
        </div>

        <div className="mt-14 border-t border-lineDark">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="group relative cursor-pointer overflow-hidden border-b border-lineDark"
              data-hover
            >
              {/* acid wash on hover */}
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-acid transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

              <div className="relative grid items-center gap-4 py-8 transition-colors duration-300 group-hover:text-ink md:grid-cols-[90px_1fr_1.2fr_auto] md:gap-8 md:py-10">
                <span className="font-mono text-sm text-acid transition-colors duration-300 group-hover:text-ink">
                  /{s.n}
                </span>
                <h3 className="font-display text-3xl leading-none md:text-4xl lg:text-5xl">
                  {s.title}
                </h3>
                <div>
                  <p className="max-w-md text-sm leading-relaxed text-paper/50 transition-colors duration-300 group-hover:text-ink/70">
                    {s.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-paper/20 px-2.5 py-1 font-mono text-[9px] tracking-[0.2em] text-paper/50 transition-colors duration-300 group-hover:border-ink/30 group-hover:text-ink/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden h-14 w-14 items-center justify-center border border-paper/25 transition-all duration-300 group-hover:rotate-45 group-hover:border-ink md:flex">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
