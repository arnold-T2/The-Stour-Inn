// Application entry point.
// Mounts the root React component to the #root element in index.html

// Clear console on every Vite hot reload (dev only)
if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

// Create a React root and render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
