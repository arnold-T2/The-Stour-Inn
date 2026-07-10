import { useCallback, useEffect, useRef, useState } from "react";
import useInView from "../hooks/useInView.js";

// Every month the votes are counted, and every month — by sheer coincidence —
// it's Tia. The awards below are 100% real and legally binding.
const WINNERS = [
  {
    month: "July 2026",
    img: "/eom/watermelon.jpeg",
    title: "Watermelon Quality Control",
    citation: [
      "Personally vetted every melon in Dorset.",
      "None were aesthetically pleasing enough for the menu.",
    ],
  },
  {
    month: "June 2026",
    img: "/eom/upsidedown.jpeg",
    title: "Innovative Working Posture",
    citation: ["Redefined “flat out”."],
  },
  {
    month: "May 2026",
    img: "/eom/plant.jpeg",
    title: "Beer Garden Procurement",
    citation: [
      "Got lonely behind the bar, so bought a plant.",
      "Promoted it to assistant manager.",
    ],
  },
  {
    month: "April 2026",
    img: "/eom/poncho.jpeg",
    title: "Cellar Leak Investigation",
    citation: [
      "Went above and beyond investigating a leak in the cellar.",
      "The leak won. Awarded for bravery.",
    ],
  },
  {
    month: "March 2026",
    img: "/eom/trolley.jpeg",
    title: "Cash & Carry Run",
    citation: [
      "Sent for stock. Came back with flowers.",
      "Zero items from the actual list were acquired.",
    ],
  },
  {
    month: "February 2026",
    img: "/eom/sword.jpeg",
    title: "Conflict Resolution",
    citation: [
      "Dealt with a rude customer using elite de-escalation techniques.",
      "The customer never returned.",
    ],
  },
  {
    month: "January 2026",
    img: "/eom/nap.jpeg",
    title: "Recovery Siestas",
    citation: [
      "Spent all of January recovering from December.",
      "This nap was the halfway point.",
    ],
  },
  {
    month: "December 2025",
    img: "/eom/backpack.jpeg",
    title: "Retention Success Story",
    citation: [
      "Worked flat out through our busiest month.",
      "Tried to run away.",
      "Remembered we're her home.",
    ],
  },
  {
    month: "November 2025",
    img: "/eom/gym.jpeg",
    title: "Barrel-Lifting Fitness Plan",
    citation: [
      "Started training to lift a full beer barrel unassisted.",
      "Still quite a way off.",
    ],
  },
  {
    month: "October 2025",
    img: "/eom/baking.jpeg",
    title: "In-House Bakery Trial",
    citation: [
      "Volunteered to bake for the pub.",
      "Ate everything before it reached the counter.",
    ],
  },
];

const ROTATE_MS = 6000;
const MANUAL_HOLD_MS = 3000; // clicking a month pauses the auto-cycle for a bit

export default function Employee() {
  const [index, setIndex] = useState(0);
  const [ref, inView] = useInView({ once: true, threshold: 0.15 });
  const pausedUntil = useRef(0);

  useEffect(() => {
    if (!inView) return undefined;
    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setIndex((i) => (i + 1) % WINNERS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [inView]);

  const pick = useCallback((i) => {
    setIndex(i);
    pausedUntil.current = Date.now() + MANUAL_HOLD_MS;
  }, []);

  const winner = WINNERS[index];
  const prevIndex = (index - 1 + WINNERS.length) % WINNERS.length;
  const nextIndex = (index + 1) % WINNERS.length;

  return (
    <section className="section employee" id="employee">
      <div className={`container ${inView ? "is-in" : ""}`} ref={ref}>
        <p className="section__eyebrow">Hall of fame</p>
        <h2 className="section__title">Employee of the Month</h2>
        <p className="section__lead">
          Voted for anonymously and counted independently by the manager.
          <br />
          The manager is Tia...
        </p>

        <div className="employee__inner">
          {/* The plaque: gold frame, brass plate, shine sweep. */}
          <figure className="plaque" key={winner.month}>
            <div className="plaque__frame">
              <img
                src={winner.img}
                alt={`Tia — Employee of the Month, ${winner.month}`}
              />
              <span className="plaque__shine" aria-hidden="true" />
              <button
                type="button"
                className="plaque__arrow plaque__arrow--prev"
                aria-label={`Previous month: ${WINNERS[prevIndex].month}`}
                onClick={() => pick(prevIndex)}
              >
                &lsaquo;
              </button>
              <button
                type="button"
                className="plaque__arrow plaque__arrow--next"
                aria-label={`Next month: ${WINNERS[nextIndex].month}`}
                onClick={() => pick(nextIndex)}
              >
                &rsaquo;
              </button>
            </div>
            <figcaption className="plaque__plate">
              <span className="plaque__month">{winner.month}</span>
              <span className="plaque__winner">Tia</span>
              <span className="plaque__award">{winner.title}</span>
            </figcaption>
          </figure>

          <div className="employee__detail">
            <p className="employee__streak">
              🏆 {WINNERS.length} consecutive wins &mdash; a Stour Inn record
            </p>
            <p className="employee__citation" key={`citation-${winner.month}`}>
              {winner.citation.map((line, i) => (
                <span className="employee__citation-line" key={i}>
                  {line}
                </span>
              ))}
            </p>

            <div
              className="employee__months"
              role="tablist"
              aria-label="Past winners — hover or tap a month to reveal the photo"
            >
              {WINNERS.map((w, i) => {
                const [monthName, year] = w.month.split(" ");
                return (
                  <button
                    key={w.month}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`${w.month} winner`}
                    className={`employee__thumb ${i === index ? "is-active" : ""}`}
                    onPointerEnter={(e) => {
                      // Desktop mice can just hover across the row; touch
                      // taps fall through to onClick below instead.
                      if (e.pointerType === "mouse") pick(i);
                    }}
                    onClick={() => pick(i)}
                  >
                    <span className="employee__thumb-month">
                      {monthName.slice(0, 3)}
                    </span>
                    <span className="employee__thumb-year">
                      &rsquo;{year.slice(2)}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="employee__smallprint">
              Runners-up will be announced as soon as there are any.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
