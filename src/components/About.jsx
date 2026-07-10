import useInView from "../hooks/useInView.js";

export default function About() {
  const [ref, inView] = useInView({ once: true, threshold: 0.2 });

  return (
    <section className="section about" id="about">
      <div
        className={`container about__inner ${inView ? "is-in" : ""}`}
        ref={ref}
      >
        <div className="about__text">
          <p className="section__eyebrow">About us</p>
          <h2 className="section__title">Your Local by the Stour</h2>
          <p className="about__lead">
            The Stour Inn sits in Blandford St Mary, just over the bridge from
            Blandford Forum.
          </p>
          <p className="about__lead">
            We keep our ales well and cook everything fresh in our own kitchen —
            nothing fancy, just done properly.
          </p>
          <p className="about__lead">
            Families are welcome, dogs are practically encouraged, and the beer
            garden is the best seat in the house when the sun&apos;s out.
          </p>

          <aside className="about__aside">
            <h3>The small print</h3>
            <p>Fair warning: the bar team are a lovely bunch of oddballs.</p>
            <p>
              We hire on personality rather than polish, and honestly, it shows.
            </p>
            <p>
              Be patient with them — some are still working out which end of the
              glass the beer goes in.
            </p>
            <p>They&apos;re family, and we&apos;re keeping them.</p>
          </aside>
        </div>

        <div className="about__photos">
          <figure className="about__photo about__photo--main">
            <img
              src="/bar.png"
              alt="The bar at The Stour Inn, taps and spirits at the ready"
            />
          </figure>
          <figure className="about__photo about__photo--overlap">
            <img
              src="/sign.jpeg"
              alt="The Stour Inn pub sign — family friendly, dog friendly"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
