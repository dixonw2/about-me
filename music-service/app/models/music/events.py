from datetime import date

from sqlalchemy import (
    ForeignKey,
    Identity,
    Text,
    PrimaryKeyConstraint,
    UniqueConstraint,
    CheckConstraint,
    Text,
    SmallInteger,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import AboutMeModel, Base


# region Event
class Event(Base):
    __tablename__ = "events"
    __table_args__ = (
        UniqueConstraint("event_date", "venue_name", name="uq_live_event_date_venue"),
        {"schema": "live"},
    )

    id: Mapped[int] = mapped_column(Identity(always=True), primary_key=True)
    name: Mapped[str | None] = mapped_column(Text)
    headliner: Mapped[str | None] = mapped_column(Text)
    event_date: Mapped[date]
    venue_name: Mapped[str] = mapped_column(Text)

    artists: Mapped[list["EventArtists"]] = relationship(
        back_populates="event",
        order_by="EventArtists.set_order",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )


class EventBase(AboutMeModel):
    name: str | None
    headliner: str | None
    event_date: date
    venue_name: str


class EventRead(EventBase):
    id: int


# endregion


# region Artists
class Artist(Base):
    __tablename__ = "artists"
    __table_args__ = {"schema": "live"}

    id: Mapped[int] = mapped_column(Identity(always=True), primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)

    events: Mapped[list["EventArtists"]] = relationship(
        back_populates="artist",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )


class ArtistBase(AboutMeModel):
    name: str


class ArtistRead(ArtistBase):
    id: int


# endregion


# region Event Artists
class EventArtists(Base):
    __tablename__ = "event_artists"
    __table_args__ = (
        PrimaryKeyConstraint("artist_id", "event_id", name="pk_live_event_artists"),
        UniqueConstraint("event_id", "set_order", name="uq_live_event_set_order"),
        CheckConstraint("set_order > 0"),
        {"schema": "live"},
    )

    artist: Mapped["Artist"] = relationship(back_populates="events")
    event: Mapped["Event"] = relationship(back_populates="artists")

    artist_id: Mapped[int] = mapped_column(
        ForeignKey("live.artists.id", ondelete="CASCADE")
    )
    event_id: Mapped[int] = mapped_column(
        ForeignKey("live.events.id", ondelete="CASCADE")
    )
    set_order: Mapped[int] = mapped_column(SmallInteger)


class EventArtistBase(AboutMeModel):
    artist_id: int
    event_id: int
    set_order: int


class EventArtistRead(AboutMeModel):
    set_order: int
    artist: ArtistRead


class ArtistEventRead(AboutMeModel):
    set_order: int
    event: EventRead


class EventWithArtistsRead(EventRead):
    artists: list[EventArtistRead]


class ArtistWithEventsRead(ArtistRead):
    events: list[ArtistEventRead]


# endregion
