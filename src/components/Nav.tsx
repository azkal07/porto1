import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          setActive(NAV_LINKS[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-stretch justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 bg-ink px-6 py-4 md:px-10 md:py-5"
            data-hover
          >
            <span className="font-display text-lg tracking-wide text-paper md:text-xl">
              PROTOFILO<span className="text-acid">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 px-10 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-hover
                className={`link-sweep font-mono text-[11px] font-bold tracking-[0.2em] transition-colors duration-300 ${
                  active === l.label ? "active text-acid" : "text-paper/80 hover:text-paper"
                } ${scrolled ? "text-paper/80" : ""}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              data-hover
              className="group ml-2 flex items-center gap-1.5 bg-acid px-5 py-2.5 font-mono text-[11px] font-bold tracking-[0.15em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              LET'S TALK
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-6 text-paper lg:hidden"
            aria-label="Open menu"
          >
            <span className="font-mono text-[10px] tracking-[0.3em]">MENU</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] flex flex-col bg-acid"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-lg text-ink">PROTOFILO.</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border-2 border-ink text-ink"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 border-b border-ink/15 py-4"
                >
                  <span className="font-mono text-xs text-ink/50">0{i + 1}</span>
                  <span className="font-display text-5xl text-ink transition-transform duration-300 group-hover:translate-x-3">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <p className="px-6 pb-8 font-mono text-[10px] tracking-[0.3em] text-ink/60">
              ABDULRAHMAN — UI DEVELOPER
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
