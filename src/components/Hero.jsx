export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <p className="hero__eyebrow">Blandford St Mary &middot; Dorset</p>

        {/* Wordmark styled after the pub sign: blue panel, thin border,
            flourish, "FREEHOUSE" tracked out underneath. */}
        <h1 className="crest" aria-label="The Stour Inn — Freehouse">
          <span className="crest__the">The</span>
          <span className="crest__name">Stour Inn</span>
          <svg className="crest__swirl" viewBox="0 0 120 12" aria-hidden="true">
            <path
              d="M4 8 C 30 -2, 55 12, 78 6 S 112 2, 116 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="crest__sub">Freehouse</span>
        </h1>

        <p className="hero__tagline">Good beer, proper food, friendly faces.</p>
        <p className="hero__lead">
          A traditional free house on the banks of the River Stour — real ales,
          homemade food and a warm Dorset welcome.
        </p>

        <ul className="hero__badges" aria-label="What to expect">
          <li>Family Friendly</li>
          <li>Dog Friendly</li>
          <li>Beer Garden</li>
          <li>Real Ales</li>
          <li>Tia Approved</li>
        </ul>

        <div className="hero__actions">
          <a href="#book" className="btn btn--primary">
            Book a Table
          </a>
          <a href="#menu" className="btn btn--ghost">
            See the Menu
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
