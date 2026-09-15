import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { IMAGES } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = {
  hidden: { y: "115%" },
  show: (d: number) => ({
    y: 0,
    transition: { duration: 1, ease: EASE, delay: d },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const panelX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden bg-ink">
      {/* right: portrait */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
          className="h-full w-full"
        >
          <motion.img
            src={IMAGES.hero}
            alt="Portrait of Abdulrahman"
            style={{ y: imgY, scale: 1.12 }}
            className="h-full w-full object-cover object-top grayscale contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent lg:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30 lg:from-transparent" />
        </motion.div>

        {/* available chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
          className="absolute right-6 top-24 flex items-center gap-2.5 border border-paper/25 bg-ink/60 px-4 py-2.5 backdrop-blur-sm md:right-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-paper">OPEN FOR WORK</span>
        </motion.div>
      </div>

      {/* left: dark type panel */}
      <motion.div style={{ x: panelX }} className="relative z-10 flex min-h-screen flex-col justify-end lg:w-[52%] lg:bg-ink">
        <div className="dots-dark pointer-events-none absolute left-8 top-28 hidden h-36 w-56 opacity-60 lg:block" />

        {/* spinning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: EASE }}
          className="absolute right-8 top-32 hidden h-28 w-28 items-center justify-center lg:flex"
        >
          <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
            <defs>
              <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-paper/70 font-mono text-[8.5px] tracking-[0.24em]">
              <textPath href="#circ">UI DEVELOPER • DESIGNER • UI DEVELOPER •</textPath>
            </text>
          </svg>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-acid">
            <ArrowDown className="h-4 w-4 text-ink" />
          </span>
        </motion.div>

        <div className="px-6 pb-10 pt-36 md:px-12 lg:pb-16 lg:pl-16 xl:pl-20">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.4em] text-paper/70"
          >
            <span className="h-[2px] w-10 bg-acid" />
            MY NAME IS
          </motion.p>

          <h1 className="font-display leading-[0.92] text-paper">
            <span className="block overflow-hidden">
              <motion.span variants={rise} initial="hidden" animate="show" custom={0.55} className="block text-[17vw] md:text-[13vw] lg:text-[7.6rem] xl:text-[8.6rem]">
                ABDUL—
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={rise} initial="hidden" animate="show" custom={0.68} className="text-stroke block text-[17vw] md:text-[13vw] lg:text-[7.6rem] xl:text-[8.6rem]">
                RAHMAN
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.05, duration: 0.8, ease: EASE }}
            className="mt-8 origin-left"
          >
            <a
              href="#works"
              data-hover
              className="group inline-flex items-center gap-3 bg-acid px-7 py-4 font-mono text-xs font-bold tracking-[0.25em] text-ink shadow-[10px_10px_0_rgba(233,255,47,0.22)] transition-all duration-300 hover:shadow-[4px_4px_0_rgba(233,255,47,0.35)]"
            >
              I'M A UI DEVELOPER
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-12 flex items-center gap-6 border-t border-paper/15 pt-6"
          >
            {["DRIBBBLE", "GITHUB", "BEHANCE"].map((s) => (
              <a
                key={s}
                href="#"
                data-hover
                className="link-sweep font-mono text-[10px] tracking-[0.25em] text-paper/50 transition-colors duration-300 hover:text-acid"
              >
                {s}
              </a>
            ))}
            <span className="ml-auto hidden font-mono text-[10px] tracking-[0.3em] text-paper/40 md:block">
              BASED IN DUBAI — WORLDWIDE
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* giant bottom word */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="pointer-events-none absolute -bottom-5 right-0 z-10 hidden select-none lg:block"
      >
        <p className="text-stroke-thin font-display text-[11vw] leading-none text-paper/25">PORTFOLIO</p>
      </motion.div>
    </section>
  );
}
