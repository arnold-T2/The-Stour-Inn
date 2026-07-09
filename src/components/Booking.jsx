import { useEffect, useState } from "react";

const TIMES = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
];

export default function Booking() {
  const [open, setOpen] = useState(false);

  // Close the modal on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="section section--alt booking" id="book">
      <div className="container">
        <p className="section__eyebrow">Reserve your spot</p>
        <h2 className="section__title">Book a Table</h2>
        <p className="section__lead">
          Tell us when you&apos;re coming and how many of you there are &mdash;
          we&apos;ll have the table (and the menus) ready.
        </p>

        <form className="booking__form" onSubmit={submit}>
          <label className="booking__field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label className="booking__field">
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="Your number" required />
          </label>
          <label className="booking__field">
            <span>Date</span>
            <input type="date" name="date" required />
          </label>
          <label className="booking__field">
            <span>Time</span>
            <select name="time" defaultValue="19:00" required>
              {TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="booking__field">
            <span>Party size</span>
            <select name="party" defaultValue="2" required>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "person" : "people"}
                </option>
              ))}
              <option value="8+">8+ (bring the whole village)</option>
            </select>
          </label>
          <button type="submit" className="btn btn--primary booking__submit">
            Request Booking
          </button>
        </form>
      </div>

      {open && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            className="modal__backdrop"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          <div className="modal__card">
            <span className="modal__emoji" aria-hidden="true">
              🍻
            </span>
            <h3 id="modal-title">Online booking is coming soon!</h3>
            <p>
              This one&apos;s just a teaser for now. Give us a ring and
              we&apos;ll sort your table the old-fashioned way — a friendly
              voice and a pen behind the bar.
            </p>
            <div className="modal__actions">
              <a href="tel:+441258453888" className="btn btn--primary">
                Call 01258 453888
              </a>
              <button
                className="btn btn--outline"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
