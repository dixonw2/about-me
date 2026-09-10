from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.database import get_db
from app.models.music import (
    YearlyList,
    YearlyListWithSongsRead,
    Event,
    EventWithArtistsRead,
    EventArtists,
    Artist,
    ArtistWithEventsRead,
)

router = APIRouter(prefix="/music", tags=["favorite songs"])


@router.get("/favorite-songs", response_model=list[YearlyListWithSongsRead])
def get_all_favorite_songs_lists(db: Session = Depends(get_db)):
    statement = (
        select(YearlyList)
        .options(selectinload(YearlyList.songs))
        .order_by(YearlyList.year)
    )
    return db.scalars(statement).all()


@router.get("/live-events", response_model=list[EventWithArtistsRead])
def get_all_events_with_artists(db: Session = Depends(get_db)):
    statement = select(Event).options(
        selectinload(Event.artists).selectinload(EventArtists.artist)
    )
    return db.scalars(statement).all()


@router.get("/live-events/artists", response_model=list[ArtistWithEventsRead])
def get_all_artists_with_events(db: Session = Depends(get_db)):
    statement = select(Artist).options(
        selectinload(Artist.events).selectinload(EventArtists.event)
    )
    return db.scalars(statement).all()
