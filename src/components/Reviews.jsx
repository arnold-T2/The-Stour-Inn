import { useEffect, useRef, useState } from "react";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.co.uk/Restaurant_Review-g4074775-d21208103-Reviews-The_Stour_Inn-Blandford_Saint_Mary_Blandford_Forum_Dorset_England.html";

const REVIEWS = [
  {
    quote:
      "Fabulous atmosphere, superb food — the chef even came out to check we were happy.",
    author: "Lynda M",
  },
  {
    quote:
      "The chef Adam's food is amazing. Beautifully presented and the service is personal.",
    author: "Enid H",
  },
  {
    quote:
      "Lovely 'olde worlde' country pub with a beer garden. Dog friendly, great veggie options.",
    author: "TripAdvisor reviewer",
  },
  {
    quote:
      "The food was fantastic! Lovely friendly staff, couldn't be more helpful.",
    author: "TripAdvisor reviewer",
  },
];

const ROTATE_MS = 5500;

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % REVIEWS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section section--cta reviews" id="reviews">
      <div
        className="container reviews__inner"
        onPointerEnter={() => (paused.current = true)}
        onPointerLeave={() => (paused.current = false)}
      >
        <p className="section__eyebrow section__eyebrow--light">
          Word of mouth
        </p>
        <h2 className="reviews__title">Don&apos;t Take Our Word for It</h2>

        <div
          className="reviews__stars"
          aria-label="Rated 4.4 out of 5 on TripAdvisor"
        >
          <span aria-hidden="true">★★★★</span>
          <span className="reviews__half" aria-hidden="true">
            ★
          </span>
          <strong>4.4 / 5</strong> on TripAdvisor
        </div>

        <div className="reviews__stage">
          {REVIEWS.map((r, i) => (
            <blockquote
              className={`review ${i === index ? "is-current" : ""}`}
              key={r.author + i}
            >
              <p className="review__quote">&ldquo;{r.quote}&rdquo;</p>
              <footer className="review__author">— {r.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="reviews__dots" role="tablist" aria-label="Reviews">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1}`}
              className={`reviews__dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <a
          className="reviews__link"
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noreferrer"
        >
          Read all 61 reviews on TripAdvisor →
        </a>
      </div>
    </section>
  );
}
