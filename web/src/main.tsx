import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "@fontsource-variable/source-sans-3/wght.css";
import "@fontsource-variable/source-sans-3/wght-italic.css";
import "@/index.css";

import App from "@/pages/App/App";
import Projects from "@/pages/Projects/Projects";
import Navbar from "@/components/layout/Navbar/Navbar";
import FavoriteSongs from "@/pages/Music/FavoriteSongs/FavoriteSongs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/music/favorite-songs" element={<FavoriteSongs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
