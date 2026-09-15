import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-paper">
      {/* CTA band */}
      <div className="relative border-t border-lineDark">
        <div className="dots-dark pointer-events-none absolute right-[10%] top-10 h-28 w-44 opacity-40" />
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] text-smoke"
          >
            <span className="h-[2px] w-10 bg-acid" />
            05 — CONTACT
          </motion.p>

          <a href="mailto:hello@protofilo.design" data-hover className="group mt-6 block">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
                className="font-display text-[13vw] leading-[0.92] md:text-[9vw]"
              >
                LET'S WORK
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE, delay: 0.12 }}
                className="font-display text-[13vw] leading-[0.92] md:text-[9vw]"
              >
                <span className="text-stroke text-paper transition-colors duration-500 group-hover:text-acid">
                  TOGETHER
                </span>
                <span className="ml-4 inline-flex h-[0.72em] w-[0.72em] items-center justify-center bg-acid align-baseline transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-[0.42em] w-[0.42em] text-ink" strokeWidth={2.5} />
                </span>
              </motion.h2>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="mt-14 grid gap-8 border-t border-lineDark pt-10 md:grid-cols-3"
          >
            {[
              { Icon: Mail, label: "EMAIL ME", value: "hello@protofilo.design" },
              { Icon: Phone, label: "CALL ME", value: "+971 50 123 4567" },
              { Icon: MapPin, label: "FIND ME", value: "Dubai, UAE — Worldwide" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-paper/20">
                  <Icon className="h-4 w-4 text-acid" />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-smoke">{label}</p>
                  <p className="mt-1.5 text-sm text-paper/85">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-lineDark">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12">
          <span className="font-display text-lg">
            PROTOFILO<span className="text-acid">.</span>
          </span>
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-hover
                className="link-sweep font-mono text-[10px] tracking-[0.25em] text-paper/50 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-smoke">
              © 2026 ABDULRAHMAN
            </p>
            <a
              href="#home"
              data-hover
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center bg-acid text-ink transition-transform duration-300 hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
