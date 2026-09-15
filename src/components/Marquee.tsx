import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "../data";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="strip-clip relative z-20 -mt-10 overflow-hidden bg-acid py-5 md:py-6">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap font-display text-2xl tracking-wide text-ink md:text-4xl">
                  {item}
                </span>
                <Asterisk className="mx-6 h-6 w-6 text-ink md:mx-8 md:h-8 md:w-8" strokeWidth={2.5} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
