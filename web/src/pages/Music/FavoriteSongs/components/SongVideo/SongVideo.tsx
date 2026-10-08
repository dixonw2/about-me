import styles from "./SongVideo.module.css";

import type { Song } from "@/types/FavoriteSongsList";

const SongVideo = ({ song, expanded }: { song: Song; expanded: boolean }) => {
  const getVideoId = (link: string) => {
    try {
      const url = new URL(link);
      if (url.protocol !== "https:" && url.protocol !== "http:") return null;
      const host = url.hostname.replace(/^www\./, "");
      const parts = url.pathname.split("/").filter(Boolean);
      const id =
        host === "youtu.be"
          ? parts[0]
          : ["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(
                host,
              )
            ? url.pathname === "/watch"
              ? url.searchParams.get("v")
              : ["embed", "shorts", "live"].includes(parts[0])
                ? parts[1]
                : null
            : null;
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    } catch {
      return null;
    }
  };

  const videoId = getVideoId(song.youtubeLink);
  return (
    <div className={styles.video}>
      <div className={styles.frame}>
        {expanded && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`${song.songName} — YouTube Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default SongVideo;
