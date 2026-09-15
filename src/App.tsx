import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="grain relative bg-paper">
      <Cursor />

      <AnimatePresence>{loading && <Preloader onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <>
          <Nav />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Works />
            <Services />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
