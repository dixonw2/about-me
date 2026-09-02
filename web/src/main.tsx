import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/source-sans-3/wght.css";
import "@fontsource-variable/source-sans-3/wght-italic.css";
import "./index.css";

import App from "./App.tsx";
import Navbar from "./components/layout/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
);
