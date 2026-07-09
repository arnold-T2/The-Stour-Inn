import { useCallback, useEffect, useRef, useState } from "react";
import useInView from "../hooks/useInView.js";

// Every month the votes are counted, and every month — by sheer coincidence —
// it's Tia. The awards below are 100% real and legally binding.
const WINNERS = [
  {
    month: "July 2026",
    img: "/eom/watermelon.jpeg",
    title: "Produce Procurement Excellence",
    citation:
      "Personally vetted every watermelon in Dorset for the summer specials. None of them made the menu. The melon has since been promoted above two members of staff.",
  },
  {
    month: "June 2026",
    img: "/eom/upsidedown.jpeg",
    title: "Innovation in Workplace Posture",
    citation:
      "Redefined what it means to work 'flat out'. Found like this in the stockroom halfway through a Saturday rush. When questioned, described it as 'stocktaking'.",
  },
  {
    month: "May 2026",
    img: "/eom/plant.jpeg",
    title: "Beer Garden Expansion Project",
    citation:
      "Led the ambitious beer garden refurbishment. One (1) plant was purchased. It is somehow doing better than the rest of the team.",
  },
  {
    month: "April 2026",
    img: "/eom/poncho.jpeg",
    title: "Cellar Leak Investigation",
    citation:
      "Went above and beyond investigating a leak in the cellar. The leak won. Awarded for bravery, and for not letting go of her drink at any point.",
  },
  {
    month: "March 2026",
    img: "/eom/trolley.jpeg",
    title: "Heroic Cash & Carry Run",
    citation:
      "Volunteered for the weekly supplies run. Returned with flowers, snacks and a suspiciously personal shopping list. Zero (0) items from the actual list were acquired.",
  },
  {
    month: "February 2026",
    img: "/eom/sword.jpeg",
    title: "Conflict De-escalation Training",
    citation:
      "Completed the February de-escalation course with flying colours. Pictured here de-escalating. The wrapping paper made a full recovery.",
  },
  {
    month: "January 2026",
    img: "/eom/nap.jpeg",
    title: "Quality Control: Guest Transport",
    citation:
      "January's rota hit hard. Caught personally inspecting the comfort of the guest transport — with her eyes closed, for accuracy. Very thorough. Very asleep.",
  },
  {
    month: "December 2025",
    img: "/eom/backpack.jpeg",
    title: "Christmas Stock Logistics",
    citation:
      "Single-handedly volunteered to carry the entire Christmas stock order. The backpack cost £25. The look of pure confidence: priceless.",
  },
];

const ROTATE_MS = 6000;
const MANUAL_HOLD_MS = 15000; // clicking a month pauses the auto-cycle for a bit

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

  return (
    <section className="section employee" id="employee">
      <div className={`container ${inView ? "is-in" : ""}`} ref={ref}>
        <p className="section__eyebrow">Hall of fame</p>
        <h2 className="section__title">Employee of the Month</h2>
        <p className="section__lead">
          Voted for anonymously and counted independently by the manager. The
          manager is Tia. We&apos;re sure that&apos;s fine.
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
              {winner.citation}
            </p>

            <div
              className="employee__months"
              role="tablist"
              aria-label="Past winners"
            >
              {WINNERS.map((w, i) => (
                <button
                  key={w.month}
                  role="tab"
                  aria-selected={i === index}
                  className={`employee__thumb ${i === index ? "is-active" : ""}`}
                  onClick={() => pick(i)}
                >
                  <img src={w.img} alt="" loading="lazy" />
                  <span>{w.month.split(" ")[0].slice(0, 3)}</span>
                </button>
              ))}
            </div>

            <p className="employee__smallprint">
              Runners-up will be announced as soon as there are any.
              Judges&apos; decision is final, unanimous, and not remotely open
              to appeal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
