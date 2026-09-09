from sqlmodel import SQLModel, Field, Relationship

from typing import TYPE_CHECKING
import datetime

from .song import SongRead

if TYPE_CHECKING:
    from .song import Song


class YearlyListBase(SQLModel):
    year: int = Field(primary_key=True)
    comment: str
    date_updated: datetime.datetime | None


class YearlyList(YearlyListBase, table=True):
    # pyright comment needed to supress a Pylance error for SQLModel
    __tablename__ = "lists"  # pyright: ignore[reportAssignmentType]
    __table_args__ = {"schema": "favorite_songs_of_year"}

    date_created: datetime.datetime
    songs: list["Song"] = Relationship(back_populates="yearly_list")
    # year: int = Field(default=None, primary_key=True)


class YearlyListRead(YearlyListBase):
    date_created: datetime.datetime
    # pass


class YearlyListWithSongsRead(YearlyListRead):
    songs: list[SongRead]
