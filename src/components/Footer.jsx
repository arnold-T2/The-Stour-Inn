import { useEffect, useState } from "react";
import Pint from "./Pint.jsx";

export default function Footer() {
  // Floating back-to-top button, appears once you're past the hero.
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Pint className="footer__pint" />
          <span className="footer__name">The Stour Inn</span>
          <p className="footer__tag">Good beer, proper food, friendly faces.</p>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+441258453888">01258 453888</a>
          <span>5 Dorchester Hill, Blandford St Mary, DT11 9LH</span>
          <a
            href="https://www.instagram.com/thestourinn_blandford/"
            target="_blank"
            rel="noreferrer"
          >
            @thestourinn_blandford
          </a>
        </div>

        <div className="footer__col">
          <h4>The essentials</h4>
          <span>Family friendly &middot; Dog friendly</span>
          <span>Beer garden &middot; Real ales</span>
          <span>Freddos still 39p</span>
        </div>
      </div>

      <div className="footer__bar container">
        <span>
          &copy; {new Date().getFullYear()} The Stour Inn, Blandford St Mary
        </span>
        <span>
          Built with love by the Employee of the Month&apos;s biggest fan
        </span>
      </div>

      <a
        href="#top"
        className={`to-top ${showTop ? "is-visible" : ""}`}
        aria-label="Back to top"
      >
        ↑
      </a>
    </footer>
  );
}
