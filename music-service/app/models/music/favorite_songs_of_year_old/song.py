# from datetime import time
# from typing import TYPE_CHECKING

# from sqlalchemy import ForeignKey, Identity, Text, UniqueConstraint
# from sqlalchemy.orm import Mapped, mapped_column, relationship

# from app.models.base import AboutMeModel, Base

# if TYPE_CHECKING:
#     from .yearly_list import YearlyList


# class Song(Base):
#     __tablename__ = "songs"
#     __table_args__ = (
#         UniqueConstraint("song_name", "artist", name="uq_favorite_songs_song_artist"),
#         {"schema": "favorite_songs_of_year"},
#     )

#     id: Mapped[int] = mapped_column(Identity(always=True), primary_key=True)
#     song_name: Mapped[str] = mapped_column(Text)
#     artist: Mapped[str] = mapped_column(Text)
#     album: Mapped[str] = mapped_column(Text)
#     genre: Mapped[str] = mapped_column(Text)
#     song_length: Mapped[time]
#     apple_music_link: Mapped[str] = mapped_column(Text)
#     spotify_link: Mapped[str] = mapped_column(Text)
#     year: Mapped[int] = mapped_column(
#         ForeignKey("favorite_songs_of_year.lists.year", ondelete="CASCADE")
#     )
#     yearly_list: Mapped["YearlyList"] = relationship(back_populates="songs")


# class SongBase(AboutMeModel):
#     song_name: str
#     artist: str
#     album: str
#     genre: str
#     song_length: time
#     apple_music_link: str
#     spotify_link: str


# class SongInListRead(SongBase):
#     id: int


# class SongRead(SongBase):
#     id: int
#     year: int
