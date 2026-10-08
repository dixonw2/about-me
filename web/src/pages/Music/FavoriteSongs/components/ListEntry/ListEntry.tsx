import type { FavoriteSongsList } from "@/types/FavoriteSongsList";
import { useState } from "react";

import styles from "./ListEntry.module.css";
import EntryInfoContainer from "../EntryInfoContainer/EntryInfoContainer";
import EntryRetrospective from "../EntryRetrospective/EntryRetrospective";
import EntryDate from "../EntryDate/EntryDate";
import SongCard from "../SongCard/SongCard";
import SongList from "../SongList/SongList";

const ListEntry = ({ entry }: { entry: FavoriteSongsList }) => {
  const [expandedSongId, setExpandedSongId] = useState<number | null>(null);
  
  return (
    <section className={styles.entry}>
      <EntryInfoContainer>
        <EntryDate
          entryDate={entry.dateCreated}
          updateDate={entry.dateUpdated}
        />
        <EntryRetrospective>{entry.comment}</EntryRetrospective>
      </EntryInfoContainer>

      <SongList>
        {entry.songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            expanded={expandedSongId === song.id}
            onToggleYouTubeVideo={() =>
              setExpandedSongId((current) =>
                current === song.id ? null : song.id,
              )
            }
          />
        ))}
      </SongList>
    </section>
  );
};

export default ListEntry;
