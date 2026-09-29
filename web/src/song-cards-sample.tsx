import { createRoot } from "react-dom/client";
import "@fontsource-variable/source-sans-3/wght.css";
import "@/index.css";
import FavoriteSongsSample from "@/pages/Music/FavoriteSongs/FavoriteSongsSample";
createRoot(document.getElementById("root")!).render(<FavoriteSongsSample />);
