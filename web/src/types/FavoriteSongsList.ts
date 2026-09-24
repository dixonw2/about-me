export interface Song {
  id: number;
  songName: string;
  artist: string;
  album: string;
  albumArtPath: string;
  genre: string;
  songLength: string;
  appleMusicLink: string;
  spotifyLink: string;
}

export interface FavoriteSongsList {
  year: number;
  comment: string;
  dateCreated: string;
  dateUpdated?: string;
  songs: Song[];
}
