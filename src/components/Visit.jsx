import useInView from "../hooks/useInView.js";

const MAP_URL =
  "https://www.google.com/maps?q=The+Stour+Inn,+Blandford+St+Mary,+DT11+9LH&output=embed";

export default function Visit() {
  const [ref, inView] = useInView({ once: true, threshold: 0.2 });

  return (
    <section className="section visit" id="visit">
      <div
        className={`container visit__inner ${inView ? "is-in" : ""}`}
        ref={ref}
      >
        <div className="visit__info">
          <p className="section__eyebrow">Find us</p>
          <h2 className="section__title">Come Say Hello</h2>

          <address className="visit__address">
            The Stour Inn
            <br />
            5 Dorchester Hill, Blandford St Mary
            <br />
            Blandford Forum, Dorset DT11 9LH
          </address>

          <div className="visit__hours">
            <h3>Opening hours</h3>
            <dl>
              <div>
                <dt>Bar</dt>
                <dd>Every day &middot; 11am &ndash; 11pm</dd>
              </div>
              <div>
                <dt>Kitchen (Wed &amp; Thu)</dt>
                <dd>6pm &ndash; 9pm</dd>
              </div>
              <div>
                <dt>Kitchen (Fri &amp; Sat)</dt>
                <dd>5:30pm &ndash; 9pm</dd>
              </div>
              <div>
                <dt>Sunday menu</dt>
                <dd>12 noon &ndash; 5pm</dd>
              </div>
            </dl>
            <p className="visit__hint">
              Hours can shift with the seasons — check our Instagram for the
              latest.
            </p>
          </div>

          <div className="visit__actions">
            <a href="tel:+441258453888" className="btn btn--primary">
              01258 453888
            </a>
            <a
              href="https://maps.google.com/?q=The+Stour+Inn,+Blandford+St+Mary,+DT11+9LH"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Get Directions
            </a>
            <a
              href="https://www.instagram.com/thestourinn_blandford/"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="visit__map">
          <iframe
            src={MAP_URL}
            title="Map showing The Stour Inn, Blandford St Mary"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
