import styles from "./AlbumArt.module.css";

const AlbumArt = ({ src, year = 0 }: { src?: string; year?: number }) => {
  return (
    <div
      key={src || "blank"}
      className={`${styles.artworkLayer} ${!src ? styles.blank : ""}`}
    >
      {src && <img className={styles.albumCover} src={src} alt="Album cover" />}
      <span className={src ? styles.ribbon : styles.year}>{year}</span>
    </div>
  );
};

export default AlbumArt;
