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
        <div>
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
      {/* 
      <iframe
        allow="autoplay *; encrypted-media *;"
        height="150"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          border: 0,
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/bear-claws/1710236954?i=1710237207"
        loading="lazy"
      ></iframe>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px", border: 0 }}
        src="https://open.spotify.com/embed/track/7oBPSh4C7vvQ9F1mnyqwVe?utm_source=generator&si=8ee3c9e23e0f49a1"
        width="100%"
        height="352"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hXoBj5HZ1hU?si=fJLcQp6JSbhTwMRf"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      ></iframe> */}
    </section>
  );
};

export default ListEntry;
