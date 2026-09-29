import type { Song } from "@/types/FavoriteSongsList";
import styles from "./AlbumCover.module.css";
import { useState } from "react";

const sanitizeString = (value: string) =>
  value === "÷"
    ? value
    : value
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

const AlbumCover = ({ song }: { song: Song }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={styles.cover}>
      {failed ? (
        <span aria-label="Artwork unavailable">♫</span>
      ) : (
        <img
          src={`/images/albums/${sanitizeString(song.artist)}/${sanitizeString(song.album)}.jpg`}
          alt={song.album}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default AlbumCover;
