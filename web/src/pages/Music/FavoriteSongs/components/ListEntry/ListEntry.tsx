import type { Song, FavoriteSongsList } from "@/types/FavoriteSongsList";
import { useState } from "react";

// const ListEntry = ({
//   year,
//   comment,
//   dateCreated,
//   dateUpdated,
//   songs,
// }: FavoriteSongsList) => {
const ListSong = ({ song }: { song: Song }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
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

const ListEntry = ({
  entry,
  selected: selected = false,
}: {
  entry: FavoriteSongsList;
  selected?: boolean;
}) => {
  return (
    selected && (
      <section>
        <h1>{entry.year}</h1>
        <h2>{new Date(entry.dateCreated).toLocaleDateString()}</h2>
        {entry.dateUpdated && (
          <h3>{new Date(entry.dateUpdated).toLocaleDateString()}</h3>
        )}
        <p>{entry.comment}</p>
        <ul>
          {entry.songs.map((song) => (
            <ListSong song={song} key={`${song.artist}-${song.songName}`} />
          ))}
        </ul>
      </section>
    )
  );
};

export default ListEntry;
