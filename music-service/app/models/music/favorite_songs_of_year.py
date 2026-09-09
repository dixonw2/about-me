from datetime import datetime, time

from sqlalchemy import (
    ForeignKey,
    Identity,
    Text,
    UniqueConstraint,
    CheckConstraint,
    DateTime,
    FetchedValue,
    Text,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import AboutMeModel, Base


# region Song
class Song(Base):
    __tablename__ = "songs"
    __table_args__ = (
        UniqueConstraint("song_name", "artist", name="uq_favorite_songs_song_artist"),
        {"schema": "favorite_songs_of_year"},
    )

    id: Mapped[int] = mapped_column(Identity(always=True), primary_key=True)
    song_name: Mapped[str] = mapped_column(Text)
    artist: Mapped[str] = mapped_column(Text)
    album: Mapped[str] = mapped_column(Text)
    genre: Mapped[str] = mapped_column(Text)
    song_length: Mapped[time]
    apple_music_link: Mapped[str] = mapped_column(Text)
    spotify_link: Mapped[str] = mapped_column(Text)
    year: Mapped[int] = mapped_column(
        ForeignKey("favorite_songs_of_year.lists.year", ondelete="CASCADE")
    )
    yearly_list: Mapped["YearlyList"] = relationship(back_populates="songs")


class SongBase(AboutMeModel):
    song_name: str
    artist: str
    album: str
    genre: str
    song_length: time
    apple_music_link: str
    spotify_link: str


class SongInListRead(SongBase):
    id: int


# endregion


# region Yearly List
class YearlyList(Base):
    __tablename__ = "lists"
    __table_args__ = (
        CheckConstraint("year BETWEEN 1900 AND 2100"),
        {"schema": "favorite_songs_of_year"},
    )

    year: Mapped[int] = mapped_column(primary_key=True, autoincrement=False)
    comment: Mapped[str] = mapped_column(Text)
    date_created: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    date_updated: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), server_onupdate=FetchedValue()
    )
    songs: Mapped[list["Song"]] = relationship(
        back_populates="yearly_list",
        cascade="all, delete-orphan",
        passive_deletes=True,
        order_by="Song.id",
    )


class YearlyListBase(AboutMeModel):
    year: int
    comment: str
    date_updated: datetime | None


class YearlyListRead(YearlyListBase):
    date_created: datetime


class YearlyListWithSongsRead(YearlyListRead):
    songs: list[SongInListRead]


# endregion
