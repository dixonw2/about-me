import styles from "./SongCard.module.css";
import AlbumCover from "../AlbumCover/AlbumCover";
import type { Song } from "@/types/FavoriteSongsList";
import SongInfo from "../SongInfo/SongInfo";

const SongCard = ({ song }: { song: Song }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardBody}>
        <AlbumCover song={song} />
        <SongInfo song={song} />
      </div>
    </li>
  );
};

export default SongCard;
