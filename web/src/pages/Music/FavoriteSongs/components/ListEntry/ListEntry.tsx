import type { FavoriteSongsList } from "@/types/FavoriteSongsList";

import styles from "./ListEntry.module.css";
import EntryInfoContainer from "../EntryInfoContainer/EntryInfoContainer";
import EntryInfoComment from "../EntryInfoComment/EntryInfoComment";
import EntryDate from "../EntryDate/EntryDate";
import SongCard from "../SongCard/SongCard";

const ListEntry = ({ entry }: { entry: FavoriteSongsList }) => {
  return (
    <section className={styles.entry}>
      <EntryInfoContainer>
        <EntryDate
          entryDate={entry.dateCreated}
          updateDate={entry.dateUpdated}
        />
        <EntryInfoComment>{entry.comment}</EntryInfoComment>
      </EntryInfoContainer>
      <ul className={styles.list}>
        {entry.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </ul>
    </section>
  );
};

export default ListEntry;
