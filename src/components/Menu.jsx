import { useState } from "react";
import useInView from "../hooks/useInView.js";

const TABS = [
  {
    id: "small-plates",
    label: "Small Plates",
    deal: "Choose any 3 small plates for £22!",
    items: [
      {
        name: "Crispy Chilli Beef Salad",
        tags: ["GF"],
        price: "£9",
        desc: "Mixed leaves, ginger & soy dressing.",
      },
      {
        name: "Halloumi Fries",
        tags: ["V"],
        price: "£7.5",
        desc: "Roasted garlic dip.",
      },
      {
        name: "Mustard & Chive Fishcake",
        tags: [],
        price: "£9",
        desc: "Dill cheese sauce.",
      },
      {
        name: "Chicken Wings",
        tags: ["GF"],
        price: "£7.5",
        desc: "Honey & mustard glaze.",
      },
      {
        name: "Patatas Bravas",
        tags: ["VE", "GF"],
        price: "£8",
        desc: "Spiced tomato sauce.",
      },
      {
        name: "Salt & Pepper Squid",
        tags: [],
        price: "£9",
        desc: "Chilli jam, sautéed onions & chilli.",
      },
      {
        name: "Tempura Vegetables",
        tags: ["VE"],
        price: "£8.5",
        desc: "Crispy rocket, sesame & soy dip.",
      },
      {
        name: "Salt & Vinegar Hash Browns",
        tags: ["VE", "GF"],
        price: "£7.5",
        desc: "Smoked sea salt, malt vinegar powder.",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Homemade Gnocchi",
        tags: ["V"],
        price: "£17",
        desc: "Roasted red pepper, sun-dried tomatoes, spiced tomato sauce & basil.",
      },
      {
        name: "Southern Fried Chicken Burger",
        tags: [],
        price: "£19",
        desc: "Butterflied chicken breast, cheese, garlic mayo, shredded lettuce, KFC-style dipping gravy, fries.",
      },
      {
        name: "Stour Burger",
        tags: [],
        price: "£18.5",
        desc: "Two 4oz patties, Monterey Jack, lettuce, beef tomato, burger sauce, homemade coleslaw, fries.",
      },
      {
        name: "Steak Frites",
        tags: ["GF"],
        price: "£20",
        desc: "Rump steak, garlic butter, rocket & shaved parmesan salad, fries.",
      },
      {
        name: "Beer Battered Haddock",
        tags: ["GF*"],
        price: "£18",
        desc: "Locally sourced haddock, golden beer batter, chips, peas, lemon wedge, tartare. *Gluten free available on request.",
      },
      {
        name: "Hispi Cabbage",
        tags: ["VE", "GF"],
        price: "£15",
        desc: "Charred hispi cabbage, garlic, chilli & lemon, tomato sauce, cashews & yeast flakes.",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides & Nibbles",
    items: [
      { name: "Fries", tags: [], price: "£4", desc: "" },
      { name: "Chunky Chips", tags: [], price: "£4", desc: "" },
      { name: "Cajun Fries", tags: [], price: "£5", desc: "" },
      { name: "Cheesy Chunky Chips", tags: [], price: "£5", desc: "" },
      { name: "Garlic Ciabatta", tags: [], price: "£4", desc: "" },
      { name: "Cheesy Garlic Ciabatta", tags: [], price: "£5", desc: "" },
      { name: "Homemade Coleslaw", tags: [], price: "£3.5", desc: "" },
      { name: "Pork Scratchings", tags: [], price: "£3", desc: "" },
      {
        name: "Dry Roasted / Salted Peanuts",
        tags: [],
        price: "£1.5",
        desc: "",
      },
      { name: "Fairfield Crisps", tags: [], price: "£1.5", desc: "" },
      {
        name: "Freddo",
        tags: [],
        price: "39p",
        desc: "Yes, still 39p here. You're welcome.",
      },
    ],
  },
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    items: [
      { name: "Tea", tags: [], price: "£2.5", desc: "" },
      { name: "Espresso", tags: [], price: "£2", desc: "" },
      { name: "Americano", tags: [], price: "£3", desc: "" },
      { name: "Flat White", tags: [], price: "£3.5", desc: "" },
      { name: "Cappuccino", tags: [], price: "£3.5", desc: "" },
      { name: "Mocha", tags: [], price: "£4", desc: "" },
      { name: "Latte", tags: [], price: "£4.2", desc: "" },
      {
        name: "Hot Chocolate",
        tags: [],
        price: "£4.5",
        desc: "Served with whipped cream & marshmallows.",
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ once: true, threshold: 0.1 });
  const tab = TABS[active];

  return (
    <section className="section section--alt menu" id="menu">
      <div className="container">
        <p className="section__eyebrow">From the kitchen</p>
        <h2 className="section__title">The Menu</h2>
        <p className="section__lead">
          Cooked fresh, priced fairly. Food served 6&ndash;9pm Wednesday &amp;
          Thursday, 5:30&ndash;9pm Friday &amp; Saturday, and our Sunday menu
          runs 12 noon&ndash;5pm.
        </p>

        <div className={`menu__panel ${inView ? "is-in" : ""}`} ref={ref}>
          <div className="menu__tabs" role="tablist" aria-label="Menu sections">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                className={`menu__tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {t.label}
              </button>
            ))}
            <span
              className="menu__indicator"
              style={{ transform: `translateX(${active * 100}%)` }}
              aria-hidden="true"
            />
          </div>

          {/* Key on the tab id so the stagger animation replays on switch. */}
          <div className="menu__list" key={tab.id}>
            {tab.deal && <p className="menu__deal">{tab.deal}</p>}
            {tab.items.map((item, i) => (
              <div className="menu-item" style={{ "--i": i }} key={item.name}>
                <div className="menu-item__row">
                  <h3 className="menu-item__name">
                    {item.name}
                    {item.tags.map((tag) => (
                      <span className="menu-item__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </h3>
                  <span className="menu-item__dots" aria-hidden="true" />
                  <span className="menu-item__price">{item.price}</span>
                </div>
                {item.desc && <p className="menu-item__desc">{item.desc}</p>}
              </div>
            ))}
          </div>

          <p className="menu__note">
            (V) Vegetarian &middot; (VE) Vegan &middot; (GF) Gluten Free. Please
            speak to a member of staff if you have any food allergies or
            intolerances before making your order.
          </p>
        </div>
      </div>
    </section>
  );
}
