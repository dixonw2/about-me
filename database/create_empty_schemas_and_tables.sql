CREATE SCHEMA IF NOT EXISTS favorite_songs_of_year;

CREATE TABLE IF NOT EXISTS favorite_songs_of_year.lists (
    year         INT PRIMARY KEY CHECK (year BETWEEN 1900 AND 2100),
    comment      TEXT NOT NULL,
    date_created TIMESTAMPTZ NOT NULL DEFAULT now(),
    date_updated TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS favorite_songs_of_year.songs (
    id               INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    song_name        TEXT NOT NULL,
    artist           TEXT NOT NULL,
    album            TEXT NOT NULL,
    genre            TEXT NOT NULL,
    song_length      TIME NOT NULL,
    apple_music_link TEXT NOT NULL,
    spotify_link     TEXT NOT NULL,
    year             INT  NOT NULL,
    CONSTRAINT uq_favorite_songs_song_artist UNIQUE (song_name, artist),
    CONSTRAINT fk_favorite_songs_year
        FOREIGN KEY (year)
            REFERENCES favorite_songs_of_year.lists (year)
            ON DELETE CASCADE
);

CREATE SCHEMA IF NOT EXISTS live;

CREATE TABLE IF NOT EXISTS live.events (
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name        TEXT,
    headliner   TEXT,
    event_date  DATE NOT NULL,
    venue_name  TEXT NOT NULL,
    CONSTRAINT uq_live_event_date_venue UNIQUE (event_date, venue_name)
);

CREATE TABLE IF NOT EXISTS live.artists (
    id    INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name  TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS live.event_artists (
    artist_id  INT NOT NULL,
    event_id   INT NOT NULL,
    set_order  SMALLINT NOT NULL CHECK (set_order > 0),
    CONSTRAINT pk_live_event_artists PRIMARY KEY (artist_id, event_id),
    CONSTRAINT uq_live_event_set_order UNIQUE (event_id, set_order),
    CONSTRAINT fk_live_event_artists_artist
      FOREIGN KEY (artist_id)
          REFERENCES live.artists (id)
          ON DELETE CASCADE,
    CONSTRAINT fk_live_event_artists_event
      FOREIGN KEY (event_id)
          REFERENCES live.events (id)
          ON DELETE CASCADE
);

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
