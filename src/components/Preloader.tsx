import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="dots-dark absolute inset-0 opacity-40" />
      <div className="relative overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] leading-none text-paper md:text-7xl"
        >
          PROTOFILO<span className="text-acid">.</span>
        </motion.p>
      </div>
      <div className="mt-8 flex w-56 items-center gap-4 md:w-72">
        <div className="h-[3px] flex-1 overflow-hidden bg-paper/15">
          <div className="h-full bg-acid transition-[width] duration-100" style={{ width: `${n}%` }} />
        </div>
        <span className="font-mono text-sm text-acid tabular-nums">{n}%</span>
      </div>
      <p className="mt-4 font-mono text-[10px] tracking-[0.35em] text-smoke">PORTFOLIO / 2026</p>
    </motion.div>
  );
}
