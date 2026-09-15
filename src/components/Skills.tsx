import { motion } from "framer-motion";
import { SKILLS } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="dots-light pointer-events-none absolute right-[6%] top-16 hidden h-28 w-44 opacity-70 lg:block" />
      <p className="text-stroke-thin pointer-events-none absolute -left-6 bottom-0 select-none font-display text-[16vw] leading-none text-ink/5">
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
              02 — WHAT I KNOW
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE }}
                className="mt-3 font-display text-[15vw] leading-[0.95] text-ink md:text-8xl lg:text-9xl"
              >
                SKILLS<span className="text-acid">.</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs text-sm leading-relaxed text-ink/60"
          >
            The tools and disciplines I rely on daily — measured, honest, still sharpening.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          {SKILLS.map((group, gi) => (
            <div key={group.title}>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: gi * 0.1 }}
                className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-smoke"
              >
                <span className="h-[2px] w-8 bg-acid" />
                {group.title}
              </motion.p>

              <div className="space-y-8">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: gi * 0.1 + i * 0.06 }}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg tracking-wide text-ink md:text-xl">
                        {skill.name}
                      </h3>
                      <span className="font-mono text-sm text-smoke">
                        {String(skill.level).padStart(2, "0")}%
                      </span>
                    </div>
                    <div className="relative mt-3 h-3 w-full overflow-hidden border border-line bg-bone">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, ease: EASE, delay: gi * 0.1 + i * 0.06 + 0.15 }}
                        style={{ transformOrigin: "left" }}
                        className="absolute inset-y-0 left-0 w-full bg-ink"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
