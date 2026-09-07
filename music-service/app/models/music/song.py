from sqlmodel import Field, SQLModel
import datetime


class SongBase(SQLModel):
    song_name: str
    artist: str
    album: str
    genre: str
    song_length: datetime.time
    apple_music_link: str
    spotify_link: str
    year: int


class Song(SongBase, table=True):
    __tablename__ = "songs"  # pyright: ignore[reportAssignmentType]
    __table_args__ = {"schema": "favorite_songs_of_year"}

    id: int | None = Field(default=None, primary_key=True)


class SongRead(SongBase):
    id: int
