// Simple pint-glass brand mark used across the site (nav, hero, footer).
export default function Pint({ className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M18 8h28l-3.4 46a5 5 0 0 1-5 4.6H26.4a5 5 0 0 1-5-4.6L18 8z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M21.4 24h21.2l-2.2 29a2.5 2.5 0 0 1-2.5 2.3H26.1a2.5 2.5 0 0 1-2.5-2.3l-2.2-29z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M20.3 15h23.4l-.5 6H20.8l-.5-6z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}
