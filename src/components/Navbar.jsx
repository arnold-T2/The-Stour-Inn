import { useEffect, useState } from "react";
import Pint from "./Pint.jsx";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#employee", label: "Hall of Fame" },
  { href: "#visit", label: "Find Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Transparent while floating over the hero photo, solid once you scroll.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <Pint className="nav__pint" />
          <span className="nav__name">The Stour Inn</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#book" className="nav__cta" onClick={() => setOpen(false)}>
            Book a Table
          </a>
        </nav>
      </div>
    </header>
  );
}
