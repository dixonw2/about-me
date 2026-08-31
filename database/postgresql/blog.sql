---------- Create music blog tables ----------
BEGIN;

CREATE SCHEMA IF NOT EXISTS blog;

CREATE TABLE IF NOT EXISTS blog.albums (
    id               INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name             TEXT NOT NULL,
    artist_name      TEXT NOT NULL,
    genre            TEXT NOT NULL,
    review           TEXT NOT NULL,
    rating           SMALLINT NOT NULL CHECK (rating >= 0),
    apple_music_url  TEXT NOT NULL,
    spotify_url      TEXT NOT NULL,
    release_date     DATE NOT NULL,
    album_art_path   TEXT NOT NULL,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_blog_album_name_artist UNIQUE (name, artist_name)
);

CREATE TABLE IF NOT EXISTS blog.album_songs (
    id             INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    album_id       INT NOT NULL,
    track_number   SMALLINT NOT NULL CHECK (track_number > 0),
    name           TEXT NOT NULL,
    duration       INTERVAL NOT NULL CHECK (duration > INTERVAL '0 seconds'),
    rating         SMALLINT NOT NULL CHECK (rating >= 0),
    CONSTRAINT uq_blog_album_song_name UNIQUE (album_id, name),
    CONSTRAINT uq_blog_album_track_number UNIQUE (album_id, track_number),
    CONSTRAINT fk_blog_album_songs_album
        FOREIGN KEY (album_id)
        REFERENCES blog.albums (id)
        ON DELETE CASCADE
);

---------- Update updated_at when an album changes ----------
CREATE OR REPLACE FUNCTION blog.set_album_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $function$
BEGIN
    NEW.updated_at := now();
    RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS set_album_updated_at
    ON blog.albums;

CREATE TRIGGER set_album_updated_at
BEFORE UPDATE ON blog.albums
FOR EACH ROW
WHEN (OLD IS DISTINCT FROM NEW)
EXECUTE FUNCTION blog.set_album_updated_at();

COMMIT;
