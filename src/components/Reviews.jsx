import { useEffect, useRef, useState } from "react";
import useInView from "../hooks/useInView.js";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.co.uk/Restaurant_Review-g4074775-d21208103-Reviews-The_Stour_Inn-Blandford_Saint_Mary_Blandford_Forum_Dorset_England.html";
const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=The+Stour+Inn+Blandford+St+Mary";

const REVIEWS = [
  {
    quote: "Would give it 10 stars if I could. Incredible manager.",
    author: "Tia (definitely not biased)",
  },
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
const MANUAL_PAUSE_MS = 3000; // arrow click holds off the auto-advance briefly

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const resumeTimer = useRef(null);
  // threshold 0.6 so the carousel waits until the section is substantially
  // in view (not just peeking in) before it starts moving off Tia's review.
  const [ref, inView] = useInView({ once: true, threshold: 0.6 });

  useEffect(() => {
    if (!inView) return undefined;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % REVIEWS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [inView]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const goTo = (i) => {
    setIndex(i);
    paused.current = true;
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, MANUAL_PAUSE_MS);
  };

  const prevIndex = (index - 1 + REVIEWS.length) % REVIEWS.length;
  const nextIndex = (index + 1) % REVIEWS.length;

  return (
    <section className="section section--cta reviews" id="reviews">
      <div
        className="container reviews__inner"
        ref={ref}
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
          <button
            type="button"
            className="review__arrow review__arrow--prev"
            aria-label="Previous review"
            onClick={() => goTo(prevIndex)}
          >
            &lsaquo;
          </button>
          <button
            type="button"
            className="review__arrow review__arrow--next"
            aria-label="Next review"
            onClick={() => goTo(nextIndex)}
          >
            &rsaquo;
          </button>
        </div>

        <div className="reviews__dots" role="tablist" aria-label="Reviews">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1}`}
              className={`reviews__dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="reviews__links">
          <a href={TRIPADVISOR_URL} target="_blank" rel="noreferrer">
            Read all 61 reviews on TripAdvisor →
          </a>
          <a href={GOOGLE_URL} target="_blank" rel="noreferrer">
            Find us on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
