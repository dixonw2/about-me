import type { Song, FavoriteSongsList } from "@/types/FavoriteSongsList";

import styles from "./ListEntry.module.css";
import { useState } from "react";
import EntryInfoContainer from "../EntryInfoContainer/EntryInfoContainer";
import AlbumArtContainer from "../AlbumArtContainer/AlbumArtContainer";
import AlbumArt from "../AlbumArt/AlbumArt";
import EntryInfoComment from "../EntryInfoComment/EntryInfoComment";
import EntryDate from "../EntryDate/EntryDate";

const ListSong = ({
  song,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  song: Song;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        cursor: "pointer",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
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

const ListEntry = ({ entry }: { entry: FavoriteSongsList }) => {
  const [tempSongArt, setTempSongArt] = useState("");
  const [currentSongArt, setCurrentSongArt] = useState("");

  return (
    <section>
      <EntryInfoContainer>
        <AlbumArtContainer>
          <AlbumArt
            src={tempSongArt ? tempSongArt : currentSongArt}
            year={entry.year}
          />
        </AlbumArtContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <EntryDate
            entryDate={entry.dateCreated}
            updateDate={entry.dateUpdated}
          />
          <EntryInfoComment>{entry.comment}</EntryInfoComment>
        </div>
      </EntryInfoContainer>
      <ul className={styles.songList}>
        {entry.songs.map((song) => (
          <ListSong
            song={song}
            key={`${song.artist}-${song.songName}`}
            onMouseEnter={() => setTempSongArt(getAlbumArtPath(song))}
            onMouseLeave={() => setTempSongArt("")}
            onClick={() => setCurrentSongArt(getAlbumArtPath(song))}
          />
        ))}
      </ul>
    </section>
  );
};

export default ListEntry;
