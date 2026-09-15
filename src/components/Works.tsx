import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp, ArrowUpRight, Plus, Search } from "lucide-react";
import { FILTERS, WORKS, type Category, type Work } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;
const INITIAL_COUNT = 8;

function Tile({ work, index }: { work: Work; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.6, ease: EASE, delay: Math.min(index * 0.05, 0.35) }}
      className="work-tile group relative aspect-square cursor-pointer overflow-hidden bg-bone"
      data-hover
    >
      <img
        src={work.src}
        alt={work.title}
        loading="lazy"
        className="img-mono h-full w-full object-cover"
      />
      {/* index chip */}
      <span className="absolute left-4 top-4 bg-ink px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {String(work.id).padStart(2, "0")}
      </span>

      {/* hover panel */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-acid px-5 py-4 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] text-ink/60">
              {work.category} — {work.year}
            </p>
            <h3 className="mt-1 font-display text-xl leading-none text-ink md:text-2xl">
              {work.title}
            </h3>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink">
            <ArrowUpRight className="h-4 w-4 text-ink transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CtaTile() {
  return (
    <motion.a
      layout
      href="#contact"
      data-hover
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden bg-acid p-6 text-center"
    >
      <div className="dots-light absolute inset-4 opacity-40" />
      <span className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ink transition-transform duration-500 group-hover:rotate-90">
        <Search className="h-5 w-5 text-acid" />
      </span>
      <h3 className="relative font-display text-2xl leading-tight text-ink md:text-3xl">
        DESIGN
        <br />
        PROJECT
      </h3>
      <p className="relative mt-3 max-w-[190px] text-[11px] leading-relaxed text-ink/60">
        Got something in mind? Let's build the next tile in this grid together.
      </p>
      <span className="relative mt-4 inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.25em] text-ink">
        START ONE <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<Category>("ALL");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () => (filter === "ALL" ? WORKS : WORKS.filter((w) => w.category === filter)),
    [filter]
  );

  const visible = expanded ? filtered : filtered.slice(0, filter === "ALL" ? INITIAL_COUNT : 9);
  const showCta = filter === "ALL";
  const hasMore = filtered.length > visible.length;

  return (
    <section id="works" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="dots-light pointer-events-none absolute right-[6%] top-24 hidden h-32 w-52 lg:block" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* heading */}
        <div className="relative flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-xs tracking-[0.4em] text-smoke"
          >
            02 — SELECTED WORKS
          </motion.p>

          <div className="relative mt-2">
            <motion.svg
              initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              className="absolute -right-9 -top-4 md:-right-14 md:-top-6"
              width="54"
              height="54"
              viewBox="0 0 54 54"
            >
              <circle cx="27" cy="27" r="16" stroke="#e9ff2f" strokeWidth="9" fill="none" />
            </motion.svg>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE }}
                className="font-display text-[15vw] leading-[0.95] text-ink md:text-8xl lg:text-9xl"
              >
                MY WORK
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-1 font-sans text-sm italic text-smoke md:text-base"
          >
            — awesome projects, hand-picked —
          </motion.p>
        </div>

        {/* filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:mt-16"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setExpanded(false);
              }}
              data-hover
              className={`relative pb-1.5 font-mono text-[11px] font-bold tracking-[0.25em] transition-colors duration-300 ${
                filter === f ? "text-ink" : "text-smoke hover:text-ink"
              }`}
            >
              {f}
              {filter === f && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute inset-x-0 bottom-0 h-[3px] bg-acid"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.slice(0, showCta ? 4 : 9).map((w, i) => (
              <Tile key={w.id} work={w} index={i} />
            ))}
            {showCta && <CtaTile key="cta" />}
            {visible.slice(showCta ? 4 : 9).map((w, i) => (
              <Tile key={w.id} work={w} index={i + 5} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* load more */}
        <div className="mt-14 flex flex-col items-center gap-4">
          {hasMore ? (
            <button
              onClick={() => setExpanded(true)}
              data-hover
              className="group flex items-center gap-3 bg-ink px-9 py-4 font-mono text-[11px] font-bold tracking-[0.3em] text-paper transition-all duration-300 hover:shadow-[8px_8px_0_#e9ff2f]"
            >
              <Plus className="h-4 w-4 text-acid transition-transform duration-500 group-hover:rotate-180" />
              LOAD MORE
            </button>
          ) : (
            expanded && (
              <button
                onClick={() => setExpanded(false)}
                data-hover
                className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.3em] text-smoke transition-colors hover:text-ink"
              >
                SHOW LESS <ArrowUp className="h-3.5 w-3.5" />
              </button>
            )
          )}
          <p className="font-mono text-[10px] tracking-[0.25em] text-smoke">
            SHOWING {visible.length + (showCta ? 1 : 0)} / {filtered.length + (showCta ? 1 : 0)} PROJECTS
          </p>
        </div>
      </div>
    </section>
  );
}
