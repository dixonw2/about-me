from sqlmodel import Field, SQLModel, Relationship
import datetime

# from .yearly_list import YearlyList

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .yearly_list import YearlyList


class SongBase(SQLModel):
    song_name: str
    artist: str
    album: str
    genre: str
    song_length: datetime.time
    apple_music_link: str
    spotify_link: str


class Song(SongBase, table=True):
    # pyright comment needed to supress a Pylance error for SQLModel
    __tablename__ = "songs"  # pyright: ignore[reportAssignmentType]
    __table_args__ = {"schema": "favorite_songs_of_year"}

    year: int = Field(foreign_key="favorite_songs_of_year.lists.year")
    yearly_list: "YearlyList" = Relationship(back_populates="songs")
    id: int | None = Field(default=None, primary_key=True)


class SongRead(SongBase):
    id: int
    year: int
