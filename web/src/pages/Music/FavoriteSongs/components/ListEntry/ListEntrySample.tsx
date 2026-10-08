import { useState } from "react";
import type { FavoriteSongsList, Song } from "@/types/FavoriteSongsList";
import styles from "./ListEntrySample.module.css";

type Provider = "apple" | "spotify" | "youtube";
const sampleYouTubeId = "lO9d-AJai8Q";
const providerNames = { apple: "Apple Music", spotify: "Spotify", youtube: "YouTube" };
const slug = (value: string) =>
  value === "÷"
    ? value
    : value
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

function embedUrl(song: Song, provider: Provider) {
  if (provider === "youtube") return `https://www.youtube.com/embed/${sampleYouTubeId}`;
  try {
    const url = new URL(
      provider === "apple" ? song.appleMusicLink : song.spotifyLink,
    );
    if (provider === "apple" && url.hostname === "music.apple.com") {
      url.hostname = "embed.music.apple.com";
      return url.href;
    }
    if (provider === "spotify" && url.hostname === "open.spotify.com") {
      const match = url.pathname.match(/\/track\/([a-zA-Z0-9]+)/);
      if (match) return `https://open.spotify.com/embed/track/${match[1]}`;
    }
  } catch {
    /* Show the external link when no embed URL can be built. */
  }
  return null;
}

function Cover({ song }: { song: Song }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={styles.cover}>
      {failed ? (
        <span aria-label="Artwork unavailable">♫</span>
      ) : (
        <img
          src={`/images/albums/${slug(song.artist)}/${slug(song.album)}.jpg`}
          alt={`${song.album} cover`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function ListEntrySample({
  entry,
}: {
  entry: FavoriteSongsList;
}) {
  const [active, setActive] = useState<{
    id: number;
    provider: Provider;
  } | null>(null);
  const select = (id: number, provider: Provider) =>
    setActive((previous) =>
      previous?.id === id && previous.provider === provider
        ? null
        : { id, provider },
    );

  return (
    <section className={styles.entry}>
      <header className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>THE ANNUAL MIX</span>
          <h1>{entry.year}</h1>
        </div>
        <p>{entry.songs.length} songs · A year in rotation</p>
      </header>
      <details className={styles.notes}>
        <summary>Behind this year's picks</summary>
        <p>{entry.comment}</p>
      </details>
      <div className={styles.listHeading}>
        <h2>The songs</h2>
        <span>Choose a service to listen</span>
      </div>
      <ul className={styles.list}>
        {entry.songs.map((song) => {
          const provider = active?.id === song.id ? active.provider : null;
          const src = provider ? embedUrl(song, provider) : null;
          const panelId = `sample-player-${entry.year}-${song.id}`;
          return (
            <li
              key={song.id}
              className={`${styles.card} ${provider ? styles.active : ""}`}
            >
              <div className={styles.cardBody}>
                <Cover song={song} />
                <div className={styles.info}>
                  <h3>{song.songName}</h3>
                  <p className={styles.artist}>{song.artist}</p>
                  <p className={styles.album}>{song.album}</p>
                  <div className={styles.metadata}>
                    <span>{song.genre}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {song.songLength
                        .replace(/^00:/, "")
                        .replace(/^0(?=\d:)/, "")}
                    </span>
                  </div>
                </div>
                <div
                  className={styles.services}
                  aria-label={`Listen to ${song.songName}`}
                >
                  <button
                    type="button"
                    aria-expanded={provider === "apple"}
                    aria-controls={provider ? panelId : undefined}
                    onClick={() => select(song.id, "apple")}
                  >
                    Apple Music
                  </button>
                  <button
                    type="button"
                    aria-expanded={provider === "spotify"}
                    aria-controls={provider ? panelId : undefined}
                    onClick={() => select(song.id, "spotify")}
                  >
                    Spotify
                  </button>
                  <button
                    type="button"
                    aria-expanded={provider === "youtube"}
                    aria-controls={provider ? panelId : undefined}
                    onClick={() => select(song.id, "youtube")}
                  >
                    YouTube
                  </button>
                </div>
              </div>
              {provider && (
                <div id={panelId} className={styles.player}>
                  <div className={styles.playerHeading}>
                    <span>
                      {providerNames[provider]}
                    </span>
                    <button type="button" onClick={() => setActive(null)}>
                      Close player ×
                    </button>
                  </div>
                  {src ? (
                    <iframe
                      key={`${song.id}-${provider}`}
                      src={src}
                      title={provider === "youtube" ? "YouTube sample video" : `${song.songName} — ${providerNames[provider]}`}
                      className={provider === "youtube" ? styles.video : undefined}
                      height={provider === "apple" ? 175 : 152}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <p>An embedded player is unavailable for this link.</p>
                  )}
                  <a
                    href={
                      provider === "apple"
                        ? song.appleMusicLink
                        : provider === "spotify"
                          ? song.spotifyLink
                          : `https://www.youtube.com/watch?v=${sampleYouTubeId}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in {providerNames[provider]} ↗
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
