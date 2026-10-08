import type { Song } from "@/types/FavoriteSongsList";

import styles from "./SongCard.module.css";
import AlbumCover from "../AlbumCover/AlbumCover";
import SongInfo from "../SongInfo/SongInfo";
import SongLinks from "../SongLinks/SongLinks";
import SongLink from "../SongLink/SongLink";
import SongVideo from "../SongVideo/SongVideo";

const SongCard = ({
  song,
  expanded,
  onToggleYouTubeVideo,
}: {
  song: Song;
  expanded: boolean;
  onToggleYouTubeVideo: () => void;
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.body}>
        <AlbumCover song={song} />
        <SongInfo song={song} />
        <SongLinks>
          <SongLink src={song.appleMusicLink}>Apple Music</SongLink>
          <SongLink src={song.spotifyLink}>Spotify</SongLink>
          <button aria-expanded={expanded} onClick={onToggleYouTubeVideo}>
            YouTube
          </button>
        </SongLinks>
      </div>
      <div
        className={`${styles.videoContainer} ${expanded ? styles.videoContainerOpen : ""}`}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className={styles.videoContainerInner}>
          <SongVideo song={song} expanded={expanded} />
        </div>
      </div>
    </li>
  );
};

export default SongCard;
