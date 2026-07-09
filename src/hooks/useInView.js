import { useEffect, useRef, useState } from "react";

// Tracks whether an element is scrolled into view.
// Pass { once: true } to lock it on after the first reveal (used for
// "pop up once" animations); leave it off for effects that should
// re-trigger every time the element enters/leaves the viewport.
export default function useInView({
  once = false,
  threshold = 0.3,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.unobserve(el);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, inView];
}
