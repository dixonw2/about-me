import type { Song } from "@/types/FavoriteSongsList";
import styles from "./SongInfo.module.css";

const SongInfo = ({ song }: { song: Song }) => {
  return (
    <div className={styles.info}>
      <h3>{song.songName}</h3>
      <hr />
      <p className={styles.artist}>{song.artist}</p>
      <p className={styles.album}>
        {song.album}
        {song.isSingle && <span title="Released as single">*</span>}
      </p>
      <div className={styles.metadata}>
        <span>{song.genre}</span>
        <span aria-hidden="true">·</span>
        <span>
          {song.songLength.replace(/^00:/, "").replace(/^0(?=\d:)/, "")}
        </span>
      </div>
    </div>
  );
};

export default SongInfo;
