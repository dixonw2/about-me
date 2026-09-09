# from datetime import datetime
# from typing import TYPE_CHECKING

# from sqlalchemy import CheckConstraint, DateTime, FetchedValue, Text, func
# from sqlalchemy.orm import Mapped, mapped_column, relationship

# from app.models.base import Base, AboutMeModel
# from .song import SongInListRead

# if TYPE_CHECKING:
#     from .song import Song


# class YearlyList(Base):
#     __tablename__ = "lists"
#     __table_args__ = (
#         CheckConstraint("year BETWEEN 1900 AND 2100"),
#         {"schema": "favorite_songs_of_year"},
#     )

#     year: Mapped[int] = mapped_column(primary_key=True, autoincrement=False)
#     comment: Mapped[str] = mapped_column(Text)
#     date_created: Mapped[datetime] = mapped_column(
#         DateTime(timezone=True), server_default=func.now()
#     )
#     date_updated: Mapped[datetime | None] = mapped_column(
#         DateTime(timezone=True), server_onupdate=FetchedValue()
#     )
#     songs: Mapped[list["Song"]] = relationship(
#         back_populates="yearly_list",
#         cascade="all, delete-orphan",
#         passive_deletes=True,
#         order_by="Song.id",
#     )


# class YearlyListBase(AboutMeModel):
#     year: int
#     comment: str
#     date_updated: datetime | None


# class YearlyListRead(YearlyListBase):
#     date_created: datetime


# class YearlyListWithSongsRead(YearlyListRead):
#     songs: list[SongInListRead]
