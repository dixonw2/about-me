import type { Song, FavoriteSongsList } from "@/types/FavoriteSongsList";

import styles from "./ListEntry.module.css";
import { useState } from "react";

const ListSong = ({
  song,
  onMouseEnter,
  onMouseLeave,
}: {
  song: Song;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span style={{ flex: 1, textAlign: "center" }}>{song.songName}</span>
      <span
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        {song.artist}
      </span>
    </li>
  );
};

const getAlbumArtPath = (song: Song) => {
  const exceptions = ["÷"];
  const sanitizeString = (value: string) =>
    exceptions.filter((x) => x === value).length
      ? value.trim()
      : value
          .replace(/[^\p{L}\p{N}\s-]/gu, "")
          .trim()
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .toLocaleLowerCase();

  const artist = sanitizeString(song.artist);
  const album = sanitizeString(song.album);

  return `/images/albums/${artist}/${album}.jpg`;
};

const ListEntry = ({
  entry,
  selected: selected = false,
}: {
  entry: FavoriteSongsList;
  selected?: boolean;
}) => {
  const [currentSongArt, setCurrentSongArt] = useState("");

  return (
    selected && (
      <section>
        <div className={styles.entryTitleContainer}>
          <h1>{entry.year}</h1>
          <h2>{new Date(entry.dateCreated).toLocaleDateString()}</h2>
        </div>
        {entry.dateUpdated ||
          (entry.year > 0 && (
            <h3 className={styles.entryUpdated}>
              {new Date(
                entry.dateUpdated ? entry.dateUpdated : "2020-03-06",
              ).toLocaleDateString()}
            </h3>
          ))}
        <div className={styles.entryCommentContainer}>
          {currentSongArt ? (
            <img className={styles.albumCover} src={currentSongArt} />
          ) : (
            <div className={styles.albumCover}>{entry.year}</div>
          )}
          <p className={styles.entryComment}>{entry.comment}</p>
        </div>
        <ul>
          {entry.songs.map((song) => (
            <ListSong
              song={song}
              key={`${song.artist}-${song.songName}`}
              onMouseEnter={() => setCurrentSongArt(getAlbumArtPath(song))}
              onMouseLeave={() => setCurrentSongArt("")}
            />
          ))}
        </ul>
      </section>
    )
  );
};

export default ListEntry;
